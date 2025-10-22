import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Project Details</h1>
        <p>Project ID: {id}</p>
        {/* Add your project detail content here */}
      </div>
    </div>
  );
};

export default ProjectDetail;