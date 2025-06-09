import React, { useState } from "react";
// Eliminado Coffee de lucide-react ya que usamos el logo.
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Menu,
  X, // Vuelve a importar TikTok
} from "lucide-react";
import logo from "/images/logo.jpg"; // Importa tu logo. Asegúrate de que logo.jpg esté en la carpeta 'src' o 'public'.

// Datos completos del menú
const menuData = [
  {
    category: "BEBIDAS CALIENTES CON AGUA",
    imageUrl: "/images/americano.png", // Usando tu imagen
    items: [
      { name: "ESPRESSO", price: "10 Bs." },
      { name: "AMERICANO", price: "10 Bs." },
    ],
  },
  {
    category: "BEBIDAS CALIENTES CON LECHE",
    imageUrl: "/images/macciato.jpg", // Usando tu imagen
    items: [
      { name: "CORTADO", price: "12 Bs." },
      { name: "MACCHIATO", price: "10 Bs." },
      { name: "FLAT WHITE", price: "15 Bs." },
      { name: "CAPUCCINO", price: "12 Bs." },
      { name: "LATTE", price: "15 Bs." },
      { name: "MOCACCINO", price: "15 Bs." },
      { name: "VAINILLA LATTE", price: "15 Bs." },
      { name: "SPANISH COFFE", price: "15 Bs." },
      { name: "CHOCOLATE CALIENTE", price: "12 Bs." },
    ],
  },
  {
    category: "BEBIDAS FRIAS CON AGUA",
    imageUrl: "/images/tonic.jpg", // Usando tu imagen
    items: [
      { name: "ESPRESSO ORANGE", price: "12 Bs." },
      { name: "ESPRESSO TONIC", price: "12 Bs." },
      { name: "ICED LATTE", price: "15 Bs." },
      { name: "ICED MOCA", price: "15 Bs." },
      { name: "ICED CARAMEL LATTE", price: "15 Bs." },
    ],
  },
  {
    category: "JUGOS CON AGUA",
    imageUrl: "/images/maracuya.jpeg", // Usando tu imagen
    items: [
      { name: "MARACUYA", price: "13 Bs." },
      { name: "FRUTOS ROJOS", price: "13 Bs." },
      { name: "LIMONADA DE COCO", price: "13 Bs." },
    ],
  },
  {
    category: "FRAPES",
    imageUrl: "/images/frappuccino.jpg", // Usando tu imagen
    items: [
      { name: "FRAPUCCINO", price: "20 Bs." },
      { name: "FRAPE DE MOCA", price: "20 Bs." },
      { name: "FRAPE DE CARAMEL", price: "20 Bs." },
      { name: "FRAPE DE OREO", price: "20 Bs." },
      { name: "FRAPE PAI DE LIMON", price: "20 Bs." },
    ],
  },
  {
    category: "MASITAS",
    imageUrl: "/images/brownie.jpeg", // Usando tu imagen
    items: [
      { name: "Brownie", price: "6 Bs." },
      { name: "Tres leches", price: "12 Bs." },
      { name: "Galletas", price: "10 Bs." },
      { name: "Croissant con jamón y queso", price: "10 Bs." },
      { name: "Panini", price: "15 Bs." },
    ],
  },
];

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
          {/* Aquí se usa la imagen del logo en lugar del ícono de café */}
          <img
            src={logo} // Utiliza la variable 'logo' importada
            alt="Monaco Coffee Shop Logo"
            className="h-10 w-auto rounded-full" // Ajusta h-10 para el tamaño, w-auto para mantener proporción, rounded-full para bordes redondeados
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src =
                "https://placehold.co/40x40/000000/FFFFFF?text=LOGO"; // Fallback si la imagen no carga
            }}
          />
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
              <X className="w-8 h-8 text-monaco-teal" /> // Icono de "cerrar" cuando el menú está abierto
            ) : (
              <Menu className="w-8 h-8 text-monaco-teal" /> // Icono de hamburguesa cuando el menú está cerrado
            )}
          </button>
        </div>

        {/* Navegación para pantallas grandes (oculta en pequeñas) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-inter">
            <li>
              <a
                href="#about"
                className="hover:text-monaco-teal transition-colors duration-300"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-monaco-teal transition-colors duration-300"
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-monaco-teal transition-colors duration-300"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-monaco-teal transition-colors duration-300"
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
                className="block px-4 py-2 hover:text-monaco-teal transition-colors duration-300 w-full text-center"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-monaco-teal transition-colors duration-300 w-full text-center"
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-monaco-teal transition-colors duration-300 w-full text-center"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 hover:text-monaco-teal transition-colors duration-300 w-full text-center"
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

// Componente de la Sección Hero
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contenido de Texto */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Tu Experiencia de Café{" "}
            <span className="text-monaco-orange">Excepcional</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Descubre el mundo del café de especialidad en un ambiente moderno y
            acogedor, diseñado para ti.
          </p>
          <a
            href="#menu"
            className="bg-monaco-teal hover:bg-monaco-teal-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block mx-auto md:mx-0"
          >
            Explora Nuestro Menú
          </a>
        </div>
        {/* Imagen del Hero */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/logo.jpg" // Usando tu imagen para la sección Hero
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
            src="images/monaco.jpg" // Usando tu imagen para About
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
            Sobre <span className="text-monaco-teal">Nosotros</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            En Mónaco Coffee, creemos que el café es más que una bebida; es una
            experiencia. Fundada con la pasión por los granos de calidad y el
            servicio excepcional, nos dedicamos a ofrecerte momentos
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

// Componente de la Sección del Menú
const MenuSection = () => {
  return (
    <section id="menu" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Nuestro <span className="text-monaco-teal">Menú</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {" "}
          {/* Layout de cuadrícula para categorías */}
          {menuData.map((categoryData, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl shadow-lg pb-6">
              {" "}
              {/* Eliminado p-6 para permitir la imagen hasta el borde superior */}
              {/* Imagen de referencia para la categoría */}
              <img
                src={categoryData.imageUrl}
                alt={`Imagen de ${categoryData.category}`}
                className="w-full h-32 object-cover rounded-t-2xl mb-4" // Clases para la imagen
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (
                    e.target as HTMLImageElement
                  ).src = `https://placehold.co/400x150/monaco-teal/FFFFFF?text=Imagen+Menu`; // Actualizado con color monaco-teal
                }}
              />
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 border-b-2 border-monaco-teal pb-2 px-6">
                {" "}
                {/* Añadido px-6 para padding horizontal */}
                {categoryData.category}
              </h3>
              <ul className="space-y-3 px-6">
                {" "}
                {/* Añadido px-6 para padding horizontal */}
                {categoryData.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex justify-between items-center text-lg text-gray-700 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-monaco-teal-dark font-bold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-monaco-teal">
            Encuéntranos
          </h2>
          <div className="flex items-center mb-4">
            <MapPin className="text-monaco-teal w-6 h-6 mr-3" />
            <p className="text-lg">
              Calle Ricardo Soruco esquina Avenida 14 de Septiembre,
              Quillacollo-Cochabamba, Bolivia
            </p>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="text-monaco-teal w-6 h-6 mr-3" />
            <p className="text-lg">+59179751134</p>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="text-monaco-teal w-6 h-6 mr-3" />
            <p className="text-lg">hola@monacocoffee.com</p>
          </div>
          <div className="mt-8 w-full">
            <div
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
              style={{ height: "300px", width: "100%" }}
            >
              {/* Placeholder para Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1903.6439362765602!2d-66.27688282514767!3d-17.39796722340245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1749502737374!5m2!1ses-419!2sbo"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-monaco-teal focus:border-monaco-teal"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-monaco-teal focus:border-monaco-teal"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-monaco-teal focus:border-monaco-teal"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-monaco-teal hover:bg-monaco-teal-dark text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
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
          © {new Date().getFullYear()} Mónaco Coffee. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-6">
          {/* Link de Instagram */}
          <a
            href="https://www.instagram.com/monaco_cafeteria?igsh=MTA1ZzhkaGgzdTRrbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-monaco-teal transition-colors duration-300"
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
      <MenuSection /> {/* Usamos el nuevo componente MenuSection */}
      <LocationContactSection />
      <Footer />
    </div>
  );
};

export default App;
