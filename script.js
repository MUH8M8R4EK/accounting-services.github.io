// Глобальные переменные
let currentLang = 'ru';
let servicesSwiper = null;
let casesSwiper = null;
let solutionTimer = null;

// Иконки для услуг
const serviceIcons = [
    'file-chart-pie',
    'calculator',
    'file-search',
    'globe',
    'chart-pie',
    'handshake',
    'user-search',
    'scale'
];

/**
 * Главная функция инициализации сайта
 * Выполняет все необходимые настройки при загрузке страницы
 */
function initializeWebsite() {
    // 1. Инициализация интерактивного фона
    initDotGrid();
    
    // 2. Установка начального языка
    setActiveLanguageButton();
    
    // 3. Генерация карточек (только при первой загрузке)
    generateServiceCards();
    generateCaseStudies();
    
    // 4. Генерация всего контента
    generateAllContent();
    
    // 5. Инициализация слайдеров
    initializeSliders();
    
    // 6. Настройка интерактивных элементов
    setupInteractiveElements();
    
    // 7. Настройка анимаций при скролле
    setupScrollAnimations();
}

/**
 * Инициализация интерактивной сетки точек
 * Создает анимированный фон с точками, реагирующими на движение мыши
 */
function initDotGrid() {
    const canvas = document.getElementById('dot-grid');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let dots = [];
    let mouse = { x: null, y: null, radius: 100 };
    
    // Обработчик движения мыши
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Класс для точек
    class Dot {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 1;
            this.baseSize = this.size;
            this.speedX = Math.random() - 0.5;
            this.speedY = Math.random() - 0.5;
        }
        
        update() {
            // Взаимодействие с курсором
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    const tx = this.x - Math.cos(angle) * force * 10;
                    const ty = this.y - Math.sin(angle) * force * 10;
                    
                    this.x += (tx - this.x) * 0.1;
                    this.y += (ty - this.y) * 0.1;
                    this.size = this.baseSize + force * 3;
                }
            }
            
            // Движение точки
            this.x += this.speedX * 0.2;
            this.y += this.speedY * 0.2;
            
            // Возвращение точки в границы
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            // Плавное возвращение к исходному размеру
            if (this.size > this.baseSize) {
                this.size -= 0.05;
            }
        }
        
        draw() {
            ctx.fillStyle = 'rgba(50, 61, 75, 0.15)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Создание точек
    function createDots() {
        dots = [];
        const dotCount = Math.floor((canvas.width * canvas.height) / 2500);
        
        for (let i = 0; i < dotCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            dots.push(new Dot(x, y));
        }
    }
    
    // Анимация
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].draw();
            
            // Соединение точек
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(124, 160, 202, ${0.2 - distance/500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Изменение размера canvas
    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        createDots();
    }
    
    // Инициализация
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

/**
 * Установка активной кнопки языка
 */
function setActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Генерация всего контента
 * Обновляет все текстовые элементы на странице в соответствии с текущим языком
 */
function generateAllContent() {
    // 1. Обновление статического текста
    updateStaticContent();
    
    // 2. Обновление текста в карточках услуг
    updateServiceCardsContent();
    
    // 3. Обновление текста в кейсах
    updateCaseStudiesContent();
}

/**
 * Обновление статического текста
 */
function updateStaticContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        
        if (translation) {
            // Особый случай для кнопки с иконкой
            if (element.classList.contains('cta-button')) {
                element.innerHTML = `
                    <span>${translation}</span>
                    <div class="icon">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                `;
            } 
            // Обычный текст (используем innerHTML для поддержки <br/>)
            else {
                element.innerHTML = translation;
            }
        }
    });
}

/**
 * Обновление текста в карточках услуг
 */
function updateServiceCardsContent() {
    const serviceCards = document.querySelectorAll('.service-card h3');
    translations[currentLang].services.forEach((service, index) => {
        if (serviceCards[index]) {
            serviceCards[index].textContent = service.title;
        }
    });
}

/**
 * Обновление текста в кейсах
 */
function updateCaseStudiesContent() {
    const caseCards = document.querySelectorAll('.case-card');
    translations[currentLang].cases.forEach((study, index) => {
        if (caseCards[index]) {
            const frontTitle = caseCards[index].querySelector('.case-card-front h3');
            const frontDescription = caseCards[index].querySelector('.case-card-front p');
            const backTitle = caseCards[index].querySelector('.case-card-back h4');
            const backSolution = caseCards[index].querySelector('.case-card-back p');
            
            if (frontTitle) frontTitle.textContent = study.title;
            if (frontDescription) frontDescription.textContent = study.description;
            if (backTitle) backTitle.innerHTML = `<i class="fas fa-sync-alt"></i>${translations[currentLang].solution_text}`;
            if (backSolution) backSolution.textContent = study.solution;
        }
    });
}

/**
 * Генерация карточек услуг (только при первой загрузке)
 */
