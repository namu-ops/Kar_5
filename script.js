// Функция для загрузки песен из JSON
async function loadSongs() {
    try {
        // Для демонстрации используем встроенные данные
        // В реальном проекте замените на fetch('songs.json')
        const songs = [
            {
                "title": "Ах, вы сени, мои сени",
                "artist": "Русская народная",
                "category": "russian folk",
                "genre": "Русская народная"
            },
            {
                "title": "Апрель",
                "artist": "Сплин",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Аргентина-Ямайка 5:0",
                "artist": "Чайф",
                "category": "russian folk retro",
                "genre": "Русский рок"
            },
            {
                "title": "Без тебя",
                "artist": "МакSим",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Беспечный ангел",
                "artist": "Ария",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "В последний раз",
                "artist": "ДДТ",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Владимирский централ",
                "artist": "Михаил Круг",
                "category": "russian folk retro",
                "genre": "Русский шансон"
            },
            {
                "title": "Выпьем за любовь",
                "artist": "Игорь Николаев",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Где же ты?",
                "artist": "Валерий Меладзе",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Город золотой",
                "artist": "Аквариум",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Группа крови",
                "artist": "Кино",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Дорогой длинною",
                "artist": "Алла Пугачева",
                "category": "russian folk",
                "genre": "Русская народная"
            },
            {
                "title": "Еду к миленькой",
                "artist": "Бутырка",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Жить",
                "artist": "Григорий Лепс",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Замыкая круг",
                "artist": "Круг",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Знаешь ли ты",
                "artist": "МакSим",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Золотые купола",
                "artist": "Александр Маршал",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Иволга",
                "artist": "Нюша",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Искала",
                "artist": "Земфира",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Каждый раз",
                "artist": "Монеточка",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Комарово",
                "artist": "Игорь Скляр",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Коробейники",
                "artist": "Русская народная",
                "category": "russian folk",
                "genre": "Русская народная"
            },
            {
                "title": "Кукушка",
                "artist": "Полина Гагарина",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Лабиринт",
                "artist": "Noize MC",
                "category": "russian hiphop",
                "genre": "Русский хип-хоп"
            },
            {
                "title": "Лаванда",
                "artist": "София Ротару",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Луч солнца золотого",
                "artist": "Из м/ф \"Бременские музыканты\"",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Миллион алых роз",
                "artist": "Алла Пугачева",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Надежда",
                "artist": "Анна Герман",
                "category": "russian folk",
                "genre": "Русская народная"
            },
            {
                "title": "От Волги до Енисея",
                "artist": "ЛЮБЭ",
                "category": "russian folk retro",
                "genre": "Русская народная"
            },
            {
                "title": "Офицеры",
                "artist": "Олег Газманов",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Позови меня с собой",
                "artist": "Алла Пугачева",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Районы-кварталы",
                "artist": "Звери",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Свет в твоем окне",
                "artist": "Фабрика",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Скованные одной цепью",
                "artist": "Наутилус Помпилиус",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Солдат",
                "artist": "Стас Михайлов",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Сэра",
                "artist": "Валерий Меладзе",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Трава у дома",
                "artist": "Земляне",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Тучи",
                "artist": "Иванушки International",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Уличный боец",
                "artist": "Каста",
                "category": "russian hiphop",
                "genre": "Русский хип-хоп"
            },
            {
                "title": "Хали-гали",
                "artist": "Ласковый май",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Что такое осень",
                "artist": "ДДТ",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Шар цвета хаки",
                "artist": "Алиса",
                "category": "russian rock",
                "genre": "Русский рок"
            },
            {
                "title": "Экспонат",
                "artist": "Ленинград",
                "category": "russian pop",
                "genre": "Русская поп-музыка"
            },
            {
                "title": "Billie Jean",
                "artist": "Michael Jackson",
                "category": "foreign pop retro",
                "genre": "Зарубежная поп-музыка"
            },
            {
                "title": "Bohemian Rhapsody",
                "artist": "Queen",
                "category": "foreign rock retro",
                "genre": "Зарубежный рок"
            },
            {
                "title": "Dancing Queen",
                "artist": "ABBA",
                "category": "foreign disco retro",
                "genre": "Зарубежное диско"
            },
            {
                "title": "Happy",
                "artist": "Pharrell Williams",
                "category": "foreign pop",
                "genre": "Зарубежная поп-музыка"
            },
            {
                "title": "Lose Yourself",
                "artist": "Eminem",
                "category": "foreign hiphop",
                "genre": "Зарубежный хип-хоп"
            },
            {
                "title": "My Way",
                "artist": "Frank Sinatra",
                "category": "foreign pop retro",
                "genre": "Зарубежная поп-музыка"
            },
            {
                "title": "Nothing Else Matters",
                "artist": "Metallica",
                "category": "foreign rock retro",
                "genre": "Зарубежный рок"
            },
            {
                "title": "Shape of You",
                "artist": "Ed Sheeran",
                "category": "foreign pop",
                "genre": "Зарубежная поп-музыка"
            },
            {
                "title": "Smells Like Teen Spirit",
                "artist": "Nirvana",
                "category": "foreign rock retro",
                "genre": "Зарубежный рок"
            },
            {
                "title": "Sweet Child O' Mine",
                "artist": "Guns N' Roses",
                "category": "foreign rock retro",
                "genre": "Зарубежный рок"
            },
            {
                "title": "Uptown Funk",
                "artist": "Mark Ronson ft. Bruno Mars",
                "category": "foreign pop",
                "genre": "Зарубежная поп-музыка"
            }
        ];
        
        return songs.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    } catch (error) {
        console.error('Ошибка загрузки песен:', error);
        return [];
    }
}

