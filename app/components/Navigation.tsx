'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Users, 
  Settings, 
  Briefcase, 
  BookOpen,
  Target,
  Zap,
  Shield,
  Globe,
  MapPin,
  Car,
  Building
} from 'lucide-react'
import Logo from './Logo'

interface NavigationProps {
  isLoading?: boolean
}

export default function Navigation({ isLoading = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { 
      name: 'Команда', 
      href: '/team', 
      icon: Users,
      dropdown: [
        { name: 'ИТР', href: '/team#itr' },
        { name: 'Эксперты', href: '/team#experts' },
        { name: 'Проекты', href: '/team#projects' }
      ]
    },
    { 
      name: 'Решения', 
      href: '/solutions', 
      icon: Settings,
      dropdown: [
        { name: 'Вопросы мобильности', href: '/solutions/mobility-issues' },
        { name: 'Прогнозирование', href: '/solutions/forecasting' },
        { name: 'Проектирование', href: '/solutions/design' },
        { name: 'Научные исследования', href: '/solutions/research' },
        { name: 'Технический консалтинг', href: '/solutions/consulting' },
        { name: 'Подготовка кадров', href: '/solutions/training' },
        { name: 'Международное сотрудничество', href: '/solutions/international' }
      ]
    },
    { 
      name: 'Проекты', 
      href: '/projects', 
      icon: Briefcase,
      dropdown: [
        { name: 'Мацеста', href: '/projects/matsesta' },
        { name: 'Вокзал Сочи', href: '/projects/sochi-station' },
        { name: 'Геленджик', href: '/projects/gelendzhik' },
        { name: 'Новороссийск', href: '/projects/novorossiysk' }
      ]
    },
    { 
      name: 'Блог', 
      href: '/blog', 
      icon: BookOpen
    },
  ]

  return (
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
            animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Link href="/">
              <Logo size="md" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-primary hover:text-secondary-light transition-colors font-medium"
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && !isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary hover:text-secondary-light"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && !isLoading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2 text-primary hover:text-secondary-light"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </div>
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 