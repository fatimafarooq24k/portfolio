import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected work, from problem to working product."
          description="Each project starts with a real problem, then covers the data, the models, and the interface people use."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={(index % 2) * 120}>
              <article className="group flex h-full flex-col rounded-3xl bg-ink p-8 text-white ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:ring-brand-300/50 hover:shadow-2xl hover:shadow-ink/30">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-300 transition duration-300 group-hover:scale-105">
                    <Icon size={24} />
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-[1.2]">{project.title}</h3>
                <p className="mt-3 leading-normal text-white/80">{project.tagline}</p>

                <div className="mt-6 space-y-5 border-t border-white/10 pt-6 text-sm leading-normal">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">The problem</p>
                    <p className="mt-1.5 text-white/75">{project.problem}</p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">What I built</p>
                    <ul className="mt-2 space-y-2">
                      {project.built.map((item) => (
                        <li key={item} className="flex gap-3 text-white/75">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 rounded-2xl bg-white/5 p-4">
                    <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-brand-300" />
                    <p className="text-white/85">
                      <span className="font-medium text-white">Outcome: </span>
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-brand-100">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
