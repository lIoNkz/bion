/* ===========================
  Common scripts

  1. Slick scripts 
  2. Scroll
  3. Spincrement
  4. Choose tab 
  5. Show full text of About us
  6. Parallax
  7. Validate forms
  8. AJAX Send forms
  9. Audio
  10. services text
  11. hamburger

==============================*/


/* ===========================
  1. Slick scripts 
  ==========================*/

$('.partners-slider').slick({
    swipe: false
});

$('.ps-1').slick();

$('.lic-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.lic2-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.lic3-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

/* ===========================
  2. Scroll 
  ==========================*/

$(window).scroll(function() {
    if($(window).scrollTop() > 30) {
        $('.menu').css('position','fixed');
        $('.submenu div').css('top','0px');
        $('main').css('padding-top','60px');
        $('.chooseCity').css('top','60px');
        $('.order').css('top','60px');
        $('.mobile-menu').css('top','60px');
        $('.service').css('top','60px');
        $('.order').css('height','calc(100vh - 60px)');
        $('.mobile-menu').css('height','calc(100vh - 60px)');
        $('.service').css('height','calc(100vh - 60px)');
    } else {
        $('.menu').css('position','static');
        $('.submenu div').css('top','0px');
        $('main').css('padding-top','0px');
        $('.chooseCity').css('top','90px');
        $('.order').css('top','90px');
        $('.mobile-menu').css('top','90px');
        $('.service').css('top','90px');
        $('.order').css('height','calc(100vh - 90px)');
        $('.mobile-menu').css('height','calc(100vh - 90px)');
        $('.service').css('height','calc(100vh - 90px)');
    }
}); 

/* ===========================
  3. Spincrement  
  ==========================*/

var startHeight = document.documentElement.clientHeight * 0.85;
var isPlayed = false;
$(window).scroll(function() {
    if(document.getElementsByClassName('waif')[0].getBoundingClientRect().top < startHeight && isPlayed == false) {
            isPlayed = true;
            $('.spinNumber1').spincrement({
                    from: 0,
                    duration: 8000
                });
                $('.spinNumber2').spincrement({
                    from: 0,
                    duration: 8000
                });
                $('.spinNumber3').spincrement({
                    from: 0,
                    duration: 4000,
                    thousandSeparator: ''
                });
                $('.spinNumber4').spincrement({
                    from: 0,
                    duration: 8000
                });
                $('.spinNumber5').spincrement({
                    from: 0,
                    duration: 6000
                });
                $('.spinNumber6').spincrement({
                    from: 0,
                    duration: 4000,
                    thousandSeparator: ''
                });         
    }
});
  

/* ===========================
  4. Choose tab 
  ==========================*/

$('.tab a').click(function() {
    $('.tab a').removeClass('active');
    $(this).addClass('active');
    $('span.blink', this).hide();
});
/* ===========================
  5. Show full text of About us
  ==========================*/

$('#moreInfo').click(function() {
    $('.hideAbout').slideDown(1500);
    $('.hideMobAbout').show();
    $(this).hide();
});

/* ===========================
  6. Parallax
  ==========================*/
$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();/*
    $('.firstbg').css('top', -450+(scrolled * 0.05) + 'px');*/
    $('.secondbg').css('top', -1000-(scrolled * 0.05) + 'px');

}
/* ===========================
  7. Validate forms
  ==========================*/
function validateFormCons2() {
    var name = document.forms["cons2"]["name"].value;
    var phone = document.forms["cons2"]["phone"].value;

    if (name == "") {
        alert("Заполните Имя");
        return false;
    }

    if (phone == "") {
        alert("Заполните Телефон");
        return false;
    }
}

function validateFormCons() {
    var name = document.forms["cons"]["name"].value;
    var phone = document.forms["cons"]["phone"].value;

    if (name == "") {
        alert("Заполните Имя");
        return false;
    }

    if (phone == "") {
        alert("Заполните Телефон");
        return false;
    }
}

