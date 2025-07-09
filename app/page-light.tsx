'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    },
    {
      title: 'Вокзал Сочи',
      description: 'Оптимизация транспортных потоков',
      status: 'В процессе',
    },
    {
      title: 'Геленджик',
      description: 'Система управления движением',
      status: 'Планируется',
    },
    {
      title: 'Новороссийск',
      description: 'Комплексный анализ транспортной системы',
      status: 'Завершен',
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
      <nav className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-500 ${!isLoading ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-primary hover:text-secondary-light transition-colors font-medium"
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
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
          <div className="md:hidden bg-white border-t">
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
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${!isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Институт</span>
            <span className="block gradient-text-hover">
              Транспортного Развития
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Имитационное транспортное моделирование
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-blue-200 italic">
            "Моделируйте и тестируйте вариативность для принятия эффективных решений"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
              <span>Наши возможности</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 bg-white/10 flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Смотреть демо</span>
            </button>
          </div>
        </div>
        
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer transition-all duration-500 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </section>

      {/* Simulation Modeling Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Вопросы мобильности
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Имитационное транспортное
              </span>
              <br />
              <span className="text-gray-800">моделирование</span>
            </h2>
            
            <div className="bg-white/80 rounded-3xl p-8 max-w-4xl mx-auto border border-white/60 shadow-xl">
              <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                "Моделируйте и тестируйте вариативность для принятия эффективных решений"
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Имитационное моделирование – эффективный способ анализа пропускной способности и других характеристик микро и средних транспортных систем
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-20">
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
                <div
                  key={index}
                  className={`bg-gradient-to-br ${capability.color} rounded-2xl p-8 border ${capability.border} hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="text-5xl mb-6 block">
                    {capability.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Оптимизационные транспортные модели</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              "Помогаем вам видеть и анализировать каждую деталь транспортной сети"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl text-center group transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-white/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all">
                  <solution.icon size={32} className="text-white" />
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Проекты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реализованные и текущие проекты в области транспортного моделирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-white/50"
              >
                <div className="h-48 bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center relative overflow-hidden">
                  <MapPin size={48} className="text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo variant="white" size="md" className="mb-4" />
              <p className="text-blue-200 leading-relaxed">
                Институт Транспортного Развития занимается исследованиями и разработками в области 
                транспортной инфраструктуры, логистики и транспортной политики.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-blue-200">
                {['Имитационное моделирование', 'Оптимизация транспорта', 'ИТС разработка', 'Консультации'].map((service, index) => (
                  <li key={index} className="hover:text-white cursor-pointer transition-colors">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Проекты</h4>
              <ul className="space-y-2 text-blue-200">
                {['Мацеста', 'Вокзал Сочи', 'Геленджик', 'Новороссийск'].map((project, index) => (
                  <li key={index} className="hover:text-white cursor-pointer transition-colors">
                    {project}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-blue-200 cursor-pointer hover:text-white">
                  <Phone size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200 cursor-pointer hover:text-white">
                  <Mail size={16} />
                  <span>info@itr-site.ru</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200 cursor-pointer hover:text-white">
                  <MapPin size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700 pt-8 text-center text-blue-200">
            <p>&copy; 2024 ИТР - Институт Транспортного Развития. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={24} className="transform rotate-180" />
      </button>
      </main>
    </>
  )
} 