// search bar toggle

window.addEventListener('DOMContentLoaded', ()=> {
    const menuBtn = document.querySelector('#src-img')
    const dropdown = document.querySelector('#search-input')

    menuBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('block')
    })
})


// mobile menu 
window.addEventListener('DOMContentLoaded', ()=> {
  const menuBtn = document.querySelector('#mobile-btn')
  const dropdown = document.querySelector('#mobile-menu')

  menuBtn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden')
      dropdown.classList.toggle('block')
  })
})



jQuery(document).ready(function($){
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
              $(".nav").css("background" , "#1A1E49");
            }
      
            else{
                $(".nav").css("background" , "transprant");  	
            }
        })
      })
      $('.nav-item').click(function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
      });

      $('.second-nav-item').click(function(){
        $('.second-nav-item').removeClass("active");
        $(this).addClass("active");
      });
      $('.mob-nav-item').click(function(){
        $('.mob-nav-item').removeClass("active");
        $(this).addClass("active");
      });

// Table
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// auction
$('.auction-btn').click(function(){
  $('.auction-btn').removeClass("active2");
  $(this).addClass("active2");
});

// activity
$(document).ready(function(){
  $("#explore-more-btn").click(function(){
    $("#hidden-item").toggle();
  });
});
// ranking
$(document).ready(function(){
  $("#rank-explore-more").click(function(){
    $("#rank-hide").toggle();
  });
});


// swiper

// var swiper = new Swiper(".exp-Swiper", {
//   spaceBetween: 5,
//   slidesPerView: 5,
//   freeMode: true,
//   watchSlidesProgress: true
// });
// var swiper2 = new Swiper(".exp-Swiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   thumbs: {
//     swiper: swiper
//   }
// });

// explore
var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        
        slider.oninput = function() {
          output.innerHTML = this.value;
        }
// explore

    });

    filterSelection("all")
        function filterSelection(c) {
          var x, i;
          x = document.getElementsByClassName("filterDiv");
          if (c == "all") c = "";
          for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
          }
        }
        
        function w3AddClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
          }
        }
        
        function w3RemoveClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
          }
          element.className = arr1.join(" ");
        }
        
        // Add active class to the current button (highlight it)
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active3");
            current[0].className = current[0].className.replace(" active3", "");
            this.className += " active3";
          });
        }
  
        

