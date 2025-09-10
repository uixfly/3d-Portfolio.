import { motion } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 95, icon: "🎨" },
      { name: "Adobe XD", level: 90, icon: "🎭" },
      { name: "Sketch", level: 85, icon: "✏️" },
      { name: "Illustrator", level: 88, icon: "🖌️" },
      { name: "Photoshop", level: 82, icon: "🖼️" },
    ],
  },
  {
    title: "UX Skills",
    skills: [
      { name: "User Research", level: 92, icon: "🔍" },
      { name: "Wireframing", level: 95, icon: "📐" },
      { name: "Prototyping", level: 93, icon: "⚡" },
      { name: "Usability Testing", level: 88, icon: "🧪" },
    ],
  },
  {
    title: "Tech Skills",
    skills: [
      { name: "HTML", level: 85, icon: "🌐" },
      { name: "CSS", level: 88, icon: "🎨" },
      { name: "JavaScript", level: 75, icon: "⚙️" },
      { name: "React", level: 70, icon: "⚛️" },
    ],
  },
  {
    title: "Methods",
    skills: [
      { name: "Design Thinking", level: 90, icon: "💡" },
      { name: "Agile/Scrum", level: 85, icon: "🔄" },
      { name: "Design Systems", level: 88, icon: "🧩" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 95, icon: "💬" },
      { name: "Collaboration", level: 92, icon: "🤝" },
      { name: "Problem Solving", level: 90, icon: "🧠" },
    ],
  },
];

const CircularProgress = ({ percentage, size = 120 }: { percentage: number; size?: number }) => {
  const radius = (size - 20) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3"
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B45BD" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white font-bold text-lg"
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6 shadow-2xl transition-all duration-300">
        {/* Animated border on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7B45BD]/20 via-purple-500/20 to-[#7B45BD]/20 blur-sm"
        />
        
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl"
          >
            {skill.icon}
          </motion.div>

          {/* Circular Progress */}
          <CircularProgress percentage={skill.level} size={100} />

          {/* Skill Name */}
          <h4 className="text-white font-semibold text-center">
            {skill.name}
          </h4>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  y: -20,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute w-1 h-1 bg-[#7B45BD] rounded-full"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-[#7B45BD]">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#7B45BD] mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};