import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppWhyUs from './components/whyUs';
import AppCareers from './components/Careers';
alert("new Webinar on 20-03-2025!!")

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppWhyUs/>
        <AppServices />
        <AppCareers />
        <AppTestimonials />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
