import { useState, useEffect } from 'react';
import type { Section, Progress } from '../types';
import { Button } from './ui/button';

interface HeaderProps {
  sections: Section[];
  progress: Progress;
  onResetAll: () => void;
}

export function Header({ sections, progress, onResetAll }: HeaderProps) {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);
  const completedItems = sections.reduce(
    (sum, s) => sum + s.items.filter((i) => progress[i.id]).length,
    0
  );
  const pct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const circumference = 2 * Math.PI * 34;

  return (
    <header
      className={`sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        compact ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: logo + title */}
          <div className="flex items-center gap-3">
            <img
              src="/majoras-mask-artwork.webp"
              alt="Majora's Mask"
              className={`transition-all duration-300 object-contain ${
                compact ? 'h-8 w-8' : 'h-14 w-14'
              }`}
            />
            <div className="flex flex-col">
              <img
                src="/majoras-mask-logo.svg"
                alt="The Legend of Zelda: Majora's Mask"
                className={`transition-all duration-300 ${
                  compact ? 'h-4' : 'h-6'
                }`}
              />
              {!compact && (
                <p className="text-sm text-gold font-medium mt-0.5">
                  100% Walkthrough
                </p>
              )}
            </div>
          </div>

          {/* Right: progress + reset */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Progress ring */}
              <div className="relative">
                <svg
                  className="progress-ring"
                  viewBox="0 0 80 80"
                  width={compact ? 36 : 48}
                  height={compact ? 36 : 48}
                >
                  <circle
                    className="progress-ring-bg"
                    cx="40"
                    cy="40"
                    r="34"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    className="progress-ring-fill"
                    cx="40"
                    cy="40"
                    r="34"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - pct / 100)}
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className={`absolute inset-0 flex items-center justify-center font-bold text-gold ${
                    compact ? 'text-[9px]' : 'text-xs'
                  }`}
                >
                  {pct}%
                </span>
              </div>

              {!compact && (
                <div className="flex flex-col text-right">
                  <span className="text-sm font-semibold text-foreground">
                    {completedItems} / {totalItems}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    tasks complete
                  </span>
                </div>
              )}
            </div>

            {completedItems > 0 && (
              <Button
                variant="destructive"
                size={compact ? 'xs' : 'sm'}
                onClick={onResetAll}
              >
                Reset
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
