'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Car, 
  Bus, 
  Train, 
  Bike, 
  Users, 
  BarChart3, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function MobilityPage() {
  const mobilityAreas = [
    {
      title: 'Городская мобильность',
      description: 'Комплексные решения для оптимизации транспортных потоков в городской среде',
      icon: Car,
      features: [
        'Анализ транспортных потоков',
        'Оптимизация светофорного регулирования',
        'Планирование парковочных зон',
        'Интеграция с ИТС'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Общественный транспорт',
      description: 'Оптимизация маршрутов и расписаний общественного транспорта',
      icon: Bus,
      features: [
        'Планирование маршрутной сети',
        'Оптимизация расписаний',
        'Анализ пассажиропотоков',
        'Мультимодальная интеграция'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Железнодорожный транспорт',
      description: 'Моделирование и оптимизация железнодорожной инфраструктуры',
      icon: Train,
      features: [
        'Пропускная способность станций',
        'Оптимизация расписаний поездов',
        'Планирование инфраструктуры',
        'Интеграция с городским транспортом'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Альтернативная мобильность',
      description: 'Развитие экологичных видов транспорта и микромобильности',
      icon: Bike,
      features: [
        'Планирование велоинфраструктуры',
        'Пешеходные зоны',
        'Каршеринг и райдшеринг',
        'Электромобильность'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Повышение эффективности',
      description: 'До 35% сокращение времени в пути за счет оптимизации транспортных потоков',
      percentage: '35%'
    },
    {
      icon: Users,
      title: 'Улучшение качества жизни',
      description: 'Снижение уровня стресса и повышение комфорта передвижения граждан',
      percentage: '60%'
    },
    {
      icon: Target,
      title: 'Экологический эффект',
      description: 'Сокращение выбросов CO2 благодаря оптимизации транспортных систем',
      percentage: '25%'
    }
  ]

  const services = [
    {
      title: 'Анализ текущей ситуации',
      description: 'Комплексное исследование существующей транспортной системы',
      steps: [
        'Сбор данных о транспортных потоках',
        'Анализ пассажиропотоков',
        'Оценка пропускной способности',
        'Выявление узких мест'
      ]
    },
    {
      title: 'Моделирование решений',
      description: 'Создание цифровых моделей для тестирования различных сценариев',
      steps: [
        'Построение транспортной модели',
        'Калибровка по реальным данным',
        'Симуляция различных сценариев',
        'Оценка эффективности решений'
      ]
    },
    {
      title: 'Разработка рекомендаций',
      description: 'Формулирование конкретных предложений по улучшению мобильности',
      steps: [
        'Выбор оптимальных решений',
        'Расчет экономического эффекта',
        'Планирование этапов внедрения',
        'Подготовка технического задания'
      ]
    },
    {
      title: 'Сопровождение внедрения',
      description: 'Поддержка на всех этапах реализации проекта',
      steps: [
        'Авторский надзор',
        'Корректировка решений',
        'Мониторинг результатов',
        'Оптимизация работы системы'
      ]
    }
  ]

  const caseStudies = [
    {
      title: 'Оптимизация центра Сочи',
      result: 'Сокращение пробок на 40%',
      description: 'Комплексная оптимизация транспортной схемы в центральной части города',
      duration: '6 месяцев'
    },
    {
      title: 'Интеграция транспорта в Геленджике',
      result: 'Повышение качества обслуживания на 50%',
      description: 'Создание единой мультимодальной транспортной системы',
      duration: '8 месяцев'
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Link href="/solutions" className="text-white/80 hover:text-white transition-colors">
                  ← Вернуться к решениям
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Мобильность
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Комплексные решения для повышения эффективности городской мобильности
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  Создаем устойчивые и эффективные транспортные системы, которые улучшают качество жизни горожан и способствуют экономическому развитию
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                    <Car className="text-white" size={24} />
                    <span className="text-white">Городской транспорт</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                    <Train className="text-white" size={24} />
                    <span className="text-white">Железные дороги</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                    <Bus className="text-white" size={24} />
                    <span className="text-white">Общественный транспорт</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                    <Bike className="text-white" size={24} />
                    <span className="text-white">Микромобильность</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobility Areas */}
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
              Направления работы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к решению задач мобильности на всех уровнях транспортной системы
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mobilityAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-full flex items-center justify-center mb-6`}>
                  <area.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {area.description}
                </p>
                
                <ul className="space-y-3">
                  {area.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Результаты внедрения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Доказанная эффективность наших решений в области мобильности
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {benefit.percentage}
                  </div>
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

      {/* Services Process */}
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
              Процесс работы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Системный подход к решению задач мобильности
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.steps.map((step, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow to next step */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-gray-300" size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Успешные проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры реализованных решений в области мобильности
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{study.duration}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="font-semibold text-green-800">{study.result}</span>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  {study.description}
                </p>
              </motion.div>
            ))}
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
              Готовы улучшить мобильность в вашем городе?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта в области мобильности
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