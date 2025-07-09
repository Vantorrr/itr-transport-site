'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 1000)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1B2545 0%, #45517F 50%, #4859A5 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified Road Lines Animation - Only 3 lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 bg-white/20"
            style={{
              top: `${30 + i * 20}%`,
              left: '-100%',
              width: '200px',
            }}
            animate={{
              x: ['0vw', '120vw'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'linear'
            }}
          />
        ))}

        {/* Reduced Floating Elements - Only 4 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute w-3 h-3 bg-white/10 rounded-full"
            style={{
              top: `${25 + i * 20}%`,
              left: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 15 
          }}
          className="mb-8"
        >
          <Logo variant="white" size="lg" />
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Институт Транспортного Развития
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg text-blue-200 mb-8"
        >
          Имитационное транспортное моделирование
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-4"
          >
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Загрузка системы</span>
              <span>{progress}%</span>
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Loading Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm text-blue-300"
          >
            {progress < 25 && "Инициализация модулей..."}
            {progress >= 25 && progress < 50 && "Загрузка транспортных данных..."}
            {progress >= 50 && progress < 75 && "Настройка интерфейса..."}
            {progress >= 75 && progress < 100 && "Завершение загрузки..."}
            {progress >= 100 && "Готово!"}
          </motion.div>
        </div>

        {/* Transport Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="inline-block"
            >
              🚗
            </motion.div>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
    </motion.div>
  )
} 