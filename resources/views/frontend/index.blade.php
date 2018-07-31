<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>BION - Оценочная компания в Казахстане</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/mobile.css">
    <link rel="stylesheet" href="/css/desktop.css">
    <link rel="stylesheet" href="/css/vendor/lightbox.min.css">
    <meta name="theme-color" content="#008cd0">

</head>
<body>
<!-- CLick sounds -->
<audio controls id="audio">  
    <source src="/audio/click.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
<!-- End of CLick sounds -->

<div class="firstbg"></div>
<div class="secondbg"></div>

@include('frontend.partials.order')
@include('frontend.partials.service')
@include('frontend.partials.mobile_menu')
@include('frontend.partials.sent')
@include('frontend.partials.choose_city')
@include('frontend.partials.connection')
@include('frontend.partials._header')



<main>
    <!-- Row with slider and request form -->
    <div class="row mob">
        <!-- Slider -->
        <div class="col-lg-9 col-12 slider carousel slide" data-ride="carousel"  id="mainCarousel">
            <div class="carousel-inner">
                {!! $mainSlider !!}
            <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- End of slider -->
    
        <!-- ReQUEST form -->
        <div class="col-lg-3">
            <div class="rf">

                <!-- First window -->
                <div class="recall" v-show="showFirstWindow">
                    <p class="title">Перезвонить вам?</p>
                    <p class="subtitle">Выберите удобное себе время для консультации с нашими операторами или оставьте сообщение и мы обязательно перезвонят Вам!</p>
                    <p class="subtitle">Заказав услугу "Обратный звонок" Вы получите: консультации специалиста, выезд на объект и анализ документов бесплатно!</p>
                    <button class="r-btn" @click="hideFirstWindow()">Заказать!</button>
                </div>
                <!-- End of window -->

                <!-- Window that appears when click on free message -->
                <div class="sendMessage" v-show="showMsgWindow">
                    <p class="title">Отправьте <br>нам сообщение</p>
                    <hr>
                    <p class="subtitle">И получите пакет услуг бесплатно: консультации специалиста, выезд на объект и анализ документов</p>
                    <form action="{{ route('messages_store')}}" method="post">
                        <input type="text" name="name" placeholder="Имя" class="form-control" required>
                        <input type="text" name="phone" placeholder="Телефон" class="form-control" required>
                        <select name="city" class="form-control">
                            <option value="Шымкент" selected>Шымкент</option>
                            <option value="Алматы">Алматы</option>
                            <option value="Астана">Астана</option>
                        </select>
                        <textarea name="text" class="form-control" required></textarea>
                        <input type="submit" value="Отправить" class="form-control">
                        {{ csrf_field() }}
                    </form>
                    <p class="garanty">Гарантируем конфиденциальность и соблюдение коммерческой тайны</p>
                    <button class="form-control" @click="changeWindow()">Заказать бесплатную консультацию</button>
                </div>
                <!-- End of  window -->

                <!-- Window that appears when click on free callback -->
                <div class="sendMessage2" v-show="showRecallWindow">
                    <p class="title">Закажите <br>бесплатную консультацию</p>
                    <hr>
                    <p class="subtitle">И получите пакет услуг бесплатно: консультации специалиста, выезд на объект и анализ документов</p>
                    <form name="cons2">
                        <input type="text" name="name"  id="cname2"placeholder="Имя" class="form-control" required>
                        <input type="text" name="phone" id="cphone2" placeholder="Телефон" class="form-control" required>
                        <select name="city" id="ccity2" class="form-control">
                            <option value="Шымкент" selected>Шымкент</option>
                            <option value="Алматы">Алматы</option>
                            <option value="Астана">Астана</option>
                        </select>
                        <select name="when" id="cwhen2" class="form-control" required>
                            <option value="" selected>Когда вам позвонить?</option>
                            <option value="До обеда">До обеда</option>
                            <option value="После обеда">После обеда</option>
                            <option value="Завтра">Завтра</option>
                            <option value="В течение недели">В течение недели</option>
                        </select>
                        <select name="interest" class="form-control" id="cint">
                            <option value="" selected>Что вас интересует?</option>
                            <option value="Дом">Дом</option>
                            <option value="Машина">Машина</option>
                        </select>
                        <select name="lang" id="clang2" class="form-control">
                            <option value="" selected>Выберите язык (необяз.)</option>
                            <option value="Русский">Русский</option>
                            <option value="Казахский">Казахский</option>
                        </select>
                        {{ csrf_field() }}
                        <input type="submit" id="sendConsButton2" value="Отправить" class="form-control">
                    </form>
                    <p class="garanty">Гарантируем конфиденциальность и соблюдение коммерческой тайны</p>
                    <button class="form-control" @click="changeWindow()">Отправьте нам сообщение с сайта</button>
                </div>
                <!-- End of window -->
            </div>
        </div>
    </div>
    <!-- End of row -->
    <!-- Tabs -->
    <div class="tabs"  id="vue-tab">
        <div class="row tab">
            <!-- <a @click="chooseTab('news')">Новости</a> -->
            <a @click="chooseTab('actions')">Наши услуги <span class="blink" id="actionsNum">3</span></a>
            <a @click="chooseTab('howToPay')" class="active">Как оплатить</a>
            <a @click="chooseTab('vacancies')">Новые вакансии <span class="blink" id="vacanciesNum">1</span></a>
        </div>
        <div class="tab-content">

                            <component :is="currentTab"></component>

        </div>
    </div>
    <!-- End of Tabs -->
    <!-- What are you interested in block -->
    <div class="waii row">
        <div class="bgs"></div>
        {!! $waii !!}
    </div>
    <!-- End of What are you interested in block -->
    <!-- How do we work block -->
    <div class="hww">
        {!! $hww !!}
    </div>
    <!-- End of How do we work block -->
    <!-- Our partners block -->
    <div class="partners">
        
            <div>
                <h3 class="title">Наши отчеты принимают</h3>
                {!! $otcet !!}
            </div>
            

    </div>
    <div class="partners">
        
            <div>
                <h3 class="title">Наши клиенты  и партнеры </h3>
                <div class="clients-slider">
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                    <div><img src="/img/banks/halykbank.svg" alt=""></div>
                </div>
            </div>
            

    </div>
    <!-- End of Our partners block -->
    <!-- Leave request block -->
    <div class="leavereq">
        <div class="row">
            <div class="col-lg-7 phonesite">
                <div class="col-lg-6 offset-lg-6">
                    <h3>Оставьте заявку сейчас</h3>
                    <p>Выберите себе удобное время для разговора<br> с нашими консультантами</p>
                    <form action="#########" name="cons">
                        <input type="text" name="name" placeholder="Имя" required id="cname">
                        <input type="text" name="phone" placeholder="Телефон" required id="cphone">
                        <select name="city" class="form-control" id="ccity">
                            <option value="Шымкент" selected>Шымкент</option>
                            <option value="Алматы">Алматы</option>
                            <option value="Астана">Астана</option>
                        </select>
                        <select name="when" class="form-control" id="cwhen" required>
                            <option value="" selected>Когда вам позвонить?</option>
                            <option value="До обеда">До обеда</option>
                            <option value="После обеда">После обеда</option>
                            <option value="Завтра">Завтра</option>
                            <option value="В течение недели">В течение недели</option>
                        </select>
                        <select name="lang" class="form-control" id="clang">
                            <option value="" selected>Выберите язык (необяз.)</option>
                            <option value="Русский">Русский</option>
                            <option value="Казахский">Казахский</option>
                        </select>
                        {{ csrf_field() }}
                        <button id="sendConsButton">Отправить</button>
                    </form>
                </div>
            </div>
            <div class="col-lg-5 phonesiteMob">
                <img src="/img/common/index/woman.png" class="woman">
            </div>
        </div>
    </div>
    <!-- End of Leave request block -->
    <!-- We are in figures block -->
    <div class="waif">
        <h3>Мы в цифрах:</h3>
        <div class="row">
            {!! $figures !!}
        </div>
    </div>
    <!-- End of We are in figures block -->
    <!-- Profit -->
    <div class="profit">
        <h3>Почему выгодно работать с нами!</h3>
        <div class="row">
            {!! $why !!}
        </div>
    </div>
    <!-- End of Profit -->
    <!-- We have already worked -->
    <div class="experience">
        <h3>Наши оценщики уже работали в следующих сферах:</h3>
        {!! $pricers !!}
    </div>
    <!-- End of We have already worked -->
    <!-- Licence block -->
    <div class="partners licences">
        <h3 class="title"><span>Лицензии</span><span>Лицензии</span><span>Лицензии</span></h3>
            <div class="licWrap">
                
                <!-- slider -->
                <div class="lic-slider">
                    {!! $lic !!}
                </div>
                <!-- End of slider -->
                <!-- slider -->
                <div class="lic2-slider">
                    {!! $lic !!}
                </div>
                <!-- End of slider -->
                <!-- slider -->
                <div class="lic3-slider">
                    {!! $lic !!}
                </div>
                <!-- End of slider -->
            </div>            
    </div>
    <!-- End of Licence block -->
    <!-- About -->
    <div class="about">
        <h3>О компании</h3>
            {!! $about !!}      
        </div>
    </div>
    <!-- End of About -->
    <!-- Testimonials -->
    <div class="testimonials row">
        <div class="col-lg-7"></div>
        <div class="col-lg-5 hideTesti">
            <p class="title">Оставьте отзыв о нашей работе</p>
            <p class="text">Дорогие друзья! Мы работаем Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque laudantium, quibusdam atque vero impedit cupiditate quod doloribus ratione iure et sint, saepe, minima ut possimus minus in, dolorum nesciunt corporis eveniet neque. Vitae obcaecati perferendis, saepe quae suscipit temporibus, adipisci neque ducimus ad quia voluptatem mollitia quo harum. Reiciendis, animi.</p>
            <form action="#">
                <textarea name="text" class="form-control testi" placeholder=""></textarea>
                <button class="sendReview testi">Отправить</button>
            </form>
            <p class="afterBtn">Спасибо вам заранее за ваши отзывы - они важны для нас и вдохновляют нас для лучшей работы! Написать <span style="color: #2196f3; cursor: pointer;" id="showCeo">директору</span> </p>
            
        </div>
        <div class="col-lg-5 writeCeo">
            <p class="hideCeo">x</p>
            <p class="title">Написать директору</p>
            <p class="black-title">Уважемые клиенты!</p>
            <p class="text">Мы признаетльны за ваши отзывы о работе нашей компании - они помогают улучшать качество вашего обслуживания. Если у вас возникло какое-либо недовольство во время общения с нашими сотрудниками, пишите и мы примем меры.</p>
            <p class="fl-text">С уважением, <br>Директор ТОО "БИОН Group" <br>Кожамбеков Д.А.</p>
            <form action="{{ route('mail') }}" method="POST">
                <input type="text" name="name" placeholder="Имя" class="form-control testi">
                <input type="text" name="phone" placeholder="Телефон" class="form-control testi">
                <textarea name="text" class="form-control testi" placeholder=""></textarea>
                <button class="sendReview testi">Отправить и опубликовать</button>
                {{ csrf_field() }}
            </form>
        </div>

