// ==========================================================================
// 🔴 EDITING GUIDE: CHANGE ALL YOUR DATA HERE 🔴
// ==========================================================================

const siteConfig = {
    // 1. LINK SETTINGS
    bookingUrl: "https://calendly.com/your-link", // Updates all booking buttons instantly
    emailAddress: "hello@yourdomain.com",         // Updates all email links instantly
    
    // 2. ANALYTICS (Leave as "" if you don't have one yet)
    gaMeasurementId: "", // Example: "G-XXXXXXXXXX"
};

// 3. PORTFOLIO VIDEOS
const portfolioData = [
    { 
        id: 1, 
        title: "Dynamic Hook Sequence", 
        category: "Personal Brand", 
        client: "Creator John Doe", 
        description: "High-energy hook designed to stop the scroll.", 
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop", 
        video: "https://assets.mixkit.co/videos/preview/mixkit-content-creator-working-on-a-laptop-4282-large.mp4" 
    },
    { id: 2, title: "Educational Mini-Doc", category: "YouTube Shorts", client: "Finance Coach", description: "Condensing complex financial concepts.", thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop", video: "https://assets.mixkit.co/videos/preview/mixkit-content-creator-working-on-a-laptop-4282-large.mp4" },
    { id: 3, title: "Podcast Highlights", category: "Clips", client: "Tech Talk Pod", description: "Extracting the most engaging 30 seconds.", thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop", video: "https://assets.mixkit.co/videos/preview/mixkit-content-creator-working-on-a-laptop-4282-large.mp4" }
];

// 4. SERVICES
const servicesData = [
    { id: "01", title: "Short-Form Editing", description: "High-retention edits tailored specifically for TikTok, Reels, and YouTube Shorts." },
    { id: "02", title: "Motion Graphics", description: "Custom animations, 3D tracking, and visual effects to keep viewers visually stimulated." },
    { id: "03", title: "Dynamic Captions", description: "Eye-catching, animated subtitles customized with your brand colors and fonts." },
    { id: "04", title: "Content Strategy", description: "Consulting on hook structures, pacing, and retention tactics to maximize organic reach." }
];

// 5. WORK PROCESS
const processData = [
    { step: "Step 01", title: "Send Footage", description: "Upload your raw clips to our shared, organized cloud drive." },
    { step: "Step 02", title: "The Edit", description: "I cut, grade, animate, and sound-design the footage for maximum impact." },
    { step: "Step 03", title: "Review", description: "We review seamlessly via Frame.io for quick, time-stamped revisions." },
    { step: "Step 04", title: "Publish", description: "You receive the polished, high-resolution final files ready to go viral." }
];

// 6. SOCIAL LINKS (Icon SVGs provided, just change the URL)
const socialLinksData = [
    { platform: "Instagram", url: "https://instagram.com/yourhandle", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>` },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` },
    { platform: "Email", url: `mailto:${siteConfig.emailAddress}`, icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>` }
];

// 7. STRENGTHS
const strengthsData = [
    "Attention to detail", "Fast communication", "Consistent editing", 
    "Short-form specialization", "Clean motion design", "Retention-focused"
];

// 8. TESTIMONIALS
const testimonialsData = [
    { quote: "[PLACEHOLDER] Ahmad completely changed how my content performs. The pacing is flawless, and my watch time has doubled.", name: "Placeholder Client 1", role: "Creator & Entrepreneur", image: "" },
    { quote: "[PLACEHOLDER] Fast turnaround, incredible attention to detail, and he just 'gets' what makes a video engaging.", name: "Placeholder Client 2", role: "Business Coach", image: "" },
    { quote: "[PLACEHOLDER] Working with Ahmad is frictionless. I just drop the raw files in a folder, and two days later I have a viral-ready asset.", name: "Placeholder Client 3", role: "Agency Founder", image: "" }
];

// ==========================================================================
// SYSTEM LOGIC (Do not edit below unless you are a developer)
// ==========================================================================

// Analytics Injector
function initAnalytics() {
    if (siteConfig.gaMeasurementId && siteConfig.gaMeasurementId.trim() !== "") {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', siteConfig.gaMeasurementId);
    }
}

function trackEvent(eventName, eventParams = {}) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
    }
}

// Global Link Setup
function injectConfigLinks() {
    document.querySelectorAll('.book-call-btn').forEach(btn => {
        btn.href = siteConfig.bookingUrl;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.addEventListener('click', () => trackEvent('book_call_click', { location: btn.getAttribute('data-track') || 'unknown' }));
    });
    document.querySelectorAll('.email-link').forEach(link => {
        link.href = `mailto:${siteConfig.emailAddress}`;
        link.addEventListener('click', () => trackEvent('email_click', { location: link.getAttribute('data-track') || 'unknown' }));
    });
    const displayEmailEl = document.getElementById('display-email');
    if(displayEmailEl) displayEmailEl.textContent = siteConfig.emailAddress;
    
    const viewWorkBtn = document.getElementById('track-view-work');
    if(viewWorkBtn) viewWorkBtn.addEventListener('click', () => trackEvent('view_work_click'));
}

// Render Functions
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if(!grid) return;
    portfolioData.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View project: ${project.title}`);
        card.innerHTML = `
            <img src="${project.thumbnail}" alt="Thumbnail for ${project.title}" class="portfolio-thumb" loading="lazy">
            <div class="portfolio-overlay">
                <span class="portfolio-category">${project.category}</span>
                <h3 class="portfolio-title">${project.title}</h3>
                <span class="portfolio-client">${project.client}</span>
            </div>
            <div class="play-btn-overlay"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        `;
        card.addEventListener('click', () => openModal(project));
        card.addEventListener('keydown', (e) => { if(e.key === 'Enter') openModal(project); });
        grid.appendChild(card);
    });
}

