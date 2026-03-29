import type { Section, Progress } from '../types';
import { MajorasMask } from './MajorasMask';

interface HeaderProps {
  sections: Section[];
  progress: Progress;
  onResetAll: () => void;
}

export function Header({ sections, progress, onResetAll }: HeaderProps) {
  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);
  const completedItems = sections.reduce(
    (sum, s) => sum + s.items.filter((i) => progress[i.id]).length,
    0
  );
  const pct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-title-row">
          <MajorasMask size={48} className="header-mask-svg" />
          <div>
            <h1 className="header-title">Majora's Mask</h1>
            <p className="header-subtitle">100% Walkthrough</p>
          </div>
        </div>
        <div className="header-stats">
          <div className="progress-ring-container">
            <svg className="progress-ring" viewBox="0 0 80 80">
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
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <span className="progress-ring-text">{pct}%</span>
          </div>
          <div className="progress-details">
            <span className="progress-count">
              {completedItems} / {totalItems}
            </span>
            <span className="progress-label">tasks complete</span>
          </div>
        </div>
      </div>
      {completedItems > 0 && (
        <button className="reset-btn" onClick={onResetAll}>
          Reset All Progress
        </button>
      )}
    </header>
  );
}
