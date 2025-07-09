'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Мацеста',
      description: 'Имитационное транспортное моделирование',
      status: 'Завершен',
      statusColor: 'green',
      location: 'г. Сочи',
      year: '2023',
      details: [
        'Создание детальной модели УДС района Мацеста',
        'Анализ существующих транспортных потоков',
        'Разработка рекомендаций по оптимизации движения'
      ],
      href: '/projects/matsesta',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Вокзал Сочи',
      description: 'Оптимизация транспортных потоков',
      status: 'В процессе',
      statusColor: 'blue',
      location: 'г. Сочи',
      year: '2024',
      details: [
        'Моделирование транспортной развязки ж/д вокзала',
        'Оптимизация пассажирских потоков',
        'Интеграция с городской транспортной системой'
      ],
      href: '/projects/sochi-station',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Геленджик',
      description: 'Система управления движением',
      status: 'Планируется',
      statusColor: 'yellow',
      location: 'г. Геленджик',
      year: '2024',
      details: [
        'Разработка интеллектуальной транспортной системы',
        'Внедрение адаптивного управления светофорами',
        'Оптимизация туристических маршрутов'
      ],
      href: '/projects/gelendzhik',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Новороссийск',
      description: 'Комплексный анализ транспортной системы',
      status: 'Завершен',
      statusColor: 'green',
      location: 'г. Новороссийск',
      year: '2023',
      details: [
        'Анализ грузовых и пассажирских потоков',
        'Моделирование портовой логистики',
        'Разработка стратегии развития транспорта'
      ],
      href: '/projects/novorossiysk',
      image: '/api/placeholder/600/400'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Завершен':
        return <CheckCircle className="text-green-500" size={20} />
      case 'В процессе':
        return <Clock className="text-blue-500" size={20} />
      case 'Планируется':
        return <AlertCircle className="text-yellow-500" size={20} />
      default:
        return null
    }
  }

  const getStatusBg = (statusColor: string) => {
    switch (statusColor) {
      case 'green':
        return 'bg-green-100 text-green-800'
      case 'blue':
        return 'bg-blue-100 text-blue-800'
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = [
    { number: '30+', label: 'Проектов реализовано' },
    { number: '8', label: 'Городов' },
    { number: '15+', label: 'Лет опыта' },
    { number: '100%', label: 'Успешных проектов' },
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
              Проекты
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Реализованные и текущие проекты в области транспортного моделирования
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed">
                Каждый проект — это уникальное решение транспортных задач с применением современных технологий моделирования
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
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
              Наши проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От локальных оптимизаций до комплексных транспортных решений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={project.href}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    {/* Project Image */}
                    <div className="h-48 bg-gradient-to-br from-secondary to-secondary-light relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin size={48} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusBg(project.statusColor)}`}>
                          {getStatusIcon(project.status)}
                          <span>{project.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-secondary font-medium group-hover:text-secondary-light transition-colors">
                        <span>Подробнее о проекте</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Результаты в цифрах
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
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От исследования первичных параметров до авторского надзора за внедрением решений
            </p>
          </motion.div>

          <div className="relative">
            {/* Arrow between steps */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
              <svg className="w-full h-4" viewBox="0 0 400 20" fill="none">
                <path d="M0 10 L380 10 M370 5 L380 10 L370 15" stroke="#6366f1" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Исследование первичных параметров",
                  description: "Анализ существующей транспортной ситуации",
                  icon: "📊"
                },
                {
                  title: "Создание модели",
                  description: "Разработка цифровой модели транспортной системы",
                  icon: "🏗️"
                },
                {
                  title: "Авторский надзор",
                  description: "Контроль качества внедрения решений",
                  icon: "✅"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center relative z-10"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Готовы начать ваш проект?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего транспортного проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solutions"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Наши решения
              </Link>
              <Link
                href="/team"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Связаться с командой
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 