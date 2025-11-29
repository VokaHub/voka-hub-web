import React from 'react';
import { useProjects } from './context/ProjectsContext';

interface EditableTextProps {
  value: string;
  onSave: (val: string) => void;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
  hintName: string; // The title of the field for the AI
  hintTip: string;  // The advice from the AI
}

const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onSave, 
  tag: Tag = 'div', 
  className = '', 
  multiline = false,
  hintName,
  hintTip
}) => {
  const { isAdmin, setActiveFieldHint } = useProjects();

  if (!isAdmin) {
    return <Tag className={className}>{value}</Tag>;
  }

  const handleFocus = () => {
    setActiveFieldHint(`${hintName}:${hintTip}`);
  };

  const commonClasses = `bg-indigo-900/20 border border-indigo-500/30 text-white p-1 rounded outline-none focus:border-indigo-400 transition-all w-full ${className}`;

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onSave(e.target.value)}
        onFocus={handleFocus}
        className={commonClasses}
        rows={4}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onSave(e.target.value)}
      onFocus={handleFocus}
      className={commonClasses}
    />
  );
};

export default EditableText;
