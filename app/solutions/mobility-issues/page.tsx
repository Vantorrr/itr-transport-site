'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  Route, 
  Settings, 
  Target,
  Zap,
  Shield,
  Traffic
} from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function MobilityIssuesPage() {
  const mobilityServices = [
    {
      title: 'Повышение пропускной способности',
      description: 'Комплексные решения для увеличения пропускной способности дорожной сети',
      image: '/images/capacity-improvement.jpg',
      href: '/solutions/mobility-issues/capacity-improvement',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Оптимизация маршрутов',
      description: 'Анализ и оптимизация транспортных маршрутов для повышения эффективности',
      image: '/images/route-optimization.jpg', 
      href: '/solutions/mobility-issues/route-optimization',
      icon: Route,
      color: 'green'
    },
    {
      title: 'Управление трафиком',
      description: 'Современные системы управления дорожным движением',
      image: '/images/traffic-management.jpg',
      href: '/solutions/mobility-issues/traffic-management', 
      icon: Traffic,
      color: 'purple'
    },
    {
      title: 'Безопасность движения',
      description: 'Решения для повышения безопасности на дорогах',
      image: '/images/safety.jpg',
      href: '/solutions/mobility-issues/safety',
      icon: Shield,
      color: 'red'
    },
    {
      title: 'Умная инфраструктура',
      description: 'Внедрение интеллектуальных транспортных систем',
      image: '/images/smart-infrastructure.jpg',
      href: '/solutions/mobility-issues/smart-infrastructure',
      icon: Zap,
      color: 'yellow'
    },
    {
      title: 'Мониторинг и аналитика',
      description: 'Системы мониторинга транспортных потоков и аналитика данных',
      image: '/images/monitoring.jpg',
      href: '/solutions/mobility-issues/monitoring',
      icon: Target,
      color: 'indigo'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="particle-container">
            {[...Array(20)].map((_, i) => (
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
              Вопросы мобильности
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Комплексные решения для повышения эффективности транспортных систем
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Gallery */}
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
              Наши направления
            </h2>
            <p className="text-xl text-gray-600">
              Выберите направление для подробного изучения решений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobilityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image placeholder */}
                    <div className={`h-48 bg-gradient-to-br ${
                      service.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      service.color === 'green' ? 'from-green-400 to-green-600' :
                      service.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      service.color === 'red' ? 'from-red-400 to-red-600' :
                      service.color === 'yellow' ? 'from-yellow-400 to-orange-500' :
                      'from-indigo-400 to-indigo-600'
                    } flex items-center justify-center relative overflow-hidden`}>
                      <service.icon className="text-white" size={64} />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нужна консультация?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Свяжитесь с нашими экспертами для обсуждения ваших задач в области мобильности
            </p>
            <Link
              href="/team#itr"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Связаться с экспертами
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 