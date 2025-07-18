import React from 'react';
import { motion } from 'framer-motion';
import './DoodleBackground.css';

const DoodleBackground = () => {
  const doodles = [
    { id: 1, content: '✨', className: 'doodle-bg doodle-bg-1', delay: 0 },
    { id: 2, content: '🎨', className: 'doodle-bg doodle-bg-2', delay: 1 },
    { id: 3, content: '💡', className: 'doodle-bg doodle-bg-3', delay: 2 },
    { id: 4, content: '🚀', className: 'doodle-bg doodle-bg-4', delay: 3 },
    { id: 5, content: '🎯', className: 'doodle-bg doodle-bg-5', delay: 4 },
    { id: 6, content: '🔥', className: 'doodle-bg doodle-bg-6', delay: 5 },
    { id: 7, content: '⭐', className: 'doodle-bg doodle-bg-7', delay: 6 },
    { id: 8, content: '💻', className: 'doodle-bg doodle-bg-8', delay: 7 },
    { id: 9, content: '🎪', className: 'doodle-bg doodle-bg-9', delay: 8 },
    { id: 10, content: '🌈', className: 'doodle-bg doodle-bg-10', delay: 9 },
    { id: 11, content: '🎭', className: 'doodle-bg doodle-bg-11', delay: 10 },
    { id: 12, content: '🎪', className: 'doodle-bg doodle-bg-12', delay: 11 },
  ];

  return (
    <div className="doodle-background">
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          className={doodle.className}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: doodle.delay,
            ease: "easeInOut"
          }}
        >
          {doodle.content}
        </motion.div>
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="gradient-orb orb-3"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
    </div>
  );
};

export default DoodleBackground; 