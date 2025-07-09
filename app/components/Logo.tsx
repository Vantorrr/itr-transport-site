'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white' | 'icon'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', variant = 'default', size = 'md' }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  // Размеры логотипа
  const sizes = {
    sm: { width: 80, height: 24 },
    md: { width: 120, height: 36 },
    lg: { width: 200, height: 60 }
  }

  // Пути к логотипам
  const logoSources = {
    default: '/images/ЛОГО_ИТР_без фона.png',
    white: '/images/ЛОГО_ИТР_без фона.png',
    icon: '/icons/logo-icon.png'
  }

  const currentSize = sizes[size]
  const logoSrc = logoSources[variant]

  // Если изображение не загрузилось, показываем текстовую заглушку
  if (imageError) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className={`bg-gradient-to-r from-primary to-secondary-light rounded-lg flex items-center justify-center ${
          size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12'
        }`}>
          <span className={`text-white font-bold ${
            size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-xl'
          }`}>
            И
          </span>
        </div>
        <span className={`font-bold text-primary ${
          size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'
        }`}>
          ИТР
        </span>
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="ИТР - Институт Транспортного Развития"
        width={currentSize.width}
        height={currentSize.height}
        priority
        className="object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  )
} 