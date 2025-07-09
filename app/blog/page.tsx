'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import Navigation from '../components/Navigation'

export default function BlogPage() {
  const posts = [
    {
      title: 'Новые методы транспортного моделирования',
      excerpt: 'Исследование современных подходов к анализу транспортных потоков и их применение в российских городах',
      content: 'Рассматриваем инновационные подходы к моделированию транспортных систем...',
      date: '2024-03-15',
      author: 'Команда ИТР',
      readTime: '8 мин',
      category: 'Исследования',
      tags: ['моделирование', 'инновации', 'транспорт'],
      href: '/blog/new-methods'
    },
    {
      title: 'Применение ИИ в транспортном планировании',
      excerpt: 'Как искусственный интеллект помогает оптимизировать городской транспорт и снижать пробки',
      content: 'Машинное обучение открывает новые возможности для анализа транспортных данных...',
      date: '2024-03-10',
      author: 'Эксперты ИТР',
      readTime: '12 мин',
      category: 'Технологии',
      tags: ['ИИ', 'машинное обучение', 'оптимизация'],
      href: '/blog/ai-transport'
    },
    {
      title: 'Успешный кейс: Оптимизация Мацесты',
      excerpt: 'Подробный разбор проекта по улучшению транспортной ситуации в районе Мацеста, Сочи',
      content: 'Анализируем результаты внедрения новой схемы движения в Мацесте...',
      date: '2024-03-05',
      author: 'Проектная команда',
      readTime: '15 мин',
      category: 'Кейсы',
      tags: ['проект', 'Сочи', 'результаты'],
      href: '/blog/matsesta-case'
    },
    {
      title: 'Мобильность будущего: Тренды 2024',
      excerpt: 'Анализ главных трендов в области городской мобильности и транспортных технологий',
      content: 'Исследуем ключевые направления развития транспортных систем...',
      date: '2024-02-28',
      author: 'Аналитический отдел',
      readTime: '10 мин',
      category: 'Тренды',
      tags: ['будущее', 'мобильность', 'тренды'],
      href: '/blog/mobility-trends'
    },
    {
      title: 'Интеграция общественного транспорта',
      excerpt: 'Методы создания единой мультимодальной транспортной системы в городах',
      content: 'Рассматриваем подходы к интеграции различных видов транспорта...',
      date: '2024-02-20',
      author: 'Команда ИТР',
      readTime: '7 мин',
      category: 'Планирование',
      tags: ['общественный транспорт', 'интеграция', 'мультимодальность'],
      href: '/blog/public-transport'
    },
    {
      title: 'Данные как основа принятия решений',
      excerpt: 'Важность качественных данных для эффективного планирования транспортных систем',
      content: 'Изучаем роль больших данных в современном транспортном планировании...',
      date: '2024-02-15',
      author: 'Лаборатория ИТР',
      readTime: '9 мин',
      category: 'Данные',
      tags: ['данные', 'аналитика', 'планирование'],
      href: '/blog/data-decisions'
    }
  ]

  const categories = [
    'Все статьи',
    'Исследования',
    'Технологии',
    'Кейсы',
    'Тренды',
    'Планирование',
    'Данные'
  ]

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

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
              Блог
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Последние новости и исследования в области транспортного моделирования
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed">
                Делимся экспертизой, инсайтами и результатами исследований в сфере транспортных технологий
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full transition-all ${
                  index === 0
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Рекомендуемая статья
            </h2>
            
            <Link href={featuredPost.href}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Featured Image */}
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-secondary-purple to-secondary-light relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('ru-RU')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User size={16} className="mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-secondary font-medium group-hover:text-secondary-light transition-colors">
                        <span>Читать далее</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Regular Posts Grid */}
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
              Последние публикации
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={post.href}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    {/* Post Image */}
                    <div className="h-48 bg-gradient-to-br from-secondary-purple to-secondary-light relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <ArrowRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(post.date).toLocaleDateString('ru-RU')}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        
                        <div className="flex items-center text-secondary font-medium group-hover:text-secondary-light transition-colors">
                          <span className="text-sm">Читать</span>
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Подписаться на обновления
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Получайте последние новости и исследования в области транспортного моделирования
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Подписаться
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 