function validateFormMessage() {
    var name = document.forms["msg"]["name"].value;
    var phone = document.forms["msg"]["phone"].value;
    var Text = document.forms["msg"]["text"].value;

    if (name == "") {
        alert("Заполните Имя");
        return false;
    }

    if (phone == "") {
        alert("Заполните Телефон");
        return false;
    }

    if (text == "") {
        alert("Напишите сообщение");
        return false;
    }
}

function validateFormService() {
    var phone = document.forms["serv"]["phone"].value;

    if (phone == "") {
        alert("Заполните Телефон");
        return false;
    }
}
/* ===========================
  8. AJAX Send forms
  ==========================*/
  $.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
$("#sendConsButton").click(function(e){

    validateFormCons();
    var cname = $('#cname').val();
    var cphone = $('#cphone').val();
    var cwhen = $('#cwhen').val();
    var ccity = $('#ccity').val();
    var clang = $('#clang').val();

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '{{ route("cons_store")}}',
        method: 'POST',
        data: {
            name: cname,
            phone: cphone,
            when: cwhen,
            lang: clang,
            city: ccity
        },
        success: function() {
            $('.sent').fadeIn();
            $('.sentMob').fadeIn();
        }
    });
    e.preventDefault();
});

$("#sendConsButton2").click(function(e){

    validateFormCons2();
    var cname = $('#cname2').val();
    var cphone = $('#cphone2').val();
    var cwhen = $('#cwhen2').val();
    var ccity = $('#ccity2').val();
    var clang = $('#clang2').val();
    var cint = $('#cint').val();

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '{{ route("cons_store")}}',
        method: 'POST',
        data: {
            name: cname,
            phone: cphone,
            when: cwhen,
            lang: clang,
            city: ccity,
            cint: cint
        },
        success: function() {
            $('.sent').fadeIn();
            $('.sentMob').fadeIn();
        }
    });
    e.preventDefault();
});


$("#sendmail_service").click(function(e){

    validateFormService();
    var sservice = $('#chosen').val();
    var sphone = $('#sphone').val();

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/send-mail-service',
        method: 'POST',
        data: {
            service: sservice,
            phone: sphone
        },
        success: function() {
            $('.sent').fadeIn();
            $('.sentMob').fadeIn();
        }
    });
    e.preventDefault();
});

/* ===========================
  9. Audio 
  ==========================*/

var audio = document.getElementById("audio");
function sound() {
  audio.currentTime = 0;
  audio.volume = 0.1;
  audio.play();
}


/* ===========================
  10. SERVICES TEXT 
  ==========================*/

var service = {
  "n1": {
      "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка недвижимости",
      "text": "",
  },
  "n2": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка транспорта",
      "text": "56o",
  },
  "n3": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка оборудования",
      "text": "5ko",
  },
  "n4": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка бизнеса",
      "text": "5ko",
  },
  "n5": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка интеллектуальной собственности",
      "text": "5ko",
  },
  "n6": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка для МСФО",
      "text": "5ko",
  },
  "n7": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Оценка для кредитования",
      "text": "5ko",
  },
  "n8": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Юридические и нотариал. услуги",
      "text": "5ko",
  },
  "n9": {
    "svg" : "<svg aria-hidden='true' data-prefix='fal' data-icon='hotel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class='svg-inline--fa fa-hotel fa-w-18 fa-3x'><path fill='currentColor' d='M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z'></path></svg>",
      "title": "Регист. и консульт. в гос.закупках",
      "text": "5ko",
  }
}

$('.goServ').click(function() {
 
  $('.order').fadeOut();
  $('.service').fadeIn();

  $('span.svg').html(service["n"+servId].svg);
  $('span.afterSvg').html(service["n"+servId].title);
  $('#chosen').val(service["n"+servId].title);
  $('div.mtxt').html(service["n"+servId].text);


  $('#js-menuName').text('Услуга');

  sound();
   $('.goServ').removeClass('orangeChoose');
});

/* ===========================
  11. Hamburger 
  ==========================*/



