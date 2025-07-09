'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight,
  Play,
  Target,
  Zap,
  Shield,
  Globe,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const features = [
    {
      title: 'Научные исследования',
      description: 'Проведение исследований по вопросам транспортного планирования',
      icon: Target
    },
    {
      title: 'Консультирование',
      description: 'Консультационные услуги для государственных и частных организаций',
      icon: Zap
    },
    {
      title: 'Образование',
      description: 'Организация курсов и тренингов для специалистов',
      icon: Shield
    },
    {
      title: 'Рекомендации',
      description: 'Формулирование рекомендаций по улучшению инфраструктуры',
      icon: Globe
    }
  ]

  const stats = [
    { number: '30+', label: 'Проектов' },
    { number: '15+', label: 'Лет опыта' },
    { number: '50+', label: 'Экспертов' },
    { number: '100%', label: 'Качество' },
  ]

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <main className="min-h-screen">
        <Navigation isLoading={isLoading} />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Beautiful gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-0"></div>
          
          {/* Animated particles */}
          <motion.div
            style={{ y: y1, willChange: 'transform' }}
            className="absolute inset-0 opacity-20 z-10"
          >
            <div className="particle-container">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                НОВАЯ РЕАЛЬНОСТЬ
                <br />
                <span className="text-gradient">ЭФФЕКТИВНОГО</span>
                <br />
                ТРАНСПОРТНОГО ПРОСТРАНСТВА!
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
                style={{ willChange: 'transform, opacity' }}
              >
                Полный комплекс услуг для разработки решений по повышению эффективности организации дорожного движения
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Link
                  href="/solutions"
                  className="group bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Наши решения
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link
                  href="/projects"
                  className="group border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <Play size={20} />
                  Посмотреть проекты
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            style={{ y: y2, willChange: 'transform' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="w-px h-8 bg-white/40 mx-auto mb-2"></div>
              <span className="text-sm">Прокрутить</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Наши возможности
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                От исследования первичных параметров транспортных потоков до авторского надзора за внедрением решений
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Наши достижения
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Готовы начать проект?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для обсуждения вашего проекта в области транспортного моделирования
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/team"
                  className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Наша команда
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Узнать больше
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">ИТР</h3>
                  <p className="text-white/80">
                    Институт Транспортных Решений - лидер в области транспортного моделирования и оптимизации транспортных систем
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                <ul className="space-y-2">
                  <li><Link href="/team" className="text-white/80 hover:text-white transition-colors">Команда</Link></li>
                  <li><Link href="/solutions" className="text-white/80 hover:text-white transition-colors">Решения</Link></li>
                  <li><Link href="/projects" className="text-white/80 hover:text-white transition-colors">Проекты</Link></li>
                  <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors">Блог</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-white/80">
                  <li>info@itr-transport.ru</li>
                  <li>+7 (xxx) xxx-xx-xx</li>
                  <li>г. Сочи, Россия</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2024 ИТР. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 