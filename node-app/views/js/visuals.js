particlesJS("particles-js-visuals",
{
  "particles": {
    "number": {
      "value": 700,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 15,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.7,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});


$(document).ready(function() {
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) >= 50) {
      setTimeout(() => {
        $('.navbar').addClass('scrolled');
      }, 100);
    } else {
      setTimeout(() => {
        $('.navbar').removeClass('scrolled');
      }, 100);
    }
  });
});


$('.navbar-brand').click(function () {
  $('.nav-link').removeClass('active-link');
});

$(".navbar-brand").click(function() {
    $('html, body').animate({
        scrollTop: $(".top").offset().top
    }, 1000);
});

// GO TO TOP
$(".scrollup").click(function() {
  $('.nav-link').removeClass('active-link');
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

$("#data-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});
