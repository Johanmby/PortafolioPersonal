// English is the default. Every data-i18n node on the page is translated.
const translations = {
    en: {
        'meta.title': 'Johan Benítez — Fullstack Developer',
        preloader: 'LOADING PORTFOLIO',
        'lang.label': 'Language',
        'nav.about': 'ABOUT',
        'nav.projects': 'PROJECTS',
        'nav.knowledge': 'KNOWLEDGE',
        'nav.experience': 'EXPERIENCE',
        'nav.contact': 'CONTACT',
        'hero.kicker': 'Web · Mobile · Cloud',
        'hero.lead': 'Fullstack developer crafting robust and scalable digital experiences.',
        'hero.cv': 'GET CV →',
        'about.scene': 'SCENE 02 — ABOUT',
        'about.title': 'WHO AM I',
        'about.fig': 'FIG. 01',
        'about.portrait': 'PROFILE — PORTRAIT',
        'about.meLabel': '(me)',
        'about.me': 'Graduated in Computer Engineering from the Polytechnic University of Valencia. Passionate about technology, programming, and entrepreneurship.',
        'about.aboutLabel': '(about)',
        'about.about': 'Experienced in web, hardware systems and financial payment technologies. Thrive in teams and always aim for top performance.',
        'about.languages': '/ LANGUAGES',
        'lang.spanish': 'Spanish',
        'lang.chinese': 'Chinese',
        'lang.english': 'English',
        'lang.valencian': 'Valencian',
        'lang.korean': 'Korean',
        'level.1': '01 NATIVE',
        'level.2': '02 NATIVE',
        'level.3': '03 HIGH',
        'level.4': '04 HIGH',
        'level.5': '05 BASIC',
        'about.background': '/ BACKGROUND',
        'about.degreeBadge': '(DEGREE) - UPV',
        'about.upv': 'Polytechnic University of Valencia',
        'about.degree': "Bachelor's Degree in Computer Engineering",
        'about.erasmusBadge': '(ERASMUS) - UTCN',
        'about.utcn': 'Technical University of Cluj-Napoca',
        'about.erasmus': 'Erasmus+ BIPS in Computer Engineering',
        'projects.title': 'PROJECTS',
        'projects.alpha': 'Project Alpha',
        'projects.arch': 'System Architecture',
        'projects.front': 'Frontend Interface',
        'projects.back': 'Backend Logic',
        'projects.db': 'Database Schema',
        'projects.cloud': 'Cloud Integration',
        'knowledge.scene': 'SCENE 03 — SKILLS',
        'knowledge.title': 'KNOWLEDGE',
        'k1.tag': '(01) FRONTEND',
        'k1.title': 'UI/UX & FRONTEND',
        'k1.body': "Design is more than looks — it's about clarity and connection. Clean, responsive interfaces that feel intuitive across devices.",
        'k2.tag': '(02) BACKEND',
        'k2.title': 'BACKEND & DATABASE',
        'k2.body': 'Solid foundations for applications: scalable backend architectures, efficient data and secure communication between services.',
        'k3.tag': '(03) MOBILE',
        'k3.title': 'MOBILE DEVELOPMENT',
        'k3.body': 'Cross-platform mobile applications built for high performance, smooth animations, and native device integration.',
        'k4.tag': '(04) CLOUD',
        'k4.title': 'CLOUD & DevOps',
        'k4.body': 'Automated deployments, serverless architectures, and reliable cloud infrastructure to keep systems running smoothly.',
        'k5.tag': '(05) HARDWARE',
        'k5.title': 'HARDWARE SYSTEMS',
        'k5.body': 'IoT devices, embedded systems, and UAV testing integrating low-level code with practical real-world electronics.',
        'k6.tag': '(06) SECURITY',
        'k6.title': 'SECURITY & PAYMENTS',
        'k6.body': 'Secure financial payment gateways, encrypted data transmission, and robust authentication protocols.',
        'k7.tag': '(07) ARCHITECTURE',
        'k7.title': 'SYSTEM ARCHITECTURE',
        'k7.body': 'Designing robust distributed systems, microservices, and modular codebases built to scale.',
        'exp.scene': 'SCENE 06 — TRACK RECORD',
        'exp.title': 'EXPERIENCE',
        'exp.work': '/ WORK',
        'exp.role1': 'DEVOPS DEVELOPER',
        'exp.role2': 'DIGITAL LEAD',
        'exp.role3': 'PROJECT MANAGER',
        'exp.company': 'COMPANY',
        'exp.self': 'SELF',
        'exp.soft': '/ SOFT SKILLS',
        'skill.pci': 'PCI KNOWLEDGE',
        'skill.cyber': 'CYBERSECURITY',
        'skill.pm': 'PROJECT MANAGER',
        'skill.scrum': 'SCRUM MANAGER',
        'skill.team': 'TEAM WORKING',
        'skill.lead': 'LEAD EXPERIENCE',
        'exp.certs': '/ CERTIFICATIONS',
        'cert.google': 'GOOGLE CYBERSECURITY CERT.',
        'cert.sap': 'SAP S/4 HANA CONSULTANT',
        'cert.hsk': 'HSK CHINESE CERT.',
        'cert.fce': 'FCE ENGLISH CERT.',
        'cert.acm': 'ACM MEMBER',
        'cert.sql': 'SQL INJECTION HACKATHON',
        'cert.upv': 'UPV-ITI HACKATHON',
        'cert.dival': 'DIVALHACK VALENCIA COUNCIL',
        'cert.adabyron': 'ADABYRON CODE COMPETITION',
        'contact.scene': 'SCENE 07 — OPEN TO OPPORTUNITIES WORLDWIDE',
        'contact.title': "Let's connect",
        'contact.profile': 'Profile ↗',
        'contact.message': 'Message ↗',
        'contact.form': '/ CONTACT',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.messageLabel': 'Message',
        'contact.send': 'Send message →',
        menuOpen: 'Open menu',
        menuClose: 'Close menu'
    },
    es: {
        'meta.title': 'Johan Benítez — Desarrollador Fullstack',
        preloader: 'CARGANDO PORTAFOLIO',
        'lang.label': 'Idioma',
        'nav.about': 'SOBRE',
        'nav.projects': 'PROYECTOS',
        'nav.knowledge': 'CONOCIMIENTO',
        'nav.experience': 'EXPERIENCIA',
        'nav.contact': 'CONTACTO',
        'hero.kicker': 'Web · Móvil · Cloud',
        'hero.lead': 'Desarrollador fullstack que crea experiencias digitales sólidas y escalables.',
        'hero.cv': 'VER CV →',
        'about.scene': 'ESCENA 02 — SOBRE MÍ',
        'about.title': 'QUIÉN SOY',
        'about.fig': 'FIG. 01',
        'about.portrait': 'PERFIL — RETRATO',
        'about.meLabel': '(yo)',
        'about.me': 'Graduado en Ingeniería Informática por la Universitat Politècnica de València. Apasionado por la tecnología, la programación y el emprendimiento.',
        'about.aboutLabel': '(sobre)',
        'about.about': 'Experiencia en web, sistemas hardware y tecnologías de pago. Me desenvuelvo en equipo y busco siempre el máximo rendimiento.',
        'about.languages': '/ IDIOMAS',
        'lang.spanish': 'Español',
        'lang.chinese': 'Chino',
        'lang.english': 'Inglés',
        'lang.valencian': 'Valenciano',
        'lang.korean': 'Coreano',
        'level.1': '01 NATIVO',
        'level.2': '02 NATIVO',
        'level.3': '03 ALTO',
        'level.4': '04 ALTO',
        'level.5': '05 BÁSICO',
        'about.background': '/ FORMACIÓN',
        'about.degreeBadge': '(GRADO) - UPV',
        'about.upv': 'Universitat Politècnica de València',
        'about.degree': 'Grado en Ingeniería Informática',
        'about.erasmusBadge': '(ERASMUS) - UTCN',
        'about.utcn': 'Universidad Técnica de Cluj-Napoca',
        'about.erasmus': 'Erasmus+ BIPS en Ingeniería Informática',
        'projects.title': 'PROYECTOS',
        'projects.alpha': 'Proyecto Alpha',
        'projects.arch': 'Arquitectura de sistemas',
        'projects.front': 'Interfaz frontend',
        'projects.back': 'Lógica backend',
        'projects.db': 'Esquema de base de datos',
        'projects.cloud': 'Integración cloud',
        'knowledge.scene': 'ESCENA 03 — HABILIDADES',
        'knowledge.title': 'CONOCIMIENTO',
        'k1.tag': '(01) FRONTEND',
        'k1.title': 'UI/UX Y FRONTEND',
        'k1.body': 'El diseño es más que la apariencia: es claridad y conexión. Interfaces limpias y responsive que se sienten intuitivas en cualquier dispositivo.',
        'k2.tag': '(02) BACKEND',
        'k2.title': 'BACKEND Y BASES DE DATOS',
        'k2.body': 'Bases sólidas para las aplicaciones: arquitecturas backend escalables, datos eficientes y comunicación segura entre servicios.',
        'k3.tag': '(03) MÓVIL',
        'k3.title': 'DESARROLLO MÓVIL',
        'k3.body': 'Aplicaciones móviles multiplataforma, con alto rendimiento, animaciones fluidas e integración con el dispositivo.',
        'k4.tag': '(04) CLOUD',
        'k4.title': 'CLOUD Y DevOps',
        'k4.body': 'Despliegues automatizados, arquitecturas serverless e infraestructura cloud fiable para que los sistemas sigan en marcha.',
        'k5.tag': '(05) HARDWARE',
        'k5.title': 'SISTEMAS HARDWARE',
        'k5.body': 'Dispositivos IoT, sistemas embebidos y pruebas de UAV, uniendo código de bajo nivel con electrónica real.',
        'k6.tag': '(06) SEGURIDAD',
        'k6.title': 'SEGURIDAD Y PAGOS',
        'k6.body': 'Pasarelas de pago seguras, transmisión cifrada de datos y protocolos de autenticación robustos.',
        'k7.tag': '(07) ARQUITECTURA',
        'k7.title': 'ARQUITECTURA DE SISTEMAS',
        'k7.body': 'Sistemas distribuidos, microservicios y bases de código modulares pensadas para escalar.',
        'exp.scene': 'ESCENA 06 — TRAYECTORIA',
        'exp.title': 'EXPERIENCIA',
        'exp.work': '/ TRABAJO',
        'exp.role1': 'DESARROLLADOR DEVOPS',
        'exp.role2': 'RESPONSABLE DIGITAL',
        'exp.role3': 'JEFE DE PROYECTO',
        'exp.company': 'EMPRESA',
        'exp.self': 'PROPIO',
        'exp.soft': '/ HABILIDADES',
        'skill.pci': 'CONOCIMIENTO PCI',
        'skill.cyber': 'CIBERSEGURIDAD',
        'skill.pm': 'GESTIÓN DE PROYECTOS',
        'skill.scrum': 'SCRUM MANAGER',
        'skill.team': 'TRABAJO EN EQUIPO',
        'skill.lead': 'EXPERIENCIA DE LIDERAZGO',
        'exp.certs': '/ CERTIFICACIONES',
        'cert.google': 'CERT. CIBERSEGURIDAD GOOGLE',
        'cert.sap': 'CONSULTOR SAP S/4 HANA',
        'cert.hsk': 'CERT. HSK DE CHINO',
        'cert.fce': 'CERT. FCE DE INGLÉS',
        'cert.acm': 'MIEMBRO ACM',
        'cert.sql': 'HACKATHON SQL INJECTION',
        'cert.upv': 'HACKATHON UPV-ITI',
        'cert.dival': 'DIVALHACK DIPUTACIÓN DE VALENCIA',
        'cert.adabyron': 'COMPETICIÓN ADABYRON',
        'contact.scene': 'ESCENA 07 — ABIERTO A OPORTUNIDADES EN TODO EL MUNDO',
        'contact.title': 'Conectemos',
        'contact.profile': 'Perfil ↗',
        'contact.message': 'Mensaje ↗',
        'contact.form': '/ CONTACTO',
        'contact.name': 'Nombre',
        'contact.email': 'Correo',
        'contact.messageLabel': 'Mensaje',
        'contact.send': 'Enviar mensaje →',
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú'
    },
    fr: {
        'meta.title': 'Johan Benítez — Développeur fullstack',
        preloader: 'CHARGEMENT DU PORTFOLIO',
        'lang.label': 'Langue',
        'nav.about': 'À PROPOS',
        'nav.projects': 'PROJETS',
        'nav.knowledge': 'COMPÉTENCES',
        'nav.experience': 'EXPÉRIENCE',
        'nav.contact': 'CONTACT',
        'hero.kicker': 'Web · Mobile · Cloud',
        'hero.lead': 'Développeur fullstack, je conçois des expériences numériques solides et évolutives.',
        'hero.cv': 'VOIR LE CV →',
        'about.scene': 'SCÈNE 02 — À PROPOS',
        'about.title': 'QUI SUIS-JE',
        'about.fig': 'FIG. 01',
        'about.portrait': 'PROFIL — PORTRAIT',
        'about.meLabel': '(moi)',
        'about.me': "Diplômé en ingénierie informatique de l'Université polytechnique de Valence. Passionné de technologie, de programmation et d'entrepreneuriat.",
        'about.aboutLabel': '(profil)',
        'about.about': "Expérience en web, systèmes matériels et technologies de paiement. À l'aise en équipe, je vise toujours la meilleure performance.",
        'about.languages': '/ LANGUES',
        'lang.spanish': 'Espagnol',
        'lang.chinese': 'Chinois',
        'lang.english': 'Anglais',
        'lang.valencian': 'Valencien',
        'lang.korean': 'Coréen',
        'level.1': '01 NATIF',
        'level.2': '02 NATIF',
        'level.3': '03 AVANCÉ',
        'level.4': '04 AVANCÉ',
        'level.5': '05 DÉBUTANT',
        'about.background': '/ PARCOURS',
        'about.degreeBadge': '(DIPLÔME) - UPV',
        'about.upv': 'Université polytechnique de Valence',
        'about.degree': 'Licence en ingénierie informatique',
        'about.erasmusBadge': '(ERASMUS) - UTCN',
        'about.utcn': 'Université technique de Cluj-Napoca',
        'about.erasmus': 'Erasmus+ BIPS en ingénierie informatique',
        'projects.title': 'PROJETS',
        'projects.alpha': 'Projet Alpha',
        'projects.arch': 'Architecture système',
        'projects.front': 'Interface frontend',
        'projects.back': 'Logique backend',
        'projects.db': 'Schéma de base de données',
        'projects.cloud': 'Intégration cloud',
        'knowledge.scene': 'SCÈNE 03 — COMPÉTENCES',
        'knowledge.title': 'COMPÉTENCES',
        'k1.tag': '(01) FRONTEND',
        'k1.title': 'UI/UX ET FRONTEND',
        'k1.body': "Le design va au-delà de l'apparence : clarté et lien. Des interfaces nettes et responsive, intuitives sur tous les appareils.",
        'k2.tag': '(02) BACKEND',
        'k2.title': 'BACKEND ET BASES DE DONNÉES',
        'k2.body': 'Des bases solides pour les applications : architectures backend évolutives, données efficaces et communication sécurisée entre services.',
        'k3.tag': '(03) MOBILE',
        'k3.title': 'DÉVELOPPEMENT MOBILE',
        'k3.body': "Applications mobiles multiplateformes, performantes, avec des animations fluides et l'intégration native de l'appareil.",
        'k4.tag': '(04) CLOUD',
        'k4.title': 'CLOUD ET DevOps',
        'k4.body': 'Déploiements automatisés, architectures serverless et infrastructure cloud fiable pour maintenir les systèmes en service.',
        'k5.tag': '(05) HARDWARE',
        'k5.title': 'SYSTÈMES MATÉRIELS',
        'k5.body': "Objets connectés, systèmes embarqués et essais d'UAV, reliant le code bas niveau à l'électronique réelle.",
        'k6.tag': '(06) SÉCURITÉ',
        'k6.title': 'SÉCURITÉ ET PAIEMENTS',
        'k6.body': "Passerelles de paiement sécurisées, transmission chiffrée des données et protocoles d'authentification robustes.",
        'k7.tag': '(07) ARCHITECTURE',
        'k7.title': 'ARCHITECTURE SYSTÈME',
        'k7.body': "Systèmes distribués, microservices et bases de code modulaires conçus pour passer à l'échelle.",
        'exp.scene': 'SCÈNE 06 — PARCOURS',
        'exp.title': 'EXPÉRIENCE',
        'exp.work': '/ TRAVAIL',
        'exp.role1': 'DÉVELOPPEUR DEVOPS',
        'exp.role2': 'RESPONSABLE DIGITAL',
        'exp.role3': 'CHEF DE PROJET',
        'exp.company': 'ENTREPRISE',
        'exp.self': 'PERSO',
        'exp.soft': '/ COMPÉTENCES',
        'skill.pci': 'CONNAISSANCE PCI',
        'skill.cyber': 'CYBERSÉCURITÉ',
        'skill.pm': 'GESTION DE PROJET',
        'skill.scrum': 'SCRUM MANAGER',
        'skill.team': "TRAVAIL D'ÉQUIPE",
        'skill.lead': 'EXPÉRIENCE DE LEAD',
        'exp.certs': '/ CERTIFICATIONS',
        'cert.google': 'CERT. CYBERSÉCURITÉ GOOGLE',
        'cert.sap': 'CONSULTANT SAP S/4 HANA',
        'cert.hsk': 'CERT. HSK DE CHINOIS',
        'cert.fce': "CERT. FCE D'ANGLAIS",
        'cert.acm': 'MEMBRE ACM',
        'cert.sql': 'HACKATHON SQL INJECTION',
        'cert.upv': 'HACKATHON UPV-ITI',
        'cert.dival': 'DIVALHACK CONSEIL DE VALENCE',
        'cert.adabyron': 'COMPÉTITION ADABYRON',
        'contact.scene': 'SCÈNE 07 — OUVERT AUX OPPORTUNITÉS DANS LE MONDE',
        'contact.title': 'Échangeons',
        'contact.profile': 'Profil ↗',
        'contact.message': 'Message ↗',
        'contact.form': '/ CONTACT',
        'contact.name': 'Nom',
        'contact.email': 'E-mail',
        'contact.messageLabel': 'Message',
        'contact.send': 'Envoyer le message →',
        menuOpen: 'Ouvrir le menu',
        menuClose: 'Fermer le menu'
    }
};

