import { TaskStatus } from "@/types/quest";
import { Lock, Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  status: TaskStatus;
  size?: "sm" | "md";
}

const config: Record<TaskStatus, { label: string; icon: typeof Lock; className: string }> = {
  locked: {
    label: "Locked",
    icon: Lock,
    className: "bg-muted text-locked-foreground",
  },
  in_progress: {
    label: "In Progress",
    icon: Clock,
    className: "bg-sky-muted text-sky",
  },
  pending_approval: {
    label: "Pending",
    icon: AlertCircle,
    className: "bg-amber-muted text-amber-foreground",
  },
  complete: {
    label: "Complete",
    icon: CheckCircle2,
    className: "bg-forest-muted text-forest",
  },
};

const StatusBadge = ({ status, size = "sm" }: StatusBadgeProps) => {
  const { label, icon: Icon, className } = config[status];
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5 gap-1" : "text-sm px-3 py-1 gap-1.5";

  return (
    <span className={`inline-flex items-center rounded-full font-semibold ${className} ${sizeClasses}`}>
      <Icon className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      {label}
    </span>
  );
};

export default StatusBadge;
