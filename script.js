document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ja: { settingsTitle: "設定", languageLabel: "言語", storeTitle: "Minecraft Rank Store", loginButton: "ログイン", logoutButton: "ログアウト", loginTitle: "Minecraft IDでログイン", loginPlaceholder: "あなたのIDを入力...", loginNotice: "※これはデモです。パスワードは不要です。", addToCart: "カートに入れる", cartTitle: "ショッピングカート", totalLabel: "合計:", checkoutButton: "チェックアウト", monthlySub: "/月", categoriesTitle: "カテゴリー", categoryRanks: "ランク", categoryColors: "カラー", categoryBadges: "バッジ", categoryXPBooster: "XPブースター", categoryServerBooster: "サーバーブースター", joinDiscord: "Discordに参加", plusFeatures: "<li>特別なチャットプレフィックス</li><li>/fly コマンドへのアクセス権</li>", superFeatures: "<li>PLUSランクの全特典</li><li>ペット機能の利用</li><li>限定ワールドへのアクセス</li>", deluxeFeatures: "<li>SUPERランクの全特典</li><li>ニックネーム変更機能</li><li>パーティクルエフェクト</li>", premiumFeatures: "<li>DELUXEランクの全特典</li><li>満員サーバーへの優先アクセス</li><li>限定キットの利用</li>", ultimateFeatures: "<li>PREMIUMランクの全特典</li><li>全ゲームでの飛行能力</li><li>カスタムスキンの利用</li>", boosterFeatures: "<li>30日間、サーバー全体のXP獲得量をブーストします。</li>", serverBoosterFeatures: "<li>ランクの一種ですが、購入はDiscordからのみ可能です。</li><li>詳細はDiscordサーバーでご確認ください。</li>", loginErrorNotFound: (id) => `「${id}」というIDは見つかりませんでした。`, loginErrorWrongCase: (id, correctId) => `入力された名前「${id}」は現在使用されていません。正しい名前は「${correctId}」です。`, loginEmptyError: "Minecraft IDを入力してください", loginInProgress: "アカウントを確認中...", logoutSuccess: (user) => `${user} からログアウトしました`, loginRequired: "購入するにはログインしてください", cartAddSuccess: (name) => `${name} をカートに追加しました`, cartItemExists: (name) => `${name} は既にカートにあります。`, cartRankExists: "ランクは1つしか購入できません。", cartBoosterExists: "ブースターは1つしか購入できません。", checkoutSuccess: "ご購入ありがとうございます！", cartEmpty: "カートは空です", cartEmptyMessage: '<p style="text-align: center; opacity: 0.7; margin-top: 40px;">カートは空です</p>' },
        en: { settingsTitle: "Settings", languageLabel: "Language", storeTitle: "Minecraft Rank Store", loginButton: "Login", logoutButton: "Logout", loginTitle: "Login with Minecraft ID", loginPlaceholder: "Enter your ID...", loginNotice: "*This is a demo. No password is required.", addToCart: "Add to Cart", cartTitle: "Shopping Cart", totalLabel: "Total:", checkoutButton: "Checkout", monthlySub: "/month", categoriesTitle: "Categories", categoryRanks: "Ranks", categoryColors: "Colors", categoryBadges: "Badges", categoryXPBooster: "XP Booster", categoryServerBooster: "Server Booster", joinDiscord: "Join Discord", plusFeatures: "<li>Special chat prefix</li><li>Access to /fly command</li>", superFeatures: "<li>All PLUS Rank perks</li><li>Access to pet functions</li><li>Access to exclusive worlds</li>", deluxeFeatures: "<li>All SUPER Rank perks</li><li>Nickname changing feature</li><li>Particle effects</li>", premiumFeatures: "<li>All DELUXE Rank perks</li><li>Priority access to full servers</li><li>Access to exclusive kits</li>", ultimateFeatures: "<li>All PREMIUM Rank perks</li><li>Ability to fly in all games</li><li>Use of custom skins</li>", boosterFeatures: "<li>Boosts the entire server's XP gain for 30 days.</li>", serverBoosterFeatures: "<li>This is a type of rank, but it can only be purchased via Discord.</li><li>Please check our Discord server for details.</li>", loginErrorNotFound: (id) => `The ID "${id}" could not be found.`, loginErrorWrongCase: (id, correctId) => `The name "${id}" is not in use. The correct name is "${correctId}".`, loginEmptyError: "Please enter a Minecraft ID", loginInProgress: "Verifying account...", logoutSuccess: (user) => `Logged out from ${user}`, loginRequired: "Please log in to purchase", cartAddSuccess: (name) => `Added ${name} to cart`, cartItemExists: (name) => `${name} is already in the cart.`, cartRankExists: "You can only purchase one rank at a time.", cartBoosterExists: "You can only purchase one booster at a time.", checkoutSuccess: "Thank you for your purchase!", cartEmpty: "Your cart is empty", cartEmptyMessage: '<p style="text-align: center; opacity: 0.7; margin-top: 40px;">The cart is empty</p>' }
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
        settingsPanel: document.getElementById('settings-panel'),
        settingsToggleButton: document.getElementById('settings-toggle-btn'),
        settingsCloseButton: document.getElementById('settings-close-btn'),
        settingsIcon: document.getElementById('settings-icon'),
        unifiedSidebar: document.getElementById('unified-sidebar'),
        sidebarNavButtons: document.querySelectorAll('.sidebar-nav-btn'),
        sidebarTabs: document.querySelectorAll('.sidebar-tab-content'),
    };

    const productData = {
        colors: [
            { name: 'Blueberry', hex: '#9b8fcf' },
            { name: 'Raspberry', hex: '#e69ab3' },
            { name: 'Strawberry', hex: '#f9a6a6' },
            { name: 'Peach', hex: '#f5c5d5' },
            { name: 'Mango', hex: '#ffd6a5' },
            { name: 'Banana', hex: '#fff2a8' },
            { name: 'Melon', hex: '#b5e8a8' },
            { name: 'Bilberry', hex: '#4682B4' },
            { name: 'Grape', hex: '#d7a8f0' },
            { name: 'Pink', hex: '#f3b9cf' },
            { name: 'Teal', hex: '#8ccbcb' },
            { name: 'UltraMarine', hex: '#7b97f5' },
            { name: 'Lavender', hex: '#c8b2e1' },
            { name: 'Sage', hex: '#a3b59f' },
            { name: 'Mist Blue', hex: '#a7c7e6' },
            { name: 'Mint', hex: '#98FF98' },
            { name: 'Coral', hex: '#FF7F50' },
            { name: 'Latte', hex: '#C5A687' }
        ],
        badges: [{ name: 'Skull Badge', img: 'badge1.png' }, { name: 'Creeper Badge', img: 'badge2.png' }, { name: 'Diamond Sword Badge', img: 'badge3.png' }, { name: 'Pickaxe Badge', img: 'badge4.png' }, { name: 'Ender Pearl Badge', img: 'badge5.png' }, { name: 'Golden Apple Badge', img: 'badge6.png' }, { name: 'TNT Badge', img: 'badge7.png' }, { name: 'Heart Badge', img: 'badge8.png' }]
    };

    const isMobile = () => window.innerWidth <= 768;

    const generateProductCards = () => {
        const colorsContainer = document.getElementById('colors-content');
        colorsContainer.innerHTML = '';
        productData.colors.forEach(color => {
            colorsContainer.innerHTML += `<div class="product-card"><div class="color-preview" style="background-color: ${color.hex};"></div><h3>${color.name}</h3><p class="price">$3.99</p><button class="add-btn glass-btn" data-name="${color.name} Color" data-price="3.99" data-category="colors" disabled data-key="addToCart"></button></div>`;
        });
        const badgesContainer = document.getElementById('badges-content');
        badgesContainer.innerHTML = '';
        productData.badges.forEach(badge => {
            badgesContainer.innerHTML += `<div class="product-card"><img src="${badge.img}" alt="${badge.name}" class="badge-preview"><h3>${badge.name}</h3><p class="price">$7.99</p><button class="add-btn glass-btn" data-name="${badge.name}" data-price="7.99" data-category="badges" disabled data-key="addToCart"></button></div>`;
        });
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        const langData = translations[lang];
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (langData[key]) {
                if (el.tagName === 'UL') el.innerHTML = langData[key]; else el.textContent = langData[key];
            }
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(el => {
            const key = el.dataset.keyPlaceholder;
            if (langData[key]) el.placeholder = langData[key];
        });
        allElements.languageButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        localStorage.setItem('minecraftStoreLanguage', lang);
        updateCartUI();
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
        let total = 0;
        allElements.cartItemsContainers.forEach(container => {
            container.innerHTML = '';
            if (cart.length === 0) {
                container.innerHTML = translations[currentLang].cartEmptyMessage;
            } else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `<div style="flex-grow: 1;"><span>${item.name}</span><span style="display: block; opacity: 0.7;">$${item.price.toFixed(2)}</span></div><button class="remove-btn" data-name="${item.name}">×</button>`;
                    container.appendChild(itemElement);
                });
            }
        });
        cart.forEach(item => total += item.price);
        allElements.cartTotalElements.forEach(el => el.textContent = `$${total.toFixed(2)}`);
        allElements.cartItemCountDesktop.textContent = cart.length;
        allElements.cartItemCountMobile.textContent = cart.length;
        allElements.cartItemCountMobile.classList.toggle('visible', cart.length > 0);
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
        if (savedUser) { loggedInUser = savedUser; updateUIAfterLogin(loggedInUser); }
        if (savedCart) { cart = savedCart; }
        setLanguage(savedLang);
        showCategory('ranks');
    };

    const addItemToCart = (name, price, category, targetButton) => {
        const langData = translations[currentLang];
        if (cart.find(item => item.name === name)) { return showNotification(langData.cartItemExists(name), targetButton, 'error'); }
        if (category === 'ranks' && cart.some(item => item.category === 'ranks')) { return showNotification(langData.cartRankExists, targetButton, 'error'); }
        if (category === 'booster' && cart.some(item => item.category === 'booster')) { return showNotification(langData.cartBoosterExists, targetButton, 'error'); }
        cart.push({ name, price, category });
        updateCartUI();
        showNotification(langData.cartAddSuccess(name), targetButton);
        saveState();
        if (isMobile()) openSidebarAndShowTab('cart'); else allElements.sideMenu.classList.add('open');
    };

    const removeItemFromCart = (name) => {
        cart = cart.filter(item => item.name !== name);
        updateCartUI();
        saveState();
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
        loggedInUser = null;
        cart = [];
        updateCartUI();
        allElements.userInfoDisplay.style.display = 'none';
        allElements.logoutButton.style.display = 'none';
        allElements.loginButton.style.display = 'inline-flex';
        allElements.playerHead.src = "";
        document.querySelectorAll('.add-btn').forEach(btn => btn.disabled = true);
        saveState();
    };

    const showCategory = (categoryToShow) => {
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
        } else if (!isMobile() && allElements.categorySidebar.classList.contains('open')) {
            toggleDesktopCategorySidebar();
        }
    };

    const addEventListenersToButtons = () => {
        document.querySelectorAll('.add-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                if (!loggedInUser) {
                    showNotification(translations[currentLang].loginRequired, event.currentTarget, 'error');
                    allElements.loginOverlay.classList.add('open');
                    return;
                }
                const { name, price, category } = button.dataset;
                addItemToCart(name, parseFloat(price), category, event.currentTarget);
            });
        });
    };

    const openSettings = () => { if (!allElements.settingsIcon.classList.contains('rotated')) { allElements.settingsIcon.classList.add('rotated'); setTimeout(() => allElements.settingsPanel.classList.add('open'), 500); }};
    const closeSettings = () => { if (allElements.settingsPanel.classList.contains('open')) { allElements.settingsPanel.classList.remove('open'); setTimeout(() => allElements.settingsIcon.classList.remove('rotated'), 400); }};
    const toggleDesktopCategorySidebar = () => { allElements.menuToggle.classList.toggle('open'); allElements.categorySidebar.classList.toggle('open'); allElements.body.classList.toggle('sidebar-open'); };
    const toggleMobileSidebar = () => { allElements.menuToggle.classList.toggle('open'); allElements.unifiedSidebar.classList.toggle('open'); };
    const showSidebarTab = (tabToShow) => { allElements.sidebarTabs.forEach(tab => tab.classList.remove('active')); document.getElementById(`sidebar-tab-${tabToShow}`).classList.add('active'); allElements.sidebarNavButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabToShow)); };
    const openSidebarAndShowTab = (tabName) => { if (!allElements.unifiedSidebar.classList.contains('open')) { toggleMobileSidebar(); } showSidebarTab(tabName); };

    const setupEventListeners = () => {
        allElements.loginButton.addEventListener('click', () => allElements.loginOverlay.classList.add('open'));
        allElements.loginCloseButton.addEventListener('click', () => allElements.loginOverlay.classList.remove('open'));
        allElements.loginSubmitButton.addEventListener('click', handleLogin);
        allElements.logoutButton.addEventListener('click', handleLogout);
        allElements.languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        allElements.categoryLinks.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); showCategory(link.dataset.category); }));
        document.querySelectorAll('.checkout-btn').forEach(btn => btn.addEventListener('click', (e) => { if (cart.length === 0) { e.preventDefault(); showNotification(translations[currentLang].cartEmpty, e.currentTarget, 'error'); } }));
        document.querySelectorAll('.cart-items-container').forEach(c => c.addEventListener('click', (e) => { if (e.target.classList.contains('remove-btn')) { removeItemFromCart(e.target.dataset.name); } }));
        addEventListenersToButtons();

        if (isMobile()) {
            allElements.menuToggle.addEventListener('click', toggleMobileSidebar);
            allElements.sidebarNavButtons.forEach(btn => btn.addEventListener('click', () => showSidebarTab(btn.dataset.tab)));
        } else {
            allElements.menuToggle.addEventListener('click', toggleDesktopCategorySidebar);
            allElements.cartToggleButton.addEventListener('click', () => allElements.sideMenu.classList.add('open'));
            allElements.closeCartButton.addEventListener('click', () => allElements.sideMenu.classList.remove('open'));
            allElements.settingsToggleButton.addEventListener('click', () => { if (allElements.settingsPanel.classList.contains('open')) closeSettings(); else openSettings(); });
            allElements.settingsCloseButton.addEventListener('click', closeSettings);
        }

        document.addEventListener('click', (event) => {
            if (!isMobile()) {
                if (allElements.categorySidebar.classList.contains('open') && !allElements.categorySidebar.contains(event.target) && !allElements.menuToggle.contains(event.target)) { toggleDesktopCategorySidebar(); }
                if (allElements.sideMenu.classList.contains('open') && !allElements.sideMenu.contains(event.target) && !allElements.cartToggleButton.contains(event.target) && !event.target.closest('.add-btn')) { allElements.sideMenu.classList.remove('open'); }
                if (allElements.settingsPanel.classList.contains('open') && !allElements.settingsPanel.contains(event.target) && !allElements.settingsToggleButton.contains(event.target)) { closeSettings(); }
            } else {
                 if (allElements.unifiedSidebar.classList.contains('open') && !allElements.unifiedSidebar.contains(event.target) && !allElements.menuToggle.contains(event.target) && !event.target.closest('.add-btn')) { toggleMobileSidebar(); }
            }
        });
    };

    generateProductCards();
    loadState();
    setupEventListeners();

    let currentIsMobile = isMobile();
    window.addEventListener('resize', () => {
        if (isMobile() !== currentIsMobile) {
            window.location.reload();
        }
    });
});