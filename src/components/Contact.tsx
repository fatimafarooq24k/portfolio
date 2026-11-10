import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ContactComposer from '@/components/ContactComposer';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Contact"
            title="Let's build something useful together."
            description="Pick a topic and add a few details. Your email app opens with the message addressed to me, ready to send."
          />

          <ul className="mt-10 space-y-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-4 text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/25"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-widest text-white/50">{label}</span>
                      <span className="block text-sm text-white">{value}</span>
                    </span>
                  </span>
                  <span className="text-white/40 transition group-hover:translate-x-1 group-hover:text-brand-300">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <ContactComposer />
        </Reveal>
      </div>
    </section>
  );
}
