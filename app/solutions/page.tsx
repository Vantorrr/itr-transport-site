'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Car, 
  BarChart3, 
  BookOpen, 
  Users,
  ArrowRight 
} from 'lucide-react'
import Navigation from '../components/Navigation'

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Мобильность',
      description: 'Комплексные решения для повышения мобильности городского транспорта',
      details: ['Анализ транспортных потоков', 'Оптимизация маршрутов', 'Интеллектуальные транспортные системы'],
      icon: Car,
      gradient: 'from-blue-500 to-cyan-500',
      href: '/solutions/mobility'
    },
    {
      title: 'Транспортное моделирование',
      description: 'Имитационное моделирование транспортных систем и прогнозирование',
      details: ['Создание цифровых моделей', 'Симуляция транспортных потоков', 'Прогнозирование развития'],
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500',
      href: '/solutions/modeling'
    },
    {
      title: 'Исследования',
      description: 'Научные исследования в области транспортного планирования',
      details: ['Фундаментальные исследования', 'Прикладные разработки', 'Инновационные подходы'],
      icon: Target,
      gradient: 'from-green-500 to-emerald-500',
      href: '/solutions/research'
    },
    {
      title: 'Консультирование',
      description: 'Экспертные консультации по транспортным проектам',
      details: ['Стратегическое планирование', 'Техническая экспертиза', 'Сопровождение проектов'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      href: '/solutions/consulting'
    },
    {
      title: 'Образование',
      description: 'Образовательные программы и тренинги для специалистов',
      details: ['Курсы повышения квалификации', 'Семинары и воркшопы', 'Научные конференции'],
      icon: BookOpen,
      gradient: 'from-indigo-500 to-purple-500',
      href: '/solutions/education'
    }
  ]

  const capabilities = [
    {
      icon: "🏗️",
      title: "Создание и редактирование модели УДС",
      description: "Создание и редактирование модели УДС города или региона"
    },
    {
      icon: "📊",
      title: "Калибровка модели транспортных потоков",
      description: "Калибровка модели транспортных потоков по данным с детекторов транспорта"
    },
    {
      icon: "🎮",
      title: "Симуляция транспортных потоков",
      description: "Симуляция существующих и прогнозируемых транспортных потоков в визуальном режиме наблюдения"
    },
    {
      icon: "📈",
      title: "Расчёт параметров потоков",
      description: "Расчет значений параметров транспортных потоков в ходе симуляции"
    },
    {
      icon: "🚦",
      title: "Симуляция на модели УДС",
      description: "Симуляция транспортных ситуаций на модели УДС в визуальном режиме наблюдения"
    },
    {
      icon: "🚌",
      title: "Моделирование пассажирских потоков",
      description: "Моделирование пассажирских потоков и перевозок в мультимодальных транспортных сетях"
    }
  ]

  const benefits = [
    {
      icon: "⏱️",
      title: "Определить загруженность",
      description: "Определить степень загруженности транспортной сети в различные периоды времени"
    },
    {
      icon: "🚗",
      title: "Оценить пропускную способность",
      description: "Оценить пропускную способность транспортных потоков"
    },
    {
      icon: "🔄",
      title: "Прогнозировать ситуации",
      description: "Спрогнозировать различные транспортные ситуации"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 opacity-30">
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
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Наши решения
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Комплексные решения для эффективного управления транспортными системами
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed">
                "Моделируйте и тестируйте вариативность для принятия эффективных решений"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Полный комплекс услуг
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От исследования первичных параметров транспортных потоков до авторского надзора за внедрением решений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={solution.href}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full`}></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-secondary font-medium group-hover:text-secondary-light transition-colors">
                      <span>Подробнее</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
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
              Комплексный подход к решению транспортных задач
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-6 block">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Исследование транспортной системы на имитационных моделях позволяет
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modeling Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Типы моделирования
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 relative overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4">Статическая ситуация</h3>
                <p className="text-gray-300 leading-relaxed">
                  Моделирование возможно как для прогноза статической ситуации в черте города, 
                  на скоростных магистралях и загородных шоссе
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 relative overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Динамическая ситуация</h3>
                <p className="text-gray-300 leading-relaxed">
                  Так и динамической ситуации. Инструменты позволяют наглядно представить 
                  движение каждого отдельного автомобиля в потоке
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готовы реализовать ваш транспортный проект?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Реализуем проекты с имитационным моделированием транспортных потоков и дорожных сетей, 
              включая крупные дорожные сети и отдельные элементы в виде перекрестков, развязок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Посмотреть проекты
              </Link>
              <Link
                href="/team"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Связаться с экспертами
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 