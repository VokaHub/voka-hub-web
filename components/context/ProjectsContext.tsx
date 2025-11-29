import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { projectsData as defaultData, Project } from '../data/projectsData';

interface ProjectsContextType {
  projects: Project[];
  updateProject: (id: string, field: keyof Project | 'crew', value: any, arrayIndex?: number) => void;
  isAdmin: boolean;
  toggleAdmin: () => void;
  resetData: () => void;
  activeFieldHint: string | null;
  setActiveFieldHint: (hint: string | null) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(defaultData);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeFieldHint, setActiveFieldHint] = useState<string | null>(null);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('voka_projects_data');
    if (savedData) {
      try {
        setProjects(JSON.parse(savedData));
      } catch (e) {
        console.error("Error loading saved data", e);
      }
    }
  }, []);

  // Save to LocalStorage whenever projects change
  useEffect(() => {
    if (projects !== defaultData) {
      localStorage.setItem('voka_projects_data', JSON.stringify(projects));
    }
  }, [projects]);

  const toggleAdmin = () => setIsAdmin(prev => !prev);

  const resetData = () => {
    if (window.confirm("¿Estás seguro? Esto borrará todos tus cambios locales y restaurará la data original.")) {
      setProjects(defaultData);
      localStorage.removeItem('voka_projects_data');
    }
  };

  const updateProject = (id: string, field: keyof Project | 'crew', value: any, arrayIndex?: number) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== id) return p;

      // Handle Arrays (Gallery or Crew)
      if (Array.isArray(p[field as keyof Project]) && typeof arrayIndex === 'number') {
        const newArray = [...(p[field as keyof Project] as string[])];
        newArray[arrayIndex] = value;
        return { ...p, [field]: newArray };
      }

      // Handle Strings
      return { ...p, [field]: value };
    }));
  };

  return (
    <ProjectsContext.Provider value={{ 
      projects, 
      updateProject, 
      isAdmin, 
      toggleAdmin, 
      resetData,
      activeFieldHint,
      setActiveFieldHint
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
