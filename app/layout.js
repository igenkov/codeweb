import './globals.css'

export const metadata = {
  title: 'Детска Книга за Приятелство | Книга за Деца 3-6 години',
  description: 'Откройте вълшебната история за приятелство и взаимопомощ. Идеална книга за деца от 3 до 6 години на български език.',
  keywords: 'детска книга, книга за деца, приятелство, деца 3-6 години, български език',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
