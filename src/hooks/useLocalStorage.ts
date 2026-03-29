import { useState, useCallback } from 'react';
import type { Progress } from '../types';

const STORAGE_KEY = 'mm-walkthrough-progress';

function loadProgress(): Progress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage full or unavailable
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  const toggleItem = useCallback((itemId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setProgress({});
    saveProgress({});
  }, []);

  const resetSection = useCallback((itemIds: string[]) => {
    setProgress((prev) => {
      const next = { ...prev };
      itemIds.forEach((id) => delete next[id]);
      saveProgress(next);
      return next;
    });
  }, []);

  const bulkComplete = useCallback((itemIds: string[]) => {
    setProgress((prev) => {
      const next = { ...prev };
      itemIds.forEach((id) => { next[id] = true; });
      saveProgress(next);
      return next;
    });
  }, []);

  return { progress, toggleItem, resetAll, resetSection, bulkComplete };
}
