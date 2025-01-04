window.sr = ScrollReveal();
sr.reveal('.progress-text',{ duration: 500,delay:1000 });
ScrollReveal().reveal(".progress-circle-wrap", {
  delay:0,
  opacity: 1,
  afterReveal: function(el) {
    $('.progress-circle.circle').circleProgress({
      value: 1,
      thickness:3,
      size:80,
      fill: {gradient: ['#54ffb5', '#548aff']}
    })
  }
});


// add class on portfolio header for removing navigation link
$(function($) {
  let url = window.location.href;
  var pathname = new URL(url).pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
//console.log(pathname, url); // 234234234
  //console.log(url,pathname)
  if (pathname === '/shortPortfolio.php') {
    $(document.body).addClass('hide-header-menu');
  }
  if(pathname === '/privacy-policy/index.php'|| pathname === '/privacy-policy/' || pathname === '/portfolio/' || pathname === '/sitemap/'){
$('#mainHeader').addClass('sticky-custom')
  }

});
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
$( () => {
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('.navbar').addClass('navShadow') : $('.navbar').removeClass('navShadow');
		windowTop > 100 ? $('.nav-menu').css('top','60px') : $('.nav-menu').css('top','80px');
	});
	
	//Click Logo To Scroll To Top
	$('#home').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
  });
  // add class on boostrap toggle on nav
  $('.navbar-toggler').on('click', () =>{
    $('nav').toggleClass("moz-nav-mb")
  })
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		},1500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});
// add class on the basis of selected section on navigation menu
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollBArLoader(),headerFixedScroll()};
function scrollBArLoader() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("headerProgressBar").style.width = scrolled + "%";
}
// header fixed
var header = document.getElementById("mainHeader");
function headerFixedScroll() {
  if (window.pageYOffset > 2) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
     }}
