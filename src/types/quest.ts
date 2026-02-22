export type TaskStatus = "locked" | "in_progress" | "pending_approval" | "complete";

export interface Subtask {
  id: string;
  title: string;
  status: TaskStatus;
  points: number;
  attemptPoints: number; // points earned from attempts (including failed)
  categoryContributions: string[]; // IDs of categories this contributes to
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  categoryId: string;
  subtasks: Subtask[];
  points: number;
  categoryContributions: string[]; // can contribute to multiple categories
}

export interface Level {
  id: string;
  number: number;
  title: string;
  objectives: Objective[];
}

export interface Category {
  id: string;
  name: string;
  icon: string; // lucide icon name
  color: string; // tailwind color token
  levels: Level[];
}

export interface Child {
  id: string;
  name: string;
  age: number;
  avatar: string; // emoji or initials
  totalPoints: number;
  level: number;
  streak: number; // days
  categories: Category[];
}

export interface Family {
  id: string;
  name: string;
  children: Child[];
}

export interface PendingApproval {
  childId: string;
  childName: string;
  objectiveTitle: string;
  subtaskTitle: string;
  subtaskId: string;
  categoryName: string;
  submittedAt: string;
}
