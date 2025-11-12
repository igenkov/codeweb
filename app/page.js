'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission - can be replaced with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)

      // Store in localStorage as backup
      const leads = JSON.parse(localStorage.getItem('leads') || '[]')
      leads.push({ ...formData, date: new Date().toISOString() })
      localStorage.setItem('leads', JSON.stringify(leads))
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Благодарим Ви! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Вашата заявка е получена успешно. Ще се свържем с Вас скоро с подробности за книгата.
            </p>
            <div className="bg-purple-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-700">
                Проверете имейла си за потвърждение. Ако не го виждате, погледнете в спам папката.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              ← Назад към началната страница
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Вълшебна История за<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Приятелство и Доброта
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Детска книга, която учи на ценности чрез приключения и топли илюстрации
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-purple-600 font-semibold">👶 За 3-6 години</span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-pink-600 font-semibold">🇧🇬 На български</span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-orange-600 font-semibold">❤️ С любов написана</span>
              </div>
            </div>
          </div>

          {/* Book Cover Placeholder */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📖</div>
                <p className="text-white text-2xl font-bold mb-2">Корица на Книгата</p>
                <p className="text-white/80 text-sm">(Поставете вашата корица тук)</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#rezervacia"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Резервирай Сега 🎁
            </a>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Защо Тази Книга е Специална?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Повече от история - това е начин да споделите ценности с вашето дете
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Учи на Приятелство</h3>
              <p className="text-gray-600 leading-relaxed">
                Чрез топли истории вашето дете ще научи истинската стойност на приятелството и взаимопомощта
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Красиви Илюстрации</h3>
              <p className="text-gray-600 leading-relaxed">
                Всяка страница е пълна с цветни, приветливи рисунки, които ще запленят детското въображение
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Позитивни Ценности</h3>
              <p className="text-gray-600 leading-relaxed">
                История, която насърчава добротата, емпатията и желанието да помагаме на другите
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Надникнете в Книгата
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Вижте примери от страниците на нашата приказка
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Page Preview 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-700 text-lg font-semibold">Страница 1</p>
                  <p className="text-gray-500 text-sm mt-2">(Поставете снимка на страница)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">
                  "Малкият заек Боби обичаше да помага на своите приятели..."
                </p>
              </div>
            </div>

            {/* Page Preview 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-700 text-lg font-semibold">Страница 2</p>
                  <p className="text-gray-500 text-sm mt-2">(Поставете снимка на страница)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">
                  "Когато мечето Мишо се озова в беда, Боби знаеше какво трябва да направи..."
                </p>
              </div>
            </div>

            {/* Page Preview 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-700 text-lg font-semibold">Страница 3</p>
                  <p className="text-gray-500 text-sm mt-2">(Поставете снимка на страница)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">
                  "Всички приятели се събраха заедно и откриха, че заедно са по-силни..."
                </p>
              </div>
            </div>

            {/* Page Preview 4 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-700 text-lg font-semibold">Страница 4</p>
                  <p className="text-gray-500 text-sm mt-2">(Поставете снимка на страница)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">
                  "И така научиха, че приятелството и добротата са най-важните неща на света."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Какво Казват Родителите
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-3xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Детето ми обожава тази книга! Всяка вечер иска да я чета отново. Историята е толкова мила и учи на важни ценности."
              </p>
              <p className="font-semibold text-gray-900">Мария, мама на 4-годишна</p>
            </div>

            <div className="bg-pink-50 rounded-3xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Прекрасна книга с красиви илюстрации. След като я прочетохме, дъщеря ми започна да споделя играчките си с приятелите."
              </p>
              <p className="font-semibold text-gray-900">Петър, баща на 5-годишна</p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Най-накрая българска детска книга с модерни илюстрации и смислена история! Синът ми я обожава."
              </p>
              <p className="font-semibold text-gray-900">Елена, мама на 6-годишен</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="rezervacia" className="py-16 md:py-24 bg-gradient-to-b from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Резервирайте Вашето Копие
              </h2>
              <p className="text-xl text-gray-600">
                Запазете книгата на специална цена и получете първо вашия екземпляр
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Вашето име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg transition-colors"
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Вашият имейл *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg transition-colors"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Телефон (по избор)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg transition-colors"
                  placeholder="+359 888 123 456"
                />
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Специална Оферта</p>
                    <p className="text-gray-600 text-sm">
                      Резервирайте сега и получете ексклузивно PDF с образователни активности за вашето дете
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Изпращане...' : 'Резервирай Книгата 📚'}
              </button>

              <p className="text-center text-sm text-gray-500">
                Вашите данни са защитени и няма да бъдат споделяни с трети страни
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Всички права запазени
          </p>
          <p className="text-gray-500 text-sm">
            Детска книга за приятелство и взаимопомощ | За деца 3-6 години
          </p>
        </div>
      </footer>
    </main>
  )
}
