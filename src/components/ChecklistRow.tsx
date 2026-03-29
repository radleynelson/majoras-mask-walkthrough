import { useState } from 'react';
import type { ChecklistItem } from '../types';
import { TYPE_COLORS, TYPE_ICONS, TYPE_LABELS } from '../types';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';

interface ChecklistRowProps {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistRow({ item, checked, onToggle }: ChecklistRowProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <li className={`flex flex-col border-b border-border/30 last:border-b-0 ${checked ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3 py-2.5 px-1">
        {/* Checkbox */}
        <div
          className="mt-0.5 cursor-pointer flex-shrink-0"
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
        >
          <Checkbox
            checked={checked}
            onCheckedChange={onToggle}
            className="data-checked:bg-gold data-checked:border-gold"
            style={{ '--tw-ring-color': TYPE_COLORS[item.type] } as React.CSSProperties}
          />
        </div>

        {/* Text + meta */}
        <div
          className={`flex-1 min-w-0 ${item.detail ? 'cursor-pointer' : ''}`}
          onClick={() => item.detail && setShowDetail(!showDetail)}
          role={item.detail ? 'button' : undefined}
          tabIndex={item.detail ? 0 : undefined}
          onKeyDown={item.detail ? (e) => { if (e.key === 'Enter' || e.key === ' ') setShowDetail(!showDetail); } : undefined}
        >
          <span className={`text-sm ${checked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {item.text}
          </span>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 py-0 h-4"
              style={{
                backgroundColor: TYPE_COLORS[item.type] + '22',
                color: TYPE_COLORS[item.type],
              }}
            >
              {TYPE_ICONS[item.type]} {TYPE_LABELS[item.type]}
            </Badge>
            {item.detail && (
              <span className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
                {showDetail ? '\u25B2 Less' : '\u25BC More info'}
              </span>
            )}
          </div>
        </div>
      </div>

      {showDetail && item.detail && (
        <div className="ml-8 mb-2.5 pl-3 border-l-2 border-gold/50 text-sm text-muted-foreground leading-relaxed">
          {item.detail}
        </div>
      )}
    </li>
  );
}
