import { useState, useMemo } from 'react';
import type { Section, Progress, ItemType, ChecklistItem } from '../types';
import { TYPE_COLORS, TYPE_ICONS, TYPE_LABELS } from '../types';
import { ChecklistRow } from './ChecklistRow';

interface SectionCardProps {
  section: Section;
  progress: Progress;
  onToggle: (itemId: string) => void;
  sectionIndex: number;
}

type FilterType = 'all' | ItemType;

interface ItemGroup {
  subsection: string | null;
  items: ChecklistItem[];
}

export function SectionCard({ section, progress, onToggle, sectionIndex }: SectionCardProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');

  const completed = section.items.filter((i) => progress[i.id]).length;
  const total = section.items.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isDone = completed === total;

  // Get unique item types in this section
  const types = [...new Set(section.items.map((i) => i.type))];

  const filteredItems =
    filter === 'all' ? section.items : section.items.filter((i) => i.type === filter);

  // Group items by subsection
  const groupedItems = useMemo(() => {
    const groups: ItemGroup[] = [];
    let currentSub: string | null | undefined = undefined;

    for (const item of filteredItems) {
      const sub = item.subsection || null;
      if (sub !== currentSub) {
        groups.push({ subsection: sub, items: [item] });
        currentSub = sub;
      } else {
        groups[groups.length - 1].items.push(item);
      }
    }
    return groups;
  }, [filteredItems]);

  return (
    <div className={`section-card ${isDone ? 'section-done' : ''}`}>
      <button
        className="section-header"
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
      >
        <div className="section-header-left">
          <span className="section-icon">{section.icon}</span>
          <div className="section-title-group">
            <span className="section-number">Chapter {sectionIndex + 1}</span>
            <h2 className="section-title">{section.title}</h2>
          </div>
        </div>
        <div className="section-header-right">
          <div className="section-progress">
            <div className="section-progress-bar">
              <div
                className="section-progress-fill"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="section-progress-text">
              {completed}/{total}
            </span>
          </div>
          <span className={`section-chevron ${collapsed ? '' : 'open'}`}>▾</span>
        </div>
      </button>

      {!collapsed && (
        <div className="section-body">
          {section.description && (
            <p className="section-description">{section.description}</p>
          )}

          {types.length > 1 && (
            <div className="section-filters">
              <button
                className={`filter-chip ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              {types.map((t) => (
                <button
                  key={t}
                  className={`filter-chip ${filter === t ? 'active' : ''}`}
                  onClick={() => setFilter(t)}
                  style={
                    filter === t
                      ? { backgroundColor: TYPE_COLORS[t], color: '#fff' }
                      : {}
                  }
                >
                  {TYPE_ICONS[t]} {TYPE_LABELS[t]}
                </button>
              ))}
            </div>
          )}

          {groupedItems.map((group, gi) => (
            <div key={gi}>
              {group.subsection && (
                <h3 className={`subsection-header${gi === 0 ? ' first' : ''}`}>{group.subsection}</h3>
              )}
              <ul className="checklist">
                {group.items.map((item) => (
                  <ChecklistRow
                    key={item.id}
                    item={item}
                    checked={!!progress[item.id]}
                    onToggle={() => onToggle(item.id)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
