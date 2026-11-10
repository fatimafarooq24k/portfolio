import { Github, Linkedin } from 'lucide-react';
import DownloadCvButton from '@/components/DownloadCvButton';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-white/60">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-300 hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-300 hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <DownloadCvButton variant="light" />
        </div>
      </div>
    </footer>
  );
}