// form validation in jquery
// validation form for contact us form
$(document).ready(function () {
  $("#quote_port_form").validate({
    rules: {
          name: {
            required: true,
            minlength: 3
            },
            email: {
                required: true,
                email: true
            },
          phone:{
          required:true,
          //minlength:10,
          //maxlength:15,
          //number: true
          },
          message:{
            required: true,
          },
          captcha_code_quote:{
            required: true,
          }
        },
    messages: {
        name: "Please enter Full name",
        email: "Please enter valid Email",
        phone: "Please enter valid Phone number",
        message: "Please enter description",
        captcha_code_quote: "Please enter Captcha code",  
}
});

  $("#quoteform").validate({
    rules: {
          name: {
            required: true,
            minlength: 3
            },
            email: {
                required: true,
                email: true
            },
          phone:{
          required:true,
          //minlength:10,
          //maxlength:15,
          //number: true
          },
          message:{
            required: true,
          },
          captcha_code_quote:{
            required: true,
          }
        },
    messages: {
        name: "Please enter Full name",
        email: "Please enter valid Email",
        phone: "Please enter valid Phone number",
        message: "Please enter description",
        captcha_code_quote: "Please enter Captcha code",  
}
});
  $("#contactform").validate({
    rules: {
          name: {
            required: true,
            minlength: 3
            },
            email: {
                required: true,
                email: true
            },
          phone:{
          required:true,
          //minlength:10,
          //maxlength:15,
          //number: true
          },
          country:{
              required: true
          },
          message:{
            required: true
          },
          captcha_code:{
            required: true
          }
        },
    messages: {
        name: "Please enter Full name",
        email: "Please enter valid Email",
        phone: "Please enter valid Phone number",
        country: "Please choose country",
        message: "Please enter description",
        captcha_code: "Please enter Captcha code",  
}
});
// validation form for join us
$("#button-header").click(function(){
  // alert('click quote btn')
  $(".header-modal").animate({
    height: 'toggle'
  });
});
// add custom container for portfolio
if ($(window).width() < 1200) {
  $("#custom-container").addClass("portfolio-custom-container");
}
else {
$("#custom-container").removeClass("portfolio-custom-container");
}
// media updated for edge browser
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  $("#team").remove();
  $("#meeting").remove();
  $("wireframe").remove();
  $("#design").remove();
  $("#implementations").remove();
  $("#testing").remove();
  $("#launch").remove();
  
    $("#skycap-team-wrap").html("<span><img src='../assets/images/teamwork.png'></span>");
    $("#process-meeting").html("<img src='../assets/images/discussion.png'>");
    $("#process-wireframe").html("<img src='../assets/images/wireframes.png'>");
    $("#process-design").html("<img src='../assets/images/design.png'>");
    $("#process-implementation").html("<img src='../assets/images/implementation.png'>");
    $("#process-testing").html("<img src='../assets/images/testing.png'>");
    $("#process-launch").html("<img src='../assets/images/launch.png'>");
    $(".process-edge").addClass('pd-0');
    $(".animation-wrap").addClass('animation-remove');

}
});
$(document).on('click', '.country', function () {
  $('.select_country_form_header').addClass('country_focus')
  $('.contry-code-form_header ').addClass('country_focus')
});
$(document).on('click', '.country_form', function () {
  $('.select_country_form').addClass('country_focus')
  $('.code-form ').addClass('country_focus')
});
$(document).on("click", function (e) {
  if (!$(e.target).closest(".country_form").length){ 
  $('.select_country_form').removeClass('country_focus')
  $('.code-form ').removeClass('country_focus')
  }
});
$(document).on("click", function (e) {
  if (!$(e.target).closest(".country").length) {
  $('.select_country_form_header').removeClass('country_focus')
  $('.contry-code-form_header ').removeClass('country_focus')
  }
});
// 
if ($("#home").length) {
  var string = "Transforming "; /* type your text here */
  var array = string.split("");
  var timer;
  function frameLooper () {
    if (array.length > 0) {
      document.getElementById("animated_text").innerHTML += array.shift();
    } else {
      clearTimeout(timer);
        }
    loopTimer = setTimeout('frameLooper()',90); /* change 70 for speed */
  
  }
  var string1 = "Ideas"; /* type your text here */
  var array1 = string1.split("");
  var timer1;
  function frameLooperNew () {
    if (array1.length > 0) {
      document.getElementById("animated_text_new").innerHTML += array1.shift();
    } else {
      clearTimeout(timer1);
        }
    loopTimer1 = setTimeout('frameLooperNew()',90); /* change 70 for speed */
  }
  var string2 = "Into Reality"; /* type your text here */
  var array2 = string2.split("");
  var timer2;
  function frameLooperHorizons () {
    if (array2.length > 0) {
      document.getElementById("animated_text_horizons").innerHTML += array2.shift();
    } else {
      clearTimeout(timer2);
        }
    loopTimer2 = setTimeout('frameLooperHorizons()',90); /* change 70 for speed */
  }
}
$(window).on("load", function() {
    if ($("#home").length) {
      frameLooper();
      setTimeout('frameLooperNew()',1200);
      setTimeout('frameLooperHorizons()',1500);
    }
    setTimeout(function(){
      $('#home .button-animation-wrap').addClass('animation__added');
   },3000);
  })

  // $( '.accordian-btn' ).click( function( ) {
  //   var pane = $(this);
  //   setTimeout(function(){
  //    var $panel = pane.closest('.card');
  //       $('html,body').animate({
  //           scrollTop: $panel.offset().top
  //       }, 500); 
  //   }, 300 );
  // });

  $('.joblist-accordian').on('shown.bs.collapse', function (e) {
    var offset = $(this).find('.collapse.show').prev('.card-header');
    if(offset) {
        $('html,body').animate({
            scrollTop: $(offset).offset().top - 100
        }, 300);
    }
});


  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  // Gets the video src from the data-src on each button

var $videoSrc;  
$('.btn-watch-video').click(function() {
    $videoSrc = $(this).data( "src" );
});
// when the modal is opened autoplay it  
$('#youtubeModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#skycapvideo").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
});
// stop playing the youtube video when I close the modal
$('#youtubeModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#skycapvideo").attr('src',$videoSrc); 
}); 

$(".form-control").on('focus blur', function(){
  $(this).parent().toggleClass('is_focused');
})
setTimeout(function(){ $('#reviewSlider .slick-track').attr('aria-label', 'main navigation'); }, 3000);
if (navigator.userAgent.match(/Macintosh/) && navigator.userAgent.match(/Chrome/)) {
  $('body').addClass('is_macChrome');
}
if (navigator.userAgent.match(/Macintosh/) && navigator.userAgent.match(/Safari/)) {
  $('body').addClass('is_macSafari');
}
/*overflow hide quote button click*/
$('body').on('show.bs.dropdown', function () {
  $("body").addClass("overflow-y-hide");
});
$('body').on('hide.bs.dropdown', function () {
  $("body").removeClass("overflow-y-hide");
});
$("body").click(function(){
     $("html").removeClass("overflow-y-hide");
});



if($('#counter').length > 0){
//counter on animate
var aTop = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (aTop == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 1200,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    aTop = 1;
  }
});
};





