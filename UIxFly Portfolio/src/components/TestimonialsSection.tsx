import image_24bd93c55268abb9e9c5293d6917c8d0c10daeab from 'figma:asset/24bd93c55268abb9e9c5293d6917c8d0c10daeab.png';
import image_3c68c1593b40bdfb33913f334988ab898c9a7c06 from 'figma:asset/3c68c1593b40bdfb33913f334988ab898c9a7c06.png';
import image_57c15421466d5e4d46545bcf84cef4f3da3d80b6 from 'figma:asset/57c15421466d5e4d46545bcf84cef4f3da3d80b6.png';
import image_2a18e859fd4ed2a8b0a9e0ccf09f68b88350528e from 'figma:asset/2a18e859fd4ed2a8b0a9e0ccf09f68b88350528e.png';
import image_933832a9d6f5b19ff40282497efb00817418d6b4 from 'figma:asset/933832a9d6f5b19ff40282497efb00817418d6b4.png';
import image_3153e58fe4e8f74aba29f211eba7ca8076ef7d6a from 'figma:asset/3153e58fe4e8f74aba29f211eba7ca8076ef7d6a.png';

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Emma Davis",
    role: "Businesswoman",
    company: "Davis Enterprises",
    avatar: image_24bd93c55268abb9e9c5293d6917c8d0c10daeab,
    content: "UIxFly consistently delivers exceptional user experiences that drive real business results. His attention to detail and user-centered approach has significantly improved our product adoption rates.",
    rating: 5,
    project: "SaaS Dashboard Redesign",
    highlight: "Increased user engagement by 25%"
  },
  {
    id: 2,
    name: "Ella Rose",
    role: "Entrepreneur",
    company: "Rose Innovations",
    avatar: image_2a18e859fd4ed2a8b0a9e0ccf09f68b88350528e,
    content: "Working with UIxFly has been a game-changer for our team. His collaborative spirit and innovative design solutions have elevated our entire design process. Highly recommended!",
    rating: 5,
    project: "E-Learning Platform",
    highlight: "Improved learning retention by 30%"
  },
  {
    id: 3,
    name: "Sophia Clark",
    role: "Startup Founder",
    company: "Clark Technologies",
    avatar: image_57c15421466d5e4d46545bcf84cef4f3da3d80b6,
    content: "UIxFly's design expertise transformed our mobile banking app into an industry benchmark. His focus on accessibility and security created a solution that users truly love and trust.",
    rating: 5,
    project: "Mobile Banking App",
    highlight: "Achieved 95% user satisfaction"
  },
  {
    id: 4,
    name: "Daniel Musk",
    role: "CEO",
    company: "Brown Digital Solutions",
    avatar: image_3c68c1593b40bdfb33913f334988ab898c9a7c06,
    content: "The UX writing and content strategy UIxFly developed for our brand perfectly captured our voice while significantly improving conversion rates. His strategic thinking is exceptional.",
    rating: 5,
    project: "Brand UX Writing",
    highlight: "Boosted conversions by 22%"
  },

];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.95,
        rotateY: 0 
      }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl">
        {/* Glassmorphism background with gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
        
        {/* Quote icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-6 right-6 text-[#7B45BD]/30"
        >
          <Quote className="w-12 h-12" />
        </motion.div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start space-x-4 mb-6">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#7B45BD]/30 shadow-lg">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white/20 animate-pulse" />
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-1">
                {testimonial.name}
              </h4>
              <p className="text-[#7B45BD] font-medium mb-1">
                {testimonial.role}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonial.company}
              </p>
            </div>

            {/* Rating */}
            <div className="flex space-x-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg leading-relaxed mb-6 italic"
          >
            "{testimonial.content}"
          </motion.blockquote>

          {/* Project info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#7B45BD] rounded-full" />
              <span className="text-gray-400 text-sm">
                Project: {testimonial.project}
              </span>
            </div>
            
            <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
              <span className="text-green-400 text-xs font-medium">
                {testimonial.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#7B45BD]/30 rounded-full"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
              }}
              animate={{
                y: [null, -20, 20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B45BD]/20 via-transparent to-purple-500/20 opacity-50 blur-sm" />
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Floating quote icons */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
            }}
            animate={{
              y: [null, -30, 30],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            💬
          </motion.div>
        ))}
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
            Client <span className="text-[#7B45BD]">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main testimonial display */}
          <div className="relative min-h-96 mb-8">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#7B45BD] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlaying
                  ? 'border-[#7B45BD] text-[#7B45BD] bg-[#7B45BD]/10'
                  : 'border-gray-500 text-gray-500 bg-gray-500/10'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
            </motion.button>
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "5.0", label: "Average Rating", icon: "⭐" },
            { number: "100%", label: "Client Satisfaction", icon: "😊" },
            { number: "15+", label: "Happy Clients", icon: "🤝" },
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