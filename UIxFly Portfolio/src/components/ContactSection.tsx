import { motion } from "motion/react";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Dribbble, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/uixfly",
    color: "#0077B5",
    description: "Professional network",
  },
  {
    name: "Dribbble",
    icon: Dribbble,
    url: "https://dribbble.com/ui-x-fly",
    color: "#EA4C89",
    description: "Design portfolio",
  },
  {
    name: "Behance",
    icon: ExternalLink,
    url: "https://behance.net/uixfly",
    color: "#1769FF",
    description: "Creative showcase",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@uixfly.com",
    color: "#7B45BD",
    description: "Direct contact",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "uixfly@gmail.com",
    action: "mailto:",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 335 5059870",
    action: "tel:+923355059870",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    action: "#",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Name field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="relative group"
      >
        <Label htmlFor="name" className="text-white mb-2 block">
          Your Name
        </Label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#7B45BD] focus:ring-2 focus:ring-[#7B45BD]/20 transition-all duration-300 backdrop-blur-md"
            placeholder="Enter your full name"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: formData.name ? 1 : 0 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Email field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <Label htmlFor="email" className="text-white mb-2 block">
          Email Address
        </Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#7B45BD] focus:ring-2 focus:ring-[#7B45BD]/20 transition-all duration-300 backdrop-blur-md"
            placeholder="Enter your email address"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: formData.email ? 1 : 0 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Message field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative group"
      >
        <Label htmlFor="message" className="text-white mb-2 block">
          Your Message
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#7B45BD] focus:ring-2 focus:ring-[#7B45BD]/20 transition-all duration-300 backdrop-blur-md resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: formData.message ? 1 : 0 }}
            className="absolute right-3 top-3 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Submit button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="group relative w-full py-4 bg-gradient-to-r from-[#7B45BD] to-purple-600 hover:from-[#7B45BD]/80 hover:to-purple-500 text-white border-0 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Sending...</span>
              </>
            ) : isSubmitted ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 text-green-400"
                >
                  ✓
                </motion.div>
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </>
            )}
          </span>
          
          {!isSubmitting && !isSubmitted && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

const SocialLink = ({ social, index }: { social: any; index: number }) => {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 10,
        y: -5 
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-6 shadow-2xl transition-all duration-300">
        {/* Animated border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(45deg, ${social.color}20, transparent, ${social.color}20)`
          }}
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
            className="mb-4"
          >
            <social.icon 
              className="w-8 h-8 mx-auto" 
              style={{ color: social.color }}
            />
          </motion.div>

          {/* Name */}
          <h4 className="text-white font-semibold mb-2 group-hover:text-[#7B45BD] transition-colors">
            {social.name}
          </h4>

          {/* Description */}
          <p className="text-gray-400 text-sm">
            {social.description}
          </p>
        </div>

        {/* Hover particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
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
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: social.color }}
            />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B45BD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Floating contact icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-5xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            📧
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
            Let's <span className="text-[#7B45BD]">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can create amazing user experiences together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B45BD]/20 via-transparent to-purple-500/20 blur-sm" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send me a message
                </h3>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.action}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-[#7B45BD]/20 border border-[#7B45BD]/30 group-hover:bg-[#7B45BD]/30 transition-colors">
                      <info.icon className="w-5 h-5 text-[#7B45BD]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Follow me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    social={social}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6 text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new design projects and collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};