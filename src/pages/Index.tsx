import { useState } from "react";
import { sampleFamily, getPendingApprovals } from "@/data/sampleData";
import ChildSelector from "@/components/ChildSelector";
import SummaryRibbon from "@/components/SummaryRibbon";
import CategoryCard from "@/components/CategoryCard";
import PendingApprovals from "@/components/PendingApprovals";
import { motion } from "framer-motion";
import { Map, TreePine } from "lucide-react";

const Index = () => {
  const [selectedChildId, setSelectedChildId] = useState(sampleFamily.children[0].id);
  const selectedChild = sampleFamily.children.find((c) => c.id === selectedChildId)!;
  const pendingApprovals = getPendingApprovals(sampleFamily);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <TreePine className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">Nest Quest</h1>
                <p className="text-xs text-muted-foreground">{sampleFamily.name}</p>
              </div>
            </div>
            <ChildSelector
              children={sampleFamily.children}
              selectedId={selectedChildId}
              onSelect={setSelectedChildId}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 space-y-6">
        {/* Summary Ribbon */}
        <SummaryRibbon child={selectedChild} />

        {/* Pending Approvals */}
        <PendingApprovals approvals={pendingApprovals.filter((a) => a.childId === selectedChildId)} />

        {/* Quest Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Map className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">Quest Map</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {selectedChild.categories.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
