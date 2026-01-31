import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Task, Status, statusConfig } from '@/types/project';
import { TaskCard } from './TaskCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface KanbanColumnProps {
  status: Status;
  tasks: Task[];
  index: number;
}

const statusVariantMap: Record<Status, 'backlog' | 'todo' | 'progress' | 'review' | 'done'> = {
  'backlog': 'backlog',
  'todo': 'todo',
  'in-progress': 'progress',
  'review': 'review',
  'done': 'done',
};

export function KanbanColumn({ status, tasks, index }: KanbanColumnProps) {
  const config = statusConfig[status];
  const statusTasks = tasks.filter((task) => task.status === status);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-80"
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              `bg-status-${statusVariantMap[status]}`
            )}
          />
          <h3 className="font-medium text-foreground">{config.label}</h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {statusTasks.length}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Tasks */}
      <div className="space-y-3 min-h-[200px]">
        {statusTasks.map((task, taskIndex) => (
          <TaskCard key={task.id} task={task} index={taskIndex} />
        ))}

        {/* Empty State */}
        {statusTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-3">
              <Plus className="w-6 h-6" />
            </div>
            <p className="text-sm">No tasks yet</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
