import type { Section, Progress } from '../types';

interface TOCProps {
  sections: Section[];
  progress: Progress;
}

export function TableOfContents({ sections, progress }: TOCProps) {
  return (
    <nav className="mb-4 rounded-xl bg-card border border-border p-4">
      <h3 className="text-sm font-semibold text-gold mb-3">Chapters</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {sections.map((section) => {
          const completed = section.items.filter((item) => progress[item.id]).length;
          const total = section.items.length;
          const isDone = completed === total && total > 0;
          return (
            <li key={section.id}>
              <a
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm transition-colors hover:bg-secondary/70 ${
                  isDone ? 'text-muted-foreground' : 'text-foreground'
                }`}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex-shrink-0">{section.icon}</span>
                <span className="truncate flex-1">{section.title}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0 tabular-nums">
                  {isDone ? '\u2705' : `${completed}/${total}`}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
