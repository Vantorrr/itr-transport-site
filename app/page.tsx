'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Users, 
  Settings, 
  Briefcase, 
  BookOpen,
  ArrowRight,
  Play,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Target,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import Logo from './components/Logo'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const navigation = [
    { name: 'Команда', href: '#team', icon: Users },
    { name: 'Решения', href: '#solutions', icon: Settings },
    { name: 'Проекты', href: '#projects', icon: Briefcase },
    { name: 'Блог', href: '#blog', icon: BookOpen },
  ]

  const solutions = [
    {
      title: 'Научные исследования',
      description: 'Проведение исследований по вопросам транспортного планирования, оптимизации транспортных систем и оценке их воздействия на окружающую среду',
      features: ['Исследование транспортной инфраструктуры', 'Исследование транспортных потоков', 'Исследование пассажиропотоков'],
      icon: Target
    },
    {
      title: 'Консультирование',
      description: 'Предоставление консультационных услуг для государственных органов, частных компаний и международных организаций по вопросам транспортной политики и стратегии',
      features: ['Консультации государственных органов', 'Поддержка частного бизнеса', 'Международное сотрудничество'],
      icon: Zap
    },
    {
      title: 'Образование и подготовка кадров',
      description: 'Организация курсов, семинаров и тренингов для специалистов в области транспорта и логистики',
      features: ['Курсы и семинары', 'Подготовка специалистов', 'Повышение квалификации'],
      icon: Shield
    },
    {
      title: 'Разработка рекомендаций',
      description: 'Формулирование рекомендаций по улучшению транспортной инфраструктуры, повышению безопасности и эффективности транспортных систем',
      features: ['Улучшение инфраструктуры', 'Повышение безопасности', 'Оптимизация систем'],
      icon: Globe
    }
  ]

  const projects = [
    {
      title: 'Мацеста',
      description: 'Имитационное транспортное моделирование',
      status: 'Завершен',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Вокзал Сочи',
      description: 'Оптимизация транспортных потоков',
      status: 'В процессе',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Геленджик',
      description: 'Система управления движением',
      status: 'Планируется',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Новороссийск',
      description: 'Комплексный анализ транспортной системы',
      status: 'Завершен',
      image: '/api/placeholder/400/300'
    }
  ]

  const team = [
    {
      name: 'ИТРо',
      role: 'Компании и лаборатории',
      description: 'Наша команда экспертов по транспортному моделированию'
    },
    {
      name: 'Эксперты',
      role: 'Ведущие специалисты',
      description: 'Профессионалы в области транспортных систем'
    },
    {
      name: 'Проекты',
      role: 'Реализованные решения',
      description: 'Более 30 крупных инфраструктурных проектов'
    }
  ]

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <main className="min-h-screen">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={!isLoading ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <Logo size="md" />
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-1 text-primary hover:text-secondary-light transition-colors font-medium"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-primary hover:text-secondary-light"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-primary hover:text-secondary-light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hero-gradient"></div>
          <motion.div
            style={{ y: y1, willChange: 'transform' }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Interactive Particles - Reduced */}
            <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-blue-300 rounded-full animate-particle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-particle" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-particle" style={{ animationDelay: '2.8s' }}></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="block">Институт</span>
              <span className="block gradient-text-hover">
                Транспортного Развития
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-xl md:text-2xl mb-4 text-blue-100"
              style={{ willChange: 'transform, opacity' }}
            >
              Имитационное транспортное моделирование
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="text-lg md:text-xl mb-12 text-blue-200 italic"
              style={{ willChange: 'transform, opacity' }}
            >
              "Моделируйте и тестируйте вариативность для принятия эффективных решений"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                style={{ willChange: 'transform' }}
              >
                <span>Наши возможности</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center justify-center space-x-2"
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play size={20} />
                </motion.div>
                <span>Смотреть демо</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </section>

        {/* Simulation Modeling Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full filter blur-2xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400/20 rounded-full filter blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              >
                Вопросы мобильности
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Имитационное транспортное
                </span>
                <br />
                <span className="text-gray-800">моделирование</span>
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 rounded-3xl p-8 max-w-4xl mx-auto border border-white/60 shadow-xl"
              >
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "Моделируйте и тестируйте вариативность для принятия эффективных решений"
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                  Имитационное моделирование – эффективный способ анализа пропускной способности и других характеристик микро и средних транспортных систем
                </p>
              </motion.div>
            </motion.div>

            {/* Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-center text-primary mb-12">Наши возможности</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🏗️",
                    title: "Создание и редактирование модели УДС",
                    description: "Создание и редактирование модели УДС города или региона",
                    color: "from-blue-500/10 to-cyan-500/10",
                    border: "border-blue-200/50"
                  },
                  {
                    icon: "📊",
                    title: "Калибровка модели транспортных потоков",
                    description: "Калибровка модели транспортных потоков по данным с детекторов транспорта",
                    color: "from-purple-500/10 to-pink-500/10",
                    border: "border-purple-200/50"
                  },
                  {
                    icon: "🎮",
                    title: "Симуляция транспортных потоков",
                    description: "Симуляция существующих и прогнозируемых транспортных потоков в визуальном режиме наблюдения",
                    color: "from-green-500/10 to-emerald-500/10",
                    border: "border-green-200/50"
                  },
                  {
                    icon: "📈",
                    title: "Расчёт параметров потоков",
                    description: "Расчет значений параметров транспортных потоков в ходе симуляции",
                    color: "from-orange-500/10 to-red-500/10",
                    border: "border-orange-200/50"
                  },
                  {
                    icon: "🚦",
                    title: "Симуляция на модели УДС",
                    description: "Симуляция транспортных ситуаций на модели УДС в визуальном режиме наблюдения",
                    color: "from-indigo-500/10 to-blue-500/10",
                    border: "border-indigo-200/50"
                  },
                  {
                    icon: "🚌",
                    title: "Моделирование пассажирских потоков",
                    description: "Моделирование пассажирских потоков и перевозок в мультимодальных транспортных сетях",
                    color: "from-teal-500/10 to-cyan-500/10",
                    border: "border-teal-200/50"
                  }
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`bg-gradient-to-br ${capability.color} rounded-2xl p-8 border ${capability.border} group cursor-pointer transition-all duration-300 hover:shadow-xl`}
                    style={{ willChange: 'transform' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl mb-6 block"
                    >
                      {capability.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-blue-700 transition-colors">
                      {capability.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {capability.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Analysis Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-white/85 rounded-3xl p-12 border border-white/60 shadow-xl">
                <h3 className="text-3xl font-bold text-center text-primary mb-10">
                  Исследование транспортной системы на имитационных моделях позволяет
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <span className="text-3xl">⏱️</span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-3">Определить загруженность</h4>
                    <p className="text-gray-600">Определить степень загруженности транспортной сети в различные периоды времени</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <span className="text-3xl">🚗</span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-3">Оценить пропускную способность</h4>
                    <p className="text-gray-600">Оценить пропускную способность транспортных потоков</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <span className="text-3xl">🔄</span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-3">Прогнозировать ситуации</h4>
                    <p className="text-gray-600">Спрогнозировать различные транспортные ситуации</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Modeling Types */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-center text-primary mb-12">Типы моделирования</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">📊</div>
                    <h4 className="text-2xl font-bold mb-4">Статическая ситуация</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Моделирование возможно как для прогноза статической ситуации в черте города, 
                      на скоростных магистралях и загородных шоссе
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">⚡</div>
                    <h4 className="text-2xl font-bold mb-4">Динамическая ситуация</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Так и динамической ситуации. Инструменты позволяют наглядно представить 
                      движение каждого отдельного автомобиля в потоке
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Real Projects Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Реализуем проекты с имитационным моделированием</h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Реализуем проекты с имитационным моделированием транспортных потоков и дорожных сетей, 
                    включая крупные дорожные сети и отдельные элементы в виде перекрестков, развязок.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Начать проект
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Оптимизационные транспортные модели</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                "Помогаем вам видеть и анализировать каждую деталь транспортной сети"
              </p>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/70">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Поиск оптимального решения транспортного распределения и оценка эффективности 
                  проектов модернизации различных систем транспорта
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="interactive-card bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl text-center group transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg"
                  >
                    <solution.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-secondary text-sm">
                        <div className="w-2 h-2 bg-secondary-light rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Результаты моделирования</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Наглядные сценарии развития транспортной инфраструктуры
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-300/30"
                >
                  <h3 className="text-2xl font-bold text-red-200 mb-4">🚫 БЫЛО</h3>
                  <div className="aspect-video bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-4xl">🚗🚗🚗</div>
                  </div>
                  <p className="text-red-200">Пробки, неэффективные маршруты, долгое время в пути</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-300/30"
                >
                  <h3 className="text-2xl font-bold text-green-200 mb-4">✅ СТАЛО</h3>
                  <div className="aspect-video bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-4xl">🚗➡️🏁</div>
                  </div>
                  <p className="text-green-200">Оптимизированные потоки, сокращение времени на 35%</p>
                </motion.div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center mt-8"
              >
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  📹 Смотреть демо-видео
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши достижения</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Цифры, которые говорят о нашей экспертизе
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Реализованных проектов", icon: "🚀" },
                { number: "15", label: "Лет опыта", icon: "⏰" },
                { number: "100+", label: "Специалистов", icon: "👥" },
                { number: "35%", label: "Снижение пробок", icon: "📈" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-blue-300 mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Проекты</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Реализованные и текущие проекты в области транспортного моделирования
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="interactive-card bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="h-48 bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MapPin size={48} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Завершен' ? 'bg-green-100 text-green-800' :
                      project.status === 'В процессе' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Команда</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Профессиональная команда экспертов в области транспортного моделирования
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users size={48} className="text-white" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50"></div>
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-16 right-16 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
            <div className="absolute bottom-16 left-16 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Блог</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Последние новости и исследования в области транспортного моделирования
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="interactive-card bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-500 hover:scale-105 hover:-translate-y-3 border border-white/60"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="h-48 bg-gradient-to-br from-secondary-purple to-secondary-light relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Новые методы транспортного моделирования
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Исследование современных подходов к анализу транспортных потоков...
                    </p>
                    <a href="#" className="text-secondary-light font-medium flex items-center space-x-1 hover:space-x-2 transition-all">
                      <span>Читать далее</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mb-4"
                >
                  <Logo variant="white" size="md" className="mb-4" />
                </motion.div>
                <p className="text-blue-200 leading-relaxed">
                  Институт Транспортного Развития занимается исследованиями и разработками в области 
                  транспортной инфраструктуры, логистики и транспортной политики.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2 text-blue-200">
                  {['Имитационное моделирование', 'Оптимизация транспорта', 'ИТС разработка', 'Консультации'].map((service, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5, color: '#ffffff' }}
                      className="cursor-pointer transition-colors"
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-4">Проекты</h4>
                <ul className="space-y-2 text-blue-200">
                  {['Мацеста', 'Вокзал Сочи', 'Геленджик', 'Новороссийск'].map((project, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5, color: '#ffffff' }}
                      className="cursor-pointer transition-colors"
                    >
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <div className="space-y-3">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-200 cursor-pointer"
                  >
                    <Phone size={16} />
                    <span>+7 (XXX) XXX-XX-XX</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-200 cursor-pointer"
                  >
                    <Mail size={16} />
                    <span>info@itr-site.ru</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-200 cursor-pointer"
                  >
                    <MapPin size={16} />
                    <span>Москва, Россия</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border-t border-blue-700 pt-8 text-center text-blue-200"
            >
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                &copy; 2024 ИТР - Институт Транспортного Развития. Все права защищены.
              </motion.p>
            </motion.div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </motion.button>
      </main>
    </>
  )
} 