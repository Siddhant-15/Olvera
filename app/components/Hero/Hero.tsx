
import Image from 'next/image'
import './Hero.css'

const Hero = () => {
    return (
        <section id='home' className="hero relative h-screen flex items-center justify-center bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute bottom-40 left-20 hidden md:block">
                <button className="contact mt-4 px-8 py-2 bg-primaryPink text-white rounded-full">CONTACT US</button>
            </div>
        </section>
    )
}

export default Hero