var allClosed = true;
var callCenterClosed = false;

    $('#nav-icon3').click(function() {
      if(allClosed == true) {
        allClosed = false;
        $('#nav-icon3').addClass('open');
        $('#loop2').hide();
        $('#tel2').hide();
        sound();
        $('.search').show();
        $('#js-menuName').text('Главное меню');
        $('.mobile-menu').fadeIn();
      } else {
        $('#logo1').show();
        $('#logo2').hide();
        $('#loop2').show();
        $('#tel2').show();
        $('.mobile-menu').fadeOut();
        $('.order').fadeOut();
        $('.service').fadeOut();
        $('#js-menuName').text('Главное меню');
        $('.phoneMore').hide();
        $(this).removeClass('open');
        allClosed = true;
        sound();
        $('.search').hide();
        if(callCenterClosed == true) {
          $('.bion-select').show();
        }
      }

    });
    $('#tel2').click(function() {
        $('#logo1').show();
        $('#logo2').hide();
        $('#loop2').show();
        $('#tel2').show();
        $('.search').hide();
        $('.phoneMore').hide();
        $(this).removeClass('open');
        $('.bion-select').show();
        allClosed = true;
        allClosed = false;
        sound();
    });



    $('.select-items div:first-child').addClass('shymkent');
    $('.select-items div:last-child').addClass('almaty');

    $('.shymkent').click(function() {
        $('.bion-select').hide();
        $('.phoneMore').show();
        $('#nav-icon3').addClass('open');
        allClosed = false;
        sound();
    })
    $('.almaty').click(function() {
        $('.bion-select').hide();
        $('.phoneMore').show();
        $('#nav-icon3').addClass('open');
        allClosed = false;
        sound();
    })

$('.showCity').click(function() {
  $('.bion-select').show();
  $('.callCenter').hide();
  callCenterClosed = true;
});
/***** show services ******/

$('.showServs').click(function() {
  $('.servicesBlock').slideDown();
});



/**/

$('.closeMenu').click(function() {
  $('.mobile-menu').fadeOut();
  $('#logo1').show();
        $('#logo2').hide();
        $('#loop2').show();
        $('#tel2').show();
        $('.search').hide();
        $('.phoneMore').hide();
  $('#nav-icon3').removeClass('open');  
   allClosed = true;
   sound();
});

var servId = 1;
$('.serv').click(function() {
  $('.goServ').addClass('orangeChoose');
  $('.serv').removeClass('Act');
  $('.serv').removeClass('ORANGE');
  $(this).addClass('ORANGE');

  servId = $(this).data('id');
  sound();
});



$('.closeServMenu').click(function() {
    $('.mobile-menu').show();
    $('.order').fadeOut();
    $('#js-menuName').text('Главное меню');
    sound();
});

$('.closeOneServMenu').click(function() {
    $('.order').show();
    $('.service').fadeOut();
    $('#js-menuName').text('Список услуг');
    sound();
});



$('.showOrderBox').click(function() {
  $('.order').fadeIn();
  $('.mobile-menu').fadeOut();
  $('#js-menuName').text('Список услуг');
  sound();
});


 $('#showCeo').click(function() {
    $('.writeCeo').show();
    $('.hideTesti').hide();
    sound();
});
 $('.hideCeo').click(function() {
    $('.writeCeo').hide();
    $('.hideTesti').show();
    sound();
});
 $('.hideChooseCity').click(function() {
    $('.chooseCity').fadeOut();
    allClosed = true;
    sound();
});
 $('.chooseShymkent').click(function() {
    $('.chooseCity').fadeOut();
    allClosed = true;
    sound();
});
 $('.chooseAlmaty').click(function() {
    $('.chooseCity').fadeOut();
    allClosed = true;
    sound();
});     
$('.hideNewsletter').click(function() {
    $('.newsletter').fadeOut();
    sound();
}); 
$('.hideConnect').click(function() {
    $('.connection').fadeOut();
    sound();
    allClosed = true;
}); 
$('#tel2').click(function() {
    $('.connection').fadeIn();
    sound();
}); 



/* close you message  sent block */

$('#closeThanks').click(function() {
    $('.sent').fadeOut();
});

$('#closeThanksMob').click(function() {
    $('.sentMob').fadeOut();
});