function renderServices() {
    const grid = document.getElementById('services-grid');
    if(!grid) return;
    servicesData.forEach((service) => {
        const item = document.createElement('div');
        item.className = 'service-item';
        item.innerHTML = `<span class="service-number">${service.id}</span><h3 class="service-title">${service.title}</h3><p class="service-desc">${service.description}</p>`;
        grid.appendChild(item);
    });
}

function renderProcess() {
    const timeline = document.getElementById('process-timeline');
    if(!timeline) return;
    processData.forEach((process) => {
        const step = document.createElement('div');
        step.className = 'process-step';
        step.innerHTML = `<div class="process-dot"></div><div class="process-step-num">${process.step}</div><h3 class="process-step-title">${process.title}</h3><p class="process-step-desc">${process.description}</p>`;
        timeline.appendChild(step);
    });
}

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if(!container) return;
    socialLinksData.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'social-btn';
        anchor.setAttribute('aria-label', link.platform);
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.innerHTML = link.icon;
        container.appendChild(anchor);
    });
}

function renderStrengths() {
    const grid = document.getElementById('strengths-grid');
    if(!grid) return;
    strengthsData.forEach(strength => {
        const item = document.createElement('div');
        item.className = 'strength-item';
        item.innerHTML = `<div class="strength-dot"></div><span>${strength}</span>`;
        grid.appendChild(item);
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if(!grid) return;
    testimonialsData.forEach(test => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        const initials = test.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        const avatarHTML = test.image ? `<img src="${test.image}" alt="${test.name}" class="client-avatar" loading="lazy">` : `<div class="client-avatar-placeholder">${initials}</div>`;
        card.innerHTML = `<svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L16.44 14.282C17.519 11.233 18.067 8.922 18.067 7.348C18.067 6.326 17.771 5.485 17.18 4.825C16.589 4.165 15.774 3.835 14.735 3.835C13.676 3.835 12.804 4.225 12.119 5.005C11.454 5.765 11.121 6.745 11.121 7.945C11.121 8.905 11.371 9.775 11.871 10.555C12.391 11.335 13.06 11.725 13.879 11.725C14.199 11.725 14.479 11.665 14.719 11.545C14.399 12.925 13.629 14.505 12.409 16.285L14.017 21ZM5.09701 21L7.52001 14.282C8.59901 11.233 9.14701 8.922 9.14701 7.348C9.14701 6.326 8.85101 5.485 8.26001 4.825C7.66901 4.165 6.85401 3.835 5.81501 3.835C4.75601 3.835 3.88401 4.225 3.19901 5.005C2.53401 5.765 2.20101 6.745 2.20101 7.945C2.20101 8.905 2.45101 9.775 2.95101 10.555C3.47101 11.335 4.14001 11.725 4.95901 11.725C5.27901 11.725 5.55901 11.665 5.79901 11.545C5.47901 12.925 4.70901 14.505 3.48901 16.285L5.09701 21Z"></path></svg><p class="testimonial-text">"${test.quote}"</p><div class="client-info">${avatarHTML}<div class="client-details"><span class="client-name">${test.name}</span><span class="client-role">${test.role}</span></div></div>`;
        grid.appendChild(card);
    });
}

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isActive = mobileMenu.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isActive);
    
    if (isActive) {
        hamburgerLines[0].style.transform = 'translateY(4px) rotate(45deg)';
        hamburgerLines[1].style.transform = 'translateY(-4px) rotate(-45deg)';
    } else {
        hamburgerLines[0].style.transform = 'translateY(0) rotate(0)';
        hamburgerLines[1].style.transform = 'translateY(0) rotate(0)';
    }
}
mobileMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Modal
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

function openModal(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-client').textContent = project.client ? `for ${project.client}` : '';
    document.getElementById('modal-description').textContent = project.description;
    modalVideo.src = project.video;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(e => console.log("Autoplay prevented:", e));
    trackEvent('portfolio_view', { title: project.title });
    
    setTimeout(() => modalClose.focus(), 100);
}

function closeModal() {
    modal.classList.remove('active');
    modalVideo.pause();
    setTimeout(() => { modalVideo.src = ''; }, 300);
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Set Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Init
document.addEventListener('DOMContentLoaded', () => {
    initAnalytics();
    injectConfigLinks();
    renderPortfolio();
    renderServices();
    renderProcess();
    renderSocialLinks();
    renderStrengths();
    renderTestimonials();
});
     
