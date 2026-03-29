import { useState } from 'react';
import type { ChecklistItem } from '../types';
import { TYPE_COLORS, TYPE_ICONS, TYPE_LABELS } from '../types';

interface ChecklistRowProps {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistRow({ item, checked, onToggle }: ChecklistRowProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <li className={`checklist-row ${checked ? 'checked' : ''}`}>
      <label className="checklist-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="checklist-checkbox"
        />
        <span className="checkmark" style={{ borderColor: TYPE_COLORS[item.type] }}>
          {checked && (
            <svg viewBox="0 0 16 16" className="check-icon">
              <path
                d="M3 8l3.5 3.5L13 4"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <div className="checklist-text-group">
          <span className="checklist-text">{item.text}</span>
          <span
            className="type-badge"
            style={{
              backgroundColor: TYPE_COLORS[item.type] + '22',
              color: TYPE_COLORS[item.type],
            }}
          >
            {TYPE_ICONS[item.type]} {TYPE_LABELS[item.type]}
          </span>
        </div>
      </label>
      {item.detail && (
        <button
          className="detail-toggle"
          onClick={() => setShowDetail(!showDetail)}
          aria-label="Toggle details"
        >
          {showDetail ? '▲' : 'ℹ️'}
        </button>
      )}
      {showDetail && item.detail && (
        <div className="checklist-detail">{item.detail}</div>
      )}
    </li>
  );
}
