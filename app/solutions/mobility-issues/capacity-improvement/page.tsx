'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  ArrowLeft,
  TrendingUp, 
  Settings,
  Layers,
  Zap,
  Target,
  BarChart3
} from 'lucide-react'
import Navigation from '../../../components/Navigation'

export default function CapacityImprovementPage() {
  const solutions = [
    {
      title: 'Оптимизация инфраструктуры',
      description: 'Модернизация существующей дорожной инфраструктуры для повышения пропускной способности',
      icon: Settings,
      color: 'blue',
      href: '/solutions/mobility-issues/capacity-improvement/infrastructure-optimization'
    },
    {
      title: 'Многоуровневые развязки',
      description: 'Проектирование и строительство многоуровневых транспортных развязок',
      icon: Layers,
      color: 'green',
      href: '/solutions/mobility-issues/capacity-improvement/multilevel-interchanges'
    },
    {
      title: 'Интеллектуальные системы',
      description: 'Внедрение ИТС для динамического управления транспортными потоками',
      icon: Zap,
      color: 'purple',
      href: '/solutions/mobility-issues/capacity-improvement/intelligent-systems'
    },
    {
      title: 'Оптимизация светофоров',
      description: 'Настройка и синхронизация светофорного регулирования',
      icon: Target,
      color: 'orange',
      href: '/solutions/mobility-issues/capacity-improvement/traffic-light-optimization'
    },
    {
      title: 'Анализ узких мест',
      description: 'Выявление и устранение узких мест в транспортной сети',
      icon: BarChart3,
      color: 'red',
      href: '/solutions/mobility-issues/capacity-improvement/bottleneck-analysis'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="particle-container">
            {[...Array(15)].map((_, i) => (
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-white/80 mb-8"
          >
            <Link href="/solutions" className="hover:text-white transition-colors">
              Решения
            </Link>
            <span className="mx-2">→</span>
            <Link href="/solutions/mobility-issues" className="hover:text-white transition-colors">
              Вопросы мобильности
            </Link>
            <span className="mx-2">→</span>
            <span className="text-white">Повышение пропускной способности</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <TrendingUp className="mx-auto mb-6 text-white" size={80} />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Повышение пропускной способности
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Комплексные решения для увеличения пропускной способности дорожной сети и снижения заторов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Наши решения
            </h2>
            <p className="text-xl text-gray-600">
              Выберите конкретное направление для детального изучения
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={solution.href} className="group block">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`h-40 bg-gradient-to-br ${
                      solution.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      solution.color === 'green' ? 'from-green-400 to-green-600' :
                      solution.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      solution.color === 'orange' ? 'from-orange-400 to-orange-600' :
                      'from-red-400 to-red-600'
                    } flex items-center justify-center relative overflow-hidden`}>
                      <solution.icon className="text-white" size={48} />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="flex items-center text-secondary font-medium group-hover:text-primary transition-colors">
                        <span>Подробнее</span>
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to parent */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/solutions/mobility-issues"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Вернуться к вопросам мобильности
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 