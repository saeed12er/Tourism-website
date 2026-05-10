// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const heroTitle = document.getElementById('hero-title');
const exploreBtn = document.getElementById('explore-btn');
const videoBtn = document.getElementById('video-btn');
const videoModal = document.getElementById('video-modal');
const closeVideo = document.getElementById('close-video');
const weatherBtn = document.getElementById('weather-btn');
const weatherWidget = document.getElementById('weather-widget');
const closeWeather = document.getElementById('close-weather');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const bookingForm = document.getElementById('booking-form');
const packageNameInput = document.getElementById('package-name');
const destinationsGrid = document.querySelector('.destinations-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryFilters = document.querySelectorAll('.gallery-filter');
const photoGallery = document.querySelector('.photo-gallery');
const galleryModal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const infoModal = document.getElementById('info-modal');
const closeInfo = document.getElementById('close-info');
const modalContent = document.getElementById('modal-content');

// Swat Destinations Data
const swatDestinations = [
    {
        id: 1,
        name: "Kalam Valley",
        category: "valley",
        description: "Known as the 'Crown of Swat' with breathtaking views",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
        rating: "★★★★★",
        location: "Upper Swat",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Mahodand Lake",
        category: "lake",
        description: "Crystal clear alpine lake surrounded by mountains",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        rating: "★★★★☆",
        location: "Ushu Valley",
        badge: "Must Visit"
    },
    {
        id: 3,
        name: "Malam Jabba",
        category: "valley",
        description: "Pakistan's premier ski resort with chairlift",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        rating: "★★★★☆",
        location: "Malam Jabba",
        badge: "Adventure"
    },
    {
        id: 4,
        name: "Butkara Stupa",
        category: "historical",
        description: "Ancient Buddhist archaeological site from 2nd century BC",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d",
        rating: "★★★★☆",
        location: "Mingora",
        badge: "Historical"
    },
    {
        id: 5,
        name: "Fizagat Park",
        category: "valley",
        description: "Beautiful riverside park ideal for picnics",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
        rating: "★★★☆☆",
        location: "Mingora",
        badge: "Family"
    },
    {
        id: 6,
        name: "Ushu Forest",
        category: "valley",
        description: "Dense pine forest with hiking trails",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
        rating: "★★★★☆",
        location: "Ushu Valley",
        badge: "Nature"
    },
    {
        id: 7,
        name: "Kundol Lake",
        category: "lake",
        description: "High-altitude glacial lake near Kalam",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        rating: "★★★★★",
        location: "Kalam",
        badge: "Trekking"
    },
    {
        id: 8,
        name: "Swat Museum",
        category: "historical",
        description: "Archaeological museum with Gandhara artifacts",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
        rating: "★★★☆☆",
        location: "Mingora",
        badge: "Cultural"
    }
];

// Swat Photos Gallery
const swatPhotos = [
    { src: "https://images.unsplash.com/photo-1551632811-561732d1e306", category: "summer", caption: "Kalam Valley in Summer" },
    { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba", category: "winter", caption: "Malam Jabba Ski Resort" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", category: "summer", caption: "Mahodand Lake" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", category: "spring", caption: "Swat Valley Spring Blossoms" },
    { src: "https://images.unsplash.com/photo-1448375240586-882707db888b", category: "summer", caption: "Ushu Pine Forest" },
    { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "spring", caption: "Swat River in Spring" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", category: "summer", caption: "Kundol Lake" },
    { src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0", category: "historical", caption: "Swat Museum" },
    { src: "https://images.unsplash.com/photo-1528164344705-47542687000d", category: "historical", caption: "Ancient Buddhist Stupa" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", category: "cultural", caption: "Swati Handicrafts" },
    { src: "https://images.unsplash.com/photo-1548013146-72479768bada", category: "cultural", caption: "Traditional Swati Food" },
    { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6", category: "summer", caption: "Swat Valley Panorama" }
];

// Cultural Gallery Items
const culturalItems = [
    { type: "food", src: "https://images.unsplash.com/photo-1548013146-72479768bada", caption: "Chapali Kabab - Traditional Swati Dish" },
    { type: "food", src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", caption: "Swati Lamb Karahi" },
    { type: "craft", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", caption: "Traditional Embroidery" },
    { type: "craft", src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", caption: "Wood Carving Art" },
    { type: "music", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", caption: "Traditional Attan Dance" },
    { type: "music", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f", caption: "Swati Folk Music Instruments" }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeDestinations();
    initializePhotoGallery();
    updateCurrentYear();
    setupEventListeners();
    setupScrollEffects();
    initializeWeather();
    setupSmoothScrolling();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to Swat Valley Tourism! 🏔️');
    }, 1000);
});

// Update current year in footer
function updateCurrentYear() {
    currentYear.textContent = new Date().getFullYear();
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Explore button
    exploreBtn.addEventListener('click', () => {
        document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Video modal
    videoBtn.addEventListener('click', () => {
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeVideo.addEventListener('click', () => {
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('swat-video').src = document.getElementById('swat-video').src;
    });
    
    // Weather widget
    weatherBtn.addEventListener('click', toggleWeatherWidget);
    closeWeather.addEventListener('click', toggleWeatherWidget);
    
    // Booking modal
    window.bookPackage = function(packageName, price) {
        packageNameInput.value = packageName;
        bookingModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    closeModal.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modals when clicking outside
    [videoModal, bookingModal, infoModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Booking form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            package: packageNameInput.value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            travelers: document.getElementById('travelers').value,
            requests: document.getElementById('special-requests').value
        };
        
        // Simulate API call
        setTimeout(() => {
            showNotification(`Thank you for booking ${formData.package}! We'll contact you at ${formData.email} within 24 hours.`);
            bookingForm.reset();
            bookingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 1000);
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Message sent successfully! We will respond within 24 hours.');
        contactForm.reset();
    });
    
    // Info modal
    closeInfo.addEventListener('click', () => {
        infoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Toggle weather widget
function toggleWeatherWidget() {
    weatherWidget.classList.toggle('show');
}

// Initialize destinations
function initializeDestinations() {
    renderDestinations(swatDestinations);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const filteredDestinations = filter === 'all' 
                ? swatDestinations 
                : swatDestinations.filter(dest => dest.category === filter);
            
            renderDestinations(filteredDestinations);
        });
    });
}

// Render destinations to the grid
function renderDestinations(destinationsArray) {
    destinationsGrid.innerHTML = '';
    
    destinationsArray.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.setAttribute('data-category', destination.category);
        
        card.innerHTML = `
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}" loading="lazy">
                <div class="destination-badge">${destination.badge}</div>
            </div>
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p class="destination-desc">${destination.description}</p>
                <div class="destination-rating">${destination.rating}</div>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i> ${destination.location}
                </div>
            </div>
        `;
        
        destinationsGrid.appendChild(card);
    });
}

// Initialize photo gallery
function initializePhotoGallery() {
    renderPhotos(swatPhotos);
    
    // Filter functionality
    galleryFilters.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            galleryFilters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const filteredPhotos = filter === 'all' 
                ? swatPhotos 
                : swatPhotos.filter(photo => photo.category === filter);
            
            renderPhotos(filteredPhotos);
        });
    });
}

// Render photos to gallery
function renderPhotos(photosArray) {
    photoGallery.innerHTML = '';
    
    photosArray.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
        `;
        
        galleryItem.addEventListener('click', () => {
            modalImage.src = photo.src;
            modalCaption.textContent = photo.caption;
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        photoGallery.appendChild(galleryItem);
    });
}

// Close photo modal
function closePhotoModal() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup scroll effects
function setupScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.highlight-card, .destination-card, .cultural-card, .package-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(el);
    });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize weather widget with simulated data
function initializeWeather() {
    // Simulate weather data (in real app, fetch from API)
    const weatherData = {
        current: {
            temp: 18,
            description: "Partly Cloudy",
            icon: "fa-cloud-sun",
            wind: "8 km/h",
            humidity: "65%"
        },
        forecast: [
            { day: "Mon", high: 20, low: 12, icon: "fa-sun" },
            { day: "Tue", high: 19, low: 11, icon: "fa-cloud-sun" },
            { day: "Wed", high: 17, low: 10, icon: "fa-cloud-rain" },
            { day: "Thu", high: 21, low: 13, icon: "fa-sun" },
            { day: "Fri", high: 22, low: 14, icon: "fa-sun" }
        ]
    };
    
    // Update current weather
    document.getElementById('current-temp').textContent = `${weatherData.current.temp}°C`;
    document.getElementById('weather-desc').textContent = weatherData.current.description;
    document.getElementById('weather-icon').className = `fas ${weatherData.current.icon}`;
    document.getElementById('wind-speed').textContent = weatherData.current.wind;
    document.getElementById('humidity').textContent = weatherData.current.humidity;
    document.getElementById('weather-temp').textContent = `${weatherData.current.temp}°C`;
    
    // Update forecast
    const forecastContainer = document.getElementById('weather-forecast');
    forecastContainer.innerHTML = '';
    
    weatherData.forecast.forEach(day => {
        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';
        forecastDay.innerHTML = `
            <span>${day.day}</span>
            <i class="fas ${day.icon}"></i>
            <span>${day.high}°/${day.low}°</span>
        `;
        forecastContainer.appendChild(forecastDay);
    });
}

// Package calculator
function calculateTotal() {
    const packagePrice = parseFloat(document.getElementById('calc-package').value);
    const people = parseInt(document.getElementById('calc-people').value);
    const extraDays = parseInt(document.getElementById('calc-days').value);
    
    // Calculate base cost
    let total = packagePrice * people;
    
    // Add cost for extra days (assuming $50 per person per extra day)
    if (extraDays > 0) {
        total += (extraDays * 50 * people);
    }
    
    // Apply group discount for 4+ people
    if (people >= 4) {
        total *= 0.9; // 10% discount
    }
    
    // Display result
    document.getElementById('total-cost').textContent = `$${total.toFixed(2)}`;
    showNotification(`Package cost calculated: $${total.toFixed(2)}`);
}

// Show cultural gallery
function showFoodGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    culturalItems.filter(item => item.type === 'food').forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
        galleryItem.addEventListener('click', () => {
            modalImage.src = item.src;
            modalCaption.textContent = item.caption;
            galleryModal.classList.add('active');
        });
        galleryGrid.appendChild(galleryItem);
    });
    
    document.querySelector('.cultural-gallery').style.display = 'block';
}

function showHandicrafts() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    culturalItems.filter(item => item.type === 'craft').forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
        galleryItem.addEventListener('click', () => {
            modalImage.src = item.src;
            modalCaption.textContent = item.caption;
            galleryModal.classList.add('active');
        });
        galleryGrid.appendChild(galleryItem);
    });
    
    document.querySelector('.cultural-gallery').style.display = 'block';
}

function playTraditionalMusic() {
    showNotification('Playing traditional Swati music... 🎵');
    // In a real app, this would play audio
}

function closeGallery() {
    document.querySelector('.cultural-gallery').style.display = 'none';
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email && validateEmail(email)) {
        showNotification('Thank you for subscribing to our newsletter! 📧');
        document.getElementById('newsletter-email').value = '';
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// Info modal content functions
function showTravelTips() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-lightbulb"></i> Travel Tips for Swat Valley</h3>
        <ul>
            <li><strong>Best Time to Visit:</strong> April to October for pleasant weather</li>
            <li><strong>What to Pack:</strong> Warm clothes (even in summer), comfortable shoes, sunscreen</li>
            <li><strong>Altitude Sickness:</strong> Acclimatize properly when going to higher areas</li>
            <li><strong>Local Customs:</strong> Dress modestly, respect local traditions</li>
            <li><strong>Connectivity:</strong> Mobile networks available in main towns</li>
            <li><strong>Currency:</strong> Carry cash (Pakistani Rupees) as ATMs are limited</li>
        </ul>
    `;
    infoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showBestTime() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-calendar-alt"></i> Best Time to Visit Swat Valley</h3>
        <div class="season-info">
            <div class="season">
                <h4>Spring (March-May)</h4>
                <p>🌸 Perfect for blooming flowers and pleasant weather (10-25°C)</p>
            </div>
            <div class="season">
                <h4>Summer (June-August)</h4>
                <p>☀️ Ideal for hiking and lake visits (15-30°C)</p>
            </div>
            <div class="season">
                <h4>Autumn (September-November)</h4>
                <p>🍂 Beautiful fall colors and harvest season (8-22°C)</p>
            </div>
            <div class="season">
                <h4>Winter (December-February)</h4>
                <p>⛷️ Ski season in Malam Jabba (-5 to 10°C)</p>
            </div>
        </div>
    `;
    infoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showTransport() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-map-signs"></i> How to Reach Swat Valley</h3>
        <div class="transport-options">
            <div class="option">
                <h4><i class="fas fa-plane"></i> By Air</h4>
                <p>Nearest airport: Bacha Khan International Airport, Peshawar (3-4 hours drive to Swat)</p>
            </div>
            <div class="option">
                <h4><i class="fas fa-train"></i> By Train</h4>
                <p>Nearest railway station: Malakand (2 hours drive to Swat)</p>
            </div>
            <div class="option">
                <h4><i class="fas fa-bus"></i> By Road</h4>
                <p>From Islamabad: 4-5 hours via Motorway M1 and Swat Expressway</p>
                <p>From Peshawar: 3-4 hours via Malakand Pass</p>
            </div>
            <div class="option">
                <h4><i class="fas fa-car"></i> Local Transport</h4>
                <p>Hire a local car with driver or use shared taxis (Chingchi rickshaws in towns)</p>
            </div>
        </div>
    `;
    infoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showAccommodation() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-hotel"></i> Accommodation in Swat Valley</h3>
        <div class="accommodation-types">
            <div class="type">
                <h4>🏨 Hotels & Resorts</h4>
                <p>3-4 star hotels available in Mingora and Malam Jabba</p>
            </div>
            <div class="type">
                <h4>🏡 Guest Houses</h4>
                <p>Affordable options with local hospitality</p>
            </div>
            <div class="type">
                <h4>⛺ Camping Sites</h4>
                <p>Designated areas in Kalam and Ushu Valley</p>
            </div>
            <div class="type">
                <h4>🏞️ Eco Lodges</h4>
                <p>Sustainable stays in remote areas</p>
            </div>
        </div>
        <p><strong>Tip:</strong> Book in advance during peak season (June-August)</p>
    `;
    infoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showSafety() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-shield-alt"></i> Safety Guidelines for Swat Valley</h3>
        <ul>
            <li>✅ Register with local police/tourist information center upon arrival</li>
            <li>✅ Hire local guides for trekking and remote areas</li>
            <li>✅ Keep emergency numbers saved: 1122 (Rescue), 15 (Police)</li>
            <li>✅ Check weather forecasts before hiking</li>
            <li>✅ Stay on marked trails in mountains</li>
            <li>✅ Carry first aid kit and necessary medications</li>
            <li>✅ Respect local customs and dress codes</li>
            <li>❌ Avoid traveling alone at night</li>
            <li>❌ Don't litter - Keep Swat Valley clean</li>
            <li>❌ Avoid political discussions</li>
        </ul>
        <p><strong>Emergency Contact:</strong> Swat Tourism Police - 0996-721234</p>
    `;
    infoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC closes modals
    if (e.key === 'Escape') {
        [videoModal, bookingModal, infoModal, galleryModal].forEach(modal => {
            if (modal.style.display === 'flex' || modal.classList.contains('active')) {
                if (modal === galleryModal) {
                    closePhotoModal();
                } else {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }
        });
        if (weatherWidget.classList.contains('show')) {
            toggleWeatherWidget();
        }
    }
    
    // Ctrl+H goes home
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Ctrl+B opens booking
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        bookPackage('Swat Essentials', 249);
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s';
    });
});