import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EarPhone from '../assets/EarPhone.svg';
import Location from '../assets/Location.svg';
import coms from '../assets/coms.svg';
import CustomButton from './CustomButton';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-transparent px-10 py-10 mb-[340px]" id="features" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <img src={coms} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Dynamic Chat</h3>
            <p className="text-gray-300 text-center">
            Experience a dynamic chat  adapting in real-time to the evolving rhythm of interaction and engaging communication experiences
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={EarPhone} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Precision Track</h3>
            <p className="text-gray-300 text-center">
            Monitor your progress with pinpoint accuracy and meticulous tracking capabilities, ensuring every step is measured with precision.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={Location} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Insightful Map</h3>
            <p className="text-gray-300 text-center">
            Gain valuable insights into your surroundings and destinations with detailed mapping and informative overlays.
            </p>
          </motion.div>
          
        </div>
        <div className='flex justify-center mt-10'>
          <CustomButton text="Testimonials" link="testimonials" />
          </div>
      </div>
    </section>
  );
};

export default Features;