import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

interface Skill {
  _id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - replace with API call
    const mockSkills: Skill[] = [
      { _id: '1', name: 'React', category: 'Frontend', level: 'Advanced' },
      { _id: '2', name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
      { _id: '3', name: 'JavaScript', category: 'Frontend', level: 'Expert' },
      { _id: '4', name: 'HTML/CSS', category: 'Frontend', level: 'Expert' },
      { _id: '5', name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced' },
      { _id: '6', name: 'Node.js', category: 'Backend', level: 'Advanced' },
      { _id: '7', name: 'Express.js', category: 'Backend', level: 'Advanced' },
      { _id: '8', name: 'MongoDB', category: 'Database', level: 'Intermediate' },
      { _id: '9', name: 'PostgreSQL', category: 'Database', level: 'Intermediate' },
      { _id: '10', name: 'Python', category: 'Backend', level: 'Intermediate' },
      { _id: '11', name: 'Git', category: 'Tools', level: 'Advanced' },
      { _id: '12', name: 'Docker', category: 'Tools', level: 'Intermediate' }
    ];
    
    setTimeout(() => {
      setSkills(mockSkills);
      setLoading(false);
    }, 1000);
  }, []);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code size={24} />;
      case 'Backend':
        return <Server size={24} />;
      case 'Database':
        return <Database size={24} />;
      case 'Tools':
        return <Globe size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Beginner':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                  {getIcon(category)}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{category}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill._id}
                    variants={itemVariants}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{skill.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Continuous Learning
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
            and best practices in web development. Currently exploring advanced React patterns, 
            cloud architecture, and machine learning applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
