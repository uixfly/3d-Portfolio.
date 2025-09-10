import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [showZeigarnikCTA, setShowZeigarnikCTA] = useState(false);
  const [showIdleMessage, setShowIdleMessage] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const trailIdRef = useRef(0);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const zeigarnikTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setMousePosition({ x: newX, y: newY });

      // Reset idle timer
      setIsIdle(false);
      setShowIdleMessage(false);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Set new idle timer
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
        setShowIdleMessage(true);
      }, 20000); // 20 seconds

      // First interaction logic
      if (isFirstInteraction && !hasInteracted) {
        setHasInteracted(true);
        setIsFirstInteraction(false);
        setShowWelcomeMessage(true);
        
        // Hide welcome message after 4 seconds
        setTimeout(() => {
          setShowWelcomeMessage(false);
        }, 4000);

        // Show Zeigarnik effect after 8 seconds
        zeigarnikTimerRef.current = setTimeout(() => {
          setShowZeigarnikCTA(true);
          // Hide after 5 seconds
          setTimeout(() => {
            setShowZeigarnikCTA(false);
          }, 5000);
        }, 8000);
      }

      // Create trail point
      const newTrailPoint: TrailPoint = {
        x: newX,
        y: newY,
        id: trailIdRef.current++
      };

      setTrail(prevTrail => {
        const newTrail = [...prevTrail, newTrailPoint];
        // Keep only last 12 points for smooth trail
        return newTrail.slice(-12);
      });
    };

    // Start idle timer immediately
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
      setShowIdleMessage(true);
    }, 20000);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      if (zeigarnikTimerRef.current) clearTimeout(zeigarnikTimerRef.current);
    };
  }, [isFirstInteraction, hasInteracted]);

  // Clear trail points after they've been rendered
  useEffect(() => {
    if (trail.length > 0) {
      const timer = setTimeout(() => {
        setTrail(prevTrail => prevTrail.slice(1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [trail]);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-[#7B45BD] to-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.5
        }}
      />

      {/* Cursor Trail */}
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: point.x - 2,
              top: point.y - 2,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <div
              className="w-1 h-1 rounded-full"
              style={{
                background: `linear-gradient(45deg, rgba(123, 69, 189, ${0.8 - index * 0.06}), rgba(168, 85, 247, ${0.6 - index * 0.04}))`,
                boxShadow: `0 0 ${8 - index * 0.5}px rgba(123, 69, 189, ${0.4 - index * 0.03})`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Particle Follower */}
      <AnimatePresence>
        {hasInteracted && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y - 20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.6,
              rotate: 360
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                type: "spring",
                damping: 20,
                stiffness: 300
              }
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-[#7B45BD] to-purple-400 rounded-full blur-[1px]">
              <div className="w-full h-full bg-gradient-to-r from-purple-400 to-[#7B45BD] rounded-full animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Message - First Interaction */}
      <AnimatePresence>
        {showWelcomeMessage && (
          <motion.div
            className="fixed pointer-events-none z-[9996] select-none"
            style={{
              left: mousePosition.x + 30,
              top: mousePosition.y - 10,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
          >
            <div className="bg-black/80 backdrop-blur-md border border-[#7B45BD]/30 rounded-lg px-4 py-2 shadow-xl">
              <p className="text-sm text-white whitespace-nowrap">
                <span className="text-[#7B45BD]">Careful.</span> You've just stepped into the future of design.
              </p>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-[#7B45BD] rotate-45" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zeigarnik Effect CTA */}
      <AnimatePresence>
        {showZeigarnikCTA && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9996] select-none"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
          >
            <motion.div
              className="glass-effect rounded-2xl px-8 py-6 text-center shadow-2xl border border-[#7B45BD]/20"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(123, 69, 189, 0.1)",
                  "0 0 30px rgba(123, 69, 189, 0.3)",
                  "0 0 20px rgba(123, 69, 189, 0.1)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="text-white text-lg mb-2">
                You've seen the start.
              </p>
              <p className="text-[#7B45BD] font-medium">
                Want to see the full system?
              </p>
              <div className="mt-3 flex justify-center">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#7B45BD] to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Idle Message Easter Egg */}
      <AnimatePresence>
        {showIdleMessage && (
          <motion.div
            className="fixed pointer-events-none z-[9996] select-none"
            style={{
              left: mousePosition.x + 25,
              top: mousePosition.y - 15,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -5, 0]
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="bg-gradient-to-r from-[#7B45BD]/90 to-purple-600/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-xl border border-white/10">
              <p className="text-sm text-white whitespace-nowrap">
                Still here? Maybe it's time you start your future with <span className="font-bold">UIxFly</span>.
              </p>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-[#7B45BD] rotate-45" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        a, button, input, textarea, select, [role="button"], [tabindex] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}