// Функция для отображения песен
function renderSongs(songs) {
    const songsList = document.getElementById('songs-list');
    
    if (!songsList || songs.length === 0) {
        songsList.innerHTML = '<p class="no-songs">Песни временно недоступны. Попробуйте обновить страницу.</p>';
        return;
    }
    
    songsList.innerHTML = songs.map(song => `
        <div class="song-item" data-category="${song.category}">
            <div class="song-info">
                <h4>${song.title}</h4>
                <p class="song-artist">${song.artist}</p>
                <span class="song-category">${song.genre}</span>
            </div>
            <button class="song-request-btn">Заказать</button>
        </div>
    `).join('');
    
    // Повторно инициализируем обработчики для кнопок заказа
    initializeSongRequestButtons();
}

// Инициализация кнопок заказа песен
function initializeSongRequestButtons() {
    const songRequestBtns = document.querySelectorAll('.song-request-btn');
    const songRequestForm = document.getElementById('song-request-form');
    const cancelRequestBtn = document.querySelector('.cancel-request');
    const requestForm = document.getElementById('request-form');
    
    songRequestBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const songItem = this.closest('.song-item');
            const songTitle = songItem.querySelector('h4').textContent;
            const songArtist = songItem.querySelector('.song-artist').textContent;
            
            // Заполняем форму данными песни
            document.getElementById('request-song').value = songTitle;
            document.getElementById('request-artist').value = songArtist;
            
            // Показываем форму
            songRequestForm.style.display = 'block';
            songRequestForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
    
    // Отмена заказа песни
    if (cancelRequestBtn) {
        cancelRequestBtn.addEventListener('click', function() {
            songRequestForm.style.display = 'none';
        });
    }
    
    // Отправка формы заказа песни
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const song = document.getElementById('request-song').value.trim();
            
            if (song) {
                alert(`Песня "${song}" заказана! DJ получил вашу заявку.`);
                requestForm.reset();
                songRequestForm.style.display = 'none';
            }
        });
    }
}

// Функция для инициализации фильтрации песен
function initializeSongFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Фильтруем песни
            const filter = this.getAttribute('data-filter');
            const songItems = document.querySelectorAll('.song-item');
            
            songItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Функция для инициализации поиска песен
