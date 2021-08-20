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
  $("img.bg-image").each((index, item) => {
    let div = $('<div/>', {
      class: 'bg-image-viewer'
    });

    let src = $(item).attr('src');
    $(div).css('background-image', `url(${src})`);
    $(div).insertAfter(item);
    $(div).append(item);
  });

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

  // Product images carousel start
  $("#product-detail .product .prev-next-icons button.slick-n").click(function () {
    $("#product-detail .product-images").slick("slickNext");
  });
  $("#product-detail .product .prev-next-icons button.slick-p").click(function () {
    $("#product-detail .product-images").slick("slickPrev");
  });
  
  $("#product-detail .product-images.multiple-items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $("#product-detail .product-detail .prev-next-icons button.slick-n").click(function () {
    $("#product-detail .detailed-images").slick("slickNext");
  });
  $("#product-detail .product-detail .prev-next-icons button.slick-p").click(function () {
    $("#product-detail .detailed-images").slick("slickPrev");
  });

  $("#product-detail .product-detail .detailed-images.multiple-items").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
   
  });

  // Product detail start
  $("#product-detail .product-detail .about .choose-postcard").click(function (e) {
    e.preventDefault();

    $("#product-detail .product-detail .detailed-images.multiple-items").slick('unslick').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $("#product-detail .product-detail .product-detail-border").fadeToggle(500);
  });

  $("#add-comment").change(function () {
    $("#add-comment").closest('.add-comments').next().fadeToggle(500);
  });
});
