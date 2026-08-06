import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBed,
  FaCar,
  FaMapMarkerAlt,
  FaPlane,
  FaShoppingBag,
  FaTimes,
  FaUmbrellaBeach,
  FaWhatsapp,
  FaWifi,
} from "react-icons/fa";
import "./App.css";

const bookingUrl =
  "https://www.booking.com/hotel/za/gorgeous-airy-rooms-with-seaview.en-gb.html";

const whatsappNumber = "27 78 718 1787";

const galleryImages = [
  {
    src: "public/images/614328359.jpg",
    alt: "Bright and spacious holiday accommodation interior",
  },
  {
    src: "public/images/entrance.jpg",
    alt: "Modern bedroom inside the holiday accommodation",
  },
  {
    src: "public/images/apartment-balcony.jpg",
    alt: "Comfortable lounge and seating area",
  },
  {
    src: "public/images/apartment-lounge.jpg",
    alt: "Modern coastal living space",
  },
  {
    src: "public/images/braai-area..jpg",
    alt: "Exterior of stylish holiday accommodation",
  },
  {
    src: "public/images/sea-view.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/bathroom-2.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/bathroom.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/bedroom.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/deck-1.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/deck-2.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/house-front.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "public/images/kitchen.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

    {
    src: "public/images/Pool.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },
];

const amenities = [
  {
    icon: <FaWifi />,
    title: "Free Wi-Fi",
    description: "Stay connected throughout your visit.",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "Sea Views",
    description: "Enjoy relaxing coastal views.",
  },
  {
    icon: <FaBed />,
    title: "Comfortable Rooms",
    description: "Bright, airy and prepared for a restful stay.",
  },
  {
    icon: <FaCar />,
    title: "Convenient Access",
    description: "Easy access for guests arriving by car.",
  },
];

const nearbyAttractions = [
  {
    icon: <FaUmbrellaBeach />,
    title: "Umhlanga Beaches",
    description: "Swimming, coastal walks and beautiful ocean views.",
  },
  {
    icon: <FaShoppingBag />,
    title: "Gateway Theatre of Shopping",
    description: "Shopping, restaurants, entertainment and family activities.",
  },
  {
    icon: <FaShoppingBag />,
    title: "Oceans Mall",
    description: "Luxury shopping and dining near the Umhlanga coastline.",
  },
  {
    icon: <FaPlane />,
    title: "King Shaka International Airport",
    description: "Convenient access for domestic and international travellers.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi, I am interested in booking Gorgeous Airy Rooms with Sea View. Please send me more information."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to homepage">
          <span>Gorgeous Airy Rooms</span>
          <small>with Sea View</small>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="#amenities" onClick={() => setMenuOpen(false)}>
            Amenities
          </a>
          <a href="#location" onClick={() => setMenuOpen(false)}>
            Location
          </a>
          <a
            className="nav-book-button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book now
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="eyebrow">Your coastal escape</p>

            <h1>
              Bright rooms.
              <br />
              Beautiful sea views.
            </h1>

            <p className="hero-description">
              Relax in comfortable, airy accommodation designed for peaceful
              stays near the coast.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                View availability
              </a>

              <a className="secondary-button" href="#gallery">
                Explore the property
              </a>
            </div>
          </motion.div>

          <a className="scroll-indicator" href="#about">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </a>
        </section>

        <motion.section
          className="section about-section"
          id="about"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow dark">Welcome</p>
            <h2>A relaxing stay with a coastal atmosphere</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Gorgeous Airy Rooms with Sea View offers guests a comfortable
                base for a quiet getaway. The bright spaces and relaxed
                atmosphere make it suitable for short holidays, weekend stays
                and coastal visits.
              </p>

              <p>
                Browse the gallery, explore the location and use the Booking.com
                button to check current availability and pricing.
              </p>

              <a
                className="text-link"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                View the Booking.com listing →
              </a>
            </div>

            <div className="feature-card">
              <FaMapMarkerAlt />
              <div>
                <strong>South African coast</strong>
                <span>Comfortable accommodation with sea views</span>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="section gallery-section" id="gallery">
          <motion.div
            className="section-heading gallery-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow dark">Gallery</p>
            <h2>A glimpse of your stay</h2>
            <p>Click any image to view it in full screen.</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.button
                type="button"
                className={`gallery-item gallery-item-${index + 1}`}
                key={image.src}
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.15 }}
                aria-label={`Open image: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span>View image</span>
              </motion.button>
            ))}
          </div>
        </section>

        <motion.section
          className="section amenities-section"
          id="amenities"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow dark">Amenities</p>
            <h2>Everything needed for a comfortable visit</h2>
          </div>

          <div className="amenities-grid">
            {amenities.map((amenity) => (
              <article className="amenity-card" key={amenity.title}>
                <div className="amenity-icon">{amenity.icon}</div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
  className="location-section"
  id="location"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  <div className="location-copy">
    <p className="eyebrow">Location</p>

    <h2>Stay in the heart of La Lucia</h2>

    <p>
      The property is situated at 34 Timavo Drive, La Lucia, close to
      Umhlanga’s beaches, shopping centres, restaurants and major attractions.
    </p>

    <div className="location-address">
      <FaMapMarkerAlt />

      <div>
        <strong>34 Timavo Drive</strong>
        <span>La Lucia, Umhlanga Ridge, South Africa</span>
      </div>
    </div>

    <a
      className="primary-button light-button"
      href="https://www.google.com/maps/search/?api=1&query=34%20Timavo%20Drive%2C%20La%20Lucia%2C%20Umhlanga%20Ridge%2C%20South%20Africa"
      target="_blank"
      rel="noreferrer"
    >
      Open in Google Maps
    </a>
  </div>

  <div className="map-container">
    <iframe
      title="Map showing 34 Timavo Drive, La Lucia"
      src="https://www.google.com/maps?q=34%20Timavo%20Drive%2C%20La%20Lucia%2C%20Umhlanga%20Ridge%2C%20South%20Africa&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
</motion.section>

<motion.section
  className="nearby-section"
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="section-heading nearby-heading">
    <p className="eyebrow dark">Explore Umhlanga</p>
    <h2>Popular places nearby</h2>

    <p>
      Beaches, premium shopping, restaurants and convenient transport links
      are all within easy reach of the property.
    </p>
  </div>

  <div className="nearby-grid">
    {nearbyAttractions.map((attraction) => (
      <article className="nearby-card" key={attraction.title}>
        <div className="nearby-icon">{attraction.icon}</div>

        <div>
          <h3>{attraction.title}</h3>
          <p>{attraction.description}</p>
        </div>
      </article>
    ))}
  </div>
</motion.section>

        <motion.section
          className="booking-section"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="eyebrow">Plan your stay</p>
          <h2>Ready for a relaxing coastal getaway?</h2>
          <p>
            Check the latest prices, available dates and booking conditions on
            Booking.com.
          </p>

          <div className="booking-actions">
            <a
              className="primary-button"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book on Booking.com
            </a>

            <a
              className="secondary-button dark-outline"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.section>
      </main>

      <footer>
        <div>
          <strong>Gorgeous Airy Rooms with Sea View</strong>
          <p>A bright and relaxing coastal stay.</p>
        </div>

        <div className="footer-links">
          <a href="#gallery">Gallery</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Booking.com
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Gorgeous Airy Rooms with Sea View
        </p>
      </footer>

      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact the property on WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <FaTimes />
            </button>

            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;