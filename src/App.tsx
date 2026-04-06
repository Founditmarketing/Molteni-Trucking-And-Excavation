import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import { PageLoader } from './components/PageLoader';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Excavation } from './pages/Excavation';
import { RockDelivery } from './pages/RockDelivery';
import { ReadReviews } from './pages/ReadReviews';
import { LeaveReview } from './pages/LeaveReview';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/excavation" element={<Excavation />} />
          <Route path="/rock-delivery" element={<RockDelivery />} />
          <Route path="/read-reviews" element={<ReadReviews />} />
          <Route path="/leave-review" element={<LeaveReview />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