const langButtons = document.querySelectorAll('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const langDropdownToggle = document.querySelector('.lang-dropdown-toggle');
const langDropdownMenu = document.querySelector('.lang-dropdown-menu');
const langCurrent = document.querySelector('.lang-dropdown-current');

function setLangMenuOpen(open) {
    if (!langDropdown || !langDropdownToggle || !langDropdownMenu) return;
    langDropdown.classList.toggle('open', open);
    langDropdownToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    langDropdownMenu.hidden = !open;
}

function applyLanguage(lang) {
    const activeLang = translations[lang] ? lang : 'en';
    const pack = translations[activeLang];
    document.documentElement.lang = activeLang;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (pack[key]) node.textContent = pack[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
        const key = node.getAttribute('data-i18n-aria');
        if (pack[key]) node.setAttribute('aria-label', pack[key]);
    });
    langButtons.forEach((button) => {
        const active = button.dataset.lang === activeLang;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
        if (button.getAttribute('role') === 'option') {
            button.setAttribute('aria-selected', active ? 'true' : 'false');
        }
    });
    if (langCurrent) langCurrent.textContent = activeLang.toUpperCase();
    const toggle = document.querySelector('.nav-toggle');
    const menuOpen = document.querySelector('.navbar')?.classList.contains('menu-open');
    if (toggle) {
        toggle.setAttribute('aria-label', menuOpen ? pack.menuClose : pack.menuOpen);
    }
    setLangMenuOpen(false);
    try {
        localStorage.setItem('portfolio-lang', activeLang);
    } catch (err) {
        /* storage can be blocked; the visible language still updates */
    }
}

