import { Objective } from "@/types/quest";
import StatusBadge from "./StatusBadge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface ObjectiveTreeProps {
  objectives: Objective[];
}

const ObjectiveTree = ({ objectives }: ObjectiveTreeProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {objectives.map((obj, idx) => {
        const completedSubtasks = obj.subtasks.filter((s) => s.status === "complete").length;
        const totalSubtasks = obj.subtasks.length;
        const progress = totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;
        const isExpanded = expandedId === obj.id;
        const isLocked = obj.status === "locked";

        return (
          <motion.div
            key={obj.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <button
              onClick={() => !isLocked && setExpandedId(isExpanded ? null : obj.id)}
              className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-200 ${
                isLocked
                  ? "bg-muted/50 opacity-50 cursor-not-allowed"
                  : isExpanded
                  ? "bg-secondary shadow-card"
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <ChevronRight
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-90" : ""
                    } ${isLocked ? "opacity-30" : ""}`}
                  />
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm truncate ${isLocked ? "text-locked-foreground" : "text-foreground"}`}>
                      {obj.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{obj.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {!isLocked && (
                    <span className="text-xs font-semibold text-muted-foreground">
                      {completedSubtasks}/{totalSubtasks}
                    </span>
                  )}
                  <StatusBadge status={obj.status} />
                </div>
              </div>

              {/* Mini progress bar */}
              {!isLocked && (
                <div className="mt-2 ml-7 h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-7 mt-1 space-y-1 border-l-2 border-border pl-4 py-2">
                    {obj.subtasks.map((st, stIdx) => {
                      const stIsLocked = st.status === "locked";
                      return (
                        <motion.div
                          key={st.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stIdx * 0.03 }}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                            stIsLocked ? "opacity-40" : "bg-card"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div
                              className={`h-2 w-2 rounded-full shrink-0 ${
                                st.status === "complete"
                                  ? "bg-forest"
                                  : st.status === "in_progress"
                                  ? "bg-sky"
                                  : st.status === "pending_approval"
                                  ? "bg-amber"
                                  : "bg-locked"
                              }`}
                            />
                            <span className={`truncate ${stIsLocked ? "text-locked-foreground" : "text-foreground"}`}>
                              {st.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {st.attemptPoints > 0 && (
                              <span className="text-xs text-amber font-semibold">+{st.attemptPoints} XP</span>
                            )}
                            <span className="text-xs text-muted-foreground">{st.points} pts</span>
                            <StatusBadge status={st.status} size="sm" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ObjectiveTree;
