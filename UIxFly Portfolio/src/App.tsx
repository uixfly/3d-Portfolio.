import { motion } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom scrollbar styles */}
      <style>{`
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7B45BD, #a855f7);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #8B5CF6, #7C3AED);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* 3D Transform utilities */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Glassmorphism enhancement */
        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Loading animation for images */
        .image-loading {
          background: linear-gradient(90deg, rgba(123, 69, 189, 0.1) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(123, 69, 189, 0.1) 100%);
          background-size: 400% 400%;
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Text gradient animation */
        .gradient-text {
          background: linear-gradient(45deg, #7B45BD, #a855f7, #7B45BD);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Floating animation */
        .float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        /* Glow effect */
        .glow {
          box-shadow: 0 0 20px rgba(123, 69, 189, 0.3), 0 0 40px rgba(123, 69, 189, 0.2), 0 0 60px rgba(123, 69, 189, 0.1);
        }

        /* Pulse animation */
        .pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Navigation indicator dots */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4"
      >
        {[
          "hero", "about", "skills", "experience", 
          "projects", "education", "achievements", 
          "testimonials", "contact"
        ].map((section, index) => (
          <motion.a
            key={section}
            href={`#${section}`}
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full border-2 border-[#7B45BD] bg-transparent hover:bg-[#7B45BD] transition-all duration-300"
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Education Section */}
        <section id="education">
          <EducationSection />
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <AchievementsSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-12 px-6 bg-gradient-to-t from-gray-900 to-black border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Logo/Name */}
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white mb-4"
            >
              <span className="gradient-text">UIxFly</span>
            </motion.h3>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4">
              © 2025 UIxFly. All rights reserved. Designed with ❤️ in Islamabad, Pakistan.
            </p>
            
            {/* Quick links */}
            <div className="flex justify-center space-x-6 text-sm">
              {["About", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-[#7B45BD] transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#7B45BD] to-transparent opacity-50" />
        </div>
      </motion.footer>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#7B45BD] to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 lg:bottom-8 lg:right-24"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>

      {/* Loading screen overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold gradient-text"
        >
          UIxFly
        </motion.div>
      </motion.div>
    </div>
  );
}