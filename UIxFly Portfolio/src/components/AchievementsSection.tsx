import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Trophy, Target, Users, TrendingUp, Star, Award, Zap, Heart } from "lucide-react";

const achievements = [
  {
    id: 1,
    number: 15,
    suffix: "+",
    title: "UX Projects",
    description: "Successfully delivered user-centered design projects",
    icon: Trophy,
    color: "#FFD700",
    bgColor: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 2,
    number: 20,
    suffix: "-30%",
    title: "Usability Improvements",
    description: "Average improvement in user experience metrics",
    icon: TrendingUp,
    color: "#10B981",
    bgColor: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    number: 95,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Consistent positive feedback and project approval",
    icon: Heart,
    color: "#EC4899",
    bgColor: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 4,
    number: 3,
    suffix: "+",
    title: "Years Experience",
    description: "Professional experience in UI/UX design",
    icon: Target,
    color: "#8B5CF6",
    bgColor: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: 5,
    number: 50,
    suffix: "+",
    title: "Stakeholders",
    description: "Successfully collaborated with diverse teams",
    icon: Users,
    color: "#06B6D4",
    bgColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 6,
    number: 100,
    suffix: "%",
    title: "Recognition",
    description: "Recognized for exceptional collaboration and innovation",
    icon: Award,
    color: "#F59E0B",
    bgColor: "from-amber-500/20 to-yellow-500/20",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Started Professional Journey",
    description: "Joined Kisstech Pvt Ltd as UI/UX Designer",
    icon: Star,
  },
  {
    year: "2023",
    title: "Google UX Certification",
    description: "Completed Google UX Design Professional Certificate",
    icon: Award,
  },
  {
    year: "2024",
    title: "Design Leadership",
    description: "Led design systems implementation across multiple projects",
    icon: Zap,
  },
  {
    year: "2025",
    title: "Innovation Recognition",
    description: "Recognized for innovative design solutions and team collaboration",
    icon: Trophy,
  },
];

const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  duration = 2 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(target * progress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50 
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl transition-all duration-300">
        {/* Animated background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.bgColor} blur-sm`}
        />
        
        <div className="relative z-10 text-center">
          {/* Icon */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="mb-6"
          >
            <achievement.icon 
              className="w-12 h-12 mx-auto" 
              style={{ color: achievement.color }}
            />
          </motion.div>

          {/* Number */}
          <motion.div
            style={{ color: achievement.color }}
            className="mb-4"
          >
            <AnimatedCounter 
              target={achievement.number} 
              suffix={achievement.suffix}
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7B45BD] transition-colors">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Floating decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -right-2 w-4 h-4 border-2 border-white/20 rounded-full"
        />

        {/* Particle effects on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                y: -30,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: achievement.color }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MilestoneItem = ({ milestone, index }: { milestone: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      {index < milestones.length - 1 && (
        <div className="absolute left-1/2 top-16 w-px h-20 bg-gradient-to-b from-[#7B45BD] to-purple-500/50 transform -translate-x-1/2" />
      )}
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-8 w-4 h-4 bg-[#7B45BD] rounded-full border-4 border-white/20 shadow-lg transform -translate-x-1/2 z-10"
      >
        <div className="absolute inset-0 bg-[#7B45BD] rounded-full animate-ping opacity-75" />
      </motion.div>

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative pt-16 pb-8"
      >
        <div className="text-center">
          <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6 shadow-xl max-w-sm mx-auto">
            <div className="flex items-center justify-center mb-4">
              <milestone.icon className="w-8 h-8 text-[#7B45BD] mr-3" />
              <span className="text-2xl font-bold text-[#7B45BD]">
                {milestone.year}
              </span>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2">
              {milestone.title}
            </h4>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const AchievementsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Floating achievement icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-4xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            🏆
          </motion.div>
        ))}
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
            My <span className="text-[#7B45BD]">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Measurable impact and recognition in the field of UI/UX design
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Career Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#7B45BD] mb-12 text-center">
            Career Milestones
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <MilestoneItem
                key={index}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎯", label: "Goals Achieved", value: "100%" },
              { icon: "🚀", label: "Project Success", value: "95%" },
              { icon: "⭐", label: "Quality Rating", value: "4.9/5" },
              { icon: "🤝", label: "Team Collaboration", value: "Excellent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg font-bold text-[#7B45BD] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};