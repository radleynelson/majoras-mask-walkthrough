export type ItemType =
  | 'main'
  | 'heart_piece'
  | 'mask'
  | 'stray_fairy'
  | 'bottle'
  | 'upgrade'
  | 'song'
  | 'side_quest'
  | 'fairy_reward'
  | 'bombers_notebook'
  | 'key_item';

export interface ChecklistItem {
  id: string;
  text: string;
  type: ItemType;
  detail?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  description?: string;
  items: ChecklistItem[];
}

export interface Progress {
  [itemId: string]: boolean;
}

export const TYPE_LABELS: Record<ItemType, string> = {
  main: 'Main Quest',
  heart_piece: 'Heart Piece',
  mask: 'Mask',
  stray_fairy: 'Stray Fairy',
  bottle: 'Bottle',
  upgrade: 'Upgrade',
  song: 'Song',
  side_quest: 'Side Quest',
  fairy_reward: 'Fairy Reward',
  bombers_notebook: "Bomber's Notebook",
  key_item: 'Key Item',
};

export const TYPE_COLORS: Record<ItemType, string> = {
  main: '#c8a84e',
  heart_piece: '#e74c6f',
  mask: '#9b59b6',
  stray_fairy: '#f39c12',
  bottle: '#3498db',
  upgrade: '#2ecc71',
  song: '#1abc9c',
  side_quest: '#e67e22',
  fairy_reward: '#f1c40f',
  bombers_notebook: '#e84393',
  key_item: '#8e44ad',
};

export const TYPE_ICONS: Record<ItemType, string> = {
  main: '⚔️',
  heart_piece: '💗',
  mask: '🎭',
  stray_fairy: '🧚',
  bottle: '🧪',
  upgrade: '⬆️',
  song: '🎵',
  side_quest: '📋',
  fairy_reward: '✨',
  bombers_notebook: '📓',
  key_item: '🔑',
};
