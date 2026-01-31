import { Project, Task, User, Status, Priority } from '@/types/project';

export const mockUsers: User[] = [
  { id: '1', name: 'Alex Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', email: 'alex@company.com' },
  { id: '2', name: 'Sarah Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', email: 'sarah@company.com' },
  { id: '3', name: 'James Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', email: 'james@company.com' },
  { id: '4', name: 'Emma Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', email: 'emma@company.com' },
];

const createTask = (
  id: string,
  title: string,
  description: string,
  status: Status,
  priority: Priority,
  assigneeId?: string,
  labels: string[] = []
): Task => ({
  id,
  title,
  description,
  status,
  priority,
  assignee: assigneeId ? mockUsers.find(u => u.id === assigneeId) : undefined,
  labels,
  createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
  dueDate: Math.random() > 0.5 ? new Date(Date.now() + Math.random() * 14 * 24 * 60 * 60 * 1000) : undefined,
  projectId: 'proj-1',
});

export const mockTasks: Task[] = [
  createTask('task-1', 'Set up authentication system', 'Implement JWT-based auth with refresh tokens', 'in-progress', 'urgent', '1', ['backend', 'security']),
  createTask('task-2', 'Design dashboard wireframes', 'Create low-fi wireframes for the main dashboard', 'done', 'high', '2', ['design', 'ux']),
  createTask('task-3', 'API rate limiting', 'Implement rate limiting for public API endpoints', 'todo', 'high', '3', ['backend', 'api']),
  createTask('task-4', 'Mobile responsive navigation', 'Fix navigation menu for mobile devices', 'in-progress', 'medium', '4', ['frontend', 'mobile']),
  createTask('task-5', 'Database optimization', 'Optimize slow queries in reporting module', 'review', 'high', '1', ['backend', 'performance']),
  createTask('task-6', 'User onboarding flow', 'Create guided tour for new users', 'backlog', 'medium', undefined, ['ux', 'frontend']),
  createTask('task-7', 'Export to PDF feature', 'Allow users to export reports as PDF', 'todo', 'low', '2', ['feature', 'frontend']),
  createTask('task-8', 'Fix notification bugs', 'Notifications not showing on Safari', 'in-progress', 'urgent', '3', ['bug', 'frontend']),
  createTask('task-9', 'Update dependencies', 'Update all npm packages to latest versions', 'backlog', 'low', undefined, ['maintenance']),
  createTask('task-10', 'Write API documentation', 'Document all public API endpoints', 'review', 'medium', '4', ['docs', 'api']),
  createTask('task-11', 'Implement dark mode toggle', 'Add theme switcher to settings', 'done', 'low', '2', ['frontend', 'ux']),
  createTask('task-12', 'Set up CI/CD pipeline', 'Configure GitHub Actions for auto deployment', 'done', 'high', '1', ['devops']),
];

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    name: 'Platform Core',
    key: 'CORE',
    color: '#22d3ee',
    description: 'Main platform development',
    tasks: mockTasks,
  },
  {
    id: 'proj-2',
    name: 'Mobile App',
    key: 'MOB',
    color: '#a78bfa',
    description: 'iOS and Android mobile application',
    tasks: [],
  },
  {
    id: 'proj-3',
    name: 'Marketing Site',
    key: 'MKT',
    color: '#f472b6',
    description: 'Company marketing website',
    tasks: [],
  },
];

export const currentUser = mockUsers[0];
