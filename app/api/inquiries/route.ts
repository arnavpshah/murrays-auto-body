import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

const MAX_FILES = 4;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

function trimmed(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  if (!t || t.length > max) return null;
  return t;
}

function optionalTrim(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  if (!t) return null;
  return t.slice(0, max);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  let name: string | null = null;
  let phone: string | null = null;
  let email: string | null = null;
  let message: string | null = null;
  let vehicle: string | null = null;
  let serviceType: string | null = null;
  const photoFiles: File[] = [];

  if (contentType.includes("application/json")) {
    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    const get = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
    name = get("name") || null;
    phone = get("phone") || null;
    email = get("email") || null;
    message = get("message") || null;
    vehicle = get("vehicle") || null;
    serviceType = get("serviceType") || null;
  } else if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    name = trimmed(form.get("name"), 200);
    phone = trimmed(form.get("phone"), 50);
    email = trimmed(form.get("email"), 200);
    message = trimmed(form.get("message"), 5000);
    vehicle = optionalTrim(form.get("vehicle"), 200);
    serviceType = optionalTrim(form.get("serviceType"), 200);

    const rawFiles = form.getAll("photos");
    for (const f of rawFiles) {
      if (!(f instanceof File)) continue;
      if (f.size === 0) continue;
      if (f.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: "Photo too large (max 8 MB each)" }, { status: 400 });
      }
      if (!ALLOWED_TYPES.has(f.type)) {
        return NextResponse.json({ error: "Unsupported photo type" }, { status: 400 });
      }
      photoFiles.push(f);
      if (photoFiles.length >= MAX_FILES) break;
    }
  } else {
    return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
  }

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  let photoUrls: string[] = [];
  if (photoFiles.length > 0 && process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const ts = Date.now();
      photoUrls = await Promise.all(
        photoFiles.map(async (file, idx) => {
          const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
          const blob = await put(`inquiries/${ts}-${idx}-${safe}`, file, {
            access: "public",
            contentType: file.type,
          });
          return blob.url;
        }),
      );
    } catch (err) {
      console.error("[inquiries] Photo upload failed:", err);
    }
  } else if (photoFiles.length > 0) {
    console.warn("[inquiries] Photos received but BLOB_READ_WRITE_TOKEN not set; photos not stored.");
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.warn("[inquiries] Supabase not configured; received submission:", {
      name,
      phone,
      email,
      vehicle,
      serviceType,
      photoCount: photoFiles.length,
    });
    return NextResponse.json({ ok: true, note: "Received (Supabase not configured)" });
  }

  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    email,
    message,
    vehicle,
    service_type: serviceType,
    photo_urls: photoUrls,
  });

  if (error) {
    console.error("[inquiries] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "Could not save your message. Please call us." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
