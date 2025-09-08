## План рефакторинга (для обсуждения)

### Цели
- Повысить качество кода, производительность и поддержку.
- Подготовить базу для дальнейшего масштабирования.

### Скоуп (итерация 1)
1. Инфраструктура и качество
   - [x] Добавить ESLint + Prettier (строгая конфигурация) и скрипты в `package.json`.
   - [x] Husky + lint-staged для pre-commit.
   - [x] Обновить `.gitignore` (Node/Vite, артефакты сборки, env).

2. Структура проекта
   - [x] Баррелы `index.ts` для `src/components` и `src/components/ui`.
   - [x] Алиас `@/*` в Vite и TS (`tsconfig.json`).
   - [ ] Выделить `src/features/*`, `src/shared/{ui,lib}` (по согласованию).

3. Производительность
   - [x] Lazy-loading «тяжёлых» секций: `Hero`, `Features`, `Testimonials`, `Demo`.
   - [ ] Мемоизация компонентов и коллбеков там, где есть повторные рендеры.

4. Статические ассеты
   - [x] Оптимизация изображений (`Hero.png`, `Logo.png`): генерация AVIF/WebP через `sharp` (`npm run optimize:images`).
   - [x] Обновить `<picture>` и фавиконки (AVIF/WebP/PNG), OG/Twitter изображения.

5. SEO и a11y (базово)
   - [x] Сверка/расширение meta-тегов через `react-helmet` (title/description/OG/Twitter, sitemap/robots).
   - [x] Улучшить aria-атрибуты и роли (мобильное меню, landmarks). Скрипт skip-link удалён по запросу.

### Опционально (итерация 2)
- [x] TypeScript-база (полная миграция компонентов, `tsconfig` настроен).
- [x] Обновление Vite → 5.x, добавлен анализ бандла (rollup-plugin-visualizer, `dist/stats.html`).
- [x] Простая CI (lint + build) в GitHub Actions.
- [x] Tailwind: обновлены `content` на `**/*.ts(x)`, стили нормализованы; убраны агрессивные глобальные стили из `SmoothScroll`.

### Дополнительно выполнено
- [x] Исправлены конфликты `tsconfig.json` (noEmit, bundler, пути), линтер чист.
- [x] Production build успешен; размер основного чанка ~379 kB (gzip ~124 kB), есть потенциал дальнейшей оптимизации.

### Следующие шаги (итерация 3)
1. Lighthouse-проход и быстрые фиксы
   - [ ] Прогнать Lighthouse (desktop/mobile), зафиксировать метрики
   - [ ] Добавить preconnect к CDN/шрифтам
   - [ ] Preload критичных шрифтов
   - [ ] Lazy для не‑критичных изображений
   - [ ] Повторный прогон Lighthouse

2. Bundle‑тюнинг
   - [ ] Включить manualChunks в Vite (vendor/react/radix/framer-motion отдельно)
   - [ ] Проверить тяжёлые зависимости (факультативные замены/ленивая загрузка)
   - [ ] Довести initial bundle < 100 kB gzip (где возможно)
   - [ ] Проверить/убрать дубликаты модулей

3. Deployment
   - [ ] Подготовить деплой (Vercel/Netlify/GitHub Pages или Docker+Nginx)
   - [ ] Настроить кэш‑заголовки (immutable для assets, no‑cache для HTML)
   - [ ] Превью‑деплои для PR

4. Контент и аналитика
   - [ ] Подключить GA4 или GTM
   - [ ] Настроить события: CTA, subscribe, contact, download
   - [ ] (Опционально) Meta/LinkedIn пиксели, consent mode

5. UI‑полировка и a11y
   - [ ] Единые hover/focus/active состояния
   - [ ] Микролоадеры/skeleton для ленивых секций
   - [ ] Снизить избыточные анимации, предпочтить CSS‑transition
   - [ ] Доп. проверка доступности

6. Тесты
   - [ ] Vitest для утилит/простых компонентов
   - [ ] Playwright smoke‑сценарии (загрузка, якоря, модалки, subscribe)

