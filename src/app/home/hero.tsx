'use client'
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Hero() {
  const {scrollYProgress} = useScroll();
  const y = useParallax(scrollYProgress, 300);  

  return (
    <div className="overflow-hidden bg-black bg-opacity-30 z-10">
      <div className="relative">
        <motion.img src="hero-bg.jpg" className="hero-bg absolute -z-10" style={{y}}/>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-6xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              NEcoenzyme
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Promoting Waste Reduction and Eco-Friendly Practices
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
