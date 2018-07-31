
<header id="vue-header">
    <!-- Blueline -->
    <div class="line">
        <div class="bg">
            
        </div>
    </div>
    <!-- Blueline end -->
    <!-- Menu -->
    <div class="menu"  :class="{ sShadow: shadow }">
        <!-- Logo -->
        <a href="/" class="logo">
            <img src="/img/common/logo.png" alt="bion" id="logo1">
            <img src="/img/common/mobile/logo-m.png" alt="bion" id="logo2" class="hidelogo">
        </a>
        <!-- End logo -->
        <!-- Search bar -->
        <div class="search">
            <p id="js-menuName">Главное меню</p>
        </div>
        <!-- End of search -->
        <!-- Hamburger -->
        <div id="nav-icon3" class='mobileSwitch'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- End of Hamburger -->
        <!-- Mobile phone buttons -->
        <div class="phoneMore">
            <div class='phoneButtons'>
                <img src="/img/common/icons/phone.png">
                <p><span>Позвонить</span> менеджеру</p>
            </div>
            <div class='phoneButtons'>
                <img src="/img/common/icons/whatsapp.png">
                <p><span>Написать</span> сообщение по Whatsapp</p>
            </div>
            <div class='phoneButtons'>
                <img src="/img/common/mobile/oran.png">
                <p><span>Заказать</span> звонок консультанта</p>
            </div>            
        </div>
        <!-- End of Mobile phone buttons -->
        <!-- Mobile buttons -->
        <div id="tel2" class='mobileSwitch'>
            <img src="/img/common/mobile/tel.png">
        </div>

        <!-- End of Mobile buttons -->
        <!-- Select city -->
        <div class="bion-select city">
            <p class="cityp">Выберите свой регион:</p>
            <a class="shymkent">Шымкент</a><a class="almaty">Алматы</a>
        </div>
        <!-- End select city -->
        <!-- Call Center -->
        <div class="callCenter">
            <p class="phone showCity" @click="showPhone = !showPhone">+7 (725) 246 71 45</p>
            <p class="text">Call-center города Шымкент</p>

        </div>
        <!-- End callcenter -->
        <!-- Nav -->
        <div class="nav">
           <!--  <a class="sub sm1" :class="{ subActive: sm1 }" @click="chooseMenu('mainmenu','sm1')">Главная</a> -->
            <a href="#">Главная</a>
            <a href=#>Услуги</a>
            <a>О нас</a>
            <a>Контакты</a>
        </div>
        <!-- End Nav -->
        <div class="submenu">
            <component :is="currentSubMenu">
                
            </component>
        </div>
    </div>
    <!-- End Menu -->
    <!-- Sub Menu -->

    <!-- End Sub Menu -->
    
</header>