let savedLang = 'en';
try {
    savedLang = localStorage.getItem('portfolio-lang') || 'en';
} catch (err) {
    savedLang = 'en';
}
applyLanguage(savedLang);

langButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

if (langDropdownToggle) {
    langDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = langDropdownToggle.getAttribute('aria-expanded') === 'true';
        setLangMenuOpen(!open);
    });
}

document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) setLangMenuOpen(false);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.loader-progress');
    const percentText = document.querySelector('.loader-percent');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hidden');

                // Animate elements after preloader with a slight delay
                setTimeout(() => {
                    document.querySelector('.hero h1').classList.add('show');
                    document.querySelector('.hero p').classList.add('show');
                    document.querySelector('.hero-image img').classList.add('show');
                    document.querySelector('.hero-actions').classList.add('show');
                }, 200);

                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 200);
        }
        progressBar.style.width = progress + '%';
        percentText.textContent = Math.round(progress) + '%';
    }, 50);
});

// Cursor Swarm animation
const swarm = new CursorSwarm({
    cursors: 6,
    startPosition: 'random',
    speed: 1.3,
    idle: 'hide',
    relocation: 0.5,
    copyPaste: true
}).init();

// Mobile menu — desktop nav stays a horizontal bar
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');

function currentLangPack() {
    const lang = document.documentElement.lang;
    return translations[lang] || translations.en;
}

