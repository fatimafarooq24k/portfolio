import { supabase } from '@/lib/supabase';

export type SiteEventType = 'visit' | 'cv_download';

export interface SiteStats {
  visits: number;
  cvDownloads: number;
}

export async function recordSiteEvent(eventType: SiteEventType): Promise<void> {
  const { error } = await supabase.from('site_events').insert({ event_type: eventType });
  if (error) console.error('Could not record site event', error.message);
}

export async function fetchSiteStats(): Promise<SiteStats | null> {
  const { data, error } = await supabase.rpc('get_site_stats');
  if (error) {
    console.error('Could not load site stats', error.message);
    return null;
  }

  const payload = data as { visits?: unknown; cv_downloads?: unknown } | null;
  if (typeof payload?.visits !== 'number' || typeof payload?.cv_downloads !== 'number') return null;

  return { visits: payload.visits, cvDownloads: payload.cv_downloads };
}
