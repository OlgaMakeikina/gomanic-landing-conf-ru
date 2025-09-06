"use client"

import { useState, useEffect } from "react"

const ConferenceHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleRegistration = () => {
    window.open("tel:+79999999999", "_self")
  }

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="min-h-screen w-full bg-light flex items-center">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Левая часть - контент */}
          <div className={`order-1 lg:order-1 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
          }`}>
            
            <div className="space-y-8">
              <div>
                <h1 className="druk-title-conference text-dark mb-4" style={{fontFamily: 'Druk Wide Cyr, sans-serif'}}>
                  КОНФЕРЕНЦИЯ
                </h1>
                <div className="w-20 h-0.5 bg-gradient-to-r from-brand to-dark"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg md:text-xl font-medium text-dark mb-2 leading-relaxed">
                    Бесплатное обучающее мероприятие по маникюру
                  </p>
                  
                  <p className="text-sm md:text-base text-dark opacity-70 leading-relaxed">
                    Презентация новой платформы для мастеров с живыми демонстрациями и практическими советами
                  </p>
                </div>

                {/* Ключевые преимущества */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex items-center gap-3 text-sm text-dark">
                    <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="font-medium">3 часа практики</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark">
                    <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="font-medium">Сертификат участия</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark">
                    <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="font-medium">Запись мероприятия</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                {/* Основная CTA кнопка */}
                <button 
                  onClick={handleRegistration}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  className={`group relative px-10 md:px-16 py-4 md:py-5 text-sm md:text-base font-semibold tracking-[0.08em] uppercase 
                    bg-brand text-light transition-all duration-500 overflow-hidden
                    hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]
                    border-2 border-brand hover:border-dark
                    focus:outline-none focus:ring-4 focus:ring-brand/30`}
                >
                  <span className={`absolute inset-0 bg-gradient-to-r from-dark to-[#2a2a29] transform transition-all duration-500 ease-out ${
                    isButtonHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}></span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    Записаться бесплатно
                    <svg className={`w-4 h-4 transition-all duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>

                {/* Дополнительная информация с микроанимацией */}
                <div className="flex items-center gap-4 text-xs md:text-sm text-dark opacity-70">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Онлайн трансляция</span>
                  </div>
                  <div className="w-px h-4 bg-dark opacity-30"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Бесплатно навсегда</span>
                  </div>
                </div>

                {/* Социальное доказательство */}
                <div className="bg-[#f5f5f5] p-4 border-l-4 border-brand">
                  <p className="text-xs md:text-sm text-dark font-medium">
                    🔥 Уже записалось <span className="font-bold text-brand">247 мастеров</span>
                  </p>
                  <p className="text-xs text-dark opacity-60 mt-1">
                    Осталось всего 23 места
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-xs font-light tracking-wide uppercase opacity-50 text-dark flex items-center gap-2">
                  <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Количество мест ограничено
                </p>
              </div>
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className={`order-2 lg:order-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
          }`}>
            <div className="relative overflow-hidden">
              <img 
                src="/images/conference-hero.jpg" 
                alt="Обучающая конференция по маникюру"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1200 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-40 transform translate-y-4'
      }`}>
        <button 
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-2 text-dark hover:text-brand transition-colors duration-300"
          aria-label="Прокрутить вниз"
        >
          <div className="w-px h-8 bg-dark group-hover:bg-brand transition-colors duration-300"></div>
          <div className="animate-bounce">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}

export default ConferenceHero
