"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Upload, X } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILES = 4;
const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB per photo

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const incoming = Array.from(e.target.files ?? []);
    const merged = [...files, ...incoming]
      .filter((f) => f.size <= MAX_FILE_BYTES)
      .slice(0, MAX_FILES);
    setFiles(merged);
    e.target.value = "";
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    files.forEach((file) => formData.append("photos", file));

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      form.reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicle" className="block text-sm font-medium text-neutral-900">
            Vehicle <span className="text-neutral-500">(year, make, model)</span>
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            placeholder="e.g. 2019 Toyota RAV4"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
          />
        </div>
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-900">
            Service needed
          </label>
          <select
            id="serviceType"
            name="serviceType"
            defaultValue=""
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
          >
            <option value="">Not sure yet</option>
            <option>Collision Repair</option>
            <option>Dent Repair</option>
            <option>Paint Matching</option>
            <option>Frame Repair</option>
            <option>Scratch Removal</option>
            <option>Insurance Claims Assistance</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
          Describe the damage
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A short description helps us prepare an accurate estimate."
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900">
          Photos of the damage <span className="text-neutral-500">(optional, up to {MAX_FILES})</span>
        </label>
        <label
          htmlFor="photos"
          className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-neutral-300 bg-white px-4 py-6 text-sm text-neutral-600 hover:border-red-400 hover:text-red-600 transition-colors"
        >
          <Upload className="h-5 w-5" aria-hidden />
          <span>Upload photos (JPG/PNG, up to 8MB each)</span>
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="sr-only"
        />
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, idx) => (
              <li
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm"
              >
                <span className="truncate text-neutral-700">
                  {file.name}{" "}
                  <span className="text-neutral-400">({Math.round(file.size / 1024)} KB)</span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="ml-3 inline-flex items-center text-neutral-500 hover:text-red-600"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" aria-hidden />
        {status === "submitting" ? "Sending..." : "Request Estimate"}
      </button>

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-md bg-green-50 p-3 text-sm text-green-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
          <span>Thanks! We&apos;ll be in touch shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          <span>{errorMessage || "Could not send your message. Please call us instead."}</span>
        </div>
      )}
    </form>
  );
}
