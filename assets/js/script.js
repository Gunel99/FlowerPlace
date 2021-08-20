// Tab menu start
let menus = document.querySelectorAll("#tab-menu .menus .menu");
let contents = document.querySelectorAll("#tab-menu .contents .content");

for (let menu of menus) {
  menu.addEventListener("click", function () {
    document
      .querySelector("#tab-menu .menus .selected")
      .classList.remove("selected");
    this.classList.add("selected");
    let data_id = this.getAttribute("data-id");
    for (let content of contents) {
      if (data_id == content.getAttribute("data-id")) {
        content.classList.remove("d-none");
        $(content)
          .find(".multiple-items")
          .slick("unslick")
          .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
      } else {
        content.classList.add("d-none");
      }
    }
  });
}

$(document).ready(function () {
  // Carousel in tab menu start
  $("#tab-menu .prev-next-icons button.slick-n").click(function () {
    $("#tab-menu .comments").slick("slickNext");
  });
  $("#tab-menu .prev-next-icons button.slick-p").click(function () {
    $("#tab-menu .comments").slick("slickPrev");
  });

  $("#tab-menu .comments.multiple-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Gifts carousel start

  $("#gifts .prev-next-icons button.slick-n").click(function () {
    $("#gifts .gifts").slick("slickNext");
  });
  $("#gifts .prev-next-icons button.slick-p").click(function () {
    $("#gifts .gifts").slick("slickPrev");
  });

  $("#gifts .gifts.multiple-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
