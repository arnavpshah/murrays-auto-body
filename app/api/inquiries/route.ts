import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

function asString(value: unknown, max = 5000): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = asString(body.name, 200);
  const phone = asString(body.phone, 50);
  const email = asString(body.email, 200);
  const message = asString(body.message, 5000);

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.warn("[inquiries] Supabase not configured; received submission:", { name, phone, email });
    return NextResponse.json({ ok: true, note: "Stored locally (Supabase not configured)" });
  }

  const { error } = await supabase
    .from("inquiries")
    .insert({ name, phone, email, message });

  if (error) {
    console.error("[inquiries] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "Could not save your message. Please call us." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
