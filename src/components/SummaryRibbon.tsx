import { Child } from "@/types/quest";
import { Flame, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

interface SummaryRibbonProps {
  child: Child;
}

const SummaryRibbon = ({ child }: SummaryRibbonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap items-center gap-5 rounded-2xl bg-card shadow-card px-6 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-muted text-2xl">
          {child.avatar}
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">{child.name}</h2>
          <p className="text-sm text-muted-foreground">Quest Explorer</p>
        </div>
      </div>

      <div className="h-8 w-px bg-border hidden sm:block" />

      <div className="flex items-center gap-2 rounded-xl bg-amber-muted px-4 py-2">
        <Star className="h-5 w-5 text-amber" fill="hsl(var(--amber))" />
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Points</p>
          <p className="font-display text-lg font-bold text-amber-foreground">{child.totalPoints}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-forest-muted px-4 py-2">
        <Trophy className="h-5 w-5 text-forest" />
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Level</p>
          <p className="font-display text-lg font-bold text-foreground">{child.level}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-rose-muted px-4 py-2">
        <Flame className="h-5 w-5 text-streak" />
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Streak</p>
          <p className="font-display text-lg font-bold text-foreground">{child.streak} days</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SummaryRibbon;
