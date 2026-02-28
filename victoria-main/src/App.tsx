import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
