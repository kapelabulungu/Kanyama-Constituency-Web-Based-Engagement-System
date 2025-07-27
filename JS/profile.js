const seaCont = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("ser-btn-icon");

serShow.addEventListener("click", () => {
  seaCont.style.padding = "5px 5%";
  seaCont.style.height = "50px";
  seaCont.style.transition = "all 0.5s";
});

serHide.addEventListener("click", () => {
  seaCont.style.height = "0";
  seaCont.style.padding = "0 5%";
})


// =============Navbar Hide and Show==============

const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
})


// =============submenu====================

const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submanu");

for (let x = 0; x < droptog.length; x++) {
  droptog[x].addEventListener("click", () => {
    submenu[x].classList.toggle("submenushow");
  });
}

// ============sub=sub=dropdown=================

const subsubtog = document.querySelectorAll(".sub-sub-drop");
const subSubMenu = document.getElementsByClassName("sub-sub-menu");


for (let y = 0; y < subsubtog.length; y++) {
  subsubtog[y].addEventListener("click", () => {
    subSubMenu[y].classList.toggle("show-sub-sub-menu");
  })
}


var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


