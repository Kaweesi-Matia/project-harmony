import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { KanbanBoard } from '@/components/KanbanBoard';
import { mockProjects } from '@/data/mockData';

const Index = () => {
  const [activeProjectId, setActiveProjectId] = useState(mockProjects[0].id);
  const activeProject = mockProjects.find((p) => p.id === activeProjectId) || mockProjects[0];

  const handleCreateTask = () => {
    // TODO: Implement task creation modal
    console.log('Create task');
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeProject={activeProjectId}
        onProjectChange={setActiveProjectId}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          projectName={activeProject.name}
          onCreateTask={handleCreateTask}
        />
        
        {/* Kanban Board */}
        <main className="flex-1 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
};

export default Index;
