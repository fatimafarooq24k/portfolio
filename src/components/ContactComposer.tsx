import { useEffect, useState } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';

const topics = ['Full-time role', 'Freelance project', 'Collaboration', 'Feedback on my work', 'Something else'];

const inputClasses =
  'w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition duration-300 focus:border-brand-300 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-300/30';

export default function ContactComposer() {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const trimmedName = name.trim();
  const subject = `${topic}${trimmedName ? ` from ${trimmedName}` : ''}`;
  const body = [
    'Hi Fatima,',
    '',
    details.trim() || 'I would like to get in touch.',
    '',
    trimmedName ? `Best regards,\n${trimmedName}` : 'Best regards',
  ].join('\n');
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
  };

  return (
    <div className="rounded-3xl bg-ink p-8 text-white shadow-2xl shadow-ink/25">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-300">Start a conversation</p>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm text-white/70">What is this about?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((item) => {
            const selected = item === topic;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setTopic(item)}
                className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                  selected
                    ? 'border-brand-300 bg-brand-300 font-medium text-ink'
                    : 'border-white/15 text-white/80 hover:border-white/40 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5">
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Your name</span>
          <input
            type="text"
            maxLength={60}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Optional"
            className={inputClasses}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Tell me a little about it</span>
          <textarea
            rows={4}
            maxLength={800}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="A role you have in mind, a project idea, or a question"
            className={`${inputClasses} resize-none`}
          />
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
        <p className="text-white/50">
          To: <span className="text-white/90">{profile.email}</span>
        </p>
        <p className="mt-2 text-white/50">
          Subject: <span className="text-white/90">{subject}</span>
        </p>
        <p className="mt-4 line-clamp-4 whitespace-pre-line text-white/75">{body}</p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={mailtoHref}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-300 px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white"
        >
          <Send size={16} className="transition group-hover:translate-x-0.5" />
          Open in my email app
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white/10"
        >
          {copied ? <Check size={16} className="text-success-300" /> : <Copy size={16} />}
          {copied ? 'Email copied' : 'Copy email address'}
        </button>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white/50">
        <Mail size={14} />
        Opens your email app with this draft. Nothing is stored on this site.
      </p>
    </div>
  );
}
