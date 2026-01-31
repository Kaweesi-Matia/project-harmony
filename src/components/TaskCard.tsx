import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Paperclip } from 'lucide-react';
import { Task, priorityConfig } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  index: number;
}

const priorityVariantMap: Record<string, 'urgent' | 'high' | 'medium' | 'low'> = {
  urgent: 'urgent',
  high: 'high',
  medium: 'medium',
  low: 'low',
};

export function TaskCard({ task, index }: TaskCardProps) {
  const priorityInfo = priorityConfig[task.priority];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "glass-card rounded-lg p-4 cursor-pointer group",
        "hover:border-primary/30 hover:shadow-lg transition-all duration-200"
      )}
    >
      {/* Priority & Labels */}
      <div className="flex items-center gap-2 mb-3">
        <Badge variant={priorityVariantMap[task.priority]} className="text-[10px]">
          {priorityInfo.label}
        </Badge>
        {task.labels.slice(0, 2).map((label) => (
          <Badge key={label} variant="outline" className="text-[10px]">
            {label}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
        <div className="flex items-center gap-3 text-muted-foreground">
          {task.dueDate && (
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="w-3 h-3" />
              <span>{format(task.dueDate, 'MMM d')}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-xs">
            <MessageSquare className="w-3 h-3" />
            <span>{Math.floor(Math.random() * 5)}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Paperclip className="w-3 h-3" />
            <span>{Math.floor(Math.random() * 3)}</span>
          </div>
        </div>

        {/* Assignee */}
        {task.assignee && (
          <img
            src={task.assignee.avatar}
            alt={task.assignee.name}
            title={task.assignee.name}
            className="w-6 h-6 rounded-full ring-2 ring-background"
          />
        )}
      </div>
    </motion.div>
  );
}
