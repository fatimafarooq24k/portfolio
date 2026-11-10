import { GraduationCap, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { education, profile } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="01 / About" title="Research-minded, product-focused." />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-normal text-ink/75">
            <p>{profile.intro}</p>
            <p>{profile.followUp}</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="group h-full rounded-3xl bg-ink p-8 text-white transition duration-500 hover:shadow-2xl hover:shadow-ink/30">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
              <GraduationCap size={24} />
            </span>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-brand-300">Education</p>
            <h3 className="mt-2 text-xl font-semibold leading-[1.2]">{education.degree}</h3>
            <p className="mt-2 text-white/75">{education.institution}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <MapPin size={16} />
              {education.location}
            </p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-300">Looking for</p>
              <p className="mt-2 leading-normal text-white/80">{profile.lookingFor}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
