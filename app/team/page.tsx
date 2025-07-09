'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Mail, Phone, MapPin } from 'lucide-react'
import Navigation from '../components/Navigation'

export default function TeamPage() {
  const teamSections = [
    {
      title: 'ИТР Лаборатория',
      description: 'ДАННЫЕ — ОСНОВА МОБИЛЬНОСТИ',
      details: ['Реальные', 'Достоверные', 'Качественные'],
      highlight: 'Собираем данные для наших моделей из любой точки дорожной сети, чтобы были уверенными в их точности и качестве. Для формирования действительно эффективных решений для исследуемых участков.',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Эксперты',
      description: 'Ведущие специалисты в области транспортного моделирования',
      details: ['Опытные профессионалы', 'Научные консультанты', 'Технические специалисты'],
      highlight: 'Наша команда экспертов обладает многолетним опытом в области транспортного планирования и моделирования.',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Консультанты',
      description: 'Консультационные услуги по транспортным решениям',
      details: ['Стратегическое планирование', 'Техническая поддержка', 'Сопровождение проектов'],
      highlight: 'Предоставляем консультационные услуги на всех этапах реализации транспортных проектов.',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { number: '50+', label: 'Специалистов' },
    { number: '15+', label: 'Лет опыта' },
    { number: '30+', label: 'Проектов' },
    { number: '100%', label: 'Качество' },
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
              Наша команда
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Профессиональная команда экспертов в области транспортного моделирования и планирования
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {teamSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center mb-6`}>
                    <section.icon className="text-white" size={32} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${section.gradient} rounded-full`}></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {section.highlight}
                  </p>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`relative bg-gradient-to-br ${section.gradient} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                    <div className="relative z-10 text-center text-white">
                      <section.icon size={80} className="mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ITR Section */}
      <section id="itr" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ЛАБОРАТОРИЯ ИТР
            </h2>
            <p className="text-xl text-gray-600">
              ДАННЫЕ — ОСНОВА МОБИЛЬНОСТИ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Реальные</h3>
                  <p className="text-gray-600">Данные собираются с реальных транспортных потоков</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Достоверные</h3>
                  <p className="text-gray-600">Проверенная и валидированная информация</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Качественные</h3>
                  <p className="text-gray-600">Высокое качество обработки и анализа данных</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Собираем данные для наших моделей из любой точки дорожной сети, чтобы были уверенными в их точности и качестве. 
                Для формирования действительно эффективных решений для исследуемых участков.
              </p>
              
              {/* Laboratory Video */}
              <div className="relative rounded-lg overflow-hidden bg-gray-900">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-64 object-cover rounded-lg"
                  poster="/images/lab-poster.jpg"
                >
                  <source src="/videos/laboratory-video.mp4" type="video/mp4" />
                  <source src="/videos/laboratory-video.webm" type="video/webm" />
                  Ваш браузер не поддерживает видео.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold mb-1">ЛАБОРАТОРИЯ ИТР в работе</h4>
                  <p className="text-sm opacity-90">Процессы сбора и анализа данных</p>
                </div>
              </div>
            </motion.div>
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
              Наша команда в цифрах
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
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
            <p className="text-xl text-gray-600">
              Успешно реализованные и текущие проекты команды
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Мацеста', status: 'Завершён', color: 'green' },
              { name: 'Вокзал Сочи', status: 'В процессе', color: 'blue' },
              { name: 'Геленджик', status: 'Планируется', color: 'orange' },
              { name: 'Новороссийск', status: 'В процессе', color: 'blue' }
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  project.color === 'green' ? 'bg-green-100 text-green-800' :
                  project.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {project.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Свяжитесь с нашей командой
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Готовы ответить на ваши вопросы и обсудить возможности сотрудничества
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-secondary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (xxx) xxx-xx-xx</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-secondary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <p className="text-gray-600">info@itr-transport.ru</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-secondary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Адрес</h3>
                <p className="text-gray-600">г. Сочи, Россия</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 