function setMenuOpen(open) {
    navbar.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const pack = currentLangPack();
    navToggle.setAttribute('aria-label', open ? pack.menuClose : pack.menuOpen);
}

if (navToggle) {
    navToggle.addEventListener('click', () => {
        setLangMenuOpen(false);
        setMenuOpen(!navbar.classList.contains('menu-open'));
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-right a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (navbar.classList.contains('menu-open')) {
            setMenuOpen(false);
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && navbar.classList.contains('menu-open')) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (langDropdownToggle && langDropdownToggle.getAttribute('aria-expanded') === 'true') {
        setLangMenuOpen(false);
        langDropdownToggle.focus();
        return;
    }
    if (navbar.classList.contains('menu-open')) {
        setMenuOpen(false);
        navToggle.focus();
    }
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(contactForm);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const message = String(data.get('message') || '').trim();
        const subject = encodeURIComponent('Portfolio — ' + name);
        const body = encodeURIComponent(name + '\n' + email + '\n\n' + message);
        window.location.href = 'mailto:johan@example.com?subject=' + subject + '&body=' + body;
    });
}

// Knowledge: page scroll drives the slides inside the sticky scene
const knowledgeSection = document.querySelector('.knowledge-section');
const thumb = document.getElementById('knowledgeThumb');
const vscroll = document.querySelector('.knowledge-vscroll');
const currentSlideText = document.getElementById('current-slide');
const slides = document.querySelectorAll('.knowledge-slide');

function updateKnowledge() {
    if (!knowledgeSection || !slides.length) return;

    const rect = knowledgeSection.getBoundingClientRect();
    const stickyTop = 60;
    const maxScroll = knowledgeSection.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(stickyTop - rect.top, 0), Math.max(maxScroll, 0));
    const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
    let index = Math.round(progress * (slides.length - 1));
    index = Math.min(slides.length - 1, Math.max(0, index));

    slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    if (currentSlideText) {
        currentSlideText.textContent = String(index + 1).padStart(2, '0');
    }

    if (thumb && vscroll) {
        const travel = vscroll.clientHeight - thumb.offsetHeight;
        thumb.style.transform = 'translateY(' + (progress * travel) + 'px)';
    }
}

let knowledgeTick = false;
function requestKnowledgeUpdate() {
    if (knowledgeTick) return;
    knowledgeTick = true;
    requestAnimationFrame(() => {
        updateKnowledge();
        knowledgeTick = false;
    });
}

window.addEventListener('scroll', requestKnowledgeUpdate, { passive: true });
window.addEventListener('resize', requestKnowledgeUpdate);
updateKnowledge();