<!--  -->
    </div>
    <!-- End of Testimonials -->
    <!-- Quiz -->
    <div class="quiz">
        <h3>Уделите немного времени!</h3>
        <h4>на опросы нашей компании и социальной среды</h4>
        <div class="row">
            {!! $quiz !!}
        </div>
    </div>
    <!-- End of Quiz -->
    <!-- Map 2gis -->
    <div class="dg-widget-link">
        <!-- <a href="http://2gis.kz/shymkent/center/69.585614,42.317444/zoom/16/routeTab/rsType/bus/to/69.585614,42.317444╎БИОН, ТОО, бюро по инвентаризации и оценки недвижимости?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до БИОН, ТОО, бюро по инвентаризации и оценки недвижимости</a> -->
        <iframe frameborder="no" style=" box-sizing: border-box;" width="100%" height="600" src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.317444%2C%22lon%22%3A69.585614%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22shymkent%22%7D%2C%22org%22%3A%2270000001025819458%22%7D"></iframe>
    </div>  
    <!-- End of Map 2gis -->
</main>

<footer>
    {!! $footer !!}
</footer>






@include('frontend.partials.vue_templates')


<script src="/js/vendor/jquery-3.3.1.min.js"></script>
<script src="/js/vendor/popper.min.js"></script>
<script src="/js/vendor/bootstrap.min.js"></script>
<script src="/js/vendor/slick.min.js"></script>
<script src="/js/vendor/vue.js"></script>
<script src="/js/vendor/jquery.spincrement.min.js"></script>
<script src="/js/vendor/lightbox.min.js"></script>
<script src="/js/templates.js"></script>
<script src="/js/app.js"></script>

</body>

</html>