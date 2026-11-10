import { useEffect, useState } from 'react';
import { fetchSiteStats, recordSiteEvent, type SiteStats as SiteStatsData } from '@/lib/siteAnalytics';

const VISIT_FLAG_KEY = 'portfolio-visit-recorded';

export default function SiteStats() {
  const [stats, setStats] = useState<SiteStatsData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!sessionStorage.getItem(VISIT_FLAG_KEY)) {
        sessionStorage.setItem(VISIT_FLAG_KEY, '1');
        await recordSiteEvent('visit');
      }
      const result = await fetchSiteStats();
      if (!cancelled) {
        setStats(result);
        setLoaded(true);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loaded && !stats) return null;

  const tiles = [
    { label: 'Site visits', value: stats?.visits },
    { label: 'CV downloads', value: stats?.cvDownloads },
  ];

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ink/60">Live site activity</p>
      <dl className="mt-3 grid grid-cols-2 gap-4">
        {tiles.map((tile) => (
          <div key={tile.label} className="rounded-2xl bg-ink p-5 text-white">
            <dt className="text-sm text-white/65">{tile.label}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
              {tile.value === undefined ? '...' : tile.value.toLocaleString()}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
