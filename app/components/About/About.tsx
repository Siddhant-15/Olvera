import Image from 'next/image';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section relative bg-pink-600 text-white py-16 px-8 lg:px-32">
            <div className="container mx-auto relative z-10 flex flex-col lg:flex-row lg:items-start">
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                        About Olvera
                    </h2>
                    <p className="mb-8 lg:mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-end lg:justify-center items-center lg:items-start">
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
                        <Image src={require('./img/pngegg 4.png')} alt="Howard's Logo" width={100} height={50} />
                        <Image src={require('./img/pngwing.com - 2023-06-09T115326 2.png')} alt="Commonwealth Bank Logo" width={100} height={50} />
                        <Image src={require('./img/ELLERY_LOGO_6c6dab96-5cc9-4b2e-90aa-4ae6c46de8d8_180x 2.png')} alt="Ellery Logo" width={100} height={50} />
                        <Image src={require('./img/GINGERANDSMART_HI_RES_LOGO-NEW-011118-LRG 2.png')} alt="Ginger/Smart Logo" width={100} height={50} />
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden">
                <Image src={require('./img/Vector 48.png')} alt="Vector Design" layout="fill" objectFit="cover" className="object-cover object-center lg:object-left-top" />
            </div>
        </section>
    );
};

export default About;
