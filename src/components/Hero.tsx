"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the event date to March 6, 2025
  useEffect(() => {
    const eventDate = new Date("March 6, 2025 12:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/ghana-house-party.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Steam-Off Daycation 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              An intimate, carefully curated experience designed for MSc Business Analytics students. 
              Unwind in a serene setting with vibrant African-inspired ambiance, refreshing drinks, and unforgettable connections.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              <span className="font-semibold text-primary">Important:</span> Each ticket admits only one person. 
              All attendees must pay to participate. Event cost is yet to be confirmed.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <CountdownItem value={timeLeft.days} label="Days" />
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Seconds" />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-6 text-lg"
            >
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/faqs">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated particles or confetti effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* We'll implement this with a library or custom animation later */}
      </div>
    </div>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="glass-effect p-4 rounded-lg">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
} 