function generateServiceCards() {
    const container = document.querySelector('.services-swiper .swiper-wrapper');
    if (!container || container.children.length > 0) return;
    
    // Добавляем новые карточки
    translations[currentLang].services.forEach((service, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="service-card">
                <div class="service-icon">
                    <i data-lucide="${serviceIcons[index]}"></i>
                </div>
                <h3>${service.title}</h3>
            </div>
        `;
        container.appendChild(slide);
    });

    // Инициализируем иконки Lucide
    lucide.createIcons();
}

/**
 * Генерация кейсов (только при первой загрузке)
 */
function generateCaseStudies() {
    const casesContainer = document.querySelector('.cases-swiper .swiper-wrapper');
    if (!casesContainer || casesContainer.children.length > 0) return;

    const caseStudies = translations[currentLang].cases;
    caseStudies.forEach((study, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="case-card" data-case="${index}">
                <div class="case-card-inner">
                    <div class="case-card-front">
                        <h3>${study.title}</h3>
                        <p>${study.description}</p>
                    </div>
                    <div class="case-card-back">
                        <h4><i class="fas fa-sync-alt"></i>${translations[currentLang].solution_text}</h4>
                        <p>${study.solution}</p>
                    </div>
                </div>
            </div>
        `;
        casesContainer.appendChild(slide);
    });
}

/**
 * Инициализация слайдеров
 */
function initializeSliders() {
    // Инициализация слайдера услуг
    if (!servicesSwiper) {
        servicesSwiper = new Swiper('.services-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            },
            pagination: {
                el: '.services-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            grabCursor: true,
            centeredSlides: false,
            watchSlidesProgress: true,
            slideToClickedSlide: true
        });
    }

    // Инициализация слайдера кейсов
    if (!casesSwiper) {
        casesSwiper = new Swiper('.cases-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            grabCursor: true,
            centeredSlides: false,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                1200: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
            },
            on: {
                slideChange: function() {
                    clearTimeout(solutionTimer);
                    document.querySelectorAll('.solution-content').forEach(el => {
                        el.classList.remove('active');
                    });
                    document.querySelectorAll('.show-solution-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    const activeSlide = this.slides[this.activeIndex];
                    solutionTimer = setTimeout(() => {
                        const solutionContent = activeSlide.querySelector('.solution-content');
                        const solutionBtn = activeSlide.querySelector('.show-solution-btn');
                        if (solutionContent && solutionBtn) {
                            solutionContent.classList.add('active');
                            solutionBtn.classList.add('active');
                        }
                    }, 2000);
                }
            }
        });
    }
}

/**
 * Настройка интерактивных элементов
 */
function setupInteractiveElements() {
    // 1. Переключатель языка (кастомный)
    const langSwitcher = document.querySelector('.lang-switcher');
    const ruLabel = langSwitcher.querySelector('.lang-label.ru');
    const enLabel = langSwitcher.querySelector('.lang-label.en');
    const toggle = langSwitcher.querySelector('.lang-toggle');

    function setLang(isRu) {
        ruLabel.classList.toggle('active', isRu);
        enLabel.classList.toggle('active', !isRu);
        langSwitcher.classList.toggle('en-active', !isRu);
        currentLang = isRu ? 'ru' : 'en';
        setActiveLanguageButton();
        generateAllContent();
        setTimeout(initializeSliders, 10);
    }

    ruLabel.onclick = () => setLang(true);
    enLabel.onclick = () => setLang(false);
    toggle.onclick = () => setLang(!ruLabel.classList.contains('active'));
    
    // 2. Кнопка заказа аудита
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert(currentLang === 'ru' 
                ? 'Форма заказа аудита' 
                : 'Order Audit Form');
        });
    }

    // 3. Переворот карточек кейсов
    document.addEventListener('click', function(e) {
        if (e.target.closest('.case-card')) {
            const card = e.target.closest('.case-card');
            card.classList.toggle('flipped');
        }
    });
    
    // 4. Мобильная навигация
    document.querySelector('.prev-button')?.addEventListener('click', () => {
        casesSwiper.slidePrev();
    });
    
    document.querySelector('.next-button')?.addEventListener('click', () => {
        casesSwiper.slideNext();
    });

    // Обработчик клика по карточке услуги
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            // Плавная прокрутка к секции proposal
            const proposalSection = document.querySelector('.proposal');
            proposalSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

/**
 * Настройка анимаций при скролле
 */
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('section-title')) {
                    const cards = entry.target.closest('section').querySelectorAll('.service-card, .case-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, 100 * index);
                    });
                }
            }
        });
    }, observerOptions);

    // Наблюдаем за секциями
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Наблюдаем за заголовками
    document.querySelectorAll('.section-title, .hero-main-title, .hero-card-text').forEach(element => {
        observer.observe(element);
    });

    // Наблюдаем за карточками
    document.querySelectorAll('.service-card, .case-card, .proposal-card').forEach(card => {
        observer.observe(card);
    });
}

// Запускаем инициализацию после полной загрузки DOM
document.addEventListener('DOMContentLoaded', initializeWebsite);