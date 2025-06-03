// Локализация данных
const translations = {
    ru: {
        hero_title: "Мы делаем учет понятным",
        hero_subtitle: "Ведем учет чтобы вы могли вести бизнес. Ваш бухгалтер, финансист и бизнес-наставник",
        services_title: "Наши услуги",
        cases_title: "Наши кейсы",
        proposal_title: "Экспресс-проверка бухгалтерского учета",
        proposal_text: "Бесплатно при заключении договора!",
        proposal_button: "Заказать аудит",
        footer_text: "© 2023 Financial Audit Pro. Все права защищены.",
        services: [
            "Аудит и восстановление учета вашего бизнеса",
            "Ведение бухгалтерского и налогового учета любой сложности",
            "Юридические консультации анализ договоров и сделок",
            "Ведение учета по ВЭД (импорт/экспорт)",
            "Налоговая оптимизация и финансовое моделирование",
            "Подбор кадров (свой метод тестирования и подбора персонала)",
            "Защита и представление ваших интересов в ИФНС",
            "Налоговые споры (не проиграно ни одного дела)"
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
        services_title: "Our Services",
        cases_title: "Our Cases",
        proposal_title: "Express Accounting Check",
        proposal_text: "Free when signing a contract!",
        proposal_button: "Order Audit",
        footer_text: "© 2023 Financial Audit Pro. All rights reserved.",
        services: [
            "Audit and restoration of your business accounting",
            "Accounting and tax accounting of any complexity",
            "Legal consultations, contract and deal analysis",
            "Accounting for foreign economic activity (import/export)",
            "Tax optimization and financial modeling",
            "Personnel selection (proprietary testing method)",
            "Protection and representation of your interests in tax authorities",
            "Tax disputes (no cases lost)"
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

// Главная функция инициализации
function initializeWebsite() {
    // 1. Установка начального языка
    setActiveLanguageButton();
    
    // 2. Генерация всего контента
    generateAllContent();
    
    // 3. Инициализация слайдеров
    initializeSliders();
    
    // 4. Настройка интерактивных элементов
    setupInteractiveElements();
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

// Генерация карточек услуг
function generateServiceCards() {
    const container = document.querySelector('.services-swiper .swiper-wrapper');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Добавляем новые карточки
    translations[currentLang].services.forEach(service => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="service-card">
                <h3>${service}</h3>
            </div>
        `;
        container.appendChild(slide);
    });
}

// Генерация кейсов
function generateCaseStudies() {
    const container = document.querySelector('.cases-swiper .swiper-wrapper');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Добавляем новые кейсы
    translations[currentLang].cases.forEach(caseItem => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="case-card">
                <h3>${caseItem.title}</h3>
                <p>${caseItem.description}</p>
                <div class="solution">
                    <strong>${currentLang === 'ru' ? 'Решение:' : 'Solution:'}</strong>
                    <p>${caseItem.solution}</p>
                </div>
            </div>
        `;
        container.appendChild(slide);
    });
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
    servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

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
            992: {
                slidesPerView: 1.2,
                centeredSlides: true,
            }
        }
    });
}

// Настройка интерактивных элементов
function setupInteractiveElements() {
    // 1. Переключатель языка
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Обновляем текущий язык
            currentLang = this.dataset.lang;
            
            // Обновляем активную кнопку
            setActiveLanguageButton();
            
            // Генерируем весь контент заново
            generateAllContent();
            
            // Переинициализируем слайдеры
            setTimeout(initializeSliders, 10);
        });
    });
    
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
}

// Запускаем инициализацию после полной загрузки DOM
document.addEventListener('DOMContentLoaded', initializeWebsite);