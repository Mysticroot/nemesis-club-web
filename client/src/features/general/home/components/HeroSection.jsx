import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import race1 from '/race1.jpg';
import race2 from '/race2.jpg';
import race3 from '/race3.jpg';

const images = [race1, race2, race3];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeBtn, setActiveBtn] = useState(null);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleSlide('next', false);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleSlide = (type, clicked = true) => {
    setDirection(type === 'next' ? 1 : -1);
    setCurrentImage((prev) =>
      type === 'next' ? (prev + 1) % images.length : prev === 0 ? images.length - 1 : prev - 1
    );
    if (clicked) {
      setActiveBtn(type);
      startAutoSlide();
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <section className="relative h-screen w-screen max-w-full overflow-hidden">
      {/* Background images (no overlay) */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img
              src={images[currentImage]}
              alt="slide"
              className="w-full h-full object-cover max-w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text remains clean — no background */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-8 lg:px-20 pb-20 text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide italic uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]">
          Nemesis Racing
        </h1>
        <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed">
          Engineering adrenaline on wheels — pushing speed, style, and innovation to the next level.
        </p>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-3">
        <button
          onClick={() => handleSlide('prev')}
          className={`p-2 sm:p-3 transition-all touch-manipulation ${
            activeBtn === 'prev' ? 'bg-[#0A0A0A]' : 'bg-[#0047FF]'
          } hover:bg-[#0A0A0A] text-white`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className={`p-2 sm:p-3 transition-all touch-manipulation ${
            activeBtn === 'next' ? 'bg-[#0A0A0A]' : 'bg-[#0047FF]'
          } hover:bg-[#0A0A0A] text-white`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
              index === currentImage ? 'bg-cyan-400' : 'bg-gray-500/70 hover:bg-cyan-300'
            }`}
            onClick={() => {
              setCurrentImage(index);
              setDirection(index > currentImage ? 1 : -1);
              startAutoSlide();
            }}
          />
        ))}
      </div>
    </section>
  );
}
