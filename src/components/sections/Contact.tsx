import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { PROFILE } from '../../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ready' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const hasConfiguredEmail = Boolean(PROFILE.links.email.trim());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('error');
      setFeedback('Please complete all required fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    if (!hasConfiguredEmail) {
      setStatus('error');
      setFeedback(
        'Direct email address is not configured yet in src/data/profile.ts. Please add your verified CV email or contact me via GitHub.'
      );
      return;
    }

    setStatus('submitting');

    const mailtoSubject = encodeURIComponent(`[Portfolio] ${form.subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );

    window.location.href = `mailto:${PROFILE.links.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus('ready');
    setFeedback(
      'Your default email client has been opened with your pre-filled message (client-side mailto fallback — no backend server configured).'
    );
  };

  return (
    <section id="contact" className="py-24 bg-[#101827]/25 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
                Contact
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F8FAFC] leading-tight">
                Let&apos;s Build Something Meaningful.
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#94A3B8]">
              {PROFILE.availability} Feel free to reach out regarding internships, data engineering collaborations, or software development roles.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-3.5 text-sm text-[#F8FAFC] hover:border-[#00E5FF]/40 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                  <span>github.com/mhdrifa</span>
                </span>
                <span className="font-mono text-xs text-[#94A3B8]">GitHub</span>
              </a>

              {PROFILE.links.linkedin && (
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-3.5 text-sm text-[#F8FAFC] hover:border-[#00E5FF]/40 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">Connect</span>
                </a>
              )}

              {hasConfiguredEmail && (
                <a
                  href={`mailto:${PROFILE.links.email}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-3.5 text-sm text-[#F8FAFC] hover:border-[#00E5FF]/40 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                    <span>{PROFILE.links.email}</span>
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">Email</span>
                </a>
              )}

              <a
                href={PROFILE.links.cvUrl}
                download
                className="flex items-center justify-between rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-4 py-3.5 text-sm font-medium text-[#00E5FF] hover:bg-[#00E5FF]/15 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download Curriculum Vitae</span>
                </span>
                <span className="font-mono text-xs">PDF</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                Send a Message
              </h3>
              <span className="font-mono text-[11px] text-[#94A3B8]">
                Email-Client Fallback Mode
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-[#94A3B8] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#05070D]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#00E5FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-[#94A3B8] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#05070D]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#00E5FF] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-[#94A3B8] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Internship opportunity / Project inquiry"
                  className="w-full rounded-xl border border-white/10 bg-[#05070D]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#00E5FF] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-[#94A3B8] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role, team, or project..."
                  className="w-full rounded-xl border border-white/10 bg-[#05070D]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#00E5FF] focus:outline-none resize-y"
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-xl border border-red-400/35 bg-red-400/10 p-3.5 text-xs text-red-200"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-300 mt-0.5" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === 'ready' && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-xl border border-emerald-400/35 bg-emerald-400/10 p-3.5 text-xs text-emerald-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300 mt-0.5" />
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#05070D] shadow-cyanGlow hover:brightness-110 disabled:opacity-60 transition-all"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
