import { Search, Bell, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  projectName: string;
  onCreateTask: () => void;
}

export function Header({ projectName, onCreateTask }: HeaderProps) {
  return (
    <header className="h-14 bg-card/50 backdrop-blur-sm border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-foreground">{projectName}</h1>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">Board</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            className="w-64 pl-9 bg-muted/50 border-border focus:bg-muted"
          />
        </div>

        {/* Filter */}
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </Button>

        {/* Create Task */}
        <Button onClick={onCreateTask} className="gap-2">
          <Plus className="w-4 h-4" />
          New Task
        </Button>
      </div>
    </header>
  );
}
