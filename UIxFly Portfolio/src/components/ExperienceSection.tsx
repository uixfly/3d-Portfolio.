import { motion } from "motion/react";
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Smart Pvt Ltd",
    location: "Islamabad, Pakistan",
    period: "2022 - 2025",
    type: "Full-time",
    highlights: [
      "Led wireframing and prototyping for 15+ web and mobile applications",
      "Conducted comprehensive usability testing resulting in 20% increase in user engagement",
      "Collaborated with cross-functional teams to deliver user-centric design solutions",
      "Implemented design systems that reduced development time by 30%",
      "Specialized in responsive design and accessibility standards",
    ],
    achievements: [
      { icon: TrendingUp, text: "20% increase in user engagement", color: "#10B981" },
      { icon: Zap, text: "30% faster development", color: "#F59E0B" },
      { icon: Users, text: "15+ successful projects", color: "#8B5CF6" },
    ],
  },
];

const TimelineItem = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-[#7B45BD] via-purple-500 to-transparent" />
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className="absolute left-4 top-8 w-4 h-4 bg-[#7B45BD] rounded-full border-4 border-white/20 shadow-lg"
      >
        <div className="absolute inset-0 bg-[#7B45BD] rounded-full animate-ping opacity-75" />
      </motion.div>

      {/* Content card */}
      <div className="ml-16">
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B45BD]/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between mb-6">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {experience.title}
                </motion.h3>
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-[#7B45BD] font-semibold mb-3"
                >
                  {experience.company}
                </motion.h4>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-end space-y-2"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7B45BD]/20 border border-[#7B45BD]/30">
                  <span className="text-[#7B45BD] font-medium text-sm">
                    {experience.type}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <h5 className="text-white font-semibold mb-4">Key Responsibilities & Achievements:</h5>
              <ul className="space-y-3">
                {experience.highlights.map((highlight: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-[#7B45BD] rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Achievement badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {experience.achievements.map((achievement: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <achievement.icon 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: achievement.color }}
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-2 border-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Work <span className="text-[#7B45BD]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and achievements in UI/UX design
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Career stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "3+", label: "Years Experience", icon: "📅" },
            { number: "15+", label: "Projects Delivered", icon: "🚀" },
            { number: "20%", label: "Avg UX Improvement", icon: "📈" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#7B45BD] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};