import { Child } from "@/types/quest";

interface ChildSelectorProps {
  children: Child[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ChildSelector = ({ children, selectedId, onSelect }: ChildSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      {children.map((child) => (
        <button
          key={child.id}
          onClick={() => onSelect(child.id)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 font-body font-semibold text-sm ${
            selectedId === child.id
              ? "bg-primary text-primary-foreground shadow-glow"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <span className="text-lg">{child.avatar}</span>
          <span>{child.name}</span>
          <span className={`text-xs ${selectedId === child.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            age {child.age}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ChildSelector;
