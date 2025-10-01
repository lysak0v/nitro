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
    "hero.eyebrow": "Пробный период 2 дня и 1 ГБ — без карты",
    "hero.heading":
      "NITRO — VPN для YouTube, Instagram, TikTok, Telegram, WhatsApp и т.д.",
    "hero.lead":
      "Запускайте YouTube, Instagram, TikTok, Telegram, WhatsApp и КиноПоиск без блокировок. Серверы в <b>Москве</b> и <b>Риге</b>, VLESS поверх TLS и продвинутый обход DPI дают стабильный и быстрый интернет.",
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
    "hero.statusMoscowPing": "Пинг ~28 мс",
    "hero.statusRiga": "Рига 🇱🇻",
    "hero.statusRigaPing": "Пинг ~60 мс",
    "hero.statusUptime": "Надёжность",
    "hero.statusUptimeValue": "99% аптайм",
    "hero.statusEncryption": "Шифрование",
    "hero.statusEncryptionValue": "TLS + AES-256",
    "hero.statusNote":
      "Средние показатели по клиентам из России и Европы. Реальный пинг зависит от провайдера и загрузки сети.",
    "features.heading": "Почему выбирают NITRO VPN",
    "features.subheading":
      "Надёжный доступ к стримингам, мессенджерам и соцсетям без блокировок, пробный период 2 дня и 1 ГБ для каждого нового пользователя.",
    "features.cardCinemaTitle": "КиноПоиск",
    "features.cardCinemaText":
      "Смотрите кино, сериалы, ТВ-каналы и спорт без региональных блокировок даже находясь не в России.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "Высокие скорости для 4K и прямых трансляций на любых устройствах.",
    "features.cardCallsTitle": "Звонки в месенджерах",
    "features.cardCallsText":
      "Аудио и видео звонки*¹ в Telegram, WhatsApp, Viber, FaceTime и др. проходят стабильно.",
    "features.cardInstagramTitle": "Instagram*²",
    "features.cardInstagramText":
      "Публикуйте и смотрите контент без ограничений.",
    "features.cardStealthTitle": "Скрытный трафик",
    "features.cardStealthText":
      "Соединение на VLESS маскируется под обычный HTTPS, поэтому блокировки его не замечают.",
    "features.cardDevicesTitle": "Одна подписка - 4 устройства",
    "features.cardDevicesText":
      "Одна подписка — любые четыре устройства: iPhone, Android, Mac, Windows, Linux.",
    "features.cardUnlimitedTitle": "Безлимитный трафик",
    "features.cardUnlimitedText":
      "Никаких скрытых ограничений или резкого снижения скорости.",
    "features.cardSpeedTitle": "Высокая скорость",
    "features.cardSpeedText":
      "Оптимизированные узлы в Москве и Риге обеспечивают высокую скорость и низкую сетевую задержку.",
    "features.cardSupportTitle": "Стабильность и поддержка",
    "features.cardSupportText":
      "99% аптайм и живой чат @nitro_vpn_help отвечает за пару минут.",
    "features.note":
      "*¹ Для голосовых звонков VPN должен быть включён у обоих абонентов.<br>*² Instagram принадлежит Meta, признанной в России экстремистской организацией.",
    "protocol.heading":
      "VLESS — простой ответ на вопрос «Почему у вас всё работает?»",
    "protocol.subheading":
      "VLESS — это современный протокол VPN. Он делает соединение быстрым, стабильным и незаметным для провайдера, поэтому любимые сервисы остаются доступны.",
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
      "Гибкие планы на 1, 3, 6 и 12 месяцев. Любой тариф включает подключение до 4 устройств, безлимитный трафик и доступ к серверам в Москве и Риге.",
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
    "pricing.benefit.locations": "Москва 🇷🇺 / Рига 🇱🇻",
    "pricing.benefit.devices": "До 4 устройств одним аккаунтом",
    "pricing.benefit.speed": "Безлимит и высокая скорость",
    "pricing.benefit.services": "Стриминги, мессенджеры и напоминание от бота",
    "pricing.cta": "Купить в Telegram",
    "pricing.note":
      "Оплата картами банков РФ, по СБП или через Telegram Stars. Telegram-бот напомнит о продлении за несколько дней до окончания подписки.",
    "trial.heading": "Пробный период — бесплатно",
    "trial.lead":
      "<b>Новые пользователи</b> получают <b>2 дня</b> и <b>1 ГБ</b> трафика бесплатно. Активация занимает меньше минуты в Telegram — без банковской карты.",
    "trial.list.allServers": "Доступ ко всем серверам (Москва 🇷🇺 и Рига 🇱🇻)",
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
      "Если ваш друг оплачивает подписку — вы оба получаете дни в подарок к своей подписке.",
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
      "Принимаем карты банков РФ, СБП и платежи через Telegram Stars — доступ выдаётся сразу после оплаты.",
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
    "faq.heading": "Частые вопросы о NITRO VPN",
    "faq.q1": "Сколько устройств можно подключить?",
    "faq.a1": "Любая подписка включает до <b>4 устройств</b> одновременно.",
    "faq.q2": "Есть ли ограничения по скорости?",
    "faq.a2":
      "Максимально возможная скорость на 1 сервер — 2 Гбит/сек, делится в равных пропорциях между всеми пользователями и искусственно не ограничивается. Реальная скорость зависит от вашего провайдера и расстояния до сервера.",
    "faq.q3": "Как работает пробный период?",
    "faq.a3":
      "2 дня и 1 ГБ трафика бесплатно. После исчерпания лимита можно перейти на любой тариф.",
    "faq.q4": "Где доступен сервис?",
    "faq.a4":
      "Сейчас доступны <b>Москва</b> и <b>Рига</b>. Мы добавляем новые локации по мере роста.",
    "cta.heading": "Готовы подключиться к NITRO VPN?",
    "cta.text":
      'Покупка, продление, пробный период и рефералы доступны в нашем Telegram-боте. Поддержка: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "Открыть @nitro_vpn_sales_bot",
    "cta.secondary": "Способы оплаты",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO — VPN для YouTube, Instagram, TikTok, Telegram, WhatsApp и т.д.",
    "meta.description":
      "Запускайте YouTube, Instagram, TikTok, Telegram, WhatsApp и КиноПоиск без блокировок. Серверы в Москве и Риге, VLESS поверх TLS, пробный период 2 дня и 1 ГБ, безлимитный трафик, до 4 устройств.",
    "meta.keywords":
      "nitro vpn,vless vpn,впн,впн россия,vpn russia,vpn латвия,vpn latvia,vpn москва,vpn moscow,vpn рига,vpn riga,быстрый vpn,stable vpn,vpn безлимит,vpn для youtube,vpn для instagram,vpn для facebook,vpn для tiktok,vpn для telegram,vpn для whatsapp,vpn для twitter,vpn для discord,vpn для viber,vpn для facetime,vpn для кинопоиск,vless protocol,обход dpi,secure vpn",
    "meta.ogLocale": "ru_RU",
    "meta.ogTitle": "NITRO VPN — VLESS VPN для YouTube и Telegram",
    "meta.ogDescription":
      "Доступ к YouTube, Instagram, TikTok, Telegram и WhatsApp. Серверы в Москве и Риге, VLESS поверх TLS, пробный период 2 дня и 1 ГБ.",
    "meta.ogImageAlt": "Логотип NITRO VPN и интерфейс приложения",
    "meta.twitterTitle": "NITRO VPN — VLESS VPN без блокировок",
    "meta.twitterDescription":
      "Тест 2 дня и 1 ГБ бесплатно. YouTube, Telegram, Instagram и КиноПоиск работают без ограничений, серверы в Москве и Риге.",
    "meta.twitterImageAlt": "Логотип NITRO VPN и интерфейс приложения",
    "meta.hreflang": "ru",
    "lang.label": "Выбрать язык",
    "lang.option.ru": "🇷🇺 Русский",
    "lang.option.en": "🇺🇸 English",
    "lang.option.fa": "🇮🇷 فارسی",
    "lang.option.zh": "🇨🇳 简体中文",
    "toast.planSelected": "Выбран тариф: {plan} — {price}. Оплата в Telegram.",
    "schema.description":
      "NITRO VPN — быстрый VLESS VPN-сервис для России и Европы с серверами в Москве и Риге, пробным периодом 2 дня и 1 ГБ, безлимитным трафиком и подключением до 4 устройств.",
    "schema.moscow": "Москва",
    "schema.riga": "Рига",
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
    "skip.link": "Skip to main content",
    "brand.name": "NITRO VPN",
    "brand.aria": "NITRO VPN",
    "menu.toggleLabel": "Toggle navigation",
    "nav.menu": "Menu",
    "nav.features": "Benefits",
    "nav.pricing": "Plans",
    "nav.trial": "Free trial",
    "nav.protocol": "VLESS",
    "nav.faq": "FAQ",
    "nav.payments": "Payments",
    "nav.telegram": "Open in Telegram",
    "nav.telegramAria": "Open the NITRO VPN Telegram bot",
    "hero.eyebrow": "Free 2-day trial with 1 GB — no card required",
    "hero.heading":
      "NITRO — VPN for YouTube, Instagram, TikTok, Telegram, WhatsApp, etc.",
    "hero.lead":
      "Access YouTube, Instagram, TikTok, Telegram, WhatsApp and Kinopoisk without blocks. Servers in <b>Moscow</b> and <b>Riga</b>, VLESS over TLS and advanced DPI bypass keep your internet fast and private.",
    "hero.savings":
      "Save up to 44% on long-term plans and stay connected in Russia and the EU.",
    "hero.ctaPrimary": "Start for free",
    "hero.ctaPricing": "Compare plans",
    "hero.ctaTrial": "How it works",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "Unlimited",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "Devices",
    "hero.statTrialValue": "2 days",
    "hero.statTrialLabel": "Free trial",
    "hero.statAria": "Key service metrics",
    "hero.statusAria": "Network status overview",
    "hero.statusHeading": "Live status of NITRO VPN",
    "hero.statusMoscow": "Moscow 🇷🇺",
    "hero.statusMoscowPing": "Ping ~28 ms",
    "hero.statusRiga": "Riga 🇱🇻",
    "hero.statusRigaPing": "Ping ~60 ms",
    "hero.statusUptime": "Uptime",
    "hero.statusUptimeValue": "99% uptime",
    "hero.statusEncryption": "Encryption",
    "hero.statusEncryptionValue": "TLS + AES-256",
    "hero.statusNote":
      "Average values for customers in Russia and Europe. Actual latency depends on your ISP and network load.",
    "features.heading": "Why people choose NITRO VPN",
    "features.subheading":
      "Reliable access to streaming, messengers and social networks. Every new user gets a 2-day, 1 GB trial.",
    "features.cardCinemaTitle": "Kinopoisk",
    "features.cardCinemaText":
      "Watch movies, series, live TV and sports without regional blocks — even when you travel.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "High speeds for 4K videos and live streams on every device.",
    "features.cardCallsTitle": "Messenger calls",
    "features.cardCallsText":
      "Voice and video calls*¹ in Telegram, WhatsApp, Viber, FaceTime and more stay stable.",
    "features.cardInstagramTitle": "Instagram*²",
    "features.cardInstagramText": "Post and scroll without restrictions.",
    "features.cardStealthTitle": "Stealth traffic",
    "features.cardStealthText":
      "VLESS traffic looks like ordinary HTTPS, so blocks and DPI filters ignore it.",
    "features.cardDevicesTitle": "One plan for 4 devices",
    "features.cardDevicesText":
      "Use any four devices at once — iPhone, Android, Mac, Windows or Linux.",
    "features.cardUnlimitedTitle": "Unlimited data",
    "features.cardUnlimitedText": "No hidden caps or sudden throttling.",
    "features.cardSpeedTitle": "Fast speeds",
    "features.cardSpeedText":
      "Optimised Moscow and Riga nodes keep latency low across Russia and the EU.",
    "features.cardSupportTitle": "Reliable support",
    "features.cardSupportText":
      "99% uptime and live help at @nitro_vpn_help replies within minutes.",
    "features.note":
      "*¹ Both sides need VPN enabled for voice calls.<br>*² Instagram is owned by Meta, recognised as an extremist organisation in Russia.",
    "protocol.heading": "VLESS — the simple reason everything keeps working",
    "protocol.subheading":
      "VLESS is a modern VPN protocol. It keeps connections fast, stable and invisible to providers, so your favourite services stay online.",
    "protocol.cardWhatTitle": "What it is",
    "protocol.cardWhatText":
      "VLESS handles how your device talks to the VPN. With no extra overhead it starts instantly and doesn’t slow the internet down.",
    "protocol.cardFastTitle": "Why it’s faster",
    "protocol.cardFastText":
      "The protocol avoids extra handshakes. Video, calls and games run smoothly even on multiple devices at once.",
    "protocol.cardStealthTitle": "Why it isn’t blocked",
    "protocol.cardStealthText":
      "Traffic looks like a normal website visit, so ISPs have nothing to flag and harsh blocks can’t stop it.",
    "pricing.heading": "Plans and pricing",
    "pricing.subheading":
      "Flexible 1, 3, 6 and 12 month plans. Every subscription includes 4 devices, unlimited data and access to Moscow and Riga servers.",
    "pricing.plan1.title": "1 month",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "for 30 days",
    "pricing.plan3.title": "3 months",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "for 3 months (~117 ₽/mo)",
    "pricing.plan3.savings": "Save 22% vs monthly",
    "pricing.plan6.badge": "33% off",
    "pricing.plan6.title": "6 months",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "for 6 months (~100 ₽/mo)",
    "pricing.plan6.savings": "Save 33% vs monthly",
    "pricing.plan12.badge": "Best value",
    "pricing.plan12.title": "12 months",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "for 12 months (~84 ₽/mo)",
    "pricing.plan12.savings": "Save 44% vs monthly",
    "pricing.benefit.locations": "Moscow 🇷🇺 / Riga 🇱🇻",
    "pricing.benefit.devices": "Up to 4 devices per account",
    "pricing.benefit.speed": "Unlimited high-speed traffic",
    "pricing.benefit.services": "Streaming, messengers and renewal reminders",
    "pricing.cta": "Buy via Telegram",
    "pricing.note":
      "Pay with Russian bank cards, SBP or Telegram Stars. The bot reminds you a few days before renewal.",
    "trial.heading": "Free trial — included",
    "trial.lead":
      "<b>New users</b> get <b>2 days</b> and <b>1 GB</b> of traffic for free. Activation takes under a minute in Telegram — no bank card needed.",
    "trial.list.allServers": "Full access to Moscow 🇷🇺 and Riga 🇱🇻 servers",
    "trial.list.speed": "Maximum speed for all 4 devices",
    "trial.list.upgrade": "Upgrade to any plan directly in the bot",
    "trial.ctaActivate": "Activate in Telegram",
    "trial.ctaFaq": "Trial FAQ",
    "trial.stepsTitle": "How the trial works",
    "trial.steps1":
      'Open <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a>.',
    "trial.steps2": "Tap Start or send /start",
    "trial.steps3": "Choose “Free trial” and follow the tips.",
    "trial.steps4": "Get the subscription link and connect your devices.",
    "trial.note":
      "The trial is available once per user. Extend with any paid plan.",
    "referral.heading": "Referral program “Invite a friend”",
    "referral.subheading":
      "When your friend pays for a plan, you both receive extra days on top of your subscription.",
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
      "Pay with Russian bank cards, SBP or Telegram Stars — access is granted immediately after payment.",
    "payments.cardCardsTitle": "Russian bank cards",
    "payments.cardCardsText":
      "Pay with familiar cards and instant confirmation.",
    "payments.cardSbpTitle": "SBP",
    "payments.cardSbpText": "Instant bank payments with no extra fees.",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText":
      "Pay with Telegram Stars if you don’t have a Russian card or SBP.",
    "payments.ctaPrimary": "Open the Telegram bot",
    "payments.ctaSecondary": "Compare plans",
    "locations.heading": "Available locations",
    "locations.moscowTitle": "Moscow 🇷🇺",
    "locations.moscowText":
      "Best choice for bypassing local restrictions across Russia.",
    "locations.rigaTitle": "Riga 🇱🇻",
    "locations.rigaText":
      "Ideal when you need both domestic and international access.",
    "faq.heading": "Frequently asked questions",
    "faq.q1": "How many devices can I connect?",
    "faq.a1":
      "Every plan includes up to <b>4 devices</b> online at the same time.",
    "faq.q2": "Are there any speed limits?",
    "faq.a2":
      "Each server handles up to 2 Gbit/s and shares it equally between users. Your real speed depends on your ISP and distance to the server.",
    "faq.q3": "How does the trial work?",
    "faq.a3":
      "You get 2 days and 1 GB for free. After that, switch to any paid plan.",
    "faq.q4": "Where is the service available?",
    "faq.a4":
      "Right now we run servers in <b>Moscow</b> and <b>Riga</b>. More locations are added as we grow.",
    "cta.heading": "Ready to connect to NITRO VPN?",
    "cta.text":
      'You can buy, renew, start the trial and manage referrals in our Telegram bot. Support: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "Open @nitro_vpn_sales_bot",
    "cta.secondary": "Payment options",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO — VPN for YouTube, Instagram, TikTok, Telegram, WhatsApp, etc.",
    "meta.description":
      "Access YouTube, Instagram, TikTok, Telegram, WhatsApp and Kinopoisk without blocks. Moscow and Riga servers, VLESS over TLS, 2-day 1 GB trial, unlimited traffic, 4 devices.",
    "meta.keywords":
      "nitro vpn,vless vpn,vpn russia,vpn moscow,vpn riga,fast vpn,unlimited vpn,vpn for youtube,vpn for telegram,vpn for instagram,vpn for whatsapp,vpn for twitter,vpn for discord,vpn bypass dpi,secure vpn",
    "meta.ogLocale": "en_US",
    "meta.ogTitle": "NITRO VPN — VLESS VPN for YouTube and Telegram",
    "meta.ogDescription":
      "Use YouTube, Instagram, TikTok, Telegram and WhatsApp freely. Moscow and Riga servers, VLESS over TLS, free 2-day 1 GB trial.",
    "meta.ogImageAlt": "NITRO VPN logo and app interface",
    "meta.twitterTitle": "NITRO VPN — unblock YouTube and Telegram",
    "meta.twitterDescription":
      "Try 2 days and 1 GB for free. Fast VLESS VPN with Moscow and Riga servers, unlimited data and 4 devices included.",
    "meta.twitterImageAlt": "NITRO VPN logo and app interface",
    "meta.hreflang": "en",
    "lang.label": "Choose language",
    "lang.option.ru": "🇷🇺 Russian",
    "lang.option.en": "🇺🇸 English",
    "lang.option.fa": "🇮🇷 Persian",
    "lang.option.zh": "🇨🇳 Chinese",
    "toast.planSelected":
      "Selected plan: {plan} — {price}. Please pay in Telegram.",
    "schema.description":
      "NITRO VPN is a fast VLESS VPN for Russia and Europe with servers in Moscow and Riga, a 2-day 1 GB trial, unlimited traffic and up to 4 devices.",
    "schema.moscow": "Moscow",
    "schema.riga": "Riga",
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
    "skip.link": "رفتن به محتوای اصلی",
    "brand.name": "NITRO VPN",
    "brand.aria": "نایترو وی‌پی‌ان",
    "menu.toggleLabel": "باز و بسته کردن منو",
    "nav.menu": "منو",
    "nav.features": "مزایا",
    "nav.pricing": "طرح‌ها",
    "nav.trial": "آزمایشی رایگان",
    "nav.protocol": "VLESS",
    "nav.faq": "سؤالات متداول",
    "nav.payments": "پرداخت",
    "nav.telegram": "باز کردن در تلگرام",
    "nav.telegramAria": "باز کردن ربات تلگرام NITRO VPN",
    "hero.eyebrow":
      "دو روز آزمایشی و ۱ گیگابایت رایگان — بدون نیاز به کارت بانکی",
    "hero.heading":
      "NITRO — وی‌پی‌ان برای YouTube، Instagram، TikTok، Telegram، WhatsApp و ...",
    "hero.lead":
      "یوتیوب، اینستاگرام، تیک‌تاک، تلگرام، واتس‌اپ و KinoPoisk را بدون فیلتر باز کنید. سرورهای <b>مسکو</b> و <b>ریگا</b>، VLESS روی TLS و عبور پیشرفته از DPI، اینترنتی سریع و خصوصی فراهم می‌کند.",
    "hero.savings":
      "تا ۴۴٪ روی اشتراک‌های بلندمدت صرفه‌جویی کنید و در روسیه و اروپا آنلاین بمانید.",
    "hero.ctaPrimary": "شروع رایگان",
    "hero.ctaPricing": "مقایسه طرح‌ها",
    "hero.ctaTrial": "نحوه کار",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "نامحدود",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "دستگاه",
    "hero.statTrialValue": "۲ روز",
    "hero.statTrialLabel": "دوره آزمایشی",
    "hero.statAria": "شاخص‌های سرویس",
    "hero.statusAria": "وضعیت شبکه",
    "hero.statusHeading": "وضعیت آنلاین NITRO VPN",
    "hero.statusMoscow": "مسکو 🇷🇺",
    "hero.statusMoscowPing": "پینگ ~۲۸ میلی‌ثانیه",
    "hero.statusRiga": "ریگا 🇱🇻",
    "hero.statusRigaPing": "پینگ ~۶۰ میلی‌ثانیه",
    "hero.statusUptime": "پایداری",
    "hero.statusUptimeValue": "۹۹٪ آپ‌تایم",
    "hero.statusEncryption": "رمزگذاری",
    "hero.statusEncryptionValue": "TLS + AES-256",
    "hero.statusNote":
      "میانگین کاربران در روسیه و اروپا. سرعت واقعی به اینترنت شما و شلوغی شبکه بستگی دارد.",
    "features.heading": "چرا کاربران NITRO VPN را انتخاب می‌کنند",
    "features.subheading":
      "دسترسی بدون فیلتر به استریم، پیام‌رسان و شبکه‌های اجتماعی. برای هر کاربر جدید ۲ روز و ۱ گیگابایت آزمایشی.",
    "features.cardCinemaTitle": "KinoPoisk",
    "features.cardCinemaText":
      "فیلم، سریال، تلویزیون و ورزش را بدون محدودیت جغرافیایی تماشا کنید، حتی در سفر.",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText":
      "سرعت بالا برای 4K و پخش زنده روی تمام دستگاه‌ها.",
    "features.cardCallsTitle": "تماس در پیام‌رسان‌ها",
    "features.cardCallsText":
      "تماس صوتی و تصویری*¹ در تلگرام، واتس‌اپ، وایبر، فیس‌تایم و ... پایدار است.",
    "features.cardInstagramTitle": "Instagram*²",
    "features.cardInstagramText": "بدون محدودیت پست بگذارید و محتوا ببینید.",
    "features.cardStealthTitle": "ترافیک مخفی",
    "features.cardStealthText":
      "VLESS شبیه HTTPS عادی است، بنابراین فیلترها و DPI آن را مسدود نمی‌کنند.",
    "features.cardDevicesTitle": "یک اشتراک برای ۴ دستگاه",
    "features.cardDevicesText":
      "چهار دستگاه مختلف را هم‌زمان متصل کنید: آیفون، اندروید، مک، ویندوز یا لینوکس.",
    "features.cardUnlimitedTitle": "حجم نامحدود",
    "features.cardUnlimitedText": "بدون سقف پنهان یا کاهش ناگهانی سرعت.",
    "features.cardSpeedTitle": "سرعت بالا",
    "features.cardSpeedText":
      "سرورهای بهینه در مسکو و ریگا تاخیر را برای کاربران روسیه و اروپا پایین نگه می‌دارند.",
    "features.cardSupportTitle": "پشتیبانی سریع",
    "features.cardSupportText":
      "۹۹٪ آپ‌تایم و پشتیبانی زنده در @nitro_vpn_help طی چند دقیقه پاسخ می‌دهد.",
    "features.note":
      "*¹ برای تماس صوتی لازم است وی‌پی‌ان هر دو طرف روشن باشد.<br>*² اینستاگرام متعلق به Meta است که در روسیه سازمان افراطی شناخته می‌شود.",
    "protocol.heading": "VLESS — جواب ساده به اینکه چرا همه‌چیز کار می‌کند",
    "protocol.subheading":
      "VLESS پروتکل مدرن وی‌پی‌ان است. اتصال را سریع، پایدار و نامرئی برای اپراتور می‌کند تا سرویس‌های محبوب فیلتر نشوند.",
    "protocol.cardWhatTitle": "VLESS چیست؟",
    "protocol.cardWhatText":
      "VLESS نحوه ارتباط دستگاه شما با وی‌پی‌ان را مدیریت می‌کند. بدون سربار اضافی است و اتصال در چند ثانیه برقرار می‌شود.",
    "protocol.cardFastTitle": "چرا سریع‌تر است",
    "protocol.cardFastText":
      "پروتکل مراحل اضافی انتقال داده را حذف می‌کند. ویدئو، تماس و بازی بدون افت و تاخیر اجرا می‌شود.",
    "protocol.cardStealthTitle": "چرا مسدود نمی‌شود",
    "protocol.cardStealthText":
      "ترافیک مثل بازدید معمولی وب به نظر می‌رسد؛ بنابراین اپراتور چیزی برای مسدود کردن ندارد.",
    "pricing.heading": "طرح‌ها و قیمت‌ها",
    "pricing.subheading":
      "طرح‌های ۱، ۳، ۶ و ۱۲ ماهه. هر اشتراک شامل ۴ دستگاه، حجم نامحدود و سرورهای مسکو و ریگا است.",
    "pricing.plan1.title": "۱ ماه",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "برای ۳۰ روز",
    "pricing.plan3.title": "۳ ماه",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "برای ۳ ماه (~117 ₽/ماه)",
    "pricing.plan3.savings": "۲۲٪ صرفه‌جویی نسبت به ماهانه",
    "pricing.plan6.badge": "۳۳٪ تخفیف",
    "pricing.plan6.title": "۶ ماه",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "برای ۶ ماه (~100 ₽/ماه)",
    "pricing.plan6.savings": "۳۳٪ صرفه‌جویی نسبت به ماهانه",
    "pricing.plan12.badge": "بیشترین صرفه",
    "pricing.plan12.title": "۱۲ ماه",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "برای ۱۲ ماه (~84 ₽/ماه)",
    "pricing.plan12.savings": "۴۴٪ صرفه‌جویی نسبت به ماهانه",
    "pricing.benefit.locations": "مسکو 🇷🇺 / ریگا 🇱🇻",
    "pricing.benefit.devices": "تا ۴ دستگاه با یک حساب",
    "pricing.benefit.speed": "سرعت بالا و بدون سقف",
    "pricing.benefit.services": "استریم، پیام‌رسان و یادآوری تمدید",
    "pricing.cta": "خرید در تلگرام",
    "pricing.note":
      "پرداخت با کارت‌های بانکی روسیه، سامانه پرداخت سریع یا Telegram Stars. ربات چند روز قبل از تمدید یادآوری می‌کند.",
    "trial.heading": "دوره آزمایشی رایگان",
    "trial.lead":
      "<b>کاربران جدید</b> <b>۲ روز</b> و <b>۱ گیگابایت</b> اینترنت رایگان دریافت می‌کنند. فعال‌سازی کمتر از یک دقیقه و بدون کارت بانکی است.",
    "trial.list.allServers": "دسترسی به تمام سرورها (مسکو 🇷🇺 و ریگا 🇱🇻)",
    "trial.list.speed": "حداکثر سرعت برای هر ۴ دستگاه",
    "trial.list.upgrade": "ارتقا به هر طرحی مستقیماً در ربات",
    "trial.ctaActivate": "فعال‌سازی در تلگرام",
    "trial.ctaFaq": "سؤالات متداول آزمون",
    "trial.stepsTitle": "مراحل دوره آزمایشی",
    "trial.steps1":
      'ربات <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a> را باز کنید.',
    "trial.steps2": "روی Start بزنید یا /start را ارسال کنید",
    "trial.steps3": "گزینه «دوره آزمایشی» را انتخاب و راهنما را دنبال کنید.",
    "trial.steps4": "لینک اشتراک را دریافت و دستگاه‌ها را متصل کنید.",
    "trial.note":
      "هر کاربر فقط یک بار می‌تواند از دوره آزمایشی استفاده کند. برای ادامه از یکی از طرح‌ها استفاده کنید.",
    "referral.heading": "برنامه معرفی «دوستت را بیاور»",
    "referral.subheading":
      "وقتی دوست شما اشتراک بخرد، هر دو نفر روزهای هدیه به اشتراک خود اضافه می‌کنید.",
    "referral.card1.title": "۱ ماه",
    "referral.card1.bonus": "+۳ روز برای هر دو",
    "referral.card3.title": "۳ ماه",
    "referral.card3.bonus": "+۷ روز برای هر دو",
    "referral.card6.title": "۶ ماه",
    "referral.card6.bonus": "+۱۵ روز برای هر دو",
    "referral.card12.title": "۱۲ ماه",
    "referral.card12.bonus": "+۳۰ روز برای هر دو",
    "referral.ctaPrimary": "دریافت لینک معرفی",
    "referral.ctaSecondary": "شرایط برنامه",
    "payments.heading": "پرداخت و دسترسی سریع",
    "payments.subheading":
      "کارت‌های بانکی روسیه، سامانه پرداخت سریع و Telegram Stars پذیرفته می‌شود — دسترسی بلافاصله فعال می‌شود.",
    "payments.cardCardsTitle": "کارت‌های بانکی روسیه",
    "payments.cardCardsText": "پرداخت مطمئن با تایید خودکار.",
    "payments.cardSbpTitle": "سامانه پرداخت سریع",
    "payments.cardSbpText": "پرداخت فوری بدون کارمزد از حساب بانکی شما.",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText":
      "اگر کارت یا SBP ندارید، با استارز تلگرام پرداخت کنید.",
    "payments.ctaPrimary": "ورود به ربات تلگرام",
    "payments.ctaSecondary": "مقایسه طرح‌ها",
    "locations.heading": "لوکیشن‌های در دسترس",
    "locations.moscowTitle": "مسکو 🇷🇺",
    "locations.moscowText": "بهترین گزینه برای دور زدن فیلتر در روسیه.",
    "locations.rigaTitle": "ریگا 🇱🇻",
    "locations.rigaText": "برای دسترسی داخلی و بین‌المللی عالی است.",
    "faq.heading": "سؤالات متداول",
    "faq.q1": "چند دستگاه می‌توانم وصل کنم؟",
    "faq.a1": "هر اشتراک تا <b>۴ دستگاه</b> به طور همزمان را پوشش می‌دهد.",
    "faq.q2": "محدودیت سرعت وجود دارد؟",
    "faq.a2":
      "هر سرور تا ۲ گیگابیت در ثانیه ظرفیت دارد و بین کاربران تقسیم می‌شود. سرعت واقعی به اینترنت و فاصله شما بستگی دارد.",
    "faq.q3": "دوره آزمایشی چگونه است؟",
    "faq.a3":
      "۲ روز و ۱ گیگابایت رایگان است. پس از آن می‌توانید هر طرحی را بخرید.",
    "faq.q4": "خدمات کجا فعال است؟",
    "faq.a4":
      "در حال حاضر سرورها در <b>مسکو</b> و <b>ریگا</b> فعال هستند و به مرور اضافه می‌شوند.",
    "cta.heading": "آماده اتصال به NITRO VPN هستید؟",
    "cta.text":
      'خرید، تمدید، دوره آزمایشی و برنامه معرفی همگی در ربات تلگرام ماست. پشتیبانی: <a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "باز کردن @nitro_vpn_sales_bot",
    "cta.secondary": "روش‌های پرداخت",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO — وی‌پی‌ان برای YouTube، Instagram، TikTok، Telegram، WhatsApp و ...",
    "meta.description":
      "یوتیوب، اینستاگرام، تیک‌تاک، تلگرام، واتس‌اپ و KinoPoisk را بدون فیلتر باز کنید. سرورهای مسکو و ریگا، VLESS روی TLS، دوره آزمایشی ۲ روزه و ۱ گیگابایتی، حجم نامحدود و ۴ دستگاه.",
    "meta.keywords":
      "nitro vpn,vless vpn,وی پی ان روسیه,vpn moscow,vpn riga,fast vpn,وی پی ان بدون محدودیت,vpn برای یوتیوب,vpn برای تلگرام,vpn برای اینستاگرام,vpn whatsapp,vpn twitter,vpn discord,عبور از dpi",
    "meta.ogLocale": "fa_IR",
    "meta.ogTitle": "NITRO VPN — وی‌پی‌ان VLESS برای یوتیوب و تلگرام",
    "meta.ogDescription":
      "یوتیوب، اینستاگرام، تیک‌تاک، تلگرام و واتس‌اپ بدون فیلتر. سرورهای مسکو و ریگا، دوره آزمایشی ۲ روزه و ۱ گیگابایت.",
    "meta.ogImageAlt": "لوگوی NITRO VPN و رابط کاربری",
    "meta.twitterTitle": "NITRO VPN — دسترسی بدون فیلتر",
    "meta.twitterDescription":
      "۲ روز و ۱ گیگابایت رایگان. وی‌پی‌ان VLESS با سرورهای مسکو و ریگا، حجم نامحدود و ۴ دستگاه.",
    "meta.twitterImageAlt": "لوگوی NITRO VPN و رابط کاربری",
    "meta.hreflang": "fa",
    "lang.label": "انتخاب زبان",
    "lang.option.ru": "🇷🇺 روسی",
    "lang.option.en": "🇺🇸 انگلیسی",
    "lang.option.fa": "🇮🇷 فارسی",
    "lang.option.zh": "🇨🇳 چینی",
    "toast.planSelected":
      "طرح انتخاب شده: {plan} — {price}. پرداخت در تلگرام انجام می‌شود.",
    "schema.description":
      "NITRO VPN یک وی‌پی‌ان سریع مبتنی بر VLESS برای روسیه و اروپا با سرورهای مسکو و ریگا، دوره آزمایشی ۲ روزه و ۱ گیگابایت، حجم نامحدود و تا ۴ دستگاه است.",
    "schema.moscow": "مسکو",
    "schema.riga": "ریگا",
    "schema.offer1": "دسترسی وی‌پی‌ان ۱ ماهه",
    "schema.offer3": "دسترسی وی‌پی‌ان ۳ ماهه",
    "schema.offer6": "دسترسی وی‌پی‌ان ۶ ماهه",
    "schema.offer12": "دسترسی وی‌پی‌ان ۱۲ ماهه",
    "schema.catalog": "طرح‌های انعطاف‌پذیر",
    "schema.bonus1": "۳ روز هدیه برای معرفی طرح ۱ ماهه",
    "schema.bonus3": "۷ روز هدیه برای معرفی طرح ۳ ماهه",
    "schema.bonus6": "۱۵ روز هدیه برای معرفی طرح ۶ ماهه",
    "schema.bonus12": "۳۰ روز هدیه برای معرفی طرح ۱۲ ماهه",
  },
  zh: {
    "skip.link": "跳转到主要内容",
    "brand.name": "NITRO VPN",
    "brand.aria": "NITRO VPN",
    "menu.toggleLabel": "切换导航菜单",
    "nav.menu": "菜单",
    "nav.features": "优势",
    "nav.pricing": "套餐",
    "nav.trial": "免费试用",
    "nav.protocol": "VLESS",
    "nav.faq": "常见问题",
    "nav.payments": "支付",
    "nav.telegram": "在 Telegram 打开",
    "nav.telegramAria": "打开 NITRO VPN 的 Telegram 机器人",
    "hero.eyebrow": "免费试用 2 天 + 1GB，无需银行卡",
    "hero.heading":
      "NITRO — 可用于 YouTube、Instagram、TikTok、Telegram、WhatsApp 等的 VPN",
    "hero.lead":
      "畅通访问 YouTube、Instagram、TikTok、Telegram、WhatsApp 和 KinoPoisk。<b>莫斯科</b>与<b>里加</b>服务器，VLESS + TLS 及高级 DPI 绕过，让连接快速又隐私。",
    "hero.savings": "长期套餐最高可省 44%，在俄罗斯与欧洲保持稳定连接。",
    "hero.ctaPrimary": "立即免费试用",
    "hero.ctaPricing": "比较套餐",
    "hero.ctaTrial": "了解流程",
    "hero.statUnlimited": "∞",
    "hero.statUnlimitedLabel": "无限流量",
    "hero.statDevicesValue": "4",
    "hero.statDevicesLabel": "设备",
    "hero.statTrialValue": "2 天",
    "hero.statTrialLabel": "试用期",
    "hero.statAria": "关键服务指标",
    "hero.statusAria": "网络状态概览",
    "hero.statusHeading": "NITRO VPN 网络实时状态",
    "hero.statusMoscow": "莫斯科 🇷🇺",
    "hero.statusMoscowPing": "延迟 ~28 ms",
    "hero.statusRiga": "里加 🇱🇻",
    "hero.statusRigaPing": "延迟 ~60 ms",
    "hero.statusUptime": "在线率",
    "hero.statusUptimeValue": "99% 在线",
    "hero.statusEncryption": "加密",
    "hero.statusEncryptionValue": "TLS + AES-256",
    "hero.statusNote":
      "上述数据为俄罗斯及欧洲用户平均值，实际延迟取决于运营商和网络负载。",
    "features.heading": "为什么选择 NITRO VPN",
    "features.subheading":
      "解锁流媒体、消息应用和社交平台。新用户均可获得 2 天 1GB 免费试用。",
    "features.cardCinemaTitle": "KinoPoisk",
    "features.cardCinemaText": "在世界各地观看电影、剧集、电视直播与体育赛事。",
    "features.cardYoutubeTitle": "YouTube",
    "features.cardYoutubeText": "为 4K 视频和直播提供稳定高速。",
    "features.cardCallsTitle": "消息应用通话",
    "features.cardCallsText":
      "Telegram、WhatsApp、Viber、FaceTime 等语音视频通话*¹ 稳定清晰。",
    "features.cardInstagramTitle": "Instagram*²",
    "features.cardInstagramText": "发布与浏览内容不再受限。",
    "features.cardStealthTitle": "隐匿流量",
    "features.cardStealthText":
      "VLESS 流量与普通 HTTPS 无异，轻松避开封锁与 DPI。",
    "features.cardDevicesTitle": "一份订阅覆盖 4 台设备",
    "features.cardDevicesText":
      "iPhone、Android、Mac、Windows、Linux 任意四台设备同时在线。",
    "features.cardUnlimitedTitle": "无限流量",
    "features.cardUnlimitedText": "没有隐藏限额或突发限速。",
    "features.cardSpeedTitle": "高速稳定",
    "features.cardSpeedText":
      "莫斯科与里加节点优化，确保俄罗斯与欧洲地区低延迟。",
    "features.cardSupportTitle": "可靠客服",
    "features.cardSupportText":
      "99% 在线率，@nitro_vpn_help 客服几分钟内响应。",
    "features.note":
      "*¹ 语音通话需双方同时开启 VPN。<br>*² Instagram 隶属于 Meta，已在俄罗斯被定性为极端组织。",
    "protocol.heading": "VLESS —— 保持畅通的关键",
    "protocol.subheading":
      "VLESS 是新一代 VPN 协议，连接快速、稳定且难以被运营商察觉，热门服务自然畅通。",
    "protocol.cardWhatTitle": "它是什么",
    "protocol.cardWhatText":
      "VLESS 负责设备与 VPN 的通信，没有多余开销，几秒即可连接。",
    "protocol.cardFastTitle": "为什么更快",
    "protocol.cardFastText":
      "减少额外握手流程。无论视频、通话或游戏，多设备同时使用也流畅。",
    "protocol.cardStealthTitle": "为什么难以封锁",
    "protocol.cardStealthText":
      "流量就像普通网页访问，运营商无从下手，即使严苛封锁也能绕过。",
    "pricing.heading": "套餐与价格",
    "pricing.subheading":
      "提供 1/3/6/12 个月套餐。均包含 4 台设备、无限流量，以及莫斯科与里加服务器。",
    "pricing.plan1.title": "1 个月",
    "pricing.plan1.price": "150 ₽",
    "pricing.plan1.payoff": "30 天",
    "pricing.plan3.title": "3 个月",
    "pricing.plan3.price": "350 ₽",
    "pricing.plan3.payoff": "3 个月 (~117 ₽/月)",
    "pricing.plan3.savings": "比月付节省 22%",
    "pricing.plan6.badge": "优惠 33%",
    "pricing.plan6.title": "6 个月",
    "pricing.plan6.price": "600 ₽",
    "pricing.plan6.payoff": "6 个月 (~100 ₽/月)",
    "pricing.plan6.savings": "比月付节省 33%",
    "pricing.plan12.badge": "超值首选",
    "pricing.plan12.title": "12 个月",
    "pricing.plan12.price": "1000 ₽",
    "pricing.plan12.payoff": "12 个月 (~84 ₽/月)",
    "pricing.plan12.savings": "比月付节省 44%",
    "pricing.benefit.locations": "莫斯科 🇷🇺 / 里加 🇱🇻",
    "pricing.benefit.devices": "每个账号最多 4 台设备",
    "pricing.benefit.speed": "高速无限流量",
    "pricing.benefit.services": "流媒体、消息服务与到期提醒",
    "pricing.cta": "通过 Telegram 购买",
    "pricing.note":
      "支持俄罗斯银行卡、SBP 或 Telegram Stars 支付。机器人会在到期前数日提醒续费。",
    "trial.heading": "免费试用",
    "trial.lead":
      "<b>新用户</b> 可获得 <b>2 天</b> <b>1GB</b> 免费流量。Telegram 一键激活，无需银行卡。",
    "trial.list.allServers": "畅享莫斯科 🇷🇺 与里加 🇱🇻 所有服务器",
    "trial.list.speed": "4 台设备共享最高速度",
    "trial.list.upgrade": "可在机器人中随时升级套餐",
    "trial.ctaActivate": "在 Telegram 激活",
    "trial.ctaFaq": "试用 FAQ",
    "trial.stepsTitle": "试用流程",
    "trial.steps1":
      '打开 <a href="https://t.me/nitro_vpn_sales_bot" target="_blank" rel="noopener">@nitro_vpn_sales_bot</a>。',
    "trial.steps2": "点击 Start 或发送 /start",
    "trial.steps3": "选择“免费试用”并按照提示操作",
    "trial.steps4": "获取订阅链接并连接设备",
    "trial.note": "每位用户仅可领取一次试用，续用请购买任意套餐。",
    "referral.heading": "邀请好友奖励计划",
    "referral.subheading": "好友付费后，双方都可获得额外天数奖励。",
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
    "payments.heading": "支付方式与快速开通",
    "payments.subheading":
      "支持俄罗斯银行卡、SBP 与 Telegram Stars，付款后立即开通。",
    "payments.cardCardsTitle": "俄罗斯银行卡",
    "payments.cardCardsText": "熟悉的银行卡支付，自动确认。",
    "payments.cardSbpTitle": "SBP",
    "payments.cardSbpText": "从银行账户快速支付，无额外费用。",
    "payments.cardStarsTitle": "Telegram Stars",
    "payments.cardStarsText": "没有银行卡？可以使用 Telegram Stars 付款。",
    "payments.ctaPrimary": "打开 Telegram 机器人",
    "payments.ctaSecondary": "比较套餐",
    "locations.heading": "节点位置",
    "locations.moscowTitle": "莫斯科 🇷🇺",
    "locations.moscowText": "适合在俄罗斯境内绕过本地限制。",
    "locations.rigaTitle": "里加 🇱🇻",
    "locations.rigaText": "兼顾国内外访问需求的最佳选择。",
    "faq.heading": "常见问题",
    "faq.q1": "可以连接多少设备？",
    "faq.a1": "每个订阅可同时连接 <b>4 台设备</b>。",
    "faq.q2": "有速度限制吗？",
    "faq.a2":
      "每台服务器最高 2 Gbit/s，所有用户均分。实际速度取决于网络环境与距离。",
    "faq.q3": "试用如何使用？",
    "faq.a3": "免费获得 2 天 1GB，之后可升级任意套餐。",
    "faq.q4": "服务覆盖哪些地区？",
    "faq.a4": "目前提供 <b>莫斯科</b> 与 <b>里加</b> 节点，并持续扩展中。",
    "cta.heading": "准备好接入 NITRO VPN 了吗？",
    "cta.text":
      '购买、续费、试用和邀请奖励都在 Telegram 机器人中完成。客服：<a class="support-link" href="https://t.me/nitro_vpn_help" target="_blank" rel="noopener">@nitro_vpn_help</a>',
    "cta.primary": "打开 @nitro_vpn_sales_bot",
    "cta.secondary": "支付方式",
    "footer.copyright": '© <span id="year"></span> NITRO VPN',
    "meta.title":
      "NITRO — 可用于 YouTube、Instagram、TikTok、Telegram、WhatsApp 等的 VPN",
    "meta.description":
      "畅享 YouTube、Instagram、TikTok、Telegram、WhatsApp 与 KinoPoisk。莫斯科与里加服务器，VLESS + TLS，2 天 1GB 免费试用，无限流量，支持 4 台设备。",
    "meta.keywords":
      "nitro vpn,vless vpn,vpn russia,vpn moscow,vpn riga,高速vpn,无限流量vpn,vpn youtube,vpn telegram,vpn instagram,vpn whatsapp,vpn twitter,vpn discord,绕过dpi",
    "meta.ogLocale": "zh_CN",
    "meta.ogTitle": "NITRO VPN — 解锁 YouTube 与 Telegram",
    "meta.ogDescription":
      "YouTube、Instagram、TikTok、Telegram、WhatsApp 全面解锁。莫斯科与里加服务器，2 天 1GB 免费试用。",
    "meta.ogImageAlt": "NITRO VPN 标志与界面",
    "meta.twitterTitle": "NITRO VPN — 稳定 VLESS VPN",
    "meta.twitterDescription":
      "免费试用 2 天 1GB。莫斯科与里加节点，高速无限流量，支持 4 台设备。",
    "meta.twitterImageAlt": "NITRO VPN 标志与界面",
    "meta.hreflang": "zh",
    "lang.label": "选择语言",
    "lang.option.ru": "🇷🇺 俄语",
    "lang.option.en": "🇺🇸 英语",
    "lang.option.fa": "🇮🇷 波斯语",
    "lang.option.zh": "🇨🇳 简体中文",
    "toast.planSelected":
      "已选择套餐：{plan} — {price}。请在 Telegram 完成支付。",
    "schema.description":
      "NITRO VPN 是面向俄罗斯和欧洲的高速 VLESS VPN，提供莫斯科与里加服务器、2 天 1GB 免费试用、无限流量及最多 4 台设备。",
    "schema.moscow": "莫斯科",
    "schema.riga": "里加",
    "schema.offer1": "1 个月 VPN 访问",
    "schema.offer3": "3 个月 VPN 访问",
    "schema.offer6": "6 个月 VPN 访问",
    "schema.offer12": "12 个月 VPN 访问",
    "schema.catalog": "灵活套餐",
    "schema.bonus1": "+3 天奖励（1 个月套餐）",
    "schema.bonus3": "+7 天奖励（3 个月套餐）",
    "schema.bonus6": "+15 天奖励（6 个月套餐）",
    "schema.bonus12": "+30 天奖励（12 个月套餐）",
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
  ru: "Выбран тариф: {plan} — {price}. Оплата в Telegram.",
  en: "Selected plan: {plan} — {price}. Please pay in Telegram.",
  fa: "طرح انتخاب شده: {plan} — {price}. پرداخت در تلگرام انجام می‌شود.",
  zh: "已选择套餐：{plan} — {price}。请在 Telegram 完成支付。",
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
