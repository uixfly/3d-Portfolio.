import { motion } from "motion/react";
import { Award, Calendar, MapPin, BookOpen, Star } from "lucide-react";

const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "University Air",
  location: "Islammabad, Pakistan",
  period: "2019 - 2022",
  grade: "8.5 CGPA",
};

const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2023",
    badge: "🎯",
    description: "Comprehensive UX design methodology, user research, and prototyping",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    credentialId: "GUX-2023-ESK",
  },
  {
    title: "Advanced UI/UX Design Certification",
    issuer: "Aspira Design",
    date: "2022",
    badge: "🎨",
    description: "Advanced design systems, interaction design, and visual design principles",
    skills: ["Design Systems", "Interaction Design", "Visual Design", "Brand Identity"],
    credentialId: "ASP-ADV-2022",
  },
  {
    title: "UI/UX Design Bootcamp",
    issuer: "Kisstech Pvt Ltd",
    date: "2022",
    badge: "🚀",
    description: "Intensive hands-on training in modern design tools and methodologies",
    skills: ["Figma", "Adobe XD", "Design Thinking", "Agile Design"],
    credentialId: "KT-BOOT-2022",
  },
];

const CertificationBadge = ({ cert, index }: { cert: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50 
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-6 shadow-2xl transition-all duration-300">
        {/* Animated border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B45BD]/20 via-purple-500/20 to-[#7B45BD]/20 blur-sm"
        />
        
        <div className="relative z-10">
          {/* Badge header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-4xl"
            >
              {cert.badge}
            </motion.div>
            
            <div className="text-right">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7B45BD]/20 border border-[#7B45BD]/30">
                <Calendar className="w-3 h-3 mr-1" />
                <span className="text-[#7B45BD] text-xs font-medium">
                  {cert.date}
                </span>
              </div>
            </div>
          </div>

          {/* Certificate title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#7B45BD] transition-colors">
            {cert.title}
          </h3>

          {/* Issuer */}
          <div className="flex items-center space-x-2 mb-3">
            <Award className="w-4 h-4 text-[#7B45BD]" />
            <span className="text-gray-300 font-medium">{cert.issuer}</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {cert.description}
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Credential ID */}
          <div className="text-xs text-gray-500 font-mono">
            ID: {cert.credentialId}
          </div>
        </div>

        {/* Floating particles for verified badge */}
        <div className="absolute top-2 right-2">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          >
            <Star className="w-3 h-3 text-white" />
          </motion.div>
        </div>

        {/* Hover effect particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
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
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute w-1 h-1 bg-[#7B45BD] rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const EducationSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
            Education & <span className="text-[#7B45BD]">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in design
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-[#7B45BD] via-purple-500 to-transparent" />
            
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="absolute left-4 top-6 w-4 h-4 bg-[#7B45BD] rounded-full border-4 border-white/20 shadow-lg"
            >
              <div className="absolute inset-0 bg-[#7B45BD] rounded-full animate-ping opacity-75" />
            </motion.div>

            {/* Education card */}
            <div className="ml-16">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl max-w-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🎓</div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{education.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <Star className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">
                        {education.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#7B45BD] mb-12 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationBadge
                key={index}
                cert={cert}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Achievement summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "4+", label: "Certifications Earned", icon: "🏆" },
              { number: "3", label: "Years of Learning", icon: "📚" },
              { number: "100%", label: "Commitment to Growth", icon: "🚀" },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-[#7B45BD] mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-400">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};