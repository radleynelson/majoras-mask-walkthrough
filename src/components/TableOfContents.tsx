import type { Section, Progress } from '../types';

interface TOCProps {
  sections: Section[];
  progress: Progress;
}

export function TableOfContents({ sections, progress }: TOCProps) {
  return (
    <nav className="toc">
      <h3 className="toc-title">Chapters</h3>
      <ul className="toc-list">
        {sections.map((section, i) => {
          const completed = section.items.filter((item) => progress[item.id]).length;
          const total = section.items.length;
          const isDone = completed === total && total > 0;
          return (
            <li key={section.id}>
              <a
                className={`toc-link ${isDone ? 'toc-done' : ''}`}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="toc-icon">{section.icon}</span>
                <span className="toc-section-name">{section.title}</span>
                <span className="toc-progress">
                  {isDone ? '✅' : `${completed}/${total}`}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
