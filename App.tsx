
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialization logic if needed
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-black">
      <Navbar />
      <main>
        {/* Booking Section now acts as the primary Hero entry */}
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
