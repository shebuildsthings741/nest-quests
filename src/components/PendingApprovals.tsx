import { PendingApproval } from "@/types/quest";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";

interface PendingApprovalsProps {
  approvals: PendingApproval[];
}

const PendingApprovals = ({ approvals }: PendingApprovalsProps) => {
  if (approvals.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl bg-card shadow-card overflow-hidden"
    >
      <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-muted">
          <AlertCircle className="h-4 w-4 text-amber" />
        </div>
        <h3 className="font-display text-base font-bold text-foreground">Pending Approvals</h3>
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-amber text-amber-foreground text-xs font-bold">
          {approvals.length}
        </span>
      </div>

      <div className="divide-y divide-border">
        {approvals.map((a, idx) => (
          <motion.div
            key={a.subtaskId}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.05 }}
            className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{a.subtaskTitle}</p>
              <p className="text-xs text-muted-foreground">
                {a.childName} · {a.objectiveTitle} · {a.categoryName}
              </p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{a.submittedAt}</span>
            <div className="flex items-center gap-1 shrink-0">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-muted text-forest hover:bg-forest hover:text-primary-foreground transition-colors">
                <CheckCircle2 className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PendingApprovals;
