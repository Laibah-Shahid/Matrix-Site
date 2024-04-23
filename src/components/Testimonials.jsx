import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CustomButton from './CustomButton';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'From its sleek and intuitive interface to its robust functionality, every aspect of this app is designed with the user in mind',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'Whether you are performing basic calculations or complex operations, this app delivers with precision and speed',
    },
    {
      id: 3,
      name: 'David Johnson',
      quote: ' This app sets the standard for what a matrix app should be, and once you try it, you will wonder how you ever lived without this.',
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsSection = document.getElementById('testimonials');
      const { top } = testimonialsSection.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <section className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md px-10 py-16 mb-[300px]" id="testimonials" >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <p className="text-white font-bold">{testimonial.name}</p>
            </motion.div>
          ))}
       
        </div>
        <div className='flex justify-center mt-10'>
          <CustomButton text="Pricing" link="pricing" />
          </div>
      </div>
    </section>
  );
};

export default Testimonials;