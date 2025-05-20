import { useEffect, useState } from "react";
import "./style.css"; // Ensure Tailwind or your own styles are imported

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((el) => appearOnScroll.observe(el));

    return () => appearOnScroll.disconnect();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-area">
            <img
              src="https://via.placeholder.com/40"
              alt="Brew Bliss Logo"
              className="logo"
            />
            <h1>Brew Bliss Coffee</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h2>Start Your Day with a Perfect Brew</h2>
          <p>Freshly roasted beans and handcrafted drinks made with love.</p>
        </div>
      </section>

      <section id="menu" className="fade-in">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="menu-items">
            <div className="item">
              <h3>Espresso</h3>
              <p>Rich, bold shot of pure coffee.</p>
            </div>
            <div className="item">
              <h3>Latte</h3>
              <p>Smooth espresso with steamed milk and a touch of foam.</p>
            </div>
            <div className="item">
              <h3>Cold Brew</h3>
              <p>Chilled, slow-brewed coffee served over ice.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="fade-in">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Brew Bliss Coffee is a cozy neighborhood cafe where community meets
            quality. Founded in 2020, our passion is crafting the perfect cup for
            every guest.
          </p>
        </div>
      </section>

      <section id="contact" className="fade-in">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: hello@brewbliss.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Visit us: 123 Bean Street, Roastville</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Brew Bliss Coffee. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
