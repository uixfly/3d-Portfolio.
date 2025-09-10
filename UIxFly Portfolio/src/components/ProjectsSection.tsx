import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

// Import project images (keep your figma:asset imports)
import mclearnImage from "figma:asset/f4930e945ed96c98e670069a53d2676de2156952.png";
import smoothieImage from "figma:asset/457ef8d92eb8f956fc9be32229465e9d4f42baa4.png";
import skyImage from "figma:asset/7dc1faa5b589000088080be7b7185af2197c5646.png";
import juiceImage from "figma:asset/5f7e7c369d26d2dc42c1dc186e8107bcf8d9ebe9.png";

/* -------------------------
  DATA (unchanged content, trimmed fullDescription)
   - I shortened fullDescription to be punchy and scannable.
--------------------------*/
const projects = [
  {
    id: 4,
    title: "🍊 Fresh Juice - Mobile App 🌿",
    category: "Health & Wellness",
    description:
      "Vibrant juice ordering UI with clean flows and calming micro-interactions.",
    fullDescription:
      "Fresh app UI with focused flows, custom iconography, and motion for quick orders.",
    image: juiceImage,
    figmaLink:
      "https://www.figma.com/proto/JpeK3MQNHIqCuBjR7DaA7D/Portfolio?page-id=0%3A1&node-id=84-1094",
    metrics: [
      { icon: TrendingUp, value: "90%", label: "User Satisfaction" },
      { icon: Users, value: "50%", label: "App Downloads" },
      { icon: Clock, value: "30%", label: "Order Time" },
    ],
    tags: ["Mobile", "Health", "Clean"],
    timeline: "3.5h",
    client: "Health Juices Co.",
  },
  {
    id: 2,
    title: "🥤 Smoothie - Animated Experience 🌈",
    category: "Food & Beverage App",
    description:
      "Playful ordering UI with expressive micro-animations and fast flows.",
    fullDescription:
      "High-quality micro-interactions that make ordering feel delightful and fast.",
    image: smoothieImage,
    figmaLink:
      "https://www.figma.com/proto/JpeK3MQNHIqCuBjR7DaA7D/Portfolio?page-id=0%3A1&node-id=84-1700",
    metrics: [
      { icon: TrendingUp, value: "92%", label: "Animation Quality" },
      { icon: Users, value: "35%", label: "Order Completion" },
      { icon: Clock, value: "60%", label: "Faster Navigation" },
    ],
    tags: ["Mobile", "Food", "Motion"],
    timeline: "2.5h",
    client: "Smoothie Startup",
  },
  {
    id: 3,
    title: "🌌 Sky Parallax — Layered Depth Hero ⭐",
    category: "Web Experience",
    description:
      "Parallax hero with layered depth and smooth scroll storytelling.",
    fullDescription:
      "Layered parallax & subtle motion to guide attention and boost engagement.",
    image: skyImage,
    figmaLink:
      "https://www.figma.com/proto/JpeK3MQNHIqCuBjR7DaA7D/Portfolio?page-id=0%3A1&node-id=84-1778",
    metrics: [
      { icon: Users, value: "88%", label: "Visual Impact" },
      { icon: TrendingUp, value: "75%", label: "Scroll Engagement" },
      { icon: Clock, value: "45%", label: "Time on Site" },
    ],
    tags: ["Parallax", "Web", "Story"],
    timeline: "55m",
    client: "Creative Agency",
  },
  {
    id: 1,
    title: "🏎️ McLearn — Smooth UI & UX ✨",
    category: "Car UI/UX",
    description:
      "Interactive car learning UI with vivid color systems and motion-first flows.",
    fullDescription:
      "Education-focused UI, dynamic color states, and playful but clear motion cues.",
    image: mclearnImage,
    figmaLink:
      "https://www.figma.com/proto/JpeK3MQNHIqCuBjR7DaA7D/Portfolio?page-id=0%3A1&node-id=33-80",
    metrics: [
      { icon: Clock, value: "95%", label: "Smooth Animations" },
      { icon: Users, value: "40%", label: "User Engagement" },
      { icon: TrendingUp, value: "85%", label: "Interactive Elements" },
    ],
    tags: ["Interactive", "Car", "Motion"],
    timeline: "4h",
    client: "Edu Project",
  },
];

