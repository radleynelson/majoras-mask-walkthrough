import { useState, useMemo } from 'react';
import type { Section, Progress, ItemType, ChecklistItem } from '../types';
import { TYPE_COLORS, TYPE_ICONS, TYPE_LABELS } from '../types';
import { ChecklistRow } from './ChecklistRow';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress as ProgressBar } from './ui/progress';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { ChevronDown, CheckCircle } from 'lucide-react';

interface SectionCardProps {
  section: Section;
  progress: Progress;
  onToggle: (itemId: string) => void;
  sectionIndex: number;
  isCurrent: boolean;
  onCompleteUpTo: () => void;
}

type FilterType = 'all' | ItemType;

interface ItemGroup {
  subsection: string | null;
  items: ChecklistItem[];
}

export function SectionCard({ section, progress, onToggle, sectionIndex, isCurrent, onCompleteUpTo }: SectionCardProps) {
  const [open, setOpen] = useState(isCurrent);
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
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card
        className={`relative overflow-hidden transition-colors ${
          isDone ? 'opacity-75' : ''
        } ${isCurrent ? 'ring-1 ring-gold/50' : ''}`}
      >
        <CollapsibleTrigger
          className="w-full cursor-pointer px-4 py-3 flex items-center justify-between gap-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xl flex-shrink-0">{section.icon}</span>
            <div className="flex flex-col items-start min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-muted-foreground font-medium">
                  Chapter {sectionIndex + 1}
                </span>
                {isCurrent && (
                  <Badge className="bg-gold/20 text-gold border-gold/30 text-[10px] px-1.5">
                    Current
                  </Badge>
                )}
                {isDone && (
                  <CheckCircle className="size-3.5 text-success" />
                )}
              </div>
              <h2 className="text-sm font-semibold text-foreground text-left truncate max-w-full">
                {section.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-16 hidden sm:block">
                <ProgressBar value={pct} className="[&_[data-slot=progress-track]]:h-1.5" />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap tabular-nums">
                {completed}/{total}
              </span>
            </div>
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 pb-4">
            {section.description && (
              <p className="text-sm text-muted-foreground mb-3">
                {section.description}
              </p>
            )}

            {!isDone && (
              <Button
                variant="outline"
                size="sm"
                className="mb-3 text-gold border-gold/30 hover:bg-gold/10 hover:text-gold"
                onClick={onCompleteUpTo}
              >
                <CheckCircle className="size-3.5 mr-1" />
                Complete up to here
              </Button>
            )}

            {types.length > 1 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                <Button
                  variant={filter === 'all' ? 'default' : 'secondary'}
                  size="xs"
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                {types.map((t) => (
                  <Button
                    key={t}
                    variant="secondary"
                    size="xs"
                    onClick={() => setFilter(t)}
                    className={
                      filter === t
                        ? 'text-white border-transparent'
                        : ''
                    }
                    style={
                      filter === t
                        ? { backgroundColor: TYPE_COLORS[t] }
                        : {}
                    }
                  >
                    {TYPE_ICONS[t]} {TYPE_LABELS[t]}
                  </Button>
                ))}
              </div>
            )}

            {groupedItems.map((group, gi) => (
              <div key={gi}>
                {group.subsection && (
                  <h3
                    className={`text-xs font-semibold text-gold uppercase tracking-wider ${
                      gi === 0 ? 'mb-2' : 'mt-4 mb-2'
                    } border-b border-border/50 pb-1`}
                  >
                    {group.subsection}
                  </h3>
                )}
                <ul className="flex flex-col">
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
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
