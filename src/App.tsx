import React, { useState } from "react"; // Importar useState
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react"; // Importar Menu y X para los iconos de hamburguesa

// Componente del Encabezado
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar el menú móvil

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo y Título */}
        <div className="flex items-center space-x-2">
          <Coffee className="text-green-600 w-8 h-8" />{" "}
          {/* Ícono de café como parte del logo */}
          <h1 className="text-2xl font-bold text-gray-900 font-inter">
            Mónaco Coffee Shop
          </h1>
        </div>

        {/* Botón de menú hamburguesa (solo visible en pantallas pequeñas) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" /> // Icono de "cerrar" cuando el menú está abierto
            ) : (
              <Menu className="w-8 h-8" /> // Icono de hamburguesa cuando el menú está cerrado
            )}
          </button>
        </div>

        {/* Navegación para pantallas grandes (oculta en pequeñas) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-inter">
            <li>
              <a
                href="#about"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú móvil (visible condicionalmente) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-inter">
            <li>
              <a
                href="#about"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-green-600 transition-colors duration-300 w-full text-center"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-green-600 transition-colors duration-300 w-full text-center"
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-green-600 transition-colors duration-300 w-full text-center"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-green-600 transition-colors duration-300 w-full text-center"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

// --- EL RESTO DE TUS COMPONENTES (HeroSection, AboutSection, etc.) PERMANECEN IGUAL ---

// Componente de la Sección Hero
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contenido de Texto */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Tu Experiencia de Café{" "}
            <span className="text-green-500">Excepcional</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Descubre el mundo del café de especialidad en un ambiente moderno y
            acogedor, diseñado para ti.
          </p>
          <a
            href="#menu"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block mx-auto md:mx-0"
          >
            Explora Nuestro Menú
          </a>
        </div>
        {/* Imagen del Hero */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://placehold.co/600x400/000000/FFFFFF?text=Tu+Cafe+Perfecto" // Placeholder de imagen de café
            alt="Taza de café humeante en un ambiente moderno"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x400/000000/FFFFFF?text=Imagen+No+Disponible";
            }}
          />
        </div>
      </div>
    </section>
  );
};

// Componente de la Sección Sobre Nosotros
const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen de la Cafetería */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Ambiente+Moderno" // Placeholder de imagen de ambiente
            alt="Interior moderno de Mónaco Coffee Shop"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x400/E0E0E0/333333?text=Imagen+No+Disponible";
            }}
          />
        </div>
        {/* Contenido de Texto */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Sobre <span className="text-green-600">Nosotros</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            En Mónaco Coffee Shop, creemos que el café es más que una bebida; es
            una experiencia. Fundada con la pasión por los granos de calidad y
            el servicio excepcional, nos dedicamos a ofrecerte momentos
            inolvidables.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro espacio moderno y minimalista, combinado con la calidez de
            nuestro equipo, crea el ambiente perfecto para trabajar, relajarse o
            disfrutar con amigos y familia. ¡Ven y vive la experiencia Mónaco!
          </p>
        </div>
      </div>
    </section>
  );
};

// Componente de la Sección de Destacados (Productos)
const HighlightsSection = () => {
  const products = [
    {
      name: "Espresso Intenso",
      description:
        "Un café puro y potente, con notas achocolatadas y un final persistente.",
      image: "https://placehold.co/400x300/333333/FFFFFF?text=Espresso",
    },
    {
      name: "Latte Art",
      description:
        "Cremoso y suave, decorado con arte latte que deleita la vista y el paladar.",
      image: "https://placehold.co/400x300/333333/FFFFFF?text=Latte",
    },
    {
      name: "Tarta de Chocolate",
      description:
        "Una rebanada de cielo, rica y decadente, el acompañamiento perfecto para tu café.",
      image: "https://placehold.co/400x300/333333/FFFFFF?text=Tarta",
    },
  ];

  return (
    <section id="menu" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Nuestros <span className="text-green-600">Destacados</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/400x300/333333/FFFFFF?text=Imagen+No+Disponible";
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#" // Puedes enlazar a una página de menú completo
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Ver Menú Completo
          </a>
        </div>
      </div>
    </section>
  );
};

// Componente de la Sección de Ubicación y Contacto
const LocationContactSection = () => {
  return (
    <section id="location" className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mapa o Información de Ubicación */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
            Encuéntranos
          </h2>
          <div className="flex items-center mb-4">
            <MapPin className="text-green-500 w-6 h-6 mr-3" />
            <p className="text-lg">
              Calle Ficticia #123, Ciudad del Café, País
            </p>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="text-green-500 w-6 h-6 mr-3" />
            <p className="text-lg">+123 456 7890</p>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="text-green-500 w-6 h-6 mr-3" />
            <p className="text-lg">hola@monacocoffee.com</p>
          </div>
          <div className="mt-8 w-full">
            <div
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
              style={{ height: "300px", width: "100%" }}
            >
              {/* Placeholder para Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2201407338563!2d-122.41941558468165!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087f9c2d1b7%3A0xf6a7a0e3f8b0e7c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Mónaco Coffee Shop"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div
          id="contact"
          className="bg-white p-8 rounded-2xl shadow-xl text-gray-800"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Contáctanos</h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="tu.email@ejemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Componente del Pie de Página
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Mónaco Coffee Shop. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Componente principal de la aplicación
const App = () => {
  return (
    <div className="font-sans antialiased">
      {/* Carga de la fuente Inter desde Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <LocationContactSection />
      <Footer />
    </div>
  );
};

export default App;
