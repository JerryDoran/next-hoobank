import Billing from '../components/Billing';
import Business from '../components/Business';
import CardDeal from '../components/CardDeal';
import Clients from '../components/Clients';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start ">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      <div className="bg-primary sm:px-16 px-6 flex justify-center items-start ">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
