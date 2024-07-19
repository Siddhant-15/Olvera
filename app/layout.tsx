// app/layout.tsx
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Stats from './components/Stats'
import Services from './components/Services'
import CardSlider from './components/CardSlider/CardSlider'
import Footer from './components/Footer/Footer'
import './globals.css'

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        <About />
        <Stats />
        <Services />
        <CardSlider />
        <Footer />
        
      </body>
    </html>
  )
}
