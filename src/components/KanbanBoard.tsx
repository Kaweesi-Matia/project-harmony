import { Status } from '@/types/project';
import { KanbanColumn } from './KanbanColumn';
import { mockTasks } from '@/data/mockData';

const columns: Status[] = ['backlog', 'todo', 'in-progress', 'review', 'done'];

export function KanbanBoard() {
  return (
    <div className="flex-1 overflow-x-auto p-6">
      <div className="flex gap-6 min-w-max">
        {columns.map((status, index) => (
          <KanbanColumn
            key={status}
            status={status}
            tasks={mockTasks}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
