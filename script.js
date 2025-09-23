Document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ja: {
            settingsTitle: "設定", languageLabel: "言語", storeTitle: "CHICKENMC STORE", loginButton: "ログイン", logoutButton: "ログアウト", loginTitle: "Minecraft IDでログイン", loginPlaceholder: "あなたのIDを入力...", loginNotice: "※これはデモです。パスワードは不要です。", addToCart: "カートに入れる", cartTitle: "ショッピングカート", totalLabel: "合計:", checkoutButton: "チェックアウト", monthlySub: "/月", categoriesTitle: "カテゴリー", categoryRanks: "ランク", categoryStandardColors: "スタンダードカラー", categoryGradationColors: "グラデーションカラー", categoryBadges: "バッジ", categoryBoost: "ブースト", categoryServerBooster: "サーバーブースター", joinDiscord: "Discordに参加", clearCartButton: "すべて削除",
            plusFeatures: "<li>特別なチャットプレフィックス</li><li>/fly コマンドへのアクセス権</li>",
            superFeatures: "<li>PLUSランクの全特典</li><li>ペット機能の利用</li><li>限定ワールドへのアクセス</li>",
            deluxeFeatures: "<li>SUPERランクの全特典</li><li>ニックネーム変更機能</li><li>パーティクルエフェクト</li>",
            premiumFeatures: "<li>DELUXEランクの全特典</li><li>満員サーバーへの優先アクセス</li><li>限定キットの利用</li>",
            ultimateFeatures: "<li>PREMIUMランクの全特典</li><li>全ゲームでの飛行能力</li><li>カスタムスキンの利用</li>",
            boosterFeatures: "<li>30日間、サーバー全体のXP獲得量をブーストします。</li>",
            serverBoosterFeatures: "<li>ランクの一種ですが、購入はDiscordからのみ可能です。</li><li>詳細はDiscordサーバーでご確認ください。</li>",
            loginErrorNotFound: (id) => `「${id}」というIDは見つかりませんでした。`, loginErrorWrongCase: (id, correctId) => `入力された名前「${id}」は現在使用されていません。正しい名前は「${correctId}」です。`, loginEmptyError: "Minecraft IDを入力してください", loginInProgress: "アカウントを確認中...", logoutSuccess: (user) => `${user} からログアウトしました`, loginRequired: "購入するにはログインしてください", cartAddSuccess: (name) => `${name} をカートに追加しました`, cartItemExists: (name) => `${name} は既にカートにあります。`, cartRankExists: "ランクは1つしか購入できません。", cartBoosterExists: "ブースターは1つしか購入できません。", checkoutSuccess: "ご購入ありがとうございます！", cartEmpty: "カートは空です", cartEmptyMessage: '<p style="text-align: center; opacity: 0.7; margin-top: 40px;">カートは空です</p>',
            "colorBlueberry": "ブルーベリー", "colorRaspberry": "ラズベリー", "colorStrawberry": "ストロベリー", "colorPeach": "ピーチ", "colorMango": "マンゴー", "colorBanana": "バナナ", "colorMelon": "メロン", "colorBilberry": "ビルベリー", "colorGrape": "グレープ", "colorPink": "ピンク", "colorTeal": "ティール", "colorUltraMarine": "ウルトラマリン", "colorLavender": "ラベンダー", "colorSage": "セージ", "colorMistBlue": "ミストブルー", "colorMint": "ミント", "colorCoral": "コーラル", "colorLatte": "ラテ",
            "gradSunrise": "サンライズ", "gradOcean": "オーシャン", "gradForest": "フォレスト", "gradTwilight": "トワイライト", "gradMeadow": "メドウ", "gradCoralReef": "コーラルリーフ", "gradLavenderBliss": "ラベンダーブリス", "gradWatermelon": "ウォーターメロン", "gradAurora": "オーロラ", "gradSunset": "サンセット", "gradMojito": "モヒート", "gradRoyal": "ロイヤル",
            "badgeKarasuBadge": "からす", "badgeHiyokoBadge": "ひよこ", "badgeAhiruBadge": "あひる", "badgeChickenBadge": "ちきん", "badgeHinotoriBadge": "ひのとり", "badgeRaichoBadge": "雷鳥"
        },
        en: {
            settingsTitle: "Settings", languageLabel: "Language", storeTitle: "CHICKENMC STORE", loginButton: "Login", logoutButton: "Logout", loginTitle: "Login with Minecraft ID", loginPlaceholder: "Enter your ID...", loginNotice: "*This is a demo. No password is required.", addToCart: "Add to Cart", cartTitle: "Shopping Cart", totalLabel: "Total:", checkoutButton: "Checkout", monthlySub: "/month", categoriesTitle: "Categories", categoryRanks: "Ranks", categoryStandardColors: "Standard Colors", categoryGradationColors: "Gradation Colors", categoryBadges: "Badges", categoryBoost: "Boost", categoryServerBooster: "Server Booster", joinDiscord: "Join Discord", clearCartButton: "Clear All",
            plusFeatures: "<li>Special chat prefix</li><li>Access to /fly command</li>",
            superFeatures: "<li>All PLUS Rank perks</li><li>Access to pet functions</li><li>Access to exclusive worlds</li>",
            deluxeFeatures: "<li>All SUPER Rank perks</li><li>Nickname changing feature</li><li>Particle effects</li>",
            premiumFeatures: "<li>All DELUXE Rank perks</li><li>Priority access to full servers</li><li>Access to exclusive kits</li>",
            ultimateFeatures: "<li>All PREMIUM Rank perks</li><li>Ability to fly in all games</li><li>Use of custom skins</li>",
            boosterFeatures: "<li>Boosts the entire server's XP gain for 30 days.</li>",
            serverBoosterFeatures: "<li>This is a type of rank, but it can only be purchased via Discord.</li><li>Please check our Discord server for details.</li>",
            loginErrorNotFound: (id) => `The ID "${id}" could not be found.`, loginErrorWrongCase: (id, correctId) => `The name "${id}" is not in use. The correct name is "${correctId}".`, loginEmptyError: "Please enter a Minecraft ID", loginInProgress: "Verifying account...", logoutSuccess: (user) => `Logged out from ${user}`, loginRequired: "Please log in to purchase", cartAddSuccess: (name) => `Added ${name} to cart`, cartItemExists: (name) => `${name} is already in the cart.`, cartRankExists: "You can only purchase one rank at a time.", cartBoosterExists: "You can only purchase one booster at a time.", checkoutSuccess: "Thank you for your purchase!", cartEmpty: "Your cart is empty", cartEmptyMessage: '<p style="text-align: center; opacity: 0.7; margin-top: 40px;">The cart is empty</p>',
            "badgeKarasuBadge": "Crow",
            "badgeHiyokoBadge": "Chick",
            "badgeAhiruBadge": "Duck",
            "badgeChickenBadge": "Chicken",
            "badgeHinotoriBadge": "Fire Bird",
            "badgeRaichoBadge": "Thunder Bird"
        }
    };

    let cart = [];
    let loggedInUser = null;
    let currentLang = 'ja';

    const allElements = {
        loginSpinner: document.getElementById('login-spinner'),
        loginSubmitButton: document.getElementById('login-submit-btn'),
        loginCloseButton: document.getElementById('login-close-btn'),
        loginMessage: document.getElementById('login-message'),
        cartItemsContainers: document.querySelectorAll('.cart-items-container'),
        cartTotalElements: document.querySelectorAll('.cart-total-container span:last-child'),
        checkoutButtons: document.querySelectorAll('.checkout-btn'),
        cartItemCountDesktop: document.getElementById('cart-item-count-desktop'),
        cartItemCountMobile: document.getElementById('cart-item-count-mobile'),
        loginOverlay: document.getElementById('login-overlay'),
        loginButton: document.getElementById('login-btn'),
        logoutButton: document.getElementById('logout-btn'),
        minecraftIdInput: document.getElementById('minecraft-id-input'),
        userInfoDisplay: document.getElementById('user-info'),
        playerHead: document.getElementById('player-head'),
        playerName: document.getElementById('player-name'),
        languageButtons: document.querySelectorAll('.lang-btn'),
        menuToggle: document.getElementById('menu-toggle'),
        mainContent: document.getElementById('main-content'),
        categoryLinks: document.querySelectorAll('.category-link'),
        categoryContents: document.querySelectorAll('.category-content'),
        body: document.body,
        sideMenu: document.getElementById('side-menu'),
        cartToggleButton: document.getElementById('cart-toggle-btn'),
        closeCartButton: document.getElementById('close-cart-btn'),
        categorySidebar: document.getElementById('category-sidebar'),
        unifiedSidebar: document.getElementById('unified-sidebar'),
        sidebarNavButtons: document.querySelectorAll('.sidebar-nav-btn'),
        sidebarTabs: document.querySelectorAll('.sidebar-tab-content'),
    };

    const productData = {
        standardColors: [
            { id: 'Blueberry', defaultName: 'Blueberry', hex: '#9b8fcf' }, { id: 'Raspberry', defaultName: 'Raspberry', hex: '#e69ab3' },
            { id: 'Strawberry', defaultName: 'Strawberry', hex: '#f9a6a6' }, { id: 'Peach', defaultName: 'Peach', hex: '#f5c5d5' },
            { id: 'Mango', defaultName: 'Mango', hex: '#ffd6a5' }, { id: 'Banana', defaultName: 'Banana', hex: '#fff2a8' },
            { id: 'Melon', defaultName: 'Melon', hex: '#b5e8a8' }, { id: 'Bilberry', defaultName: 'Bilberry', hex: '#4682B4' },
            { id: 'Grape', defaultName: 'Grape', hex: '#d7a8f0' }, { id: 'Pink', defaultName: 'Pink', hex: '#f3b9cf' },
            { id: 'Teal', defaultName: 'Teal', hex: '#8ccbcb' }, { id: 'UltraMarine', defaultName: 'UltraMarine', hex: '#7b97f5' },
            { id: 'Lavender', defaultName: 'Lavender', hex: '#c8b2e1' }, { id: 'Sage', defaultName: 'Sage', hex: '#a3b59f' },
            { id: 'MistBlue', defaultName: 'Mist Blue', hex: '#a7c7e6' }, { id: 'Mint', defaultName: 'Mint', hex: '#98FF98' },
            { id: 'Coral', defaultName: 'Coral', hex: '#FF7F50' }, { id: 'Latte', defaultName: 'Latte', hex: '#C5A687' }
        ],
        gradationColors: [
            { id: 'Sunrise', defaultName: 'Sunrise', start: '#F9A6A6', end: '#FFD6A5' }, { id: 'Ocean', defaultName: 'Ocean', start: '#8CCBCB', end: '#7B97F5' },
            { id: 'Forest', defaultName: 'Forest', start: '#B5E8A8', end: '#A3B59F' }, { id: 'Twilight', defaultName: 'Twilight', start: '#C8B2E1', end: '#E69AB3' },
            { id: 'Meadow', defaultName: 'Meadow', start: '#FFF2A8', end: '#B5E8A8' }, { id: 'CoralReef', defaultName: 'Coral Reef', start: '#FF7F50', end: '#F3B9CF' },
            { id: 'LavenderBliss', defaultName: 'Lavender Bliss', start: '#d7a8f0', end: '#c8b2e1' }, { id: 'Watermelon', defaultName: 'Watermelon', start: '#f9a6a6', end: '#b5e8a8' },
            { id: 'Aurora', defaultName: 'Aurora', start: '#8ccbcb', end: '#d7a8f0' }, { id: 'Sunset', defaultName: 'Sunset', start: '#ffd6a5', end: '#ff7f50' },
            { id: 'Mojito', defaultName: 'Mojito', start: '#98FF98', end: '#fff2a8' }, { id: 'Royal', defaultName: 'Royal', start: '#540192', end: '#7b97f5' }
        ],
        badges: [
            { id: 'KarasuBadge', defaultName: 'Crow', img: 'karasu.png' },
            { id: 'HiyokoBadge', defaultName: 'Chick', img: 'hiyoko.png' },
            { id: 'AhiruBadge', defaultName: 'Duck', img: 'ahiru.png' },
            { id: 'ChickenBadge', defaultName: 'Chicken', img: 'chicken.png' },
            { id: 'HinotoriBadge', defaultName: 'Fire Bird', img: 'hinotori.png' },
            { id: 'RaichoBadge', defaultName: 'Thunder Bird', img: 'raicho.png' }
        ]
    };

    const isMobile = () => window.innerWidth <= 768;
    
    const getTranslatedName = (prefix, product) => {
        const key = prefix + product.id;
        return translations[currentLang][key] || product.defaultName;
    };

    const generateProductCards = () => {
        const stdColorsContainer = document.getElementById('standard-colors-content');
        stdColorsContainer.innerHTML = '';
        productData.standardColors.forEach(color => {
            const name = getTranslatedName('color', color);
            stdColorsContainer.innerHTML += `<div class="product-card"><div class="color-preview" style="background-color: ${color.hex};"></div><h3>${name}</h3><p class="price">$3.99</p><button class="add-btn glass-btn" data-id="${color.id}" data-name="${name}" data-price="3.99" data-category="colors" disabled data-key="addToCart"></button></div>`;
        });
        
        const gradColorsContainer = document.getElementById('gradation-colors-content');
        gradColorsContainer.innerHTML = '';
        productData.gradationColors.forEach(color => {
            const name = getTranslatedName('grad', color);
            gradColorsContainer.innerHTML += `<div class="product-card"><div class="color-preview gradation-preview" style="background: linear-gradient(45deg, ${color.start}, ${color.end});"></div><h3>${name}</h3><p class="price">$5.99</p><button class="add-btn glass-btn" data-id="${color.id}" data-name="${name}" data-price="5.99" data-category="colors" disabled data-key="addToCart"></button></div>`;
        });

        const badgesContainer = document.getElementById('badges-content');
        badgesContainer.innerHTML = '';
        productData.badges.forEach(badge => {
            const name = getTranslatedName('badge', badge);
            badgesContainer.innerHTML += `<div class="product-card"><img src="${badge.img}" alt="${name}" class="badge-preview"><h3>${name}</h3><p class="price">$7.99</p><button class="add-btn glass-btn" data-id="${badge.id}" data-name="${name}" data-price="7.99" data-category="badges" disabled data-key="addToCart"></button></div>`;
        });

        setLanguageText();
        
        if (loggedInUser) {
            document.querySelectorAll('.add-btn').forEach(btn => btn.disabled = false);
        }
    };
    
    const setLanguageText = () => {
        const lang = currentLang;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[lang][key]) {
                if (el.tagName === 'UL') el.innerHTML = translations[lang][key]; else el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(el => {
            const key = el.dataset.keyPlaceholder;
            if (translations[lang][key]) el.placeholder = translations[lang][key];
        });
    }

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('minecraftStoreLanguage', lang);
        allElements.languageButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        generateProductCards();
        updateCartUI();

        const activeCategoryLink = document.querySelector('.category-link.active');
        if (activeCategoryLink) {
            showCategory(activeCategoryLink.dataset.category);
        }
    };

    const updateUIAfterLogin = (username) => {
        allElements.playerHead.src = `https://cravatar.eu/avatar/${username}/40.png`;
        allElements.playerName.textContent = username;
        allElements.userInfoDisplay.style.display = 'flex';
        allElements.loginButton.style.display = 'none';
        allElements.logoutButton.style.display = 'inline-flex';
        allElements.loginOverlay.classList.remove('open');
        document.querySelectorAll('.add-btn').forEach(btn => btn.disabled = false);
    };

    const updateCartUI = () => {
        const count = cart.length;
        allElements.cartItemsContainers.forEach(container => {
            container.innerHTML = '';
            if (count === 0) {
                container.innerHTML = translations[currentLang].cartEmptyMessage;
            } else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `<div style="flex-grow: 1;"><span>${item.name}</span><span style="display: block; opacity: 0.7;">$${item.price.toFixed(2)}</span></div><button class="remove-btn" data-id="${item.id}">×</button>`;
                    container.appendChild(itemElement);
                });
            }
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        allElements.cartTotalElements.forEach(el => el.textContent = `$${total.toFixed(2)}`);
        allElements.cartItemCountDesktop.textContent = count;
        allElements.cartItemCountMobile.textContent = count;
        allElements.cartItemCountDesktop.classList.toggle('visible', count > 0);
        allElements.cartItemCountMobile.classList.toggle('visible', count > 0);
    };

    const showNotification = (message, targetElement, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = 'notification-glass';
        notification.textContent = message;
        if (type === 'error') notification.classList.add('error');
        document.body.appendChild(notification);
        const targetRect = targetElement.getBoundingClientRect();
        const notifRect = notification.getBoundingClientRect();
        let top = targetRect.bottom + 10;
        let left = targetRect.left + (targetRect.width / 2) - (notifRect.width / 2);
        if (left < 10) left = 10;
        if (left + notifRect.width > window.innerWidth) left = window.innerWidth - notifRect.width - 10;
        if (top + notifRect.height > window.innerHeight) top = targetRect.top - notifRect.height - 10;
        notification.style.top = `${top}px`;
        notification.style.left = `${left}px`;
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', () => notification.remove());
        }, 4000);
    };

    const saveState = () => {
        localStorage.setItem('minecraftStoreUser', loggedInUser || '');
        localStorage.setItem('minecraftStoreCart', JSON.stringify(cart));
    };

    const loadState = () => {
        const savedUser = localStorage.getItem('minecraftStoreUser');
        const savedCart = JSON.parse(localStorage.getItem('minecraftStoreCart'));
        const savedLang = localStorage.getItem('minecraftStoreLanguage') || 'ja';
        
        if (savedUser) {
            loggedInUser = savedUser;
        }
        if (savedCart) { 
            cart = savedCart; 
        }
        
        setLanguage(savedLang);
        
        if (loggedInUser) {
            updateUIAfterLogin(loggedInUser);
        }
        
        showCategory('ranks');
    };

    const animateAddToCart = (button) => {
        const card = button.closest('.product-card');
        if (!card) return;
        const flyingItem = document.createElement('div');
        flyingItem.className = 'flying-product';
        const cardImage = card.querySelector('.rank-image, .color-preview, .badge-preview');
        if (cardImage) flyingItem.appendChild(cardImage.cloneNode(true));
        document.body.appendChild(flyingItem);
        const startRect = card.getBoundingClientRect();
        const cartIcon = isMobile() ? allElements.menuToggle : allElements.cartToggleButton;
        const endRect = cartIcon.getBoundingClientRect();
        flyingItem.style.left = `${startRect.left + startRect.width / 2 - 25}px`;
        flyingItem.style.top = `${startRect.top + startRect.height / 2 - 25}px`;
        requestAnimationFrame(() => {
            flyingItem.style.left = `${endRect.left + endRect.width / 2 - 25}px`;
            flyingItem.style.top = `${endRect.top + endRect.height / 2 - 25}px`;
            flyingItem.style.transform = 'scale(0.1) rotate(360deg)';
            flyingItem.style.opacity = '0';
        });
        flyingItem.addEventListener('transitionend', () => flyingItem.remove());
    };

    const addItemToCart = (id, name, price, category, targetButton) => {
        const langData = translations[currentLang];
        if (cart.find(item => item.id === id)) { return showNotification(langData.cartItemExists(name), targetButton, 'error'); }
        if (category === 'ranks' && cart.some(item => item.category === 'ranks')) { return showNotification(langData.cartRankExists, targetButton, 'error'); }
        if (category === 'booster' && cart.some(item => item.category === 'booster')) { return showNotification(langData.cartBoosterExists, targetButton, 'error'); }
        animateAddToCart(targetButton);
        setTimeout(() => {
            cart.push({ id, name, price, category });
            updateCartUI();
            saveState();
            if (isMobile()) openSidebarAndShowTab('cart'); else {
                allElements.sideMenu.classList.add('open');
                animateCartView();
            }
        }, 300);
    };

    const removeItemFromCart = (id, targetElement) => {
        targetElement.classList.add('removing');
        targetElement.addEventListener('animationend', () => {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
            saveState();
        }, { once: true });
    };
    
    const clearCart = () => {
        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) return;

        cartItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 50}ms`;
            item.classList.add('removing');
        });
        
        cart = [];
        saveState();
        updateCartUI();
    };

    const handleLogin = async () => {
        const userId = allElements.minecraftIdInput.value.trim();
        const langData = translations[currentLang];
        if (!userId) { return showNotification(langData.loginEmptyError, allElements.minecraftIdInput, 'error'); }
        allElements.loginSubmitButton.style.display = 'none';
        allElements.loginSpinner.style.display = 'block';
        allElements.loginMessage.textContent = langData.loginInProgress;
        await new Promise(resolve => setTimeout(resolve, 1500));
        try {
            const response = await fetch(`https://api.ashcon.app/mojang/v2/user/${userId}`);
            if (!response.ok) throw new Error(langData.loginErrorNotFound(userId));
            const accountData = await response.json();
            if (accountData.username.toLowerCase() !== userId.toLowerCase()) { throw new Error(langData.loginErrorWrongCase(userId, accountData.username)); }
            loggedInUser = accountData.username;
            updateUIAfterLogin(loggedInUser);
            saveState();
        } catch (error) {
            showNotification(error.message, allElements.loginSubmitButton, 'error');
        } finally {
            allElements.loginSubmitButton.style.display = 'block';
            allElements.loginSpinner.style.display = 'none';
            allElements.loginMessage.textContent = langData.loginNotice;
        }
    };

    const handleLogout = () => {
        showNotification(translations[currentLang].logoutSuccess(loggedInUser), allElements.logoutButton);
        loggedInUser = null; cart = []; updateCartUI();
        allElements.userInfoDisplay.style.display = 'none';
        allElements.logoutButton.style.display = 'none';
        allElements.loginButton.style.display = 'inline-flex';
        allElements.playerHead.src = "";
        document.querySelectorAll('.add-btn').forEach(btn => btn.disabled = true);
        saveState();
    };

    const animateCategoryLinks = () => {
        const links = document.querySelectorAll('#category-sidebar.open .category-link, #unified-sidebar.open #sidebar-tab-categories .category-link');
        links.forEach((link, index) => {
            link.style.animation = 'none';
            void link.offsetWidth;
            link.style.animation = `bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s forwards`;
        });
    };
    
    const animateCartView = () => {
        const cartIcon = isMobile() ? document.querySelector('.sidebar-nav-btn[data-tab="cart"] i') : allElements.cartToggleButton;
        if (!cartIcon) return;

        cartIcon.classList.add('animate-shake');
        cartIcon.addEventListener('animationend', () => cartIcon.classList.remove('animate-shake'), { once: true });

        const box = document.createElement('div');
        box.className = 'cardboard-box';
        document.body.appendChild(box);
        const iconRect = cartIcon.getBoundingClientRect();
        
        const boxSize = 20;
        box.style.left = `${iconRect.left + iconRect.width / 2 - (boxSize / 2)}px`;
        box.style.top = `${iconRect.top + iconRect.height / 2 - (boxSize / 2) - 5}px`;

        box.classList.add('animate-fly-out');
        box.addEventListener('animationend', () => box.remove());

        const cartItems = document.querySelectorAll(isMobile() ? '#sidebar-tab-cart .cart-item' : '#side-menu .cart-item');
        cartItems.forEach((item, index) => {
            item.classList.add('animate-fly-out-in');
            item.style.animationDelay = `${index * 0.07}s`;
            item.addEventListener('animationend', () => {
                item.classList.remove('animate-fly-out-in');
                item.style.animationDelay = '';
            }, { once: true });
        });
    };

    const showCategory = (categoryToShow) => {
        const titleElement = document.getElementById('category-title');
        const categoryKey = 'category' + categoryToShow.charAt(0).toUpperCase() + categoryToShow.slice(1).replace('-','');
        const translatedTitle = translations[currentLang][categoryKey] || categoryToShow;

        if (titleElement) {
            titleElement.textContent = translatedTitle;
            titleElement.style.animation = 'none';
            void titleElement.offsetWidth;
            titleElement.style.animation = 'fadeInUp 0.6s ease-out';
        }

        allElements.categoryContents.forEach(content => content.classList.remove('active'));
        const activeContent = document.getElementById(`${categoryToShow}-content`);
        if(activeContent) activeContent.classList.add('active');
        const cards = activeContent ? activeContent.querySelectorAll('.product-card') : [];
        cards.forEach((card, index) => {
            card.style.animation = 'none';
            void card.offsetWidth;
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.07}s forwards`;
        });
        allElements.categoryLinks.forEach(link => link.classList.toggle('active', link.dataset.category === categoryToShow));
        if (isMobile() && allElements.unifiedSidebar.classList.contains('open')) {
            toggleMobileSidebar();
        }
    };
    
    const animateSidebarNav = () => {
        const navButtons = document.querySelectorAll('.sidebar-nav-btn');
        navButtons.forEach((btn, index) => {
            btn.style.animation = 'none';
            void btn.offsetWidth;
            btn.style.animation = `slide-down-bounce 0.6s ease-out ${index * 0.1}s forwards`;
        });
    };

    const toggleDesktopCategorySidebar = () => { 
        allElements.menuToggle.classList.toggle('open'); 
        allElements.categorySidebar.classList.toggle('open'); 
        allElements.body.classList.toggle('sidebar-open');
        if (allElements.categorySidebar.classList.contains('open')) {
            animateCategoryLinks();
        }
    };

    const toggleMobileSidebar = () => { 
        allElements.menuToggle.classList.toggle('open'); 
        allElements.unifiedSidebar.classList.toggle('open'); 
        if (allElements.unifiedSidebar.classList.contains('open')) {
            animateSidebarNav();
            setTimeout(animateCategoryLinks, 200);
        }
    };
    const showSidebarTab = (tabToShow) => { 
        allElements.sidebarTabs.forEach(tab => tab.classList.remove('active')); 
        document.getElementById(`sidebar-tab-${tabToShow}`).classList.add('active'); 
        allElements.sidebarNavButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabToShow)); 
        if (tabToShow === 'categories') animateCategoryLinks();
        if (tabToShow === 'cart') animateCartView();
    };
    const openSidebarAndShowTab = (tabName) => { 
        if (!allElements.unifiedSidebar.classList.contains('open')) toggleMobileSidebar(); 
        showSidebarTab(tabName); 
    };

    const setupEventListeners = () => {
        allElements.loginButton.addEventListener('click', () => allElements.loginOverlay.classList.add('open'));
        allElements.loginCloseButton.addEventListener('click', () => allElements.loginOverlay.classList.remove('open'));
        allElements.loginSubmitButton.addEventListener('click', handleLogin);
        allElements.logoutButton.addEventListener('click', handleLogout);
        allElements.languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        allElements.categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                link.classList.add('clicked');
                link.addEventListener('animationend', () => link.classList.remove('clicked'), { once: true });
                showCategory(link.dataset.category);
            });
        });
        document.querySelectorAll('.checkout-btn').forEach(btn => btn.addEventListener('click', (e) => { if (cart.length === 0) { e.preventDefault(); showNotification(translations[currentLang].cartEmpty, e.currentTarget, 'error'); } }));
        
        allElements.mainContent.addEventListener('click', (event) => {
            const button = event.target.closest('.add-btn');
            if (button && !button.disabled) {
                if (!loggedInUser) {
                    showNotification(translations[currentLang].loginRequired, button, 'error');
                    allElements.loginOverlay.classList.add('open');
                    return;
                }
                const { id, name, price, category } = button.dataset;
                if (id && name && price && category) {
                    addItemToCart(id, name, parseFloat(price), category, button);
                }
            }
        });

        allElements.cartItemsContainers.forEach(c => c.addEventListener('click', (e) => { 
            const removeButton = e.target.closest('.remove-btn');
            if (removeButton) { 
                e.stopPropagation();
                removeItemFromCart(removeButton.dataset.id, removeButton.closest('.cart-item'));
            } 
        }));
        
        document.querySelectorAll('.clear-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                clearCart();
            });
        });

        if (isMobile()) {
            allElements.menuToggle.addEventListener('click', toggleMobileSidebar);
            allElements.sidebarNavButtons.forEach(btn => btn.addEventListener('click', () => showSidebarTab(btn.dataset.tab)));
        } else {
            allElements.menuToggle.addEventListener('click', toggleDesktopCategorySidebar);
            allElements.cartToggleButton.addEventListener('click', () => {
                allElements.sideMenu.classList.add('open');
                animateCartView();
            });
            allElements.closeCartButton.addEventListener('click', () => allElements.sideMenu.classList.remove('open'));
        }

        document.addEventListener('click', (event) => {
            if (!isMobile()) {
                if (allElements.categorySidebar.classList.contains('open') && !allElements.categorySidebar.contains(event.target) && !allElements.menuToggle.contains(event.target)) { toggleDesktopCategorySidebar(); }
                if (allElements.sideMenu.classList.contains('open') && !allElements.sideMenu.contains(event.target) && !allElements.cartToggleButton.contains(event.target) && !event.target.closest('.add-btn')) { allElements.sideMenu.classList.remove('open'); }
            } else {
                 if (allElements.unifiedSidebar.classList.contains('open') && !allElements.unifiedSidebar.contains(event.target) && !allElements.menuToggle.contains(event.target) && !event.target.closest('.add-btn')) { toggleMobileSidebar(); }
            }
        });
    };

    loadState();
    setupEventListeners();

    let currentIsMobile = isMobile();
    window.addEventListener('resize', () => {
        if (isMobile() !== currentIsMobile) window.location.reload();
    });
});
