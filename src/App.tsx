import { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { TableOfContents } from './components/TableOfContents';
import { AskAI } from './components/AskAI';
import { useProgress } from './hooks/useLocalStorage';
import { walkthrough } from './data/walkthrough';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Search } from 'lucide-react';

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
    <div className="min-h-screen bg-background text-foreground">
      <Header sections={walkthrough} progress={progress} onResetAll={resetAll} />

      <main className="max-w-3xl mx-auto px-4 pb-24">
        {/* Search */}
        <div className="relative my-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search items, masks, heart pieces..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 bg-card border-border"
          />
        </div>

        {/* TOC toggle */}
        <Button
          variant="outline"
          className="w-full mb-4"
          onClick={() => setShowTOC(!showTOC)}
        >
          {showTOC ? 'Hide' : 'Show'} Table of Contents
        </Button>

        {showTOC && <TableOfContents sections={walkthrough} progress={progress} />}

        {/* Sections */}
        <div className="flex flex-col gap-4">
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
          <div className="text-center py-12 text-muted-foreground">
            <p>No items found matching &ldquo;{search}&rdquo;</p>
          </div>
        )}

        <footer className="text-center py-8 mt-8 border-t border-border text-muted-foreground text-sm">
          <p>Majora&apos;s Mask 100% Walkthrough Checklist</p>
          <p className="mt-1">Progress saved in your browser</p>
        </footer>
      </main>

      <AskAI sections={walkthrough} progress={progress} />
    </div>
  );
}

export default App;