### Пользовательские правки (новые требования)
1. Header
   - [x] Добавить кнопку "Contact Sales"
   - [x] Тёмная тема со свитчером; элементы адаптируются к теме
   - [x] Удалить пункт меню "For Drivers"
   - [x] Добавить селектор языка в хедер (desktop+mobile), сохранение выбора
   - [x] Навигация: hover через бордер вместо смены цвета, без focus ring
   - [x] "Testimonials" → "Reviews" в навигации

2. i18n
   - [ ] Ввести JSON с t‑ключами (старт: en), поддержка ≥10 языков
   - [ ] Подтягивать тексты по выбранному языку (ты предоставляешь тексты)

3. Hero
   - [x] Адаптировать изображение под мобильные (или предложить альтернативу)
   - [x] Убрать "About FixDrive by Axivion LLC" и иконку; текст разместить под Hero
   - [x] Убрать Mission & Vision из главной (перенести на отдельную страницу)

4. Новые страницы
   - [x] Создать страницу "About Us"; открыть по клику; оформить красиво
   - [x] Создать страницу "Mission & Vision" (вместо блока на главной)
   - [x] Privacy Policy, Terms of Use — как отдельные страницы (убрать модалки)

5. Контакты и почта
   - [x] Внизу заменить "Request Demo" на кнопку "Contact Sales"
   - [x] Модалка "Contact Us" фиксирована по центру при скролле
   - [x] Кнопка "Отправить" открывает почтовое приложение (mailto) с авто‑заполнением

6. Навигация/футер
   - [x] В футере добавить ссылки: About Us, Mission Vision, Privacy Policy, Terms Of Use (стеком)
   - [x] Убрать текущие футер‑модалки (заменить на переходы на страницы)

7. Pricing
   - [x] Добавить слева карточку "Free"; тексты через t‑ключи

8. Demo / Видео
   - [x] Сделать компактный видео‑блок (из assets), по клику проигрывание

9. Reviews (бывш. Testimonials)
   - [x] Переименовать раздел в "Reviews"
   - [x] Убрать фото, поставить подходящие иконки

10. Newsletter / Google Sheets
   - [x] "Get early access" — отправка данных в Google Sheets (получить ссылку)

11. Прочее
   - [x] Кнопка "Become a Driver" и выбор пакетов в Priving — открывать App Store / Google Play
   - [ ] Все тексты локализовать через t‑ключи; контент — от тебя

### i18n (обязательное внедрение t‑ключей)
- [ ] Создать `locales/en.json` с базовыми t‑ключами (header, footer, hero, pricing, cta, reviews, forms)
- [ ] Ввести провайдер i18n и хук `t(key, vars?)` (fallback: `en`)
- [ ] Заменить все хардкод‑строки на t‑ключи во всех компонентах/pages
  - [ ] Header/Navigation, Footer
  - [ ] Hero, About, MissionVision (новая страница)
  - [ ] Features, Reviews (бывш. Testimonials)
  - [ ] ForDrivers/ForCustomers (если остаются), Packages (включая новую Free‑карту)
  - [ ] CtaBanner, Newsletter, Contact/Terms/Privacy страницы/модалки
  - [ ] Demo/Video‑блок, кнопки и вспомогательные тексты/лейблы/aria
- [ ] Добавить переключатель языка; сохранять выбор (localStorage) и применять на загрузке
- [ ] Правила нейминга ключей: `area.block.element.state` (пример: `header.cta.contact_sales`, `pricing.tier.free.title`)
- [ ] Подготовить заготовки для ≥10 языков (`locales/{ru,az,tr,ar,de,fr,es,it,pt,zh}.json`) — заполнение позже

### Открытые вопросы
1. Нужна ли миграция на TypeScript в этой итерации?
2. Приоритет SEO vs производительность (что выше сейчас)?
3. Целевые браузеры/устройства (влияет на полифилы/форматы изображений).
4. Есть ли требования к i18n?

### Метрики успеха
- Стабильная сборка, ноль ошибок линтера, единый код-стайл.
- Уменьшение размера initial bundle и LCP на главной.
- Улучшение Lighthouse (Performance/SEO/Best Practices/Accessibility).


