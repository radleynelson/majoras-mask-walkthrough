import { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { TableOfContents } from './components/TableOfContents';
import { AskAI } from './components/AskAI';
import { useProgress } from './hooks/useLocalStorage';
import { walkthrough } from './data/walkthrough';

function App() {
  const { progress, toggleItem, resetAll, bulkComplete } = useProgress();
  const [search, setSearch] = useState('');
  const [showTOC, setShowTOC] = useState(false);

  // Find the current chapter = first section with at least one unchecked item
  const currentChapterIndex = useMemo(() => {
    for (let i = 0; i < walkthrough.length; i++) {
      const allDone = walkthrough[i].items.every((item) => progress[item.id]);
      if (!allDone) return i;
    }
    return walkthrough.length - 1; // all done, show last
  }, [progress]);

  // Complete all items up to and including a given section
  const completeUpTo = useCallback((sectionIndex: number) => {
    const ids: string[] = [];
    for (let i = 0; i <= sectionIndex; i++) {
      walkthrough[i].items.forEach((item) => ids.push(item.id));
    }
    bulkComplete(ids);
  }, [bulkComplete]);

  const filteredSections = useMemo(() => {
    if (!search.trim()) return walkthrough;
    const q = search.toLowerCase();
    return walkthrough
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.text.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q) ||
            (item.detail && item.detail.toLowerCase().includes(q))
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [search]);

  return (
    <>
      <Header sections={walkthrough} progress={progress} onResetAll={resetAll} />

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search items, masks, heart pieces..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button
        className="toc-toggle"
        onClick={() => setShowTOC(!showTOC)}
      >
        {showTOC ? 'Hide' : 'Show'} Table of Contents
      </button>

      {showTOC && <TableOfContents sections={walkthrough} progress={progress} />}

      <div className="sections-list">
        {filteredSections.map((section) => {
          const realIndex = walkthrough.findIndex((s) => s.id === section.id);
          return (
            <div key={section.id} id={section.id}>
              <SectionCard
                section={section}
                progress={progress}
                onToggle={toggleItem}
                sectionIndex={realIndex}
                isCurrent={realIndex === currentChapterIndex}
                onCompleteUpTo={() => completeUpTo(realIndex)}
              />
            </div>
          );
        })}
      </div>

      {filteredSections.length === 0 && (
        <div className="empty-state">
          <p>No items found matching "{search}"</p>
        </div>
      )}

      <footer className="app-footer">
        <p>Majora's Mask 100% Walkthrough Checklist</p>
        <p>Progress saved in your browser</p>
      </footer>

      <AskAI sections={walkthrough} progress={progress} />
    </>
  );
}

export default App;
