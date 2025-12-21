const supportedLangs = ["ru", "en", "fa", "zh"];
const localeMap = {
  ru: { htmlLang: "ru", ogLocale: "ru_RU", hreflang: "ru", dir: "ltr" },
  en: { htmlLang: "en-US", ogLocale: "en_US", hreflang: "en", dir: "ltr" },
  fa: { htmlLang: "fa", ogLocale: "fa_IR", hreflang: "fa", dir: "rtl" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN", hreflang: "zh", dir: "ltr" },
};

const translations = {
  ru: {
    "skip.link": "Перейти к содержимому",
    "brand.name": "NITRO VPN",
    "brand.aria": "NITRO VPN",
    "menu.toggleLabel": "Открыть меню",
    "nav.menu": "Меню",
    "nav.features": "Преимущества",
    "nav.pricing": "Тарифы",
    "nav.trial": "Пробный период",
    "nav.protocol": "VLESS",
    "nav.faq": "FAQ",
    "nav.payments": "Оплата",
    "nav.telegram": "Открыть в Telegram",
    "nav.telegramAria": "Открыть Telegram-бота NITRO VPN",
    "hero.eyebrow": "Пробный период 2 дня и 1 ГБ - без карты",
    "hero.heading":
      "NITRO VPN - для ChatGPT, YouTube, TikTok, Instagram*¹, WhatsApp*¹, Telegram, Roblox и т.д.",
    "hero.lead":
      "Используйте все свои любимые сервисы без блокировок и замедлений. Подключение через сервер в <b>Москве</b> убирает рекламу на YouTube как Premium, а узлы в <b>Риге</b> и <b>Финляндии</b> дают стабильный доступ к сервисам зарубежом. VLESS + TLS и продвинутый обход DPI сохраняют скорость и приватность.",
    "hero.savings":
      "Экономьте до 44% на подписке и получайте стабильный доступ к контенту из РФ и ЕС.",
    "hero.ctaPrimary": "Попробовать бесплатно",
    "hero.ctaPricing": "Сравнить тарифы",
    "hero.ctaTrial": "Как это работает",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "Безлимит",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "Устройства",
    "hero.statTrialValue": "2 дня",
    "hero.statTrialLabel": "Пробный период",
    "hero.statAria": "Ключевые параметры сервиса",
    "hero.statusAria": "Сводка сети",
    "hero.statusHeading": "Онлайн-статус сети NITRO VPN",
    "hero.statusMoscow": "Москва 🇷🇺",
    "hero.statusMoscowPing": "Пинг ~50 мс",
    "hero.statusRiga": "Рига 🇱🇻",
    "hero.statusRigaPing": "Пинг ~70 мс",
    "hero.statusFinland": "Финляндия 🇫🇮",
    "hero.statusFinlandPing": "Пинг ~70 мс",
    "hero.statusUptime": "Надёжность",
    "hero.statusUptimeValue": "98% аптайм",
    "hero.statusNote":
      "Средние показатели по клиентам из России и Европы. Реальный пинг зависит от провайдера и загрузки сети.",
    "features.heading": "Почему выбирают NITRO VPN",
    "features.subheading":
      "Надёжный доступ к стримингам, мессенджерам и соцсетям без блокировок, пробный период 2 дня и 1 ГБ для каждого нового пользователя.",
    "features.cardAiTitle": "ИИ сервисы",
    "features.cardAiText":
      "Задавайте вопросы, создавайте изображения, видео, музыку, код и т.д. во всех зарубежных ИИ сервисах: ChatGPT, Claude, Gemini, Grok, Copilot, DeepSeek, Midjourney, Sora. и др.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "Высокие скорости для Shorts, видео и прямых трансляций на любых устройствах.",
    "features.cardCallsTitle": "Звонки в месенджерах",
    "features.cardCallsText":
      "Аудио и видео звонки*² в Telegram, WhatsApp*¹, Viber, FaceTime и др. проходят стабильно.",
    "features.cardInstagramTitle": "Instagram*¹",
    "features.cardInstagramText":
      "Публикуйте фото, видео и Reels. Ведите прямые трансляции а также смотрите контент без ограничений.",
    "features.cardCinemaTitle": "КиноПоиск",
    "features.cardCinemaText":
      "Смотрите кино, сериалы, ТВ-каналы и спорт без региональных блокировок даже находясь не в России.",
    "features.cardDevicesTitle": "Одна подписка - 4 устройства",
    "features.cardDevicesText":
      "Одна подписка - любые четыре устройства: iPhone, Android, Mac, Windows, Linux.",
    "features.cardSpeedTitle": "Высокая скорость",
    "features.cardSpeedText":
      "Оптимизированные узлы в Москве, Риге и Финляндии обеспечивают высокую скорость и низкую сетевую задержку.",
    "features.cardUnlimitedTitle": "Безлимитный трафик",
    "features.cardUnlimitedText":
      "Никаких скрытых ограничений или резкого снижения скорости.",
    "features.cardStealthTitle": "Скрытный трафик",
    "features.cardStealthText":
      "Соединение на VLESS маскируется под обычный HTTPS, поэтому блокировки его не замечают.",
    "features.cardSupportTitle": "Стабильность и поддержка",
    "features.cardSupportText":
      "98% аптайм и живой чат @nitro_vpn_help отвечает за пару минут.",
    "features.note":
      "*¹ Instagram и WhatsApp принадлежат Meta, признанной в России экстремистской организацией.<br>*² Для голосовых звонков VPN должен быть включён у обоих абонентов.",
    "protocol.heading":
      "VLESS - простой ответ на вопрос «Почему у вас всё работает?»",
    "protocol.subheading":
      "VLESS - это современный протокол VPN. Он делает соединение быстрым, стабильным и незаметным для провайдера, поэтому любимые сервисы остаются доступны.",
    "protocol.cardWhatTitle": "Что это такое",
    "protocol.cardWhatText":
      "VLESS отвечает за то, как ваше устройство подключается к VPN. Он избавлен от «лишнего веса», поэтому соединение запускается за секунды и не тормозит интернет.",
    "protocol.cardFastTitle": "Почему быстрее",
    "protocol.cardFastText":
      "Протокол не добавляет лишних шагов при передаче данных. Видео, звонки и игры идут без провалов и подгрузок даже на нескольких устройствах сразу.",
    "protocol.cardStealthTitle": "Почему его не блокируют",
    "protocol.cardStealthText":
      "Трафик выглядит как обычное посещение сайта. Провайдеру нечего подозревать, поэтому сервисы остаются доступны даже при жёстких ограничениях.",
    "pricing.heading": "Тарифы и подписки",
    "pricing.subheading":
      "Гибкие планы на 1, 3, 6 и 12 месяцев. Любой тариф включает подключение до 4 устройств, безлимитный трафик и доступ к серверам в Москве, Риге и Финляндии.",
    "pricing.plan1.title": "1 месяц",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "за 30 дней",
    "pricing.plan3.title": "3 месяца",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "за 3 месяца (~117 ₽/мес)",
    "pricing.plan3.savings": "Экономия 22% vs 1 месяц",
    "pricing.plan6.badge": "33% выгоды",
    "pricing.plan6.title": "6 месяцев",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "за 6 месяцев (~100 ₽/мес)",
    "pricing.plan6.savings": "Экономия 33% vs 1 месяц",
    "pricing.plan12.badge": "Максимальная выгода",
    "pricing.plan12.title": "12 месяцев",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "за 12 месяцев (~84 ₽/мес)",
    "pricing.plan12.savings": "Экономия 44% vs 1 месяц",
    "pricing.benefit.locations": "Москва 🇷🇺 / Рига 🇱🇻 / Финляндия 🇫🇮",
    "pricing.benefit.devices": "До 4 устройств одним аккаунтом",
    "pricing.benefit.speed": "Безлимит и высокая скорость",
    "pricing.benefit.services": "Стриминги, мессенджеры и напоминание от бота",
    "pricing.cta": "Купить в Telegram",
    "pricing.note":
      "Оплата картами банков РФ, по СБП или через Telegram Stars. Telegram-бот напомнит о продлении за несколько дней до окончания подписки.",
    "trial.heading": "Пробный период - бесплатно",
    "trial.lead":
      "<b>Новые пользователи</b> получают <b>2 дня</b> и <b>1 ГБ</b> трафика бесплатно. Активация занимает меньше минуты в Telegram - без банковской карты.",
    "trial.list.allServers":
      "Доступ ко всем серверам (Москва 🇷🇺, Рига 🇱🇻 и Финляндия 🇫🇮)",
    "trial.list.speed": "Полная скорость для 4 устройств",
    "trial.list.upgrade": "Переход на любой тариф прямо в боте",
    "trial.ctaActivate": "Активировать в Telegram",
    "trial.ctaFaq": "FAQ о тест-драйве",
    "trial.stepsTitle": "Как работает тест-драйв",
    "trial.steps1":
      'Откройте бота <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a>.',
    "trial.steps2": "Нажмите «Старт» либо отправьте в чат /start",
    "trial.steps3": "Выберите «Пробный период» и следуйте подсказкам.",
    "trial.steps4": "Получите ссылку на подписку и подключите устройства.",
    "trial.note":
      "Пробный период доступен один раз на пользователя, продлить можно любым платным тарифом.",
    "referral.heading": "Реферальная программа «Приведи друга»",
    "referral.subheading":
      "Если ваш друг оплачивает подписку - вы оба получаете дни в подарок к своей подписке.",
    "referral.card1.title": "1 месяц",
    "referral.card1.bonus": "+3 дня каждому",
    "referral.card3.title": "3 месяца",
    "referral.card3.bonus": "+7 дней каждому",
    "referral.card6.title": "6 месяцев",
    "referral.card6.bonus": "+15 дней каждому",
    "referral.card12.title": "12 месяцев",
    "referral.card12.bonus": "+30 дней каждому",
    "referral.ctaPrimary": "Получить реферальную ссылку",
    "referral.ctaSecondary": "Условия программы",
    "payments.heading": "Оплата и быстрый доступ",
    "payments.subheading":
      "Принимаем карты банков РФ, СБП и платежи через Telegram Stars - доступ выдаётся сразу после оплаты.",
    "payments.cardCardsTitle": "Карты банков РФ",
    "payments.cardCardsText":
      "Оплата привычными картами с автоматическим подтверждением.",
    "payments.cardSbpTitle": "СБП",
    "payments.cardSbpText":
      "Мгновенная оплата без комиссии и переплат с вашего банковского счета.",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText":
      "Плати звёздами Telegram, если нет карты РФ или СБП.",
    "payments.ctaPrimary": "Перейти в Telegram-бота",
    "payments.ctaSecondary": "Сравнить тарифы",
    "locations.heading": "Доступные локации",
    "locations.moscowTitle": "Москва 🇷🇺",
    "locations.moscowText":
      "Подходит для обхода ограничений в большинстве случаев, если вы в России.",
    "locations.rigaTitle": "Рига 🇱🇻",
    "locations.rigaText":
      "Подходит для обхода как внутренних, так и внешних ограничений и санкций.",
    "locations.finlandTitle": "Финляндия 🇫🇮",
    "locations.finlandText":
      "Подходит для обхода как внутренних, так и внешних ограничений и санкций.",
    "faq.heading": "Частые вопросы о NITRO VPN",
    "faq.q1": "Сколько устройств можно подключить?",
    "faq.a1": "Любая подписка включает до <b>4 устройств</b> одновременно.",
    "faq.q2": "Есть ли ограничения по скорости?",
    "faq.a2":
      "Максимально возможная скорость на 1 сервер - 2 Гбит/сек, делится в равных пропорциях между всеми пользователями и искусственно не ограничивается. Реальная скорость зависит от вашего провайдера и расстояния до сервера.",
    "faq.q3": "Как работает пробный период?",
    "faq.a3":
      "2 дня и 1 ГБ трафика бесплатно. После исчерпания лимита можно перейти на любой тариф.",
    "faq.q4": "Где доступен сервис?",
    "faq.a4":
      "Сейчас доступны <b>Москва</b>, <b>Рига</b> и <b>Финляндия</b>. Мы добавляем новые локации по мере роста.",
    "cta.heading": "Готовы подключиться к NITRO VPN?",
    "cta.text":
      'Покупка, продление, пробный период и рефералы доступны в нашем Telegram-боте. Поддержка: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "Открыть @nitro_vpn_sales_bot",
    "cta.secondary": "Способы оплаты",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO VPN - для ChatGPT, YouTube, TikTok, Instagram, WhatsApp, Telegram, Roblox и т.д.",
    "meta.description":
      "VPN для ChatGPT, YouTube, Instagram, TikTok, Telegram и WhatsApp, Roblox и т.д. Сервер в Москве убирает рекламу YouTube как Premium, а локации в Риге и Финляндии дают стабильный доступ к зарубежным сервисам. Бесплатный пробный период 2 дня и 1 ГБ. Безлимит до 4х устройств.",
    "meta.keywords":
      "nitro vpn,нитро впн,впн,скачать впн,бесплатный впн,vpn,впн на пк,впн скачать бесплатно,скачать впн на пк,скачать vpn,бесплатный vpn,лучший впн,vpn скачать бесплатно,vpn для компьютера",
    "meta.ogLocale": "ru_RU",
    "meta.ogTitle":
      "NITRO - VPN для YouTube, Instagram, TikTok, Telegram, WhatsApp и т.д.",
    "meta.ogDescription":
      "Доступ к YouTube, Instagram, TikTok, Telegram и WhatsApp и т.д. Сервер в Москве убирает рекламу YouTube как Premium, а локации в Риге и Финляндии дают стабильный доступ к контенту из ЕС. Пробный период 2 дня и 1 ГБ. Безлимит до 4х устройств.",
    "meta.ogImageAlt": "Логотип NITRO VPN и интерфейс приложения",
    "meta.twitterTitle":
      "NITRO - VPN для YouTube, Instagram, TikTok, Telegram, WhatsApp и т.д.",
    "meta.twitterDescription":
      "Доступ к YouTube, Instagram, TikTok, Telegram и WhatsApp и т.д. Сервер в Москве убирает рекламу YouTube как Premium, а локации в Риге и Финляндии дают стабильный доступ к контенту из ЕС. Пробный период 2 дня и 1 ГБ. Безлимит до 4х устройств.",
    "meta.twitterImageAlt": "Логотип NITRO VPN и интерфейс приложения",
    "meta.hreflang": "ru",
    "lang.label": "Выбрать язык",
    "lang.option.ru": "🇷🇺 Русский",
    "lang.option.en": "🇺🇸 English",
    "lang.option.fa": "🇮🇷 فارسی",
    "lang.option.zh": "🇨🇳 简体中文",
    "toast.planSelected": "Выбран тариф: {plan} - {price}. Оплата в Telegram.",
    "schema.description":
      "NITRO VPN - быстрый VLESS VPN-сервис для России и Европы с серверами в Москве, Риге и Финляндии, пробным периодом 2 дня и 1 ГБ, безлимитным трафиком и подключением до 4 устройств.",
    "schema.moscow": "Москва",
    "schema.riga": "Рига",
    "schema.finland": "Хельсинки",
    "schema.offer1": "VPN доступ на 1 месяц",
    "schema.offer3": "VPN доступ на 3 месяца",
    "schema.offer6": "VPN доступ на 6 месяцев",
    "schema.offer12": "VPN доступ на 12 месяцев",
    "schema.catalog": "Гибкие тарифы",
    "schema.bonus1": "+3 дня за 1 месяц",
    "schema.bonus3": "+7 дней за 3 месяца",
    "schema.bonus6": "+15 дней за 6 месяцев",
    "schema.bonus12": "+30 дней за 12 месяцев",
  },
  en: {
    "skip.link": "Skip to content",
    "brand.name": "NITRO VPN",
    "brand.aria": "NITRO VPN",
    "menu.toggleLabel": "Open menu",
    "nav.menu": "Menu",
    "nav.features": "Benefits",
    "nav.pricing": "Plans",
    "nav.trial": "Trial",
    "nav.protocol": "VLESS",
    "nav.faq": "FAQ",
    "nav.payments": "Payments",
    "nav.telegram": "Open in Telegram",
    "nav.telegramAria": "Open the NITRO VPN Telegram bot",
    "hero.eyebrow": "2-day trial and 1 GB - no card required",
    "hero.heading":
      "NITRO VPN for ChatGPT, YouTube, TikTok, Instagram*¹, WhatsApp*¹, Telegram, Roblox, etc.",
    "hero.lead":
      "Use all your favourite services without blocks or slowdowns. Connecting through the <b>Moscow</b> server removes YouTube ads like Premium, and nodes in <b>Riga</b> and <b>Finland</b> deliver stable access abroad. VLESS + TLS and advanced DPI bypass preserve speed and privacy.",
    "hero.savings":
      "Save up to 44% on your subscription and enjoy stable access to content from Russia and the EU.",
    "hero.ctaPrimary": "Try for free",
    "hero.ctaPricing": "Compare plans",
    "hero.ctaTrial": "How it works",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "Unlimited",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "Devices",
    "hero.statTrialValue": "2 days",
    "hero.statTrialLabel": "Trial",
    "hero.statAria": "Key service metrics",
    "hero.statusAria": "Network summary",
    "hero.statusHeading": "NITRO VPN online status",
    "hero.statusMoscow": "Moscow 🇷🇺",
    "hero.statusMoscowPing": "Ping ~50 ms",
    "hero.statusRiga": "Riga 🇱🇻",
    "hero.statusRigaPing": "Ping ~70 ms",
    "hero.statusFinland": "Finland 🇫🇮",
    "hero.statusFinlandPing": "Ping ~70 ms",
    "hero.statusUptime": "Reliability",
    "hero.statusUptimeValue": "98% uptime",
    "hero.statusNote":
      "Average values for customers in Russia and Europe. Actual ping depends on your ISP and current network load.",
    "features.heading": "Why people choose NITRO VPN",
    "features.subheading":
      "Reliable access to streaming platforms, messengers and social media without blocks, plus a 2-day / 1 GB trial for every new user.",
    "features.cardAiTitle": "AI services",
    "features.cardAiText":
      "Ask questions and create images, video, music, code and more across foreign AI platforms: ChatGPT, Claude, Gemini, Grok, Copilot, DeepSeek, Midjourney, Sora, etc.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "High speeds for Shorts, videos and live streams on any device.",
    "features.cardCallsTitle": "Messenger calls",
    "features.cardCallsText":
      "Audio and video calls*² in Telegram, WhatsApp*¹, Viber, FaceTime, etc. stay stable.",
    "features.cardInstagramTitle": "Instagram*¹",
    "features.cardInstagramText":
      "Post photos, videos and Reels, go live and watch content without restrictions.",
    "features.cardCinemaTitle": "KinoPoisk",
    "features.cardCinemaText":
      "Watch movies, series, TV channels and sports without regional blocks even when you are abroad.",
    "features.cardDevicesTitle": "One subscription - 4 devices",
    "features.cardDevicesText":
      "Cover any four devices with one subscription: iPhone, Android, Mac, Windows and Linux.",
    "features.cardSpeedTitle": "High speed",
    "features.cardSpeedText":
      "Optimised nodes in Moscow, Riga and Finland ensure high speed and low latency.",
    "features.cardUnlimitedTitle": "Unlimited traffic",
    "features.cardUnlimitedText": "No hidden limits or sudden throttling.",
    "features.cardStealthTitle": "Stealth traffic",
    "features.cardStealthText":
      "A VLESS connection looks like ordinary HTTPS, so blocks do not notice it.",
    "features.cardSupportTitle": "Stability and support",
    "features.cardSupportText":
      "98% uptime and the live chat @nitro_vpn_help replies within a couple of minutes.",
    "features.note":
      "*¹ Instagram and WhatsApp belong to Meta, recognised in Russia as an extremist organisation.<br>*² VPN must be enabled for both participants during voice calls.",
    "protocol.heading":
      "VLESS - a simple answer to the question “Why does everything work for you?”",
    "protocol.subheading":
      "VLESS is a modern VPN protocol. It keeps the connection fast, stable and invisible to providers so your favourite services stay available.",
    "protocol.cardWhatTitle": "What it is",
    "protocol.cardWhatText":
      "VLESS is responsible for how your device connects to the VPN. Without the “extra weight” it launches in seconds and doesn’t slow the internet down.",
    "protocol.cardFastTitle": "Why it’s faster",
    "protocol.cardFastText":
      "The protocol avoids extra steps when transferring data. Video, calls and games run without drops or buffering even on several devices at once.",
    "protocol.cardStealthTitle": "Why it isn’t blocked",
    "protocol.cardStealthText":
      "Traffic looks like a regular website visit. Providers have nothing to suspect, so services stay online even under strict restrictions.",
    "pricing.heading": "Plans and subscriptions",
    "pricing.subheading":
      "Flexible plans for 1, 3, 6 and 12 months. Any plan includes up to 4 devices, unlimited traffic and servers in Moscow, Riga and Finland.",
    "pricing.plan1.title": "1 month",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "per 30 days",
    "pricing.plan3.title": "3 months",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "per 3 months (~117 ₽/mo)",
    "pricing.plan3.savings": "Save 22% vs 1 month",
    "pricing.plan6.badge": "33% off",
    "pricing.plan6.title": "6 months",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "per 6 months (~100 ₽/mo)",
    "pricing.plan6.savings": "Save 33% vs 1 month",
    "pricing.plan12.badge": "Maximum savings",
    "pricing.plan12.title": "12 months",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "per 12 months (~84 ₽/mo)",
    "pricing.plan12.savings": "Save 44% vs 1 month",
    "pricing.benefit.locations": "Moscow 🇷🇺 / Riga 🇱🇻 / Finland 🇫🇮",
    "pricing.benefit.devices": "Up to 4 devices per account",
    "pricing.benefit.speed": "Unlimited and high speed",
    "pricing.benefit.services":
      "Streaming, messengers and reminders from the bot",
    "pricing.cta": "Buy in Telegram",
    "pricing.note":
      "Pay with Russian bank cards, SBP or Telegram Stars. The Telegram bot reminds you a few days before the subscription ends.",
    "trial.heading": "Free trial",
    "trial.lead":
      "<b>New users</b> get <b>2 days</b> and <b>1 GB</b> of traffic for free. Activation takes under a minute in Telegram - no bank card required.",
    "trial.list.allServers":
      "Access to all servers (Moscow 🇷🇺, Riga 🇱🇻 and Finland 🇫🇮)",
    "trial.list.speed": "Full speed for 4 devices",
    "trial.list.upgrade": "Switch to any plan right inside the bot",
    "trial.ctaActivate": "Activate in Telegram",
    "trial.ctaFaq": "Test-drive FAQ",
    "trial.stepsTitle": "How the test drive works",
    "trial.steps1":
      'Open the <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a> bot.',
    "trial.steps2": 'Tap "Start" or send /start',
    "trial.steps3": 'Select "Trial period" and follow the prompts.',
    "trial.steps4": "Receive the subscription link and connect your devices.",
    "trial.note":
      "The trial is available once per user; extend it with any paid plan.",
    "referral.heading": "Referral program “Bring a friend”",
    "referral.subheading":
      "If your friend pays for a subscription, you both get bonus days added to your plan.",
    "referral.card1.title": "1 month",
    "referral.card1.bonus": "+3 days each",
    "referral.card3.title": "3 months",
    "referral.card3.bonus": "+7 days each",
    "referral.card6.title": "6 months",
    "referral.card6.bonus": "+15 days each",
    "referral.card12.title": "12 months",
    "referral.card12.bonus": "+30 days each",
    "referral.ctaPrimary": "Get referral link",
    "referral.ctaSecondary": "Program terms",
    "payments.heading": "Payments and fast access",
    "payments.subheading":
      "We accept Russian bank cards, SBP and Telegram Stars - access is granted immediately after payment.",
    "payments.cardCardsTitle": "Russian bank cards",
    "payments.cardCardsText":
      "Pay with familiar cards and automatic confirmation.",
    "payments.cardSbpTitle": "SBP",
    "payments.cardSbpText":
      "Instant, fee-free payments from your bank account.",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText":
      "Pay with Telegram Stars if you don’t have a Russian card or SBP.",
    "payments.ctaPrimary": "Open the Telegram bot",
    "payments.ctaSecondary": "Compare plans",
    "locations.heading": "Available locations",
    "locations.moscowTitle": "Moscow 🇷🇺",
    "locations.moscowText":
      "Suitable for bypassing restrictions in most cases if you are in Russia.",
    "locations.rigaTitle": "Riga 🇱🇻",
    "locations.rigaText":
      "Suitable for bypassing both internal and external restrictions and sanctions.",
    "locations.finlandTitle": "Finland 🇫🇮",
    "locations.finlandText":
      "Suitable for bypassing both internal and external restrictions and sanctions.",
    "faq.heading": "Frequently asked questions about NITRO VPN",
    "faq.q1": "How many devices can I connect?",
    "faq.a1": "Any plan includes up to <b>4 devices</b> at the same time.",
    "faq.q2": "Are there speed limits?",
    "faq.a2":
      "One server delivers up to 2 Gbit/s shared equally between users and is never artificially limited. Actual speed depends on your ISP and the distance to the server.",
    "faq.q3": "How does the trial work?",
    "faq.a3":
      "2 days and 1 GB of traffic are free. After you reach the limit you can switch to any plan.",
    "faq.q4": "Where is the service available?",
    "faq.a4":
      "We currently operate in <b>Moscow</b>, <b>Riga</b> and <b>Finland</b>. New locations are added as we grow.",
    "cta.heading": "Ready to connect to NITRO VPN?",
    "cta.text":
      'Purchasing, renewal, the trial and referrals all live in our Telegram bot. Support: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "Open @nitro_vpn_sales_bot",
    "cta.secondary": "Payment methods",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO - VPN for YouTube, Instagram*¹, TikTok, Telegram, WhatsApp*¹, etc.",
    "meta.description":
      "Access YouTube, Instagram*¹, TikTok, Telegram and WhatsApp*¹, etc. The Moscow server removes YouTube ads like Premium, and nodes in Riga and Finland deliver stable access to EU content. 2-day / 1 GB trial. Unlimited access for up to 4 devices.",
    "meta.keywords":
      "nitro vpn,vless vpn,vpn,vpn russia,vpn latvia,vpn finland,vpn moscow,vpn riga,vpn helsinki,fast vpn,stable vpn,unlimited vpn,vpn for youtube,vpn for instagram,vpn for facebook,vpn for tiktok,vpn for telegram,vpn for WhatsApp*¹,vpn for twitter,vpn for discord,vpn for viber,vpn for facetime,vpn for kinopoisk,vless protocol,dpi bypass,secure vpn",
    "meta.ogLocale": "en_US",
    "meta.ogTitle":
      "NITRO - VPN for YouTube, Instagram*¹, TikTok, Telegram, WhatsApp*¹, etc.",
    "meta.ogDescription":
      "Access YouTube, Instagram*¹, TikTok, Telegram and WhatsApp*¹, etc. The Moscow server removes YouTube ads like Premium, and Riga plus Finland locations ensure stable access to EU content. 2-day trial with 1 GB. Unlimited traffic for up to 4 devices.",
    "meta.ogImageAlt": "NITRO VPN logo and app interface",
    "meta.twitterTitle":
      "NITRO - VPN for YouTube, Instagram*¹, TikTok, Telegram, WhatsApp*¹, etc.",
    "meta.twitterDescription":
      "Access YouTube, Instagram*¹, TikTok, Telegram and WhatsApp*¹, etc. The Moscow server removes YouTube ads like Premium, and Riga plus Finland locations ensure stable access to EU content. 2-day trial with 1 GB. Unlimited traffic for up to 4 devices.",
    "meta.twitterImageAlt": "NITRO VPN logo and app interface",
    "meta.hreflang": "en",
    "lang.label": "Choose language",
    "lang.option.ru": "🇷🇺 Russian",
    "lang.option.en": "🇺🇸 English",
    "lang.option.fa": "🇮🇷 Persian",
    "lang.option.zh": "🇨🇳 Chinese",
    "toast.planSelected": "Selected plan: {plan} - {price}. Pay in Telegram.",
    "schema.description":
      "NITRO VPN is a fast VLESS VPN service for Russia and Europe with servers in Moscow, Riga and Finland, a 2-day / 1 GB trial, unlimited traffic and up to 4 devices.",
    "schema.moscow": "Moscow",
    "schema.riga": "Riga",
    "schema.finland": "Helsinki",
    "schema.offer1": "VPN access for 1 month",
    "schema.offer3": "VPN access for 3 months",
    "schema.offer6": "VPN access for 6 months",
    "schema.offer12": "VPN access for 12 months",
    "schema.catalog": "Flexible plans",
    "schema.bonus1": "+3 days for a 1-month referral",
    "schema.bonus3": "+7 days for a 3-month referral",
    "schema.bonus6": "+15 days for a 6-month referral",
    "schema.bonus12": "+30 days for a 12-month referral",
  },
  fa: {
    "skip.link": "رفتن به محتوا",
    "brand.name": "NITRO VPN",
    "brand.aria": "نایترو وی‌پی‌ان",
    "menu.toggleLabel": "باز کردن منو",
    "nav.menu": "منو",
    "nav.features": "مزایا",
    "nav.pricing": "طرح‌ها",
    "nav.trial": "دوره آزمایشی",
    "nav.protocol": "VLESS",
    "nav.faq": "سؤالات متداول",
    "nav.payments": "پرداخت",
    "nav.telegram": "باز کردن در تلگرام",
    "nav.telegramAria": "باز کردن ربات تلگرام NITRO VPN",
    "hero.eyebrow": "۲ روز آزمایشی و ۱ گیگابایت - بدون نیاز به کارت بانکی",
    "hero.heading":
      "NITRO VPN برای ChatGPT، YouTube، TikTok، Instagram*¹، WhatsApp*¹، Telegram، Roblox و ...",
    "hero.lead":
      "همه سرویس‌های محبوب‌تان را بدون فیلتر و افت سرعت استفاده کنید. اتصال از سرور <b>مسکو</b> تبلیغات YouTube را مثل Premium حذف می‌کند و نودهای <b>ریگا</b> و <b>فنلاند</b> دسترسی پایدار به سرویس‌های خارجی می‌دهند. VLESS + TLS و عبور پیشرفته از DPI سرعت و حریم خصوصی را حفظ می‌کند.",
    "hero.savings":
      "تا ۴۴٪ روی اشتراک صرفه‌جویی کنید و به محتوای روسیه و اروپا به شکل پایدار دسترسی داشته باشید.",
    "hero.ctaPrimary": "امتحان رایگان",
    "hero.ctaPricing": "مقایسه طرح‌ها",
    "hero.ctaTrial": "نحوه کار",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "نامحدود",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "دستگاه",
    "hero.statTrialValue": "۲ روز",
    "hero.statTrialLabel": "آزمایشی",
    "hero.statAria": "شاخص‌های کلیدی سرویس",
    "hero.statusAria": "وضعیت شبکه",
    "hero.statusHeading": "وضعیت آنلاین NITRO VPN",
    "hero.statusMoscow": "مسکو 🇷🇺",
    "hero.statusMoscowPing": "پینگ ~۵۰ میلی‌ثانیه",
    "hero.statusRiga": "ریگا 🇱🇻",
    "hero.statusRigaPing": "پینگ ~۷۰ میلی‌ثانیه",
    "hero.statusFinland": "فنلاند 🇫🇮",
    "hero.statusFinlandPing": "پینگ ~۷۰ میلی‌ثانیه",
    "hero.statusUptime": "پایداری",
    "hero.statusUptimeValue": "۹۸٪ آپ‌تایم",
    "hero.statusNote":
      "میانگین کاربران روسیه و اروپا. پینگ واقعی به اپراتور و شلوغی شبکه بستگی دارد.",
    "features.heading": "چرا کاربران NITRO VPN را انتخاب می‌کنند",
    "features.subheading":
      "دسترسی مطمئن به استریم، پیام‌رسان و شبکه‌های اجتماعی بدون فیلتر، به‌همراه دوره آزمایشی ۲ روزه و ۱ گیگابایتی برای هر کاربر جدید.",
    "features.cardAiTitle": "سرویس‌های هوش مصنوعی",
    "features.cardAiText":
      "سؤال بپرسید و تصویر، ویدئو، موسیقی، کد و ... بسازید؛ ChatGPT، Claude، Gemini، Grok، Copilot، DeepSeek، Midjourney، Sora و دیگر پلتفرم‌های خارجی بدون مشکل کار می‌کنند.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "سرعت بالا برای Shorts، ویدئو و لایو روی هر دستگاهی.",
    "features.cardCallsTitle": "تماس‌های پیام‌رسانی",
    "features.cardCallsText":
      "تماس صوتی و تصویری*² در تلگرام، واتس‌اپ*¹، وایبر، فیس‌تایم و ... پایدار می‌ماند.",
    "features.cardInstagramTitle": "Instagram*¹",
    "features.cardInstagramText":
      "عکس، ویدئو و Reels منتشر کنید، لایو برگزار کنید و بدون محدودیت محتوا ببینید.",
    "features.cardCinemaTitle": "KinoPoisk",
    "features.cardCinemaText":
      "فیلم، سریال، شبکه‌های تلویزیونی و ورزش را حتی بیرون از روسیه بدون محدودیت جغرافیایی ببینید.",
    "features.cardDevicesTitle": "یک اشتراک - ۴ دستگاه",
    "features.cardDevicesText":
      "یک اشتراک برای هر چهار دستگاه: آیفون، اندروید، مک، ویندوز و لینوکس.",
    "features.cardSpeedTitle": "سرعت بالا",
    "features.cardSpeedText":
      "سرورهای بهینه در مسکو، ریگا و فنلاند سرعت زیاد و تأخیر کم را تضمین می‌کنند.",
    "features.cardUnlimitedTitle": "ترافیک نامحدود",
    "features.cardUnlimitedText": "بدون سقف مخفی یا افت سرعت ناگهانی.",
    "features.cardStealthTitle": "ترافیک مخفی",
    "features.cardStealthText":
      "اتصال VLESS شبیه HTTPS عادی است و فیلترها متوجه آن نمی‌شوند.",
    "features.cardSupportTitle": "پایداری و پشتیبانی",
    "features.cardSupportText":
      "۹۸٪ آپ‌تایم و گفت‌وگوی زنده @nitro_vpn_help ظرف چند دقیقه پاسخ می‌دهد.",
    "features.note":
      "*¹ Instagram و WhatsApp متعلق به Meta هستند که در روسیه سازمان افراطی شناخته می‌شود.<br>*² برای تماس صوتی باید VPN برای هر دو طرف روشن باشد.",
    "protocol.heading":
      "VLESS - پاسخ ساده به این سؤال که «چرا همه‌چیز برای شما کار می‌کند؟»",
    "protocol.subheading":
      "VLESS یک پروتکل مدرن VPN است. اتصال را سریع، پایدار و برای اپراتور نامرئی می‌کند تا سرویس‌های محبوب دردسترس بماند.",
    "protocol.cardWhatTitle": "VLESS چیست",
    "protocol.cardWhatText":
      "VLESS مسئول نحوه اتصال دستگاه شما به VPN است. بدون «وزن اضافه» در چند ثانیه راه می‌افتد و اینترنت را کند نمی‌کند.",
    "protocol.cardFastTitle": "چرا سریع‌تر است",
    "protocol.cardFastText":
      "پروتکل مراحل اضافی انتقال داده را حذف می‌کند. ویدئو، تماس و بازی حتی روی چند دستگاه همزمان بدون افت اجرا می‌شود.",
    "protocol.cardStealthTitle": "چرا مسدود نمی‌شود",
    "protocol.cardStealthText":
      "ترافیک مثل بازدید عادی وب به نظر می‌رسد؛ اپراتور چیزی برای شک کردن ندارد و سرویس‌ها حتی زیر محدودیت‌های سخت فعال می‌مانند.",
    "pricing.heading": "طرح‌ها و اشتراک‌ها",
    "pricing.subheading":
      "طرح‌های منعطف ۱، ۳، ۶ و ۱۲ ماهه. هر طرح تا ۴ دستگاه، ترافیک نامحدود و سرورهای مسکو، ریگا و فنلاند را شامل می‌شود.",
    "pricing.plan1.title": "۱ ماه",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "برای ۳۰ روز",
    "pricing.plan3.title": "۳ ماه",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "برای ۳ ماه (~117 ₽/ماه)",
    "pricing.plan3.savings": "۲۲٪ صرفه‌جویی نسبت به ۱ ماه",
    "pricing.plan6.badge": "۳۳٪ تخفیف",
    "pricing.plan6.title": "۶ ماه",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "برای ۶ ماه (~100 ₽/ماه)",
    "pricing.plan6.savings": "۳۳٪ صرفه‌جویی نسبت به ۱ ماه",
    "pricing.plan12.badge": "بیشترین صرفه",
    "pricing.plan12.title": "۱۲ ماه",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "برای ۱۲ ماه (~84 ₽/ماه)",
    "pricing.plan12.savings": "۴۴٪ صرفه‌جویی نسبت به ۱ ماه",
    "pricing.benefit.locations": "مسکو 🇷🇺 / ریگا 🇱🇻 / فنلاند 🇫🇮",
    "pricing.benefit.devices": "تا ۴ دستگاه با یک حساب",
    "pricing.benefit.speed": "سرعت بالا و نامحدود",
    "pricing.benefit.services": "استریم، پیام‌رسان و یادآوری ربات",
    "pricing.cta": "خرید در تلگرام",
    "pricing.note":
      "پرداخت با کارت‌های بانکی روسیه، سامانه پرداخت سریع یا Telegram Stars. ربات چند روز قبل از پایان اشتراک یادآوری می‌کند.",
    "trial.heading": "دوره آزمایشی رایگان",
    "trial.lead":
      "<b>کاربران جدید</b> <b>۲ روز</b> و <b>۱ گیگابایت</b> ترافیک رایگان می‌گیرند. فعال‌سازی کمتر از یک دقیقه در تلگرام زمان می‌برد - بدون کارت بانکی.",
    "trial.list.allServers":
      "دسترسی به همه سرورها (مسکو 🇷🇺، ریگا 🇱🇻 و فنلاند 🇫🇮)",
    "trial.list.speed": "حداکثر سرعت برای ۴ دستگاه",
    "trial.list.upgrade": "ارتقا به هر طرحی مستقیماً در ربات",
    "trial.ctaActivate": "فعال‌سازی در تلگرام",
    "trial.ctaFaq": "سؤالات متداول تست‌درایو",
    "trial.stepsTitle": "نحوه کار تست‌درایو",
    "trial.steps1":
      'ربات <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a> را باز کنید.',
    "trial.steps2": 'دکمه "Start" را بزنید یا /start ارسال کنید',
    "trial.steps3": 'گزینه "دوره آزمایشی" را انتخاب و مراحل را دنبال کنید.',
    "trial.steps4": "لینک اشتراک را بگیرید و دستگاه‌ها را وصل کنید.",
    "trial.note":
      "دوره آزمایشی برای هر کاربر فقط یک‌بار فعال می‌شود و با هر طرح پولی قابل تمدید است.",
    "referral.heading": "برنامه معرفی «دوستت را بیاور»",
    "referral.subheading":
      "اگر دوست شما اشتراک بخرد، هر دوی شما روزهای هدیه به اشتراک خود اضافه می‌کنید.",
    "referral.card1.title": "۱ ماه",
    "referral.card1.bonus": "+۳ روز برای هر نفر",
    "referral.card3.title": "۳ ماه",
    "referral.card3.bonus": "+۷ روز برای هر نفر",
    "referral.card6.title": "۶ ماه",
    "referral.card6.bonus": "+۱۵ روز برای هر نفر",
    "referral.card12.title": "۱۲ ماه",
    "referral.card12.bonus": "+۳۰ روز برای هر نفر",
    "referral.ctaPrimary": "دریافت لینک معرفی",
    "referral.ctaSecondary": "شرایط برنامه",
    "payments.heading": "پرداخت و دسترسی سریع",
    "payments.subheading":
      "کارت‌های بانکی روسیه، سامانه پرداخت سریع و Telegram Stars پذیرفته می‌شود - دسترسی بلافاصله بعد از پرداخت فعال می‌گردد.",
    "payments.cardCardsTitle": "کارت‌های بانکی روسیه",
    "payments.cardCardsText": "پرداخت با کارت‌های آشنا و تأیید خودکار.",
    "payments.cardSbpTitle": "سامانه پرداخت سریع",
    "payments.cardSbpText": "پرداخت فوری بدون کارمزد از حساب بانکی شما.",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText":
      "اگر کارت روسی یا SBP ندارید، با استارز تلگرام پرداخت کنید.",
    "payments.ctaPrimary": "ورود به ربات تلگرام",
    "payments.ctaSecondary": "مقایسه طرح‌ها",
    "locations.heading": "لوکیشن‌های در دسترس",
    "locations.moscowTitle": "مسکو 🇷🇺",
    "locations.moscowText":
      "برای دورزدن محدودیت‌های داخل روسیه در اکثر موارد مناسب است.",
    "locations.rigaTitle": "ریگا 🇱🇻",
    "locations.rigaText":
      "برای عبور از محدودیت‌ها و تحریم‌های داخلی و خارجی ایده‌آل است.",
    "locations.finlandTitle": "فنلاند 🇫🇮",
    "locations.finlandText":
      "برای عبور از محدودیت‌های داخلی و خارجی و دسترسی به سرویس‌های اروپایی مناسب است.",
    "faq.heading": "سؤالات متداول درباره NITRO VPN",
    "faq.q1": "چند دستگاه می‌توانم وصل کنم؟",
    "faq.a1": "هر اشتراک تا <b>۴ دستگاه</b> همزمان را پشتیبانی می‌کند.",
    "faq.q2": "محدودیت سرعت وجود دارد؟",
    "faq.a2":
      "هر سرور تا ۲ گیگابیت در ثانیه ظرفیت دارد، بین کاربران به طور مساوی تقسیم می‌شود و عمداً محدود نمی‌گردد. سرعت واقعی به اپراتور و فاصله تا سرور بستگی دارد.",
    "faq.q3": "دوره آزمایشی چگونه کار می‌کند؟",
    "faq.a3":
      "۲ روز و ۱ گیگابایت ترافیک رایگان است. بعد از اتمام می‌توانید هر طرحی را انتخاب کنید.",
    "faq.q4": "سرویس کجا فعال است؟",
    "faq.a4":
      "در حال حاضر <b>مسکو</b>، <b>ریگا</b> و <b>فنلاند</b> فعال هستند و با رشد سرویس لوکیشن‌های جدید اضافه می‌شود.",
    "cta.heading": "آماده اتصال به NITRO VPN هستید؟",
    "cta.text":
      'خرید، تمدید، دوره آزمایشی و رفرال‌ها همگی در ربات تلگرام ماست. پشتیبانی: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "باز کردن @nitro_vpn_sales_bot",
    "cta.secondary": "روش‌های پرداخت",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO - وی‌پی‌ان برای YouTube، Instagram*¹، TikTok، Telegram، WhatsApp*¹ و ...",
    "meta.description":
      "به YouTube، Instagram*¹، TikTok، Telegram و WhatsApp*¹ و دیگر سرویس‌ها دسترسی داشته باشید. سرور مسکو تبلیغات YouTube را مثل Premium حذف می‌کند و نودهای ریگا و فنلاند دسترسی پایدار به محتوای اتحادیه اروپا می‌دهند. دوره آزمایشی ۲ روزه و ۱ گیگابایتی، ترافیک نامحدود و تا ۴ دستگاه.",
    "meta.keywords":
      "nitro vpn,vless vpn,وی‌پی‌ان,وی‌پی‌ان روسیه,vpn latvia,vpn finland,vpn moscow,vpn riga,vpn helsinki,وی‌پی‌ان سریع,وی‌پی‌ان پایدار,وی‌پی‌ان نامحدود,vpn برای youtube,vpn برای instagram,vpn برای tiktok,vpn برای telegram,vpn برای WhatsApp*¹,vpn برای twitter,vpn برای discord,vpn برای viber,vpn برای facetime,vpn برای kinopoisk,vless protocol,عبور dpi,secure vpn",
    "meta.ogLocale": "fa_IR",
    "meta.ogTitle":
      "نایترو - وی‌پی‌ان برای YouTube، Instagram*¹، TikTok، Telegram، WhatsApp*¹ و ...",
    "meta.ogDescription":
      "به YouTube، Instagram*¹، TikTok، Telegram و WhatsApp*¹ و دیگر سرویس‌ها دسترسی پیدا کنید. سرور مسکو تبلیغات YouTube را مثل Premium حذف می‌کند و لوکیشن‌های ریگا و فنلاند دسترسی پایدار به محتوای اروپایی می‌دهند. دوره آزمایشی ۲ روزه با ۱ گیگابایت و ترافیک نامحدود برای تا ۴ دستگاه.",
    "meta.ogImageAlt": "لوگوی NITRO VPN و رابط کاربری",
    "meta.twitterTitle":
      "نایترو - وی‌پی‌ان برای YouTube، Instagram*¹، TikTok، Telegram، WhatsApp*¹ و ...",
    "meta.twitterDescription":
      "به YouTube، Instagram*¹، TikTok، Telegram و WhatsApp*¹ و دیگر سرویس‌ها دسترسی پیدا کنید. سرور مسکو تبلیغات YouTube را مثل Premium حذف می‌کند و لوکیشن‌های ریگا و فنلاند دسترسی پایدار به محتوای اروپایی می‌دهند. دوره آزمایشی ۲ روزه با ۱ گیگابایت و ترافیک نامحدود برای تا ۴ دستگاه.",
    "meta.twitterImageAlt": "لوگوی NITRO VPN و رابط کاربری",
    "meta.hreflang": "fa",
    "lang.label": "انتخاب زبان",
    "lang.option.ru": "🇷🇺 روسی",
    "lang.option.en": "🇺🇸 انگلیسی",
    "lang.option.fa": "🇮🇷 فارسی",
    "lang.option.zh": "🇨🇳 چینی",
    "toast.planSelected":
      "طرح انتخاب‌شده: {plan} - {price}. پرداخت در تلگرام انجام می‌شود.",
    "schema.description":
      "NITRO VPN یک سرویس سریع مبتنی بر VLESS برای روسیه و اروپا با سرورهای مسکو، ریگا و فنلاند، دوره آزمایشی ۲ روزه/۱ گیگابایتی، ترافیک نامحدود و تا ۴ دستگاه است.",
    "schema.moscow": "مسکو",
    "schema.riga": "ریگا",
    "schema.finland": "هلسینکی",
    "schema.offer1": "دسترسی VPN یک‌ماهه",
    "schema.offer3": "دسترسی VPN سه‌ماهه",
    "schema.offer6": "دسترسی VPN شش‌ماهه",
    "schema.offer12": "دسترسی VPN دوازده‌ماهه",
    "schema.catalog": "طرح‌های منعطف",
    "schema.bonus1": "+۳ روز برای ارجاع ۱ ماهه",
    "schema.bonus3": "+۷ روز برای ارجاع ۳ ماهه",
    "schema.bonus6": "+۱۵ روز برای ارجاع ۶ ماهه",
    "schema.bonus12": "+۳۰ روز برای ارجاع ۱۲ ماهه",
  },

  zh: {
    "skip.link": "跳转到内容",
    "brand.name": "NITRO VPN",
    "brand.aria": "NITRO VPN",
    "menu.toggleLabel": "打开菜单",
    "nav.menu": "菜单",
    "nav.features": "优势",
    "nav.pricing": "套餐",
    "nav.trial": "试用",
    "nav.protocol": "VLESS",
    "nav.faq": "常见问题",
    "nav.payments": "支付",
    "nav.telegram": "在 Telegram 打开",
    "nav.telegramAria": "打开 NITRO VPN Telegram 机器人",
    "hero.eyebrow": "免费试用 2 天并送 1GB，无需银行卡",
    "hero.heading":
      "NITRO VPN 适用于 ChatGPT、YouTube、TikTok、Instagram*¹、WhatsApp*¹、Telegram、Roblox 等",
    "hero.lead":
      "畅享所有常用服务，无需担心封锁与降速。连接 <b>莫斯科</b> 服务器即可像 Premium 一样移除 YouTube 广告，<b>里加</b> 与 <b>芬兰</b> 节点确保海外服务稳定可用。VLESS + TLS 以及高级 DPI 绕过同时守住速度与隐私。",
    "hero.savings": "订阅最高可省 44%，持续解锁俄罗斯与欧盟内容。",
    "hero.ctaPrimary": "免费体验",
    "hero.ctaPricing": "比较套餐",
    "hero.ctaTrial": "了解原理",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "无限",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "设备",
    "hero.statTrialValue": "2 天",
    "hero.statTrialLabel": "试用",
    "hero.statAria": "关键服务指标",
    "hero.statusAria": "网络摘要",
    "hero.statusHeading": "NITRO VPN 在线状态",
    "hero.statusMoscow": "莫斯科 🇷🇺",
    "hero.statusMoscowPing": "延迟 ~50 ms",
    "hero.statusRiga": "里加 🇱🇻",
    "hero.statusRigaPing": "延迟 ~70 ms",
    "hero.statusFinland": "芬兰 🇫🇮",
    "hero.statusFinlandPing": "延迟 ~70 ms",
    "hero.statusUptime": "稳定性",
    "hero.statusUptimeValue": "98% 在线",
    "hero.statusNote":
      "以上为俄罗斯与欧洲用户平均值，实际延迟取决于运营商与网络负载。",
    "features.heading": "为什么选择 NITRO VPN",
    "features.subheading":
      "可靠解锁流媒体、消息应用和社交平台，新用户均可领取 2 天 / 1GB 试用额度。",
    "features.cardAiTitle": "AI 服务",
    "features.cardAiText":
      "在海外 AI 平台提问或生成图片、视频、音乐、代码等：ChatGPT、Claude、Gemini、Grok、Copilot、DeepSeek、Midjourney、Sora 等都能稳定访问。",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText": "任意设备都能流畅播放 Shorts、视频和直播。",
    "features.cardCallsTitle": "消息应用通话",
    "features.cardCallsText":
      "Telegram、WhatsApp*¹、Viber、FaceTime 等语音/视频通话*² 一直稳定。",
    "features.cardInstagramTitle": "Instagram*¹",
    "features.cardInstagramText":
      "发布照片、视频与 Reels，进行直播并无障碍浏览内容。",
    "features.cardCinemaTitle": "KinoPoisk",
    "features.cardCinemaText":
      "无论身在何处都能观看电影、剧集、电视频道和体育赛事，不受地区限制。",
    "features.cardDevicesTitle": "一份订阅覆盖 4 台设备",
    "features.cardDevicesText":
      "一个套餐即可同时使用四台设备：iPhone、Android、Mac、Windows、Linux。",
    "features.cardSpeedTitle": "高速连接",
    "features.cardSpeedText": "优化的莫斯科、里加与芬兰节点带来高速与低延迟。",
    "features.cardUnlimitedTitle": "无限流量",
    "features.cardUnlimitedText": "没有隐藏限制或突然降速。",
    "features.cardStealthTitle": "隐匿流量",
    "features.cardStealthText": "VLESS 连接伪装成普通 HTTPS，封锁难以察觉。",
    "features.cardSupportTitle": "稳定与支持",
    "features.cardSupportText":
      "98% 在线率，@nitro_vpn_help 实时客服数分钟内答复。",
    "features.note":
      "*¹ Instagram 与 WhatsApp 隶属 Meta，该公司在俄罗斯被定性为极端组织。<br>*² 语音通话需双方同时开启 VPN。",
    "protocol.heading": "VLESS -- 回答“为什么你们一直可用”的最好方式",
    "protocol.subheading":
      "VLESS 是新一代 VPN 协议，让连接快速、稳定且难以被运营商察觉，常用服务自然保持在线。",
    "protocol.cardWhatTitle": "它是什么",
    "protocol.cardWhatText":
      "VLESS 负责设备如何连接 VPN。由于没有额外开销，几秒即可建立连接且不会拖慢网络。",
    "protocol.cardFastTitle": "为何更快",
    "protocol.cardFastText":
      "传输数据时去掉多余步骤。即便多台设备同时使用，视频、通话与游戏也不会卡顿。",
    "protocol.cardStealthTitle": "为何难以封锁",
    "protocol.cardStealthText":
      "流量看起来就像普通网页访问，运营商无从怀疑，即便严格封锁也难以阻断。",
    "pricing.heading": "套餐方案",
    "pricing.subheading":
      "提供 1/3/6/12 个月灵活套餐，全部包含 4 台设备、不限流量以及莫斯科、里加、芬兰服务器。",
    "pricing.plan1.title": "1 个月",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "30 天",
    "pricing.plan3.title": "3 个月",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "3 个月 (~117 ₽/月)",
    "pricing.plan3.savings": "比 1 个月省 22%",
    "pricing.plan6.badge": "优惠 33%",
    "pricing.plan6.title": "6 个月",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "6 个月 (~100 ₽/月)",
    "pricing.plan6.savings": "比 1 个月省 33%",
    "pricing.plan12.badge": "最高优惠",
    "pricing.plan12.title": "12 个月",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "12 个月 (~84 ₽/月)",
    "pricing.plan12.savings": "比 1 个月省 44%",
    "pricing.benefit.locations": "莫斯科 🇷🇺 / 里加 🇱🇻 / 芬兰 🇫🇮",
    "pricing.benefit.devices": "一个账号最多 4 台设备",
    "pricing.benefit.speed": "高速无限流量",
    "pricing.benefit.services": "流媒体、消息服务与机器人提醒",
    "pricing.cta": "通过 Telegram 购买",
    "pricing.note":
      "支持俄罗斯银行卡、SBP 或 Telegram Stars 支付。机器人会在到期前数日提醒续费。",
    "trial.heading": "免费试用",
    "trial.lead":
      "<b>新用户</b> 可领取 <b>2 天</b> <b>1GB</b> 免费流量。Telegram 中 1 分钟内即可激活，无需银行卡。",
    "trial.list.allServers": "解锁全部服务器（莫斯科 🇷🇺、里加 🇱🇻、芬兰 🇫🇮）",
    "trial.list.speed": "4 台设备共享满速",
    "trial.list.upgrade": "可在机器人中随时升级任意套餐",
    "trial.ctaActivate": "在 Telegram 激活",
    "trial.ctaFaq": "试用 FAQ",
    "trial.stepsTitle": "试用流程",
    "trial.steps1":
      '打开 <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a> 机器人。',
    "trial.steps2": '点击 "Start" 或发送 /start',
    "trial.steps3": '选择 "试用期" 并按照提示操作',
    "trial.steps4": "获取订阅链接并连接设备",
    "trial.note": "每位用户仅可领取一次试用，可用任何付费套餐续期。",
    "referral.heading": "邀请好友奖励",
    "referral.subheading": "好友付款后双方都能获得额外天数。",
    "referral.card1.title": "1 个月",
    "referral.card1.bonus": "+3 天",
    "referral.card3.title": "3 个月",
    "referral.card3.bonus": "+7 天",
    "referral.card6.title": "6 个月",
    "referral.card6.bonus": "+15 天",
    "referral.card12.title": "12 个月",
    "referral.card12.bonus": "+30 天",
    "referral.ctaPrimary": "获取邀请链接",
    "referral.ctaSecondary": "查看规则",
    "payments.heading": "支付与即时开通",
    "payments.subheading":
      "支持俄罗斯银行卡、SBP 与 Telegram Stars，付款后立即生效。",
    "payments.cardCardsTitle": "俄罗斯银行卡",
    "payments.cardCardsText": "熟悉的银行卡支付，自动确认。",
    "payments.cardSbpTitle": "SBP",
    "payments.cardSbpText": "从银行账户即时付款，无额外费用。",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText": "如果没有银行卡，可用 Telegram Stars 付款。",
    "payments.ctaPrimary": "打开 Telegram 机器人",
    "payments.ctaSecondary": "比较套餐",
    "locations.heading": "节点位置",
    "locations.moscowTitle": "莫斯科 🇷🇺",
    "locations.moscowText": "在俄罗斯境内绕过本地限制的首选。",
    "locations.rigaTitle": "里加 🇱🇻",
    "locations.rigaText": "适合同时绕过国内外限制与制裁。",
    "locations.finlandTitle": "芬兰 🇫🇮",
    "locations.finlandText": "同样适合绕过内外限制，轻松访问欧盟服务与支付。",
    "faq.heading": "关于 NITRO VPN 的常见问题",
    "faq.q1": "可以连接多少设备？",
    "faq.a1": "每个套餐都包含最多 <b>4 台设备</b> 同时在线。",
    "faq.q2": "有速度限制吗？",
    "faq.a2":
      "单台服务器最高 2 Gbit/s，平均分配给所有用户，绝不人为限速。实际速度取决于运营商与距离。",
    "faq.q3": "试用如何运作？",
    "faq.a3": "提供 2 天 1GB 免费流量，用完即可升级任意套餐。",
    "faq.q4": "服务覆盖哪些地区？",
    "faq.a4":
      "目前拥有 <b>莫斯科</b>、<b>里加</b> 与 <b>芬兰</b> 节点，随着增长会增加更多位置。",
    "cta.heading": "准备好接入 NITRO VPN 吗？",
    "cta.text":
      '购买、续费、试用和邀请计划都在我们的 Telegram 机器人中。客服：<a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "打开 @nitro_vpn_sales_bot",
    "cta.secondary": "支付方式",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO - 适用于 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等的 VPN",
    "meta.description":
      "畅享 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等服务。莫斯科服务器能像 Premium 一样移除 YouTube 广告，里加与芬兰节点提供稳定的欧盟访问。含 2 天 / 1GB 试用、不限流量、最多 4 台设备。",
    "meta.keywords":
      "nitro vpn,vless vpn,vpn,vpn russia,vpn latvia,vpn finland,vpn moscow,vpn riga,vpn helsinki,高速 vpn,稳定 vpn,无限流量 vpn,vpn youtube,vpn instagram,vpn tiktok,vpn telegram,vpn WhatsApp*¹,vpn twitter,vpn discord,vpn viber,vpn facetime,vpn kinopoisk,vless protocol,绕过 dpi,secure vpn",
    "meta.ogLocale": "zh_CN",
    "meta.ogTitle":
      "NITRO - 适用于 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等的 VPN",
    "meta.ogDescription":
      "畅享 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等服务。莫斯科服务器像 Premium 一样去广告，里加与芬兰节点保持低延迟。2 天 1GB 试用，不限流量，可连接 4 台设备。",
    "meta.ogImageAlt": "NITRO VPN 标志与界面",
    "meta.twitterTitle":
      "NITRO - 适用于 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等的 VPN",
    "meta.twitterDescription":
      "畅享 YouTube、Instagram*¹、TikTok、Telegram、WhatsApp*¹ 等服务。莫斯科服务器像 Premium 一样去广告，里加与芬兰节点保持低延迟。2 天 1GB 试用，不限流量，可连接 4 台设备。",
    "meta.twitterImageAlt": "NITRO VPN 标志与界面",
    "meta.hreflang": "zh",
    "lang.label": "选择语言",
    "lang.option.ru": "🇷🇺 俄语",
    "lang.option.en": "🇺🇸 英语",
    "lang.option.fa": "🇮🇷 波斯语",
    "lang.option.zh": "🇨🇳 简体中文",
    "toast.planSelected": "已选择套餐：{plan} - {price}。请在 Telegram 付款。",
    "schema.description":
      "NITRO VPN 是面向俄罗斯与欧洲的高速 VLESS VPN，提供莫斯科、里加、芬兰服务器，含 2 天 / 1GB 试用、无限流量以及最多 4 台设备。",
    "schema.moscow": "莫斯科",
    "schema.riga": "里加",
    "schema.finland": "赫尔辛基",
    "schema.offer1": "1 个月 VPN 访问",
    "schema.offer3": "3 个月 VPN 访问",
    "schema.offer6": "6 个月 VPN 访问",
    "schema.offer12": "12 个月 VPN 访问",
    "schema.catalog": "灵活套餐",
    "schema.bonus1": "+3 天奖励（1 个月）",
    "schema.bonus3": "+7 天奖励（3 个月）",
    "schema.bonus6": "+15 天奖励（6 个月）",
    "schema.bonus12": "+30 天奖励（12 个月）",
  },
};

const planPriceCopy = {
  ru: {
    "1m": "150 ₽ за 30 дней",
    "3m": "350 ₽ за 3 мес (~117 ₽/мес)",
    "6m": "600 ₽ за 6 мес (~100 ₽/мес)",
    "12m": "1000 ₽ за 12 мес (~84 ₽/мес)",
  },
  en: {
    "1m": "150 ₽ for 30 days",
    "3m": "350 ₽ for 3 months (~117 ₽/mo)",
    "6m": "600 ₽ for 6 months (~100 ₽/mo)",
    "12m": "1000 ₽ for 12 months (~84 ₽/mo)",
  },
  fa: {
    "1m": "150 ₽ برای ۳۰ روز",
    "3m": "350 ₽ برای ۳ ماه (~117 ₽ در ماه)",
    "6m": "600 ₽ برای ۶ ماه (~100 ₽ در ماه)",
    "12m": "1000 ₽ برای ۱۲ ماه (~84 ₽ در ماه)",
  },
  zh: {
    "1m": "150 ₽ / 30 天",
    "3m": "350 ₽ / 3 个月 (~117 ₽/月)",
    "6m": "600 ₽ / 6 个月 (~100 ₽/月)",
    "12m": "1000 ₽ / 12 个月 (~84 ₽/月)",
  },
};

const toastMessages = {
  ru: "Выбран тариф: {plan} - {price}. Оплата в Telegram.",
  en: "Selected plan: {plan} - {price}. Please pay in Telegram.",
  fa: "طرح انتخاب شده: {plan} - {price}. پرداخت در تلگرام انجام می‌شود.",
  zh: "已选择套餐：{plan} - {price}。请在 Telegram 完成支付。",
};

const storageKey = "nitro-lang";
let currentLang = "ru";

const getTranslation = (lang, key) => {
  const dict = translations[lang] || translations.ru;
  return dict[key] ?? translations.ru[key] ?? key;
};

const applyTranslations = (lang) => {
  const dict = translations[lang] || translations.ru;
  const meta = localeMap[lang] || localeMap.ru;

  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = getTranslation(lang, key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key) el.innerHTML = getTranslation(lang, key);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    if (key) el.setAttribute("content", getTranslation(lang, key));
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const attrName = el.getAttribute("data-i18n-attr");
    const attrKey =
      el.getAttribute("data-i18n-attr-key") || el.getAttribute("data-i18n");
    if (attrName && attrKey) {
      el.setAttribute(attrName, getTranslation(lang, attrKey));
    }
  });

  document.querySelectorAll("[data-i18n-tooltip]").forEach((el) => {
    const key = el.getAttribute("data-i18n-tooltip");
    if (!key) return;
    const value = getTranslation(lang, key);
    el.setAttribute("data-tooltip", value);
    el.setAttribute("title", value);
  });

  // Update structured data JSON-LD
  const schemaEl = document.getElementById("service-schema");
  if (schemaEl) {
    try {
      const schema = JSON.parse(schemaEl.textContent);
      schema.description = getTranslation(lang, "schema.description");
      if (schema.areaServed && schema.areaServed[0]) {
        schema.areaServed[0].name = getTranslation(lang, "schema.moscow");
      }
      if (schema.areaServed && schema.areaServed[1]) {
        schema.areaServed[1].name = getTranslation(lang, "schema.riga");
      }
      if (schema.areaServed && schema.areaServed[2]) {
        schema.areaServed[2].name = getTranslation(lang, "schema.finland");
      }
      if (schema.offers) {
        const offerKeys = [
          "schema.offer1",
          "schema.offer3",
          "schema.offer6",
          "schema.offer12",
        ];
        schema.offers.forEach((offer, index) => {
          if (offer && offer.name && offerKeys[index]) {
            offer.name = getTranslation(lang, offerKeys[index]);
          }
        });
      }
      if (
        schema.offersCatalog &&
        Array.isArray(schema.offersCatalog.itemListElement)
      ) {
        schema.offersCatalog.name = getTranslation(lang, "schema.catalog");
        const catalogKeys = [
          "schema.offer1",
          "schema.offer3",
          "schema.offer6",
          "schema.offer12",
        ];
        schema.offersCatalog.itemListElement.forEach((item, index) => {
          if (item && item.itemOffered && catalogKeys[index]) {
            item.itemOffered.name = getTranslation(lang, catalogKeys[index]);
          }
        });
      }
      if (
        schema.hasOfferCatalog &&
        Array.isArray(schema.hasOfferCatalog.itemListElement)
      ) {
        const bonusKeys = [
          "schema.bonus1",
          "schema.bonus3",
          "schema.bonus6",
          "schema.bonus12",
        ];
        schema.hasOfferCatalog.name = getTranslation(lang, "referral.heading");
        schema.hasOfferCatalog.itemListElement.forEach((item, index) => {
          if (item && bonusKeys[index]) {
            item.name = getTranslation(lang, bonusKeys[index]);
          }
        });
      }
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    } catch (err) {
      console.warn("Failed to update schema", err);
    }
  }

  // Update document title explicitly
  document.title = getTranslation(lang, "meta.title");

  // Update language selector label text direction
  const langSelect = document.getElementById("language-switch");
  if (langSelect) {
    langSelect.value = lang;
  }

  currentLang = lang;
};