function initializeSongSearch() {
    const searchBtn = document.getElementById('search-btn');
    const songSearch = document.getElementById('song-search');
    
    if (searchBtn && songSearch) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
        
        // Поиск при нажатии Enter
        songSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const searchTerm = songSearch.value.toLowerCase().trim();
            const songItems = document.querySelectorAll('.song-item');
            
            if (searchTerm === '') {
                // Показываем все песни, если поиск пустой
                songItems.forEach(item => {
                    item.style.display = 'flex';
                });
                return;
            }
            
            songItems.forEach(item => {
                const songTitle = item.querySelector('h4').textContent.toLowerCase();
                const songArtist = item.querySelector('.song-artist').textContent.toLowerCase();
                
                if (songTitle.includes(searchTerm) || songArtist.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }
}

// Функция для инициализации меню
function initializeMenuTabs() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех вкладок
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Скрываем все категории меню
            menuCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Показываем выбранную категорию
            const tabId = this.getAttribute('data-tab');
            const targetCategory = document.getElementById(`${tabId}-menu`);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });
}

// Функция для инициализации слайдеров
function initializeSliders() {
    // Слайдер залов
    const hallSliderTrack = document.querySelector('.halls-slider .slider-track');
    const hallPrevBtn = document.querySelector('.halls-slider .slider-prev');
    const hallNextBtn = document.querySelector('.halls-slider .slider-next');
    const hallCards = document.querySelectorAll('.hall-card');
    let hallCurrentSlide = 0;
    
    if (hallSliderTrack && hallCards.length > 0) {
        const updateHallSlider = () => {
            let cardWidth;
            if (window.innerWidth >= 1200) {
                cardWidth = 100 / 3; // 33.333%
            } else if (window.innerWidth >= 992) {
                cardWidth = 100 / 2; // 50%
            } else {
                cardWidth = 100; // 100%
            }
            hallSliderTrack.style.transform = `translateX(-${hallCurrentSlide * cardWidth}%)`;
        };
        
        hallNextBtn.addEventListener('click', function() {
            hallCurrentSlide++;
            if (hallCurrentSlide >= hallCards.length - (window.innerWidth >= 1200 ? 2 : window.innerWidth >= 992 ? 1 : 0)) {
                hallCurrentSlide = 0;
            }
            updateHallSlider();
        });
        
        hallPrevBtn.addEventListener('click', function() {
            hallCurrentSlide--;
            if (hallCurrentSlide < 0) {
                hallCurrentSlide = hallCards.length - (window.innerWidth >= 1200 ? 2 : window.innerWidth >= 992 ? 1 : 0);
            }
            updateHallSlider();
        });
        
        window.addEventListener('resize', updateHallSlider);
        updateHallSlider();
    }
    
    // Слайдер отзывов
    const reviewSliderTrack = document.querySelector('.reviews-slider .slider-track');
    const reviewPrevBtn = document.querySelector('.reviews-slider .slider-prev');
    const reviewNextBtn = document.querySelector('.reviews-slider .slider-next');
    const reviewCards = document.querySelectorAll('.review-card');
    let reviewCurrentSlide = 0;
    
    if (reviewSliderTrack && reviewCards.length > 0) {
        const updateReviewSlider = () => {
            let cardWidth;
            if (window.innerWidth >= 1200) {
                cardWidth = 100 / 3; // 33.333%
            } else if (window.innerWidth >= 992) {
                cardWidth = 100 / 2; // 50%
            } else {
                cardWidth = 100; // 100%
            }
            reviewSliderTrack.style.transform = `translateX(-${reviewCurrentSlide * cardWidth}%)`;
        };
        
        reviewNextBtn.addEventListener('click', function() {
            reviewCurrentSlide++;
            if (reviewCurrentSlide >= reviewCards.length - (window.innerWidth >= 1200 ? 2 : window.innerWidth >= 992 ? 1 : 0)) {
                reviewCurrentSlide = 0;
            }
            updateReviewSlider();
        });
        
        reviewPrevBtn.addEventListener('click', function() {
            reviewCurrentSlide--;
            if (reviewCurrentSlide < 0) {
                reviewCurrentSlide = reviewCards.length - (window.innerWidth >= 1200 ? 2 : window.innerWidth >= 992 ? 1 : 0);
            }
            updateReviewSlider();
        });
        
        window.addEventListener('resize', updateReviewSlider);
        updateReviewSlider();
    }
}

// Функция для инициализации форм
function initializeForms() {
    // Форма бронирования
    const bookingForm = document.getElementById('booking-form');
    const formMessage = document.getElementById('form-message');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            formMessage.textContent = 'Бронирование успешно отправлено! Мы свяжемся с вами в течение 30 минут.';
            formMessage.className = 'form-message success';
            
            setTimeout(() => {
                bookingForm.reset();
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Форма подписки
    const subscribeForm = document.getElementById('subscribe-form');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                alert('Спасибо за подписку! Вы будете получать уведомления о наших мероприятиях.');
                emailInput.value = '';
            }
        });
    }
    
    // Форма отзыва
    const reviewForm = document.getElementById('review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('review-name').value.trim();
            const rating = document.getElementById('review-rating').value;
            const text = document.getElementById('review-text').value.trim();
            
            if (name && rating && text) {
                alert('Спасибо за ваш отзыв! После модерации он появится на сайте.');
                reviewForm.reset();
            }
        });
    }
    
    // Инициализация даты в форме бронирования
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
}

// Функция для инициализации мобильного меню
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        document.querySelectorAll('.mobile-menu-list a').forEach(link => {
            link.addEventListener('click', function() {
                if (!this.parentElement.classList.contains('mobile-dropdown')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        mobileDropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            const submenu = dropdown.querySelector('.mobile-submenu');
            
            if (link && submenu) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth < 992) {
                        e.preventDefault();
                        submenu.classList.toggle('active');
                        
                        const icon = link.querySelector('i');
                        if (icon) {
                            if (submenu.classList.contains('active')) {
                                icon.className = 'fas fa-chevron-up';
                            } else {
                                icon.className = 'fas fa-chevron-down';
                            }
                        }
                    }
                });
            }
        });
    }
}

// Функция для плавной прокрутки
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Функция для фиксации навигации при скролле
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Функция для инициализации ссылок подменю
function initializeSubmenuLinks() {
    // Обработка ссылок в десктопном меню
    document.querySelectorAll('.dropdown-menu a, .mobile-submenu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabId = this.getAttribute('data-tab');
            if (tabId) {
                // Находим секцию меню
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                    // Скроллим к секции меню
                    window.scrollTo({
                        top: menuSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Активируем соответствующую вкладку
                    setTimeout(() => {
                        const tabButton = document.querySelector(`.menu-tab[data-tab="${tabId}"]`);
                        if (tabButton) {
                            tabButton.click();
                        }
                    }, 300);
                }
            }
            
            // Закрываем мобильное меню, если оно открыто
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// Основная функция инициализации
async function initializeApp() {
    // Инициализация навигации
    initializeNavbar();
    
    // Инициализация мобильного меню
    initializeMobileMenu();
    
    // Инициализация плавной прокрутки
    initializeSmoothScroll();
    
    // Инициализация меню
    initializeMenuTabs();
    
    // Инициализация слайдеров
    initializeSliders();
    
    // Инициализация форм
    initializeForms();
    
    // Инициализация ссылок подменю
    initializeSubmenuLinks();
    
    // Загрузка и отображение песен
    const songs = await loadSongs();
    renderSongs(songs);
    
    // Инициализация фильтров песен
    initializeSongFilters();
    
    // Инициализация поиска песен
    initializeSongSearch();
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeApp);
