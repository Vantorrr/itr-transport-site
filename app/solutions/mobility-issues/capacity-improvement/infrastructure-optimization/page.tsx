'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Settings,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react'
import Navigation from '../../../../components/Navigation'

export default function InfrastructureOptimizationPage() {
  const benefits = [
    {
      title: 'Увеличение пропускной способности',
      description: 'Повышение пропускной способности на 25-40%',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Снижение заторов',
      description: 'Сокращение времени в пути на 15-30%',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Повышение безопасности',
      description: 'Снижение количества ДТП на 20-35%',
      icon: Target,
      color: 'red'
    },
    {
      title: 'Комфорт участников',
      description: 'Улучшение условий движения для всех',
      icon: Users,
      color: 'purple'
    }
  ]

  const services = [
    'Реконструкция полотна дороги',
    'Оптимизация геометрии пересечений',
    'Устройство дополнительных полос движения',
    'Модернизация дорожных знаков и разметки',
    'Установка современных ограждений',
    'Улучшение освещения',
    'Организация парковочных зон',
    'Создание велосипедной инфраструктуры'
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700"></div>
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
            className="flex flex-wrap items-center text-white/80 mb-8 text-sm md:text-base"
          >
            <Link href="/solutions" className="hover:text-white transition-colors">
              Решения
            </Link>
            <span className="mx-2">→</span>
            <Link href="/solutions/mobility-issues" className="hover:text-white transition-colors">
              Вопросы мобильности
            </Link>
            <span className="mx-2">→</span>
            <Link href="/solutions/mobility-issues/capacity-improvement" className="hover:text-white transition-colors">
              Повышение пропускной способности
            </Link>
            <span className="mx-2">→</span>
            <span className="text-white">Оптимизация инфраструктуры</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Settings className="mx-auto mb-6 text-white" size={80} />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Оптимизация инфраструктуры
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Модернизация существующей дорожной инфраструктуры для максимального повышения пропускной способности
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Наш подход
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы проводим комплексный анализ существующей инфраструктуры и разрабатываем индивидуальные 
                решения для каждого объекта. Наша команда использует современные методы моделирования и 
                проектирования для достижения максимального эффекта.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Все решения основаны на детальном изучении транспортных потоков, анализе пиковых нагрузок 
                и прогнозировании будущих потребностей в мобильности.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">Наши услуги:</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-secondary mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Преимущества
              </h2>
              
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                      benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      benefit.color === 'red' ? 'bg-red-100 text-red-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <benefit.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Свяжитесь с нашими экспертами для обсуждения возможностей оптимизации вашей инфраструктуры
            </p>
            <Link
              href="/team#itr"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Связаться с экспертами
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/solutions/mobility-issues/capacity-improvement"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Вернуться к повышению пропускной способности
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 