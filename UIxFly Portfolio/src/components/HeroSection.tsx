import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

// Typing effect for role
const TypingEffect = ({ words }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(words[wordIndex].slice(0, charIndex + 1));
      if (charIndex + 1 === words[wordIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }, 800);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, words]);

  return <span className="text-[20px] md:text-[24px] text-[#D4AF37]/80 font-medium">{text}</span>;
};

// Particle background
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B45BD]/20 via-purple-900/10 to-blue-900/20" />

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -20, 20],
            x: [null, Math.random() * 50 - 25],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-20 h-20 border border-[#7B45BD]/20 rounded-lg backdrop-blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            y: [null, -50, 50],
            x: [null, Math.random() * 100 - 50],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/50 to-black group">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
          <div className="inline-block px-6 py-3 rounded-full border border-[#7B45BD]/30 bg-white/5 backdrop-blur-md hover:shadow-[0_0_25px_#7B45BD] transition-shadow duration-500">
            <span className="text-[#7B45BD] font-medium hover:text-white transition-colors duration-500">Hello, I'm</span>
          </div>
        </motion.div>

        {/* Main name with gradient glow */}
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-6xl md:text-8xl font-bold mb-6 tracking-tight cursor-default relative">
          <span className="bg-gradient-to-r from-white via-[#7B45BD] to-purple-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_20px_#7B45BD] hover:animate-pulse transition-all duration-500">
            UIxFly
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mb-8">
          <h2 className="text-[20px] md:text-4xl text-[rgba(220,209,209,1)] mb-4 text-[22px] italic">
            ✨<TypingEffect words={["UI/UX Designer", "Futuristic Creator", "Next-Level Innovator"]} />
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Designing intuitive & futuristic digital experiences that users never forget
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mb-16">
          <Button className="group relative px-8 py-4 bg-gradient-to-r from-[#7B45BD] to-purple-600 hover:from-[#7B45BD]/80 hover:to-purple-500 text-white border-0 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_#7B45BD]" size="lg">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="flex flex-col items-center">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-400">
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <span className="text-sm text-gray-500 mt-2">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110" />
    </section>
  );
};
