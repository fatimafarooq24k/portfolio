import { useEffect, useState } from 'react';
import { pipelineStages } from '@/data/portfolio';

const CYCLE_INTERVAL_MS = 4500;

export default function PipelineExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % pipelineStages.length);
    }, CYCLE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const stage = pipelineStages[activeIndex];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden rounded-3xl bg-ink text-white shadow-2xl shadow-ink/30"
    >
      <div className="border-b border-white/10 px-6 py-4">
        <p className="font-mono text-xs uppercase tracking-widest text-brand-300">How I build</p>
        <p className="mt-1 text-sm text-white/60">Select a stage to see what I do and the tools I use.</p>
      </div>

      <div role="tablist" aria-label="Development stages" className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
        {pipelineStages.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveIndex(index)}
              className={`bg-ink px-4 py-3 text-left transition duration-300 hover:bg-white/5 ${
                selected ? 'text-brand-300' : 'text-white/60'
              }`}
            >
              <span className="block font-mono text-[11px]">0{index + 1}</span>
              <span className="mt-0.5 block text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>

      <div key={stage.name} role="tabpanel" className="animate-fade-up p-6">
        <p className="text-base leading-normal text-white/80">{stage.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {stage.tools.map((tool, index) => (
            <li
              key={tool}
              style={{ animationDelay: `${index * 60}ms` }}
              className="animate-fade-up rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/85"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
