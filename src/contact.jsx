
import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

import {
  GithubIcon,
  LinkedinIcon,
  Reveal,
  SplitText,
} from "./shared";

import { profile } from "./data/portfolio.jsx";

const ACCESS_KEY = "077ccb2d-fa1c-48d6-a7f9-2357ca1cdead";

function Field({ id, label, error, textarea = false }) {
  const commonClass =
    "w-full border-0 border-b border-white/15 bg-transparent py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#91f77d]";

  return (
    <label className="form-label">
      {label}

      {textarea ? (
        <textarea
          name={id}
          rows={4}
          required
          placeholder="Write your message here..."
          className={commonClass + " resize-y"}
        />
      ) : (
        <input
          name={id}
          type={id === "email" ? "email" : "text"}
          required
          placeholder={
            id === "email" ? "you@example.com" : "Your name"
          }
          className={commonClass}
        />
      )}

      {error && (
        <span className="text-xs text-[#ff7168]">{error}</span>
      )}
    </label>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard!");

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy email.");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const newErrors = {};

    if (!formData.get("name")?.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.get("email")?.trim()) {
      newErrors.email = "Please enter your email.";
    }

    if (!formData.get("message")?.trim()) {
      newErrors.message = "Please enter your message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    setErrors({});
    setStatus("loading");

    const toastId = toast.loading("Sending your message...");

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus("success");
      toast.success("Message sent successfully!", {
        id: toastId,
        description: "Thank you! I'll get back to you soon.",
      });

      form.reset();

      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      setStatus("idle");

      toast.error("Something went wrong!", {
        id: toastId,
        description: error.message || "Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101713] pt-28 text-white md:pt-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Section heading */}
        <div className="flex items-baseline gap-4 border-t border-white/15 pt-6">
          <span className="font-mono text-sm text-[#91f77d]">06</span>
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
            Final whistle
          </span>
        </div>

        <h2 className="mt-10 font-display text-[14vw] leading-[.9] tracking-tight lg:text-[10rem]">
          <SplitText text="Let's build" />
          <br />
          <span className="text-[#91f77d]">
            <SplitText text="something great." delay={0.2} />
          </span>
        </h2>

        {/* Contact content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-12">

          {/* Left information */}
          <Reveal className="space-y-10 lg:col-span-5">

            <p className="max-w-sm text-base leading-7 text-white/65">
              Have a project in mind? I'd love to hear from you.
              Send me a message and let's create something
              amazing together.
            </p>

            {/* Email */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.2em] text-[#91f77d]">
                Email
              </p>

              <button
                onClick={copy}
                className="group flex items-center gap-3 text-left text-lg font-semibold transition-colors hover:text-[#91f77d] md:text-2xl"
              >
                <span>{profile.email}</span>

                {copied ? (
                  <Check className="h-5 w-5 text-[#91f77d]" />
                ) : (
                  <Copy className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
                )}
              </button>
            </div>

            {/* Location */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.2em] text-[#91f77d]">
                Location
              </p>

              <p className="flex items-center gap-2 text-lg">
                <MapPin className="h-4 w-4 text-[#ff7168]" />
                {profile.location}
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-xs uppercase tracking-widest transition hover:border-[#91f77d] hover:text-[#91f77d]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-xs uppercase tracking-widest transition hover:border-[#91f77d] hover:text-[#91f77d]"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>

            </div>
          </Reveal>

          {/* Right contact form */}
          <Reveal delay={0.1} className="lg:col-span-7">

            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-10 border border-white/10 bg-[#142019]/60 p-6 md:p-10"
            >

              <div className="grid gap-10 md:grid-cols-2">

                <Field
                  id="name"
                  label="Your name"
                  error={errors.name}
                />

                <Field
                  id="email"
                  label="Email address"
                  error={errors.email}
                />

              </div>

              <Field
                id="message"
                label="Tell me about your project"
                error={errors.message}
                textarea
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#91f77d] px-8 py-5 font-mono text-sm uppercase tracking-widest text-[#101713] transition-all hover:bg-[#b1ff9f] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message sent
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>
          </Reveal>

        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">

          <p
            className="overflow-hidden whitespace-nowrap font-display text-[18vw] leading-none tracking-[-.06em] text-[#18271d] lg:text-[13rem]"
            aria-hidden="true"
          >
            Niresh Shakya
          </p>

          <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-widest text-white/45 md:flex-row">

            <span>
              © {new Date().getFullYear()} Niresh Shakya
            </span>

            <span>
              Designed & built with care in Kathmandu
            </span>

            <a
              href="#home"
              className="flex items-center gap-2 transition-colors hover:text-[#91f77d]"
            >
              Back to top
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
