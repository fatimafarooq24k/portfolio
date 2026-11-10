import { ArrowRight } from 'lucide-react';
import DownloadCvButton from '@/components/DownloadCvButton';
import LahoreClock from '@/components/LahoreClock';
import PipelineExplorer from '@/components/PipelineExplorer';
import SiteStats from '@/components/SiteStats';
import { profile } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(15,17,21,0.14)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="animate-fade-up">
            <LahoreClock />
          </div>

          <h1 className="mt-6 animate-fade-up text-5xl font-semibold leading-[1.1] tracking-tight [animation-delay:100ms] md:text-7xl">
            Hi, I&apos;m <span className="text-brand-700">{profile.name}.</span>
          </h1>

          <p className="mt-6 animate-fade-up text-xl font-medium text-ink [animation-delay:200ms]">{profile.title}</p>
          <p className="mt-3 max-w-xl animate-fade-up text-lg leading-normal text-ink/70 [animation-delay:250ms]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:350ms]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              View projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <DownloadCvButton variant="outline" />
          </div>

          <div className="mt-14 animate-fade-up border-t border-ink/10 pt-8 [animation-delay:400ms]">
            <SiteStats />
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:300ms]">
          <PipelineExplorer />
        </div>
      </div>
    </section>
  );
}
