import { Category } from "@/types/quest";
import ProgressRing from "./ProgressRing";
import ObjectiveTree from "./ObjectiveTree";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Coins,
  Sparkles,
  Users,
  Palette,
  BookOpen,
  Home,
  ChevronDown,
  Lock,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Coins,
  Sparkles,
  Users,
  Palette,
  BookOpen,
  Home,
};

const colorMap: Record<string, { ring: string; bg: string; icon: string }> = {
  rose: { ring: "hsl(var(--rose))", bg: "bg-rose-muted", icon: "text-rose" },
  amber: { ring: "hsl(var(--amber))", bg: "bg-amber-muted", icon: "text-amber" },
  violet: { ring: "hsl(var(--violet))", bg: "bg-violet-muted", icon: "text-violet" },
  sky: { ring: "hsl(var(--sky))", bg: "bg-sky-muted", icon: "text-sky" },
  forest: { ring: "hsl(var(--forest))", bg: "bg-forest-muted", icon: "text-forest" },
  earth: { ring: "hsl(var(--earth))", bg: "bg-earth-muted", icon: "text-earth" },
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const Icon = iconMap[category.icon] || Heart;
  const colors = colorMap[category.color] || colorMap.forest;

  // Calculate completion across all levels
  const allSubtasks = category.levels.flatMap((l) => l.objectives.flatMap((o) => o.subtasks));
  const completed = allSubtasks.filter((s) => s.status === "complete").length;
  const total = allSubtasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  const inProgressCount = allSubtasks.filter((s) => s.status === "in_progress").length;
  const pendingCount = allSubtasks.filter((s) => s.status === "pending_approval").length;

  // Per-level stats
  const getLevelProgress = (levelId: string) => {
    const level = category.levels.find((l) => l.id === levelId);
    if (!level) return 0;
    const subs = level.objectives.flatMap((o) => o.subtasks);
    const done = subs.filter((s) => s.status === "complete").length;
    return subs.length > 0 ? Math.round((done / subs.length) * 100) : 0;
  };

  const isLevelLocked = (levelIndex: number) => {
    if (levelIndex === 0) return false;
    // A level is locked if the previous level has no completed tasks
    const prevLevel = category.levels[levelIndex - 1];
    const prevSubs = prevLevel.objectives.flatMap((o) => o.subtasks);
    const prevCompleted = prevSubs.filter((s) => s.status === "complete").length;
    return prevCompleted === 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover ${
          isExpanded ? "ring-2 ring-primary/20" : ""
        }`}
      >
        <div className="flex items-center gap-4 p-5">
          <div className="flex items-center justify-center">
            <ProgressRing progress={progress} size={72} strokeWidth={5} color={colors.ring}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg}`}>
                <Icon className={`h-6 w-6 ${colors.icon}`} />
              </div>
            </ProgressRing>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-bold text-foreground">{category.name}</h3>
                <span className="text-xs text-muted-foreground font-medium">
                  {category.levels.length} levels
                </span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm font-semibold text-primary">{progress}%</span>
              <span className="text-xs text-muted-foreground">
                {completed}/{total} tasks
              </span>
              {inProgressCount > 0 && (
                <span className="text-xs text-sky font-semibold">{inProgressCount} active</span>
              )}
              {pendingCount > 0 && (
                <span className="text-xs text-amber font-semibold animate-pulse-glow">{pendingCount} pending</span>
              )}
            </div>
            {/* Progress bar */}
            <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, backgroundColor: colors.ring }}
              />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-3">
              {category.levels.map((level, lvlIdx) => {
                const locked = isLevelLocked(lvlIdx);
                const lvlProgress = getLevelProgress(level.id);
                const isLvlExpanded = expandedLevel === level.id;

                return (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: lvlIdx * 0.06 }}
                  >
                    <button
                      onClick={() => !locked && setExpandedLevel(isLvlExpanded ? null : level.id)}
                      className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-200 ${
                        locked
                          ? "bg-muted/50 opacity-50 cursor-not-allowed"
                          : isLvlExpanded
                          ? "bg-secondary shadow-card"
                          : "bg-secondary/50 hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                              locked
                                ? "bg-muted text-locked-foreground"
                                : lvlProgress === 100
                                ? "bg-forest/20 text-forest"
                                : `${colors.bg} ${colors.icon}`
                            }`}
                          >
                            {locked ? <Lock className="h-4 w-4" /> : level.number}
                          </div>
                          <div className="min-w-0">
                            <p className={`font-semibold text-sm ${locked ? "text-locked-foreground" : "text-foreground"}`}>
                              {level.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {level.objectives.length} objective{level.objectives.length !== 1 ? "s" : ""}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {!locked && (
                            <span className="text-xs font-semibold text-muted-foreground">{lvlProgress}%</span>
                          )}
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                              isLvlExpanded ? "rotate-180" : ""
                            } ${locked ? "opacity-30" : ""}`}
                          />
                        </div>
                      </div>
                      {!locked && (
                        <div className="mt-2 h-1 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${lvlProgress}%`, backgroundColor: colors.ring }}
                          />
                        </div>
                      )}
                    </button>

                    <AnimatePresence>
                      {isLvlExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2">
                            <ObjectiveTree objectives={level.objectives} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CategoryCard;
