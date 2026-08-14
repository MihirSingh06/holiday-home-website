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

const whatsappNumber = "27824166496";

const galleryImages = [

  {
    src: "/images/WhatsApp Image 2026-08-14 at 11.38.54.jpeg",
    alt: "Beautiful ocean and beach near the accommodation",
  },


  {
    src: "/images/614328359.jpg",
    alt: "Bright and spacious holiday accommodation interior",
  },
  {
    src: "/images/entrance.jpg",
    alt: "Modern bedroom inside the holiday accommodation",
  },
  {
    src: "/images/614328332.jpg",
    alt: "Comfortable lounge and seating area",
  },
  {
    src: "/images/07a46fdd-c761-493f-bf0f-5279db74a04c.jpg",
    alt: "Modern coastal living space",
  },
  {
    src: "/images/braai-area..jpg",
    alt: "Exterior of stylish holiday accommodation",
  },
  {
    src: "/images/sea-view.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/bathroom-2.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/bathroom.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/ChatGPT Image Aug 11, 2026, 07_54_52 PM.png",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/deck-1.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/ChatGPT Image Aug 14, 2026, 12_05_19 PM.png",
    alt: "Beautiful ocean and beach near the accommodation",
  },  

  {
    src: "/images/WhatsApp Image 2026-08-14 at 11.38.54 (2).jpeg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/WhatsApp Image 2026-08-14 at 11.38.55.jpeg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

  {
    src: "/images/570a8e60-92cb-4aa2-9c59-f8214f893417.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },

    {
    src: "/images/8872d648-c4a3-491b-82e9-57c73d2d1440.jpg",
    alt: "Beautiful ocean and beach near the accommodation",
  },
  

  {
    src: "/images/house-front.jpg",
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

const reviews = [
  {
    title: "Absolutely AMAZING!!",
    rating: 5,
    date: "11 May 2026",
    text:
      "Everything. Beautiful house, beautiful area, extremely peaceful, extremely clean, not to mention the love of the host 🥺❤️ I felt at home, I felt like she was my mom ❤️",
  },
  {
    title: "I stayed for work and the hosts were so accommodating",
    rating: 5,
    date: "13 May 2026",
    text:
      "The view was beautiful and everything was so clean. Valarie and the lady working there were so helpful and caring, which makes the stay so much easier. The bed was also very comfortable and the rooms are so spacious. This was a fantastic stay.",
  },
  {
    title: "Ekuthuleni lives up to its name",
    rating: 5,
    date: "",
    text:
      "Ekuthuleni lives up to its name. It’s beautiful, clean and serene — definitely will be coming back soon. The accommodation was clean, accessible and ideal for a family.",
  },
  {
    title: "Exceptional",
    rating: 5,
    date: "12 May 2025",
    text:
      "Keep up the good work and best service please because you are my best place ever for my family. I enjoyed my stay and am coming again for more days.",
  },
  {
    title: "More than a 5 star 🌟",
    rating: 5,
    date: "22 December 2024",
    text:
      "Just wow. We will most definitely return. The owner and staff went the extra mile to assist with an extra bed for our grandbaby. The view is to die for — a great place to hide away from the hustle and bustle.",
  },
  {
    title: "Exceptional",
    rating: 5,
    date: "1 January 2024",
    text:
      "Our stay at Ekuthuleni Guesthouse was amazing! My partner and I really enjoyed our stay, so much that we requested to extend it. The facilities and home were top notch and exactly as seen in the pictures. Everything you need is catered for. The location and nearby amenities made our stay easy and comfortable. The breathtaking sea view from our bed was incredible. Vallerie and her staff were humble and welcoming hosts. Ekuthuleni Christian Guesthouse truly feels like a home away from home.",
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

  const [corporateBooking, setCorporateBooking] = useState({
  companyName: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
});

const showNextImage = () => {
  if (!selectedImage) return;

  const currentIndex = galleryImages.findIndex(
    (image) => image.src === selectedImage.src
  );

  const nextIndex = (currentIndex + 1) % galleryImages.length;
  setSelectedImage(galleryImages[nextIndex]);
};

const showPreviousImage = () => {
  if (!selectedImage) return;

  const currentIndex = galleryImages.findIndex(
    (image) => image.src === selectedImage.src
  );

  const previousIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;

  setSelectedImage(galleryImages[previousIndex]);
};

const [showCorporatePopup, setShowCorporatePopup] = useState(false);

const handleCorporateChange = (event) => {
  const { name, value } = event.target;

  setCorporateBooking((current) => ({
    ...current,
    [name]: value,
  }));
};

  const whatsappMessage = encodeURIComponent(
    "Hi, I am interested in booking Ekuthuleni Modern Christian Guesthouse. Please send me more information."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

useEffect(() => {
  document.body.style.overflow = selectedImage ? "hidden" : "";

  const handleKeyDown = (event) => {
    if (!selectedImage) return;

    if (event.key === "ArrowRight") {
      showNextImage();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to homepage">
          <span>Ekuthuleni Modern Christian Guesthouse</span>
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
          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>

          <a href="#location" onClick={() => setMenuOpen(false)}>
            Location
          </a>

          <a href="#corporate" onClick={() => setMenuOpen(false)}>
            Corporate
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
                Ekuthuleni Modern Christian Guesthouse offers guests a peaceful coastal retreat with modern accommodation, breathtaking sea views, and a warm Christian atmosphere. Whether you're visiting for business or leisure, you'll enjoy comfort, hospitality, and a relaxing stay in the heart of La Lucia.
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
  className="reviews-section"
  id="reviews"
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, amount: 0.15 }}
>
  <div className="section-heading reviews-heading">
    <p className="eyebrow dark">Guest Experiences</p>
    <h2>What our guests have to say</h2>
    <p>
      Real guest feedback highlighting the comfort, views, cleanliness and
      hospitality at Ekuthuleni.
    </p>
  </div>

  <div className="reviews-grid">
    {reviews.map((review, index) => (
      <motion.article
        className="review-card"
        key={`${review.title}-${index}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="review-stars">
          {"★".repeat(review.rating)}
        </div>

        <h3>{review.title}</h3>

        <p className="review-text">“{review.text}”</p>

        <div className="review-footer">
          {review.date && <span>Reviewed {review.date}</span>}
          <span>Booking.com guest review</span>
        </div>
      </motion.article>
    ))}
  </div>

  <div className="reviews-link">
    <a
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
      className="text-link"
    >
      View more reviews on Booking.com →
    </a>
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

          <motion.section
  className="corporate-section"
  id="corporate"
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="corporate-content">
    <p className="eyebrow">Corporate Stays</p>

<h2>Book your corporate stay</h2>

<p>
  Ekuthuleni Modern Christian Guesthouse welcomes companies and business
  travellers looking for comfortable accommodation in La Lucia.
</p>

<form className="corporate-form">
  <div className="corporate-form-grid">
    <div className="form-group">
      <label htmlFor="companyName">Company Name</label>
      <input
        id="companyName"
        name="companyName"
        type="text"
        value={corporateBooking.companyName}
        onChange={handleCorporateChange}
        placeholder="Enter company name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Contact Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={corporateBooking.email}
        onChange={handleCorporateChange}
        placeholder="name@company.com"
      />
    </div>

    <div className="form-group">
      <label htmlFor="checkIn">Check-in</label>
      <input
        id="checkIn"
        name="checkIn"
        type="date"
        value={corporateBooking.checkIn}
        onChange={handleCorporateChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="checkOut">Check-out</label>
      <input
        id="checkOut"
        name="checkOut"
        type="date"
        min={corporateBooking.checkIn}
        value={corporateBooking.checkOut}
        onChange={handleCorporateChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="guests">Guests</label>
      <input
        id="guests"
        name="guests"
        type="number"
        min="1"
        value={corporateBooking.guests}
        onChange={handleCorporateChange}
      />
    </div>
  </div>

<button
  className="primary-button corporate-button"
  type="button"
  onClick={() => {
    if (
      !corporateBooking.companyName ||
      !corporateBooking.email ||
      !corporateBooking.checkIn ||
      !corporateBooking.checkOut
    ) {
      alert(
        "Please complete the company name, email, check-in and check-out fields."
      );
      return;
    }

setShowCorporatePopup(true);

  }}
>
  Check Availability
</button>
</form>
  </div>
</motion.section>


          
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
          <strong><strong>Ekuthuleni Modern Christian Guesthouse</strong></strong>
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
          © {new Date().getFullYear()} Ekuthuleni Modern Christian Guesthouse
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

      {showCorporatePopup && (
  <div
    className="corporate-popup-overlay"
    onClick={() => setShowCorporatePopup(false)}
  >
    <motion.div
      className="corporate-popup"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="corporate-popup-close"
        type="button"
        aria-label="Close corporate booking message"
        onClick={() => setShowCorporatePopup(false)}
      >
        ×
      </button>

      <p className="eyebrow dark">Corporate Bookings</p>

      <h2>Let us assist with your stay</h2>

      <p>
        Thank you for your interest in Ekuthuleni Modern Christian Guesthouse.
         We’re currently experiencing technical difficulties with online bookings. 
         Our team will be happy to assist you with availability and corporate rates.
      </p>

      <div className="corporate-popup-actions">
        <a
          className="primary-button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Contact us on WhatsApp
        </a>

        <button
          className="popup-secondary-button"
          type="button"
          onClick={() => setShowCorporatePopup(false)}
        >
          Close
        </button>
      </div>
    </motion.div>
  </div>
)}

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

            <button
  type="button"
  className="lightbox-nav lightbox-prev"
  onClick={(event) => {
    event.stopPropagation();
    showPreviousImage();
  }}
  aria-label="Previous image"
>
  ‹
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

            <button
  type="button"
  className="lightbox-nav lightbox-next"
  onClick={(event) => {
    event.stopPropagation();
    showNextImage();
  }}
  aria-label="Next image"
>
  ›
</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;