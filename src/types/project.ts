export type Priority = 'urgent' | 'high' | 'medium' | 'low';
export type Status = 'backlog' | 'todo' | 'in-progress' | 'review' | 'done';

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee?: User;
  labels: string[];
  createdAt: Date;
  dueDate?: Date;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  key: string;
  color: string;
  description: string;
  tasks: Task[];
}

export const statusConfig: Record<Status, { label: string; color: string }> = {
  'backlog': { label: 'Backlog', color: 'backlog' },
  'todo': { label: 'To Do', color: 'todo' },
  'in-progress': { label: 'In Progress', color: 'progress' },
  'review': { label: 'Review', color: 'review' },
  'done': { label: 'Done', color: 'done' },
};

export const priorityConfig: Record<Priority, { label: string; color: string; icon: string }> = {
  'urgent': { label: 'Urgent', color: 'urgent', icon: '🔴' },
  'high': { label: 'High', color: 'high', icon: '🟠' },
  'medium': { label: 'Medium', color: 'medium', icon: '🟡' },
  'low': { label: 'Low', color: 'low', icon: '🔵' },
};
