import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from 'figma:asset/58cf7704f8f3df3bb33e6cc8f49c813b7cf1039f.png';

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
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
            About <span className="text-[#7B45BD]">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Photo Frame */}
          <motion.div
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: 10, 
                rotateX: 5,
                scale: 1.05 
              }}
              transition={{ duration: 0.3 }}
              className="relative group perspective-1000"
            >
              {/* Photo frame with glassmorphism */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={profileImage}
                    alt="UIxFly - UI/UX Designer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#7B45BD] rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7B45BD] rounded-full"
                />
              </div>

              {/* 3D shadow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7B45BD]/20 to-purple-600/20 blur-xl translate-y-4 -z-10" />
            </motion.div>
          </motion.div>

          {/* About content card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main card with glassmorphism */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl"
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B45BD]/30 via-transparent to-purple-500/30 blur-sm"
                />
              </div>

              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-[#7B45BD] mb-6"
                >
                  Career Objective
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                >
                  ⚡A visionary UI/UX Designer blending psychology + design to craft frictionless, addictive user journeys,{" "}
                  <span className="text-[#7B45BD] font-semibold font-bold font-normal text-[16px] no-underline italic">3 years of experience</span>{" "}
                  of Creating Psychology and Emotion  Next level Clarity, Speed, and Obsession from Islamabad.. Skilled in{" "}
                  <span className="text-white font-semibold">
                    Figma, Adobe XD, usability testing, and design thinking
                  </span>.
                </motion.p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "3+", label: "Years Experience" },
                    { number: "15+", label: "Projects Completed" },
                    { number: "20%", label: "Avg. UX Improvement" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-[#7B45BD]">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-white rounded-full"
                />
              </div>
            </motion.div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <div className="w-2 h-2 bg-[#7B45BD] rounded-full animate-pulse" />
              <span>Based in Islamabad, Pakistan</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};