const setLanguage = (lang, persist = true) => {
  const normalized = supportedLangs.includes(lang) ? lang : "ru";
  applyTranslations(normalized);
  if (persist) {
    try {
      localStorage.setItem(storageKey, normalized);
    } catch (err) {
      /* ignore storage errors */
    }
  }
};

const detectLanguage = () => {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored && supportedLangs.includes(stored)) {
      return stored;
    }
  } catch (err) {
    /* ignore */
  }
  const browserLangs = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  for (const entry of browserLangs) {
    if (!entry) continue;
    const lower = entry.toLowerCase();
    if (lower.startsWith("ru")) return "ru";
    if (lower.startsWith("en")) return "en";
    if (lower.startsWith("fa") || lower.startsWith("pe")) return "fa";
    if (lower.startsWith("zh")) return "zh";
  }
  return "ru";
};

const showToast = (message) => {
  const toastEl = document.createElement("div");
  toastEl.textContent = message;
  toastEl.setAttribute("role", "status");
  toastEl.setAttribute("aria-live", "polite");
  toastEl.style.position = "fixed";
  toastEl.style.left = "50%";
  toastEl.style.top = "16px";
  toastEl.style.transform = "translateX(-50%)";
  toastEl.style.background =
    "linear-gradient(135deg, var(--primary-600), var(--primary))";
  toastEl.style.color = "#0b0f16";
  toastEl.style.padding = "10px 14px";
  toastEl.style.borderRadius = "12px";
  toastEl.style.fontWeight = "800";
  toastEl.style.boxShadow = "var(--shadow)";
  toastEl.style.zIndex = "50";
  document.body.appendChild(toastEl);
  setTimeout(() => toastEl.remove(), 3200);
};

