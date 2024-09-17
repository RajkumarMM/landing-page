/* Additional JS */

//Script for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault()
          event.stopPropagation()
          if (form.checkValidity()) {
            grecaptcha.ready(function() {
              grecaptcha.execute('6Lf_tVAoAAAAAKbaPwdTPKftTPtjbPAih6uOoiV7', {action: 'submit'}).then(function(token) {
                form.querySelector('input[name="g-recaptcha-response"]').value = token
                form.submit()
              });
            });
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  
  $(document).ready(function() {
  
      // Function to get URL parameter
      function getUrlParameter(name) {
          name = name.replace(/[\[\]]/g, '\\$&');
          var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
          var results = regex.exec(window.location.href);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, ' '));
      }
  
      // Function to set a cookie
      function setCookie(name, value, days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }
  
      // Function to get a cookie
      function getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
      }
  
      // Function to add a hidden field to a form
      function addHiddenFieldToForm(formSelector, fieldName, fieldValue) {
          var hiddenField = $('<input>').attr({
              type: 'hidden',
              name: fieldName,
              value: fieldValue
          });
          $(formSelector).append(hiddenField);
      }
  
      // Main logic to handle URL parameter, cookie, and default value
      var paramName = 'link_source';
      var fieldName = 'enquiry-source';
      var paramValue = getUrlParameter(paramName);
      var cookieValue = getCookie(paramName);
      var fieldValue;
  
      if (paramValue) {
          // Use URL parameter value
          fieldValue = paramValue;
          setCookie(paramName, paramValue, 1); // Store in cookie for 1 day
          console.log('Using URL parameter: ' + paramName + ' = ' + paramValue);
      } else if (cookieValue) {
          // Use cookie value if URL parameter does not exist
          fieldValue = cookieValue;
          console.log('Using cookie value: ' + paramName + ' = ' + cookieValue);
      } else {
          // Use default value if neither URL parameter nor cookie exists
          fieldValue = 'Others';
          console.log('Using default value: ' + paramName + ' = Others');
      }
  
      // Add hidden field to form
      addHiddenFieldToForm('#contact-form', fieldName, fieldValue);
  });
  
  $(document).ready(function(){
    if($('#thankyouModal').length){
      var myModal = new bootstrap.Modal($('#thankyouModal'));
      myModal.show();
    }
  });
  
  /* Scroll to top */
   // scroll botton visble in 40
   window.onscroll = function() { scrollFunction() };

   function scrollFunction() {
       const scrollToTopBtn = document.getElementById("scroll-to-top");
       if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           scrollToTopBtn.style.display = "block";
       } else {
           scrollToTopBtn.style.display = "none";
       }
   }

//    window.addEventListener('scroll', () => {
//     console.log('Vertical scroll position:', window.scrollY);
// });

  //  scroll clik function
  $(document).ready(function(){
    $("#scroll-to-top").click(function(){
      $(window).scrollTop(0);
    });
  });
  
  // image animation top to bottom

  $(document).ready(function() {
    $(window).on('scroll', function() {
        const $scrollToDownImage = $('.topImage');
        const windowWidth = $(window).width();

        // Disable animation for screen widths 974px or smaller
        if (windowWidth > 974) {
            if ($(this).scrollTop() > 450) {
                $scrollToDownImage.css('position', 'unset');
                $scrollToDownImage.addClass("scrolled");
            } else {
                $scrollToDownImage.css('position', 'relative');
                $scrollToDownImage.removeClass("scrolled");
            }
        } else {
            // Reset to default when screen size is smaller
            $scrollToDownImage.css('position', 'relative');
            $scrollToDownImage.removeClass("scrolled");
        }
    });
});


  // banner-section backround change function
  $(document).ready(function() {
    const images = [
        'src/banner-images/banner-img-1.jpg',
        'src/banner-images/banner-img-2.jpg',
        'src/banner-images/banner-img-3.jpg'
    ];

    $('.page-banner').backstretch(images, {
        duration: 3000,  // Time the image is shown
        fade: 1000       // Transition speed
    });
});

//text entry animation
$(document).ready(function() {
  ScrollReveal().reveal('.content', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true // Animations reset when elements go out of view
  });
});
// text entry animation-top
$(document).ready(function() {
  ScrollReveal().reveal('.content-top', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true // Animations reset when elements go out of view
  });
});
  // text entry animation-right
$(document).ready(function() {
  ScrollReveal().reveal('.content-right', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true // Animations reset when elements go out of view
  });
});
  /* Why Us Section Slider */
  $(document).ready(function(){
    $('.slider-why-us').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  // equal height for all card
    function setEqualHeight() {
      var maxHeight = 0;
      $('.match-height').each(function(){
        var thisHeight = $(this).outerHeight();
        if (thisHeight > maxHeight) {
          maxHeight = thisHeight;
        }
      });
      $('.match-height').css('height', maxHeight + 'px');
    }
  
    setEqualHeight();
  
    $(window).on('resize', function(){
      $('.match-height').css('height', 'auto');
      setEqualHeight();
    });
  });
  
  /* Product gallery slider */
  let items = document.querySelectorAll('.owl-slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    // items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${220*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-220*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

function nextItem() {
    active = active + 1 < items.length ? active + 1 : 0; // Loop back to the start
    loadShow();
}

function prevItem() {
    active = active - 1 >= 0 ? active - 1 : items.length - 1; // Loop back to the end
    loadShow();
}

loadShow();
next.onclick = nextItem;
prev.onclick = prevItem;

// Automatically move to the next item every 3 seconds
setInterval(nextItem, 3000);
