// Локализация данных
const translations = {
    ru: {
        hero_title: "Мы делаем учет понятным",
        hero_subtitle: "Ведем учет чтобы вы могли вести бизнес. Ваш бухгалтер, финансист и бизнес-наставник",
        services_title: "Услуги",
        cases_title: "Кейсы",
        proposal_title: "Экспресс-проверка бухгалтерского учета",
        proposal_text: "Бесплатно при заключении договора!",
        proposal_button: "Заказать аудит",
        footer_text: "© 2023 Financial Audit Pro. Все права защищены.",
        services: [
            {
                title: "Аудит и восстановление учета вашего бизнеса",
                description: "Полный анализ финансовой деятельности с восстановлением документации"
            },
            {
                title: "Ведение бухгалтерского и налогового учета любой сложности",
                description: "Профессиональное сопровождение вашей финансовой отчетности"
            },
            {
                title: "Юридические консультации анализ договоров и сделок",
                description: "Правовая экспертиза и сопровождение бизнес-операций"
            },
            {
                title: "Ведение учета по ВЭД",
                description: "Специализированное сопровождение внешнеэкономической деятельности"
            },
            {
                title: "Налоговая оптимизация и финансовое моделирование",
                description: "Разработка стратегий для минимизации налоговой нагрузки"
            },
            {
                title: "Помощь в ведении бизнеса заграницей (ОАЭ)",
                description: "Многолетний опыт сопровождения клиентов"
            },
            {
                title: "Подбор кадров (свой метод тестирования и подбора персонала)",
                description: "Поиск и оценка квалифицированных финансовых специалистов"
            },
            {
                title: "Защита и представление ваших интересов в ИФНС",
                description: "Профессиональное представительство в налоговых органах"
            }
        ],
        cases: [
            {
                title: "Оптимизация налогообложения",
                description: "Крупное оптовое предприятие обратилось к нам с проблемой: разработать оптимальную схему налогообложения и оптимизации расходов. Налоговая нагрузка была оценена в 20 000 000 рублей в квартал, что для предприятия являлось критическим фактором.",
                solution: "Нашими специалистами были проанализированы все расходы (прямые и косвенные), выявлены проблемные точки и разработана стратегия, которую одобрил учредитель предприятия. Таким образом налоговая нагрузка снизилась до 8 000 000 рублей в квартал."
            },
            {
                title: "Аудит перед приобретением бизнеса",
                description: "К нам обратился собственник производственного предприятия с целью расширения своего бизнеса. Появилась потребность приобрести производственное предприятие в другом регионе, но были сомнения в финансовой стабильности и прибыльности. Доступ в учетную систему нам был дан удаленно.",
                solution: "Наш специалист произвел полный аудит и финансовый анализ бизнеса. И заключил, что часть расходов умышленно скрывалась от покупателя и бизнес казался для него прибыльным. Была дана рекомендация не совершать покупку, т.к. в реальности предприятие являлось убыточным."
            },
            {
                title: "Оспаривание налоговых доначислений",
                description: "К нам обратилось крупное оптово-производственное предприятие с таким запросом: ФНС доначислила крупную сумму налога на добавленную стоимость, а так же налога на прибыль организаций по итогам двух прошедших лет. Штатная бухгалтерия оспорить доначисление не смогла.",
                solution: "Наш эксперт проанализировал и осуществил экспресс-аудит бизнеса. По итогам аудита было установлено, что учет велся неверно в течение последних 2 лет. В результате нами был восстановлен учет, переформирована и сдана отчетность, оспорены налоговые доначисления, проведен подбор новых сотрудников и переформирован бухгалтерский отдел."
            }
        ]
    },
    en: {
        hero_title: "We Make Accounting Understandable",
        hero_subtitle: "We handle accounting so you can run your business. Your accountant, financial advisor, and business mentor",
        services_title: "Services",
        cases_title: "Cases",
        proposal_title: "Express Accounting Check",
        proposal_text: "Free when signing a contract!",
        proposal_button: "Order Audit",
        footer_text: "© 2023 Financial Audit Pro. All rights reserved.",
        services: [
            {
                title: "Audit and restoration of your business accounting",
                description: "Comprehensive financial activity analysis with documentation restoration"
            },
            {
                title: "Accounting and tax accounting of any complexity",
                description: "Professional management of your financial reporting"
            },
            {
                title: "Legal consultations, contract and deal analysis",
                description: "Legal expertise and business operations support"
            },
            {
                title: "Accounting for foreign economic activity (import/export)",
                description: "Specialized support for foreign economic activities"
            },
            {
                title: "Tax optimization and financial modeling",
                description: "Development of strategies to minimize tax burden"
            },
            {
                title: "Assistance in doing business abroad (UAE)",
                description: "Many years of experience in client support"
            },
            {
                title: "Personnel selection (proprietary testing method)",
                description: "Recruitment and assessment of qualified financial specialists"
            },
            {
                title: "Protection and representation of your interests in tax authorities",
                description: "Professional representation in tax authorities"
            }
        ],
        cases: [
            {
                title: "Tax Optimization",
                description: "A large wholesale enterprise approached us with a problem: to develop an optimal taxation scheme and optimize expenses. The tax burden was estimated at 20,000,000 rubles per quarter, which was a critical factor for the enterprise.",
                solution: "Our specialists analyzed all expenses (direct and indirect), identified problem areas, and developed a strategy approved by the founder of the enterprise. As a result, the tax burden decreased to 8,000,000 rubles per quarter."
            },
            {
                title: "Pre-Acquisition Audit",
                description: "The owner of a manufacturing enterprise approached us to expand his business. There was a need to acquire a manufacturing enterprise in another region, but there were doubts about financial stability and profitability. We were given remote access to the accounting system.",
                solution: "Our specialist conducted a full audit and financial analysis of the business. It was concluded that some expenses were deliberately hidden from the buyer, making the business appear profitable. We recommended not to proceed with the purchase as the enterprise was actually unprofitable."
            },
            {
                title: "Contesting Tax Assessments",
                description: "A large wholesale and manufacturing enterprise approached us with a request: the tax authority had assessed a significant amount of VAT and corporate income tax for the past two years. The in-house accounting department could not challenge the assessment.",
                solution: "Our expert analyzed and conducted an express audit of the business. The audit revealed that accounting had been incorrect for the past 2 years. As a result, we restored the accounting, reissued and submitted reports, challenged the tax assessments, recruited new staff, and reorganized the accounting department."
            }
        ]
    }
};

// Глобальные переменные
let currentLang = 'ru';
let servicesSwiper = null;
let casesSwiper = null;
let solutionTimer = null;

// Главная функция инициализации
function initializeWebsite() {
    // 1. Инициализация интерактивного фона
    initDotGrid();
    
    // 2. Установка начального языка
    setActiveLanguageButton();
    
    // 3. Генерация всего контента
    generateAllContent();
    
    // 4. Инициализация слайдеров
    initializeSliders();
    
    // 5. Настройка интерактивных элементов
    setupInteractiveElements();
    
    // 6. Настройка анимаций при скролле
    setupScrollAnimations();
}

// Инициализация интерактивной сетки точек
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

// Установка активной кнопки языка
function setActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Генерация всего контента
function generateAllContent() {
    // 1. Обновление статического текста
    updateStaticContent();
    
    // 2. Генерация карточек услуг
    generateServiceCards();
    
    // 3. Генерация кейсов
    generateCaseStudies();
}

// Обновление статического текста
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
            // Обычный текст
            else {
                element.textContent = translation;
            }
        }
    });
}

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

// Генерация карточек услуг
function generateServiceCards() {
    const container = document.querySelector('.services-swiper .swiper-wrapper');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Добавляем новые карточки
    translations[currentLang].services.forEach((service, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="service-card">
                <div class="service-card-inner">
                    <div class="service-card-front">
                        <div class="service-icon">
                            <i data-lucide="${serviceIcons[index]}"></i>
                        </div>
                        <h3>${service.title}</h3>
                    </div>
                    <div class="service-card-back">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(slide);
    });

    // Инициализируем иконки Lucide
    lucide.createIcons();
}

// Инициализация Swiper для услуг
function initServicesSwiper() {
    new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.services-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// Генерация кейсов
function generateCaseStudies() {
    const caseStudies = currentLang === 'ru' ? translations[currentLang].cases : translations[currentLang].cases;
    const casesContainer = document.querySelector('.cases-swiper .swiper-wrapper');
    if (!casesContainer) return;

    casesContainer.innerHTML = caseStudies.map((study, index) => `
        <div class="swiper-slide">
            <div class="case-card" data-case="${index}">
                <div class="case-card-inner">
                    <div class="case-card-front">
                        <h3>${study.title}</h3>
                        <p>${study.description}</p>
                    </div>
                    <div class="case-card-back">
                        <h4><i class="fas fa-sync-alt"></i>Решение:</h4>
                        <p>${study.solution}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Инициализация слайдеров
function initializeSliders() {
    // Уничтожаем старые слайдеры, если есть
    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
    }
    
    if (casesSwiper) {
        casesSwiper.destroy(true, true);
        casesSwiper = null;
    }
    
    // Инициализация слайдера услуг
    initServicesSwiper();

    // Инициализация слайдера кейсов
    casesSwiper = new Swiper('.cases-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 1.2,
            },
            992: {
                slidesPerView: 1.3,
                centeredSlides: true,
            },
            1200: {
                slidesPerView: 1.2,
                centeredSlides: true,
            }
        },
        // Автоматическое раскрытие решения при активации слайда
        on: {
            slideChange: function() {
                // Отменяем предыдущий таймер
                clearTimeout(solutionTimer);
                
                // Закрываем все решения
                document.querySelectorAll('.solution-content').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Сбрасываем все кнопки
                document.querySelectorAll('.show-solution-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Автоматическое раскрытие через 2 секунды
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

// Настройка интерактивных элементов
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
}

// Настройка анимаций при скролле
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами с анимацией
    document.querySelectorAll('.section-title, .proposal-card').forEach(el => {
        observer.observe(el);
    });
}

// Запускаем инициализацию после полной загрузки DOM
document.addEventListener('DOMContentLoaded', initializeWebsite);