const initMenu = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("main-menu");
  if (!menuToggle || !menu) return null;
  const mq = window.matchMedia("(max-width: 1399px)");
  const setMenuState = (open) => {
    menu.dataset.open = String(open);
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };
  menuToggle.addEventListener("click", () => {
    const willOpen = menu.dataset.open !== "true";
    setMenuState(willOpen);
  });
  menu.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", () => {
      if (mq.matches) setMenuState(false);
    });
  });
  window.matchMedia("(min-width: 1400px)").addEventListener("change", (evt) => {
    if (evt.matches) setMenuState(false);
  });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") setMenuState(false);
  });
  return {
    close: () => setMenuState(false),
    isMobile: () => mq.matches,
  };
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== `#${id}`) {
          history.replaceState(null, "", `#${id}`);
        }
      }
    });
  });
};

const initPlanButtons = () => {
  document.querySelectorAll("[data-select]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const card = event.currentTarget.closest(".plan");
      if (!card) return;
      const planKey = card.dataset.plan || "";
      const planTitle = card.querySelector("h3")?.textContent || "";
      const prices = planPriceCopy[currentLang] || planPriceCopy.ru;
      const priceText = prices[planKey] || "";
      const template = toastMessages[currentLang] || toastMessages.ru;
      const message = template
        .replace("{plan}", planTitle)
        .replace("{price}", priceText);
      showToast(message);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const initialLang = detectLanguage();
  setLanguage(initialLang, false);

  const menuControls = initMenu();
  const languageSelect = document.getElementById("language-switch");
  if (languageSelect) {
    languageSelect.value = initialLang;
    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
      if (menuControls && menuControls.isMobile()) {
        menuControls.close();
      }
    });
  }

  initSmoothScroll();
  initPlanButtons();
});
