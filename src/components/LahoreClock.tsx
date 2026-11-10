import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const LAHORE_TIME_ZONE = 'Asia/Karachi';

const formatLahoreTime = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: LAHORE_TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date());

export default function LahoreClock() {
  const [time, setTime] = useState(formatLahoreTime);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatLahoreTime()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-ink px-4 py-1.5 font-mono text-xs text-white">
      <Clock size={14} className="text-brand-300" />
      Lahore, PKT &middot; <span className="tabular-nums">{time}</span>
    </span>
  );
}
