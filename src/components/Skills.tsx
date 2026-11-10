import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="02 / Skills"
          title="The tools behind the work."
          description="Grouped by what they help me do, so you can see how the pieces fit together."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.label} delay={index * 80}>
              <div className="h-full rounded-3xl bg-ink p-6 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/30">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">{group.label}</h3>
                </div>
                <p className="mt-4 text-sm leading-normal text-white/70">{group.note}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
