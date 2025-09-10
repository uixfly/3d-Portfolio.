import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X, Play, ExternalLink, Calendar, Star } from "lucide-react";
import { TrustBadgePulse, CTAMicroPulse, TinyLoader } from "./LottieAnimations";

// Scroll Reveal Micro-Stories Component
export function ScrollRevealMicroStories() {
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  
  const microStories = [
    {
      id: "problem",
      trigger: "Most designers create pretty interfaces.",
      reveal: "UIxFly engineers user psychology into every pixel."
    },
    {
      id: "solution", 
      trigger: "You've seen portfolios before.",
      reveal: "But have you seen design that converts at 40%+ rates?"
    },
    {
      id: "authority",
      trigger: "3 years in the field.",
      reveal: "But 10,000+ hours perfecting the science of user desire."
    },
    {
      id: "curiosity",
      trigger: "Every project tells a story.",
      reveal: "This one's about to change how you think about design."
    }
  ];

  return (
    <div className="fixed top-1/4 left-8 z-40 hidden lg:block max-w-xs">
      {microStories.map((story, index) => (
        <MicroStoryReveal 
          key={story.id}
          story={story}
          delay={index * 2000}
          onReveal={(id) => setRevealedSections(prev => new Set([...prev, id]))}
        />
      ))}
    </div>
  );
}

function MicroStoryReveal({ 
  story, 
  delay, 
  onReveal 
}: { 
  story: any; 
  delay: number; 
  onReveal: (id: string) => void;
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
        onReveal(story.id);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, story.id, onReveal]);

  return (
    <motion.div
      ref={ref}
      className="mb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="glass-effect rounded-lg p-4 border border-[#D4AF37]/20">
        <p className="text-gray-300 text-sm mb-2">{story.trigger}</p>
        <AnimatePresence>
          {isRevealed && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] text-sm font-medium"
            >
              {story.reveal}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Hero Microline Component
export function HeroMicroline() {
  const [showMicroline, setShowMicroline] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
        setShowMicroline(true);
        setTimeout(() => setShowMicroline(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {showMicroline && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="glass-effect rounded-full px-6 py-3 border border-[#D4AF37]/30 shadow-xl">
            <p className="text-white text-sm whitespace-nowrap">
              <span className="text-[#D4AF37]">You're on the edge of design that converts</span> — welcome to UIxFly.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Project Modal Case Vault
export function ProjectCaseVault({ project, isOpen, onClose }: { 
  project: any; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate loading
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handlePasswordSubmit = () => {
    // Simple password check - in real app, this would be secured
    if (password.toLowerCase() === "uixfly" || password === "convert") {
      setHasAccess(true);
      setShowPassword(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-effect rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{project?.title}</h2>
            <div className="flex items-center space-x-4">
              <TrustBadgePulse className="w-8 h-8" />
              <span className="text-[#D4AF37] text-sm">Confidential Case Study</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <TinyLoader className="mb-4" />
            <p className="text-gray-400">Accessing case vault...</p>
          </div>
        ) : !hasAccess && project?.passwordProtected ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl text-white mb-2">Premium Case Study</h3>
              <p className="text-gray-400 mb-6">This case study contains sensitive conversion data and strategies.</p>
            </div>
            <div className="max-w-sm mx-auto">
              <input
                type="password"
                placeholder="Enter access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 mb-4"
              />
              <button
                onClick={handlePasswordSubmit}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-medium py-3 rounded-lg hover:scale-105 transition-transform"
              >
                Access Case Study
              </button>
              <p className="text-xs text-gray-500 mt-4">
                Hint: Think about what UIxFly delivers
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/* Case Study Content */}
            <div className="mb-8">
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B45BD]/20 to-[#D4AF37]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                    <p className="text-white text-lg">30-Second Case Study Demo</p>
                    <p className="text-gray-400 text-sm">Click to play video walkthrough</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Conversion Increase", value: "+40%", icon: "📈" },
                { label: "User Engagement", value: "+65%", icon: "⚡" },
                { label: "Task Completion", value: "+28%", icon: "✅" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-4 text-center border border-[#D4AF37]/20"
                >
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-[#D4AF37] mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Strategy Breakdown */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Strategy Breakdown</h3>
              {[
                "Cognitive bias integration in user flow design",
                "Micro-interaction psychology for conversion optimization", 
                "Visual hierarchy based on eye-tracking research",
                "Emotional design triggers for decision-making"
              ].map((strategy, index) => (
                <motion.div
                  key={strategy}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/5"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-gray-300">{strategy}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-gray-400 mb-4">Ready to get results like this for your project?</p>
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-medium px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Call</span>
                <CTAMicroPulse className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Sticky Mini-CTA Booking Bar
export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [slotsLeft] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black p-4 shadow-xl"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <TrustBadgePulse className="w-8 h-8" />
              <div>
                <div className="font-bold text-lg">Only {slotsLeft} consultation slots left this month</div>
                <div className="text-sm opacity-80">Book your strategy call before they're gone</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
                <CTAMicroPulse className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-black/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Parallax Layers Component
export function ParallaxLayers({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background layer - moves slower */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * -0.3}px, 0)`,
        }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#7B45BD]/10 rounded-full blur-xl" />
      </div>
      
      {/* Midground layer */}
      <div 
        className="relative z-10"
        style={{
          transform: `translate3d(0, ${scrollY * -0.1}px, 0)`,
        }}
      >
        {children}
      </div>
      
      {/* Foreground particles - moves faster */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
        }}
      >
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-40" />
      </div>
    </div>
  );
}