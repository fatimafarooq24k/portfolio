import { useState } from 'react';
import { Download } from 'lucide-react';
import { openCvForPrint } from '@/lib/cvDocument';
import { recordSiteEvent } from '@/lib/siteAnalytics';

type CvButtonVariant = 'solid' | 'outline' | 'light';

interface DownloadCvButtonProps {
  variant?: CvButtonVariant;
}

const variantStyles: Record<CvButtonVariant, string> = {
  solid: 'bg-ink text-white hover:bg-brand-700',
  outline: 'border border-ink/20 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white',
  light: 'bg-white text-ink hover:bg-brand-100',
};

export default function DownloadCvButton({ variant = 'solid' }: DownloadCvButtonProps) {
  const [blocked, setBlocked] = useState(false);

  const handleClick = () => {
    const opened = openCvForPrint();
    setBlocked(!opened);
    if (opened) void recordSiteEvent('cv_download');
  };

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variantStyles[variant]}`}
      >
        <Download size={16} className="transition group-hover:translate-y-0.5" />
        Download CV
      </button>
      {blocked && (
        <p className="text-sm text-error-600">Allow pop-ups for this site to save your CV as a PDF.</p>
      )}
    </div>
  );
}