/* -------------------------
  Helper: small bubble elements that animate on flip
--------------------------*/
const Bubble = ({ x, y, delay }: { x: number; y: number; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.6 }}
    transition={{ delay: delay ?? 0, duration: 0.6, ease: "easeOut" }}
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      width: 12,
      height: 12,
      borderRadius: 999,
      background: "rgba(123,69,189,0.18)",
      boxShadow: "0 6px 18px rgba(123,69,189,0.08)",
      pointerEvents: "none",
    }}
  />
);

/* -------------------------
  ProjectCard component — final polished version
  - Smooth spring flip
  - click/tap toggle
  - Button doesn't toggle flip (stopPropagation)
  - back content uses full width
  - subtle bubbles on flip
--------------------------*/
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // spring transition for smooth, non-snappy animation
  const spring = { type: "spring", stiffness: 70, damping: 18 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative h-96"
      style={{ perspective: 1200 }}
      // allow click toggle for touch devices
      onClick={() => setIsFlipped((s) => !s)}
    >
      {/* subtle hover scale for desktop */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative w-full h-full"
      >
        {/* Inner 3D container controlled by framer animation */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={spring}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full cursor-pointer"
        >
          {/* Front */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-full">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={isFlipped ? { scale: 1.07 } : { scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6 flex flex-col h-[calc(100%-192px)]">
                {/* Category chip */}
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-[#7B45BD]/20 border border-[#7B45BD]/30">
                  <span className="text-[#7B45BD] text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                <p className="text-gray-300 text-sm leading-snug mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 rounded-full bg-white/8 backdrop-blur-sm border border-white/10 text-xs text-gray-300 font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block px-3 py-1 rounded-full bg-white/8 text-xs text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Soft link hint (does not open prototype) */}
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="text-[#7B45BD] font-medium">Preview</span>
                    <ExternalLink className="w-4 h-4 text-[#7B45BD]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl flex flex-col p-5"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            // we keep it interactive (clicking anywhere toggles back because parent handles it)
            onClick={(e) => {
              /* allow toggle by click on back too (but CTA will stop propagation) */
            }}
          >
            {/* BUBBLES - appear only when flipped */}
            <div className="relative flex-1 w-full">
              {isFlipped && (
                <>
                  <Bubble x={12} y={18} delay={0.05} />
                  <Bubble x={80} y={10} delay={0.18} />
                  <Bubble x={55} y={60} delay={0.12} />
                </>
              )}

              <div className="text-center space-y-4 w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {project.title.split(" ").slice(0, 4).join(" ")}
                  </h3>
                  {/* clickable icon — opens figma, doesn't toggle because we stop propagation */}
                  <ExternalLink
                    className="w-5 h-5 text-[#7B45BD] cursor-pointer"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      window.open(project.figmaLink, "_blank");
                    }}
                  />
                </div>

                <p className="text-gray-300 text-sm leading-snug mb-4">
                  {project.fullDescription}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.metrics.map((metric: any, i: number) => (
                    <div
                      key={i}
                      className="text-center p-2 rounded-lg bg-white/5 border border-white/10"
                    >
                      <metric.icon className="w-4 h-4 text-[#7B45BD] mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="w-full mb-4 bg-white/3 rounded-lg p-3 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Timeline:</span>
                    <span className="text-white">{project.timeline}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 mt-1">
                    <span>Client:</span>
                    <span className="text-white">{project.client}</span>
                  </div>
                </div>

                {/* CTA: use Button but stop propagation so it won't flip card */}
                <div>
                  <Button
                    className="w-full bg-gradient-to-r from-[#7B45BD] to-purple-600 hover:from-[#7B45BD]/90 hover:to-purple-500 text-white border-0 transition-all duration-300"
                    size="sm"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      window.open(project.figmaLink, "_blank");
                    }}
                  >
                    View Prototype
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* subtle glow layer (animated opacity via CSS classes on hover is fine) */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(123,69,189,0.08), transparent)",
            filter: "blur(20px)",
            opacity: isFlipped ? 1 : 0,
            transition: "opacity 0.45s ease",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

/* -------------------------
  ProjectsSection (wraps grid + heading)
--------------------------*/
export const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl" />

        {/* Minimal floating shapes (low quantity for perf) */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 border border-white/5 rounded-lg"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 0,
              opacity: 0.6,
            }}
            animate={{
              y: [null, -18, 18],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 14 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ opacity: 0.14 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-[#7B45BD]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A tight selection of design case studies — quality over quantity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            className="group px-8 py-4 bg-gradient-to-r from-[#7B45BD] to-purple-600 text-white border-0 rounded-full"
            size="lg"
            onClick={() => {
              /* navigate to full projects page or open gallery */
              window.location.href = "/projects";
            }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
