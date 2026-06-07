document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loading Screen Execution ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.visibility = "hidden";
        }, 500);
    }, 850);

    // --- 2. Mobile Responsive Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        const spans = hamburger.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        } else {
            spans.forEach(s => s.style.transform = "none");
            spans[1].style.opacity = "1";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.querySelectorAll("span").forEach(s => s.style.transform = "none");
            hamburger.querySelectorAll("span")[1].style.opacity = "1";
        });
    });

    // --- 3. Intersection Observer Scroll Reveal ---
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- 4. Bi-lingual System Dictionary ---
    const dictionary = {
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "hero-badge": "Over 25 Years of Experience",
            "hero-title": "Bespoke Landscape Garden Designs in London",
            "hero-subtitle": "Professional gardening, high-end landscape design, and patio restoration services based in Crystal Palace and covering surrounding areas.",
            "hero-cta": "Call Colin Today",
            "about-title": "Crafting Outdoor Excellence Since 1999",
            "about-desc-1": "With more than a quarter-century of expertise in the landscaping industry, B.M.E Landscape Gardeners (Rocks Landscapes) specializes in turning standard gardens into beautiful architectural outdoor spaces. We operate directly from Crystal Palace, bringing reliable, high-quality residential maintenance and creative ground designs to life.",
            "about-desc-2": "Whether you require basic, recurring lawn maintenance, a total overhaul of a heavily overgrown wild garden, or the professional pressure washing and sealing of an old stone patio, our team ensures precision and unmatched aesthetic value.",
            "services-title": "Our Expert Services",
            "srv-1-title": "Landscape Design",
            "srv-1-desc": "Tailored landscaping concepts designed specifically around your lifestyle, soil type, and property layout, perfected over 25 years.",
            "srv-2-title": "Patio Cleaning & Restoration",
            "srv-2-desc": "Deep pressure washing, biological stain removal, re-sanding, and sealing to bring weathered paving stones back to pristine condition.",
            "srv-3-title": "Overgrown Garden Clearance",
            "srv-3-desc": "Complete heavy-duty clearance of wild, neglected, or overgrown gardens. We clear weeds, brush, roots, and haul away the green waste.",
            "srv-4-title": "Gardening & Grass Cutting",
            "srv-4-desc": "Precise lawn mowing, strategic hedge trimming, edging, and professional seasonal pruning of delicate shrubs and trees.",
            "srv-5-title": "Garden Shed Construction",
            "srv-5-desc": "Installation of strong concrete bases and assembly of durable timber or composite garden sheds for secure tool storage and workshops.",
            "srv-6-title": "Tree & Shrub Management",
            "srv-6-desc": "Expert planting schemes for new hedges, ongoing structural tree maintenance, or full root removal to clear up vital yard space.",
            "contact-title": "Transform Your Space Today",
            "contact-desc": "Get in touch directly with Colin to discuss design ideas, schedule routine garden maintenance, or request an evaluation visit.",
            "contact-name": "Colin • B.M.E Landscapes",
            "contact-role": "Landscape Designer & Horticulturist",
            "contact-coverage": "Proudly operating out of Crystal Palace, London, and nearby boroughs.",
            "footer-rights": "All rights reserved."
        },
        ro: {
            "loading": "Se încarcă...",
            "nav-home": "Acasă",
            "nav-about": "Despre Noi",
            "nav-services": "Servicii",
            "nav-contact": "Contact",
            "hero-badge": "Peste 25 de ani de experiență",
            "hero-title": "Design Personalizat de Grădini în Londra",
            "hero-subtitle": "Servicii profesionale de grădinărit, design peisagistic de top și restaurare terase cu sediul în Crystal Palace și zonele limitrofe.",
            "hero-cta": "Contactează-l pe Colin astăzi",
            "about-title": "Modelăm Excelența în Aer Liber din 1999",
            "about-desc-1": "Cu peste un sfert de secol de expertiză în industria peisagistică, B.M.E Landscape Gardeners (Rocks Landscapes) este specializată în transformarea grădinilor standard în spații exterioare arhitecturale superbe. Activăm direct din Crystal Palace, oferind întreținere rezidențială de încredere și amenajări creative.",
            "about-desc-2": "Fie că aveți nevoie de tuns gazonul periodic, de o curățare totală a unei grădini sălbatice și complet neîngrijite, sau de spălarea profesională sub presiune și sigilarea unei terase vechi din piatră, echipa noastră garantează precizie și o valoare estetică de neegalat.",
            "services-title": "Serviciile Noastre",
            "srv-1-title": "Design Peisagistic",
            "srv-1-desc": "Concepte peisagistice personalizate în funcție de stilul tău de viață, tipul de sol și arhitectura casei, perfecționate de-a lungul a 25 de ani.",
            "srv-2-title": "Curățare & Restaurare Terase",
            "srv-2-desc": "Spălare la presiune înaltă, eliminarea petelor biologice, re-nisipare și impermeabilizare pentru a reda pavajului strălucirea inițială.",
            "srv-3-title": "Defrișare Grădini Neîngrijite",
            "srv-3-desc": "Curățare completă și grea pentru curți abandonate sau invadate de vegetație. Îndepărtăm buruienile, arbuștii, rădăcinile și evacuăm deșeurile verzi.",
            "srv-4-title": "Grădinărit & Tuns Gazon",
            "srv-4-desc": "Cosire precisă a ierbii, tundere strategică a gardului viu, cosmetizare margini și toaletare sezonieră profesională a arborilor.",
            "srv-5-title": "Construcție Gherete & Căsuțe",
            "srv-5-desc": "Turnarea fundațiilor solide din beton și asamblarea magaziilor durabile din lemn sau compozit pentru depozitarea sigură a uneltelor.",
            "srv-6-title": "Gestionare Arbori & Arbuști",
            "srv-6-desc": "Planuri experte de plantare pentru garduri vii noi, întreținere structurală continuă a copacilor sau scoaterea completă a rădăcinilor.",
            "contact-title": "Transformă-ți Grădina Astăzi",
            "contact-desc": "Ia legătura direct cu Colin pentru a discuta idei de design, pentru a programa întreținerea periodică sau pentru a solicita o vizită de evaluare.",
            "contact-name": "Colin • B.M.E Landscapes",
            "contact-role": "Designer Peisagist & Horticultor",
            "contact-coverage": "Activăm cu mândrie în Crystal Palace, Londra și districtele învecinate.",
            "footer-rights": "Toate drepturile rezervate."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnRo = document.getElementById("lang-ro");
    const translatableElements = document.querySelectorAll("[data-i18n]");

    const switchLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[lang][key]) {
                el.innerText = dictionary[lang][key];
            }
        });

        if (lang === 'ro') {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "ro";
        } else {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.lang = "en";
        }
    };

    btnEn.addEventListener("click", () => switchLanguage('en'));
    btnRo.addEventListener("click", () => switchLanguage('ro'));
});
