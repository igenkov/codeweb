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
      <div className="min-h-screen bg-gradient-to-b from-peach-50 to-coral-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-coral-100">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Благодарим Ви! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Вашата заявка е получена успешно. Ще се свържем с Вас скоро с подробности за книгата.
            </p>
            <div className="bg-peach-50 rounded-2xl p-8 mb-8 border border-peach-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                Проверете имейла си за потвърждение. Ако не го виждате, погледнете в спам папката.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-peach-600 hover:text-peach-700 font-semibold text-lg transition-colors duration-200"
            >
              ← Назад към началната страница
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-peach-50 via-sand-50 to-sage-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Вълшебна История за<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-coral-600 inline-block mt-2">
                Приятелство и Доброта
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Детска книга, която учи на ценности чрез приключения и топли илюстрации
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-peach-100">
                <span className="text-peach-600 font-semibold text-lg">👶 За 3-6 години</span>
              </div>
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-coral-100">
                <span className="text-coral-600 font-semibold text-lg">🇧🇬 На български</span>
              </div>
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-sage-100">
                <span className="text-sage-600 font-semibold text-lg">❤️ С любов написана</span>
              </div>
            </div>
          </div>

          {/* Book Cover */}
          <div className="max-w-lg mx-auto mb-16">
            <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden bg-gray-100 hover:shadow-3xl transition-shadow duration-300 ring-1 ring-gray-200">
              <Image
                src="/images/book-cover.jpg"
                alt="Корица на книгата"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#rezervacia"
              className="inline-block bg-gradient-to-r from-peach-600 to-coral-600 text-white text-xl md:text-2xl font-bold px-12 md:px-16 py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-peach-700 hover:to-coral-700"
            >
              Запази Своята Книга 📚
            </a>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Защо Тази Книга е Специална?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Повече от история - това е начин да споделите ценности с вашето дете
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-peach-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                <Image
                  src="/images/icon-friendship.png"
                  alt="Приятелство"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Учи на Приятелство</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Чрез топли истории вашето дете ще научи истинската стойност на приятелството и взаимопомощта
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                <Image
                  src="/images/icon-illustrations.png"
                  alt="Илюстрации"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Красиви Илюстрации</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Всяка страница е пълна с цветни, приветливи рисунки, които ще запленят детското въображение
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                <Image
                  src="/images/icon-values.png"
                  alt="Ценности"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Позитивни Ценности</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                История, която насърчава добротата, емпатията и желанието да помагаме на другите
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-peach-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Надникнете в Книгата
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Вижте примери от страниците на нашата приказка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Page Preview 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-1.jpg"
                  alt="Страница 1"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Докато преминаваше край горското поточе, Лисан забеляза нещо необичайно. До водата седеше някой, когото никога не беше виждал преди."
                </p>
              </div>
            </div>

            {/* Page Preview 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-2.jpg"
                  alt="Страница 2"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "- Това наистина е сериозно. Трябва да разберем защо водата изчезва... Имам идея! Ако полетя високо в небето, мога да видя откъде идва водата и защо изчезва по пътя."
                </p>
              </div>
            </div>

            {/* Page Preview 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-3.jpg"
                  alt="Страница 3"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Лисан искаше да помогне, но не знаеше как. Беше прекарал целия си живот сред храсти и дървета и не разбираше много от води и езера."
                </p>
              </div>
            </div>

            {/* Page Preview 4 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-4.jpg"
                  alt="Страница 4"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "На това магично място където пътища от различни светове се срещаха, гората се докосваше до златистите дюни, а планинските скали се редуваха с цветни дървета."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 leading-tight">
            Какво Казват Родителите
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-peach-50 rounded-3xl p-10 border border-peach-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "Детето ми обожава тази книга! Всяка вечер иска да я чета отново. Историята е толкова мила и учи на важни ценности."
              </p>
              <p className="font-semibold text-gray-900 text-lg">Мария, мама на 4-годишна</p>
            </div>

            <div className="bg-coral-50 rounded-3xl p-10 border border-coral-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "Прекрасна книга с красиви илюстрации. След като я прочетохме, дъщеря ми започна да споделя играчките си с приятелите."
              </p>
              <p className="font-semibold text-gray-900 text-lg">Петър, баща на 5-годишна</p>
            </div>

            <div className="bg-sand-50 rounded-3xl p-10 border border-sand-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "Най-накрая българска детска книга с модерни илюстрации и смислена история! Синът ми я обожава."
              </p>
              <p className="font-semibold text-gray-900 text-lg">Елена, мама на 6-годишен</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="rezervacia" className="py-20 md:py-32 bg-gradient-to-br from-peach-600 via-coral-600 to-coral-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-coral-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Резервирайте Вашето Копие
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Запазете книгата на специална цена и получете първо вашия екземпляр
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-3">
                  Вашето име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                  Вашият имейл *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-3">
                  Телефон (по избор)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="+359 888 123 456"
                />
              </div>

              <div className="bg-peach-50 rounded-2xl p-8 border border-peach-100">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-lg">Специална Оферта</p>
                    <p className="text-gray-600 leading-relaxed">
                      Резервирайте сега и получете ексклузивно PDF с образователни активности за вашето дете
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-peach-600 to-coral-600 text-white text-xl md:text-2xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:from-peach-700 hover:to-coral-700"
              >
                {loading ? 'Изпращане...' : 'Запази Своята Книга 📚'}
              </button>

              <p className="text-center text-sm text-gray-500 leading-relaxed">
                Вашите данни са защитени и няма да бъдат споделяни с трети страни
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            © 2024 Всички права запазени
          </p>
          <p className="text-gray-500 leading-relaxed">
            Детска книга за приятелство и взаимопомощ | За деца 3-6 години
          </p>
        </div>
      </footer>
    </main>
  )
}
