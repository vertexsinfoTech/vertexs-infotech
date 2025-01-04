var projectsList = [];
function getBaseUrl() {
  var url = skycap.base_url + "/backend/api";
  return url;
}
/*job validator form*/
function validateJobForm(id) {
  var $form = $("#jobForm_" + id);
  $form.validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phoneno: {
        required: true,
        maxlength: 15,
        number: true
      },
      captcha_code: "required",
      file: {
        required: true
      }
    },
    messages: {
      name: "Please enter Full name",
      email: "Please enter valid Email",
      phoneno: "Please enter valid Phone number",
      captcha_code: "Please enter valid captcha code",
      file: "Please select valid File"
    }
  });
}
window.onload = function() {
  $(".nav-portfolio-wrap .button-wrap").addClass("opacity__one");
  /*add class on safari browser start*/
  onLoadBrowser();
  $(function($) {
    let url = window.location.href;
    var pathname = new URL(url).pathname;
  });

  /*api call for short fortfolio*/
  $(function($) {
    let url = window.location.href;
    var pathname = new URL(url).pathname;
    if (pathname === "/shortPortfolio.php") {
      /*get token for shortportfolio function*/
      var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split("&"),
          sParameterName,
          i;

        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split("=");

          if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined
              ? true
              : decodeURIComponent(sParameterName[1]);
          }
        }
      };
      var token = getUrlParameter("token");
      if (token !== "") {
        $.ajax({
          type: "post",
          url: getBaseUrl() + "/projects/short_portfolio",
          data: { token: token },
          success: function(shortportfoliodata) {
            $("#total_projects").val(shortportfoliodata.length);
            if (shortportfoliodata.length > 0) {
              $(shortportfoliodata).each(function(index, item) {
                projectsList[index] = item;
                $("#shortportfolio-list").append(
                  '<div class="single-content card grid-item" onclick="projectDetailed(' +
                    index +
                    ')">' +
                    '<a class="project-thumbnail" id="' +
                    item.project_id +
                    '" data-toggle="modal" data-target="#modal_Portfolio">' +
                    '<img class="p2" src= "' +
                    item.image_url +
                    '">' +
                    "</a>" +
                    "</div>"
                );
              });
            } else {
              $("#shortportfolio-error-list").html(
                '<h2 class="d-black-color secondary-heading text-capitalize text-center">Link Expired</h2><h3 class="sub-ternary-heading d-black-color text-center">Please Get in Touch With Skycap on <a href="mailto:contact@skycap.co.in">contact@skycap.co.in</a></h3>'
              );
            }
            isotropeFilter();
          },
          error: function(err) {
            console.log(err);
          },
          complete: function() {}
        });
      }
    }
  });
};
/*poject detailed modal box*/
function projectDetailed(project_index) {
  loadSkelton();
  var total = parseInt($("#total_projects").val());
  $("#current_project").text(parseInt(project_index) + 1);
  $("#total_project").text(total);
  if (parseInt(project_index) === total - 1) {
    $("#right_arrow").addClass("d-none");
    $("#left_arrow").attr("data-id", parseInt(project_index) - 1);
  } else {
    $("#right_arrow").removeClass("d-none");
    $("#left_arrow").attr("data-id", parseInt(project_index) - 1);
  }
  if (parseInt(project_index) === 0) {
    $("#left_arrow").addClass("d-none");
    $("#right_arrow").attr("data-id", parseInt(project_index) + 1);
  } else {
    $("#left_arrow").removeClass("d-none");
    $("#right_arrow").attr("data-id", parseInt(project_index) + 1);
  }
  var project = projectsList[project_index];

  $(project).each(function(indexnew, itemnew) {
    var i;
    var images = { 0: [], 1: [], 2: [], 3: [] };
    var tabs = { 0: "featured", 1: "ios", 2: "android", 3: "web" };
    var tabs_text = { 0: "Featured", 1: "iOS", 2: "Android", 3: "Web" };
    var tabs_icons = {
      0: "skycap_icon.png",
      1: "apple_icon.png",
      2: "android_icon.png",
      3: "global_icon.png"
    };
    var tabs_data = "";
    $(itemnew.project_images).each(function(ix, index) {
      images[index.type].push(index);
    });
    $("#main-cont").html("");
    $.each(images, function(ix1, index1) {
      if (index1.length > 0) {
        var zoom_in = ix1 == "0" ? "zoom-inout-1" : "";
        tabs_data +=
          '<button onclick="getProjectImages(' +
          ix1 +
          ",this.id, " +
          itemnew.ios_frame_type +
          ", " +
          itemnew.ios_frame_color +
          ')" class="d-flex justify-content-center align-items-center learn-more ' +
          tabs[ix1] +
          '" id="' +
          tabs[ix1] +
          '">' +
          '<div class="circle">' +
          '<span class="icon arrow  ' +
          tabs[ix1] +
          '"><img src="../assets/images/icons/' +
          tabs_icons[ix1] +
          '" alt=""></span>' +
          "</div>" +
          '<p class="button-text flex-fill"> ' +
          tabs_text[ix1] +
          "</p>" +
          "</button>";
      }
      $("#main-cont").append(
        '<div class="single-itemx skelton-animation" id="carousel_list' +
          ix1 +
          '" ><div class="single-itemx" id="carousel_list_slider' +
          ix1 +
          '" > </div></div>'
      );
      $("#carousel_list_slider" + ix1 + "").html("");
      $.each(index1, function(ab, itemlast) {
        $("#carousel_list_slider" + ix1 + "").append(
          '<div class="slick_div slick_' +
            ab +
            '" data-id="' +
            ab +
            '">' +
            '<div class="img-fill">' +
            '<img class="img_' +
            project_index +
            ' img-zoom" src="' +
            itemlast.image_path +
            '" alt="' +
            itemlast.image_id +
            '" data-high-res-src="' +
            itemlast.image_path +
            '">' +
            "</div>" +
            "</div>"
        );
        setTimeout(function() {
          initSlick(ix1, true);
          $(function() {
            var viewer = ImageViewer("#iv-container", {
              zoomValue: 40
            });
            $(".zoom-default").click(function() {
              console.log("hello");
              var imgSrc = this.src,
                highResolutionImage = $(this).data("high-res-img");
              viewer.show(imgSrc, highResolutionImage);
            });
          });
        }, 500);
      });
    });
    $("#tec_btn-wrap").html("");
    $("#tec_btn-wrap").html(tabs_data);

    var gp_link =
      itemnew.google_play !== "" ? itemnew.google_play : "javascript:;";
    var apl_link =
      itemnew.apple_app_store !== "" ? itemnew.apple_app_store : "javascript:;";
    var web_link = itemnew.web_link !== "" ? itemnew.web_link : "javascript:;";
    var features =
      ""; /*(itemnew.features !== null && itemnew.features !=='') ? ' <div class="d-black-color mb-10">'+ itemnew.features + '</div>' : '';*/
    $("#modal-foot").html(
      '<div class="footer-remove text-left">' +
        '<div class="wrap-heading-logo ">' +
        '<h2 class="secondary-heading d-black-color">' +
        itemnew.title +
        "</h2>" +
        "</div>" +
        itemnew.project_desc +
        " " +
        features +
        ' <h3 class="">Available On</h3>' +
        '<div class="share-bn">' +
        (itemnew.android == 1
          ? '<span><a href="' +
            gp_link +
            '" target="_blank"><img src="' +
            skycap.base_url +
            '/assets/images/icons/Play_store_icon.png" alt="playstore_icon.png"></a></span>'
          : "") +
        (itemnew.ios == 1
          ? '<span><a href="' +
            apl_link +
            '" target="_blank"><img src="' +
            skycap.base_url +
            '/assets/images/icons/App_store_icon.png" alt="appstore_icon.png"></a></span>'
          : "") +
        (itemnew.web == 1
          ? '<span><a href="' +
            web_link +
            '" target="_blank"><img src="' +
            skycap.base_url +
            '/assets/images/icons/Web_icon.png" alt="appstore_icon.png"></a></span>'
          : "") +
        "</div>" +
        "</div>"
    );
  });

  $("#modal_Portfolio").on("shown.bs.modal", function() {});
  $("#modal_Portfolio").on("hidden.bs.modal", function() {
    $(".skelton-animation").removeClass("intro-remove");
    $(".project-skeleton").removeClass("remove-skelton");
    $(".img_" + project_index).removeClass("d-none");
  });
  /* add skelton for portfolio slider*/
  $("#carousel_list_slider", "#carousel_list_slider1").on("init", function(
    event,
    slick
  ) {
    $(".skelton-animation").addClass("intro-remove");
    $(".project-skeleton").addClass("remove-skelton");
    $(".img_" + project_index).removeClass("d-none");
  });
  setTimeout(function() {
    $("#tec_btn-wrap > button:first").click();
  }, 500);

  /* setTimeout(function(){
   *   wheelzoom(document.querySelectorAll('.zoom-inout-1'), {zoom: 0.1, maxZoom: 10});
   * }, 1500);*/
}

$(".modal").on("hidden.bs.modal", function() {
  $(".footer-remove").remove();
  $(".slick-list,.slick-prev,.slick-next,.slick-dots").remove();
});

/* api intregation for Rewiew
 * custom file type*/
document.querySelector("html").classList.add("js");
var fileInput = document.querySelector(".input-file"),
  button = document.querySelector(".input-file-trigger"),
  the_return = document.querySelector(".file-return");

button.addEventListener("keydown", function(event) {
  if (event.keyCode == 13 || event.keyCode == 32) {
    fileInput.focus();
  }
});
button.addEventListener("click", function(event) {
  fileInput.focus();
  return false;
});
fileInput.addEventListener("change", function(event) {
  /*the_return.innerHTML = 'Selected File: '+this.value.substring(12);*/

  $(".spinner-border").removeClass("d-none");
  $(".input-file-trigger").addClass("add-btn-width");
  setTimeout(function() {
    $(".spinner-border").addClass("d-none");
    $(".input-file-trigger").removeClass("add-btn-width");
  }, 2000);
});
/*api integration for contact us form*/
$(document).on("submit", ".contact-form", function(e) {
  e.preventDefault();
  var form_id = $(this).attr("id");
  $.ajax({
    type: "post",
    url: getBaseUrl() + "/jobs/contact_skycap",
    data: new FormData(this),
    processData: false,
    contentType: false,
    success: function(data) {
      var res = $.parseJSON(data);
      if (form_id === "quoteform" || form_id === "quote_port_form") {
        $("#captcha_code_img_quote,#captcha_code_img_quote_port").attr(
          "src",
          getBaseUrl() + "/captcha/generate/quote"
        );

      } else {
        $("#captcha_code_img").attr(
          "src",
          getBaseUrl() + "/captcha/generate/contact"
        );
      }

      if (res.resp === "SUCCESS") {
        if (form_id === "quoteform" || form_id === "quote_port_form") {

          var succ_id = (form_id === 'quote_port_form') ? 'contact_success_quote_port' : 'contact_success_quote';
          var sf_id = (form_id === 'quote_port_form') ? 'contact-file-message_quote_port' : 'contact-file-message_quote';
          $('#'+succ_id).html(res.message);
          $('#'+sf_id).html('');
          $(".send-success_quote").removeClass("d-none");
          $(".send-failure_quote").addClass("d-none");
        } else {
          $("#contact_success").html(res.message);
          $("#contact-file-message").html("");
          $(".send-success").removeClass("d-none");
          $(".send-failure").addClass("d-none");
        }
        $(".contact-form").trigger("reset");
        setTimeout(function() {
          if (form_id === "quoteform" || form_id === "quote_port_form") {
            $(".send-success_quote").addClass("d-none");
          } else {
            $(".send-success").addClass("d-none");
          }
        }, 7000);
      } else if (res.resp === "ERROR") {
        if (form_id === "quoteform" || form_id === "quote_port_form") {
          var fail_id = (form_id === "quote_port_form") ? "contact_failure_quote_port" : "contact_failure_quote";
          $("#"+fail_id).html(res.message);
          $(".send-success_quote").addClass("d-none");
          $(".send-failure_quote").removeClass("d-none");
          $(".send-success_quote").addClass("d-none");
          $(".send-failure_quote").removeClass("d-none");
        } else {
          $("#contact_failure").html(res.message);
          $(".send-success").addClass("d-none");
          $(".send-failure").removeClass("d-none");
        }
        setTimeout(function() {
          if (form_id === "quoteform" || form_id === "quote_port_form" ) {
            $(".send-failure_quote").addClass("d-none");
          } else {
            $(".send-failure").addClass("d-none");
          }
        }, 7000);
      }
    },
    error: function(err) {
      console.log(err.responseText);
    },
    complete: function() {
      $(".notification-container").removeClass("d-none");
    }
  });
});

$(document).on("change", ".input-file", function(e) {
  var id = $(this).attr("data-id");
  var ext = $(this)
    .val()
    .split(".")
    .pop()
    .toLowerCase();
  if (
    $.inArray(ext, ["doc", "docx", "odt", "pdf", "png", "jpg", "jpeg"]) == -1
  ) {
    $("#job-file-message-" + id).html(
      "Error: <b>Only doc, docx, odt, pdf, png, jpg formats allowed</b>."
    );
    $("#job-file-" + id).val("");
  } else {
    var fileName = e.target.files[0].name;
    $("#job-file-message-" + id).html(
      "Selected File: <b>" +
        fileName +
        '</b><i class="fa fa-times-circle job-file-remove" data-id="' +
        id +
        '" title="Remove File"></i>'
    );
  }
});
$(document).on("click", ".job-file-remove", function(e) {
  var id = $(this).attr("data-id");
  $("#job-file-" + id).val("");
  $("#job-file-message-" + id).html("");
});

$(document).on("click", "#contact-file-remove", function(e) {
  $("#my-file").val("");
  $("#contact-file-message").html("");
});
$("#my-file").on("change", function(e) {
  var ext = $(this)
    .val()
    .split(".")
    .pop()
    .toLowerCase();
  if (
    $.inArray(ext, ["doc", "docx", "odt", "pdf", "png", "jpg", "jpeg"]) == -1
  ) {
    $("#contact-file-message").html(
      "Error: <b>Only doc, docx, odt, pdf, png, jpg formats allowed</b>."
    );
    $("#my-file").val("");
  } else {
    var fileName = e.target.files[0].name;
    $("#contact-file-message").html(
      "Selected File: <b>" +
        fileName +
        '</b><i class="fa fa-times-circle" id="contact-file-remove" title="Remove File"></i>'
    );
  }
});

$(document).on("click", "#contact-file-remove_quote", function(e) {
  $("#my-file_quote").val("");
  $("#contact-file-message_quote").html("");
});
$(document).on("click", "#contact-file-remove_quote_port", function(e) {
  $("#my-file_quote_port").val("");
  $("#contact-file-message_quote_port").html("");
});
$("#my-file_quote").on("change", function(e) {
  var ext = $(this)
    .val()
    .split(".")
    .pop()
    .toLowerCase();
  if (
    $.inArray(ext, ["doc", "docx", "odt", "pdf", "png", "jpg", "jpeg"]) == -1
  ) {
    $("#contact-file-message_quote").html(
      "Error: <b>Only doc, docx, odt, pdf, png, jpg formats allowed</b>."
    );
    $("#my-file_quote").val("");
  } else {
    var fileName = e.target.files[0].name;
    $("#contact-file-message_quote").html(
      "Selected File: <b>" +
        fileName +
        '</b><i class="fa fa-times-circle" id="contact-file-remove_quote" title="Remove File"></i>'
    );
  }
});
$("#my-file_quote_port").on("change", function(e) {
  var ext = $(this)
    .val()
    .split(".")
    .pop()
    .toLowerCase();
  if (
    $.inArray(ext, ["doc", "docx", "odt", "pdf", "png", "jpg", "jpeg"]) == -1
  ) {
    $("#contact-file-message_quote_port").html(
      "Error: <b>Only doc, docx, odt, pdf, png, jpg formats allowed</b>."
    );
    $("#my-file_quote").val("");
  } else {
    var fileName = e.target.files[0].name;
    $("#contact-file-message_quote_port").html(
      "Selected File: <b>" +
        fileName +
        '</b><i class="fa fa-times-circle" id="contact-file-remove_quote_port" title="Remove File"></i>'
    );
  }
});
/*Function for getting browser*/
function onLoadBrowser() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("safari") != -1) {
    if (userAgent.indexOf("chrome") > -1) {
      /*browser is chrome*/
    } else {
      var dotHeader = document.getElementById("nav-link-list");
      dotHeader.classList.add("navlink-safari");
      $("#tec_btn-wrap").addClass("tec-btn-safari");
    }
  }
}

function reloadCaptcha() {
  $.ajax({
    url: "captcha_code.php",
    success: function(result) {
      $("#captcha_code_img").attr("src", "captcha_code.php");
    }
  });
}

function isotropeFilter() {
  /* filter gallery for portfolio*/
  $(".grid").isotope({
    itemSelector: ".grid-item"
  });

  /* filter items on button click*/
  $(".filter-button-group").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({ filter: filterValue });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });
}

function getProjectImages(
  index,
  id = false,
  frame_type = false,
  frame_color = false
) {
  $(".skelton-animation").addClass("d-none");
  $("#carousel_list" + index).removeClass("d-none");
  if (id) {
    $(".learn-more").removeClass("active");
    $("#" + id).addClass("active");
  }

  if (index == "1") {
    if (frame_type == "1") {
      $("#phone_layout").attr(
        "src",
        skycap.base_url + "/assets/images/iphone-x-frame.png"
      );
      $(".mockup").addClass("nudge-frame");
    } else {
      $(".mockup").removeClass("nudge-frame");
      if (frame_color == "1" && frame_color) {
        $("#phone_layout").attr(
          "src",
          skycap.base_url + "/assets/images/white.png"
        );
      } else {
        $("#phone_layout").attr(
          "src",
          skycap.base_url + "/assets/images/iphone-layout-black.png"
        );
      }
    }
    /*$("#phone_layout").attr('src', skycap.base_url+'/assets/images/iphone-device.png');
      $("#phone_layout").attr('src', skycap.base_url+'/assets/images/iphone-layout-black.png');*/
    $("#phone_layout").removeClass("d-none");
    $(".screen").removeClass("android-frame-size");
    initSlick(index);
    $(".screen").removeClass("remove-transform");
    $(".mockup").removeClass("custom-mockup");
    $(".slick-list").removeClass("overflow-visible");
    $(".img-zoom").removeClass("zoom-default");
  }
  if (index == "2") {
    /*$("#phone_layout").attr('src', skycap.base_url+'/assets/images/nexus-device.png');*/
    $("#phone_layout").attr(
      "src",
      skycap.base_url + "/assets/images/nexus-layout.png"
    );
    $("#phone_layout").removeClass("d-none");
    $(".screen").addClass("android-frame-size");
    initSlick(index);
    $(".screen").removeClass("remove-transform");
    $(".mockup").removeClass("custom-mockup");
    $(".img-zoom").removeClass("zoom-default");
    $(".mockup").removeClass("nudge-frame");
  }
  if (index == "0" || index == "3") {
    /*$("#phone_layout").attr('src', skycap.base_url+'/assets/images/laptop-mockup.png');*/
    $("#phone_layout").addClass("d-none");
    $(".screen").removeClass("android-frame-size");
    initSlick(index);
    $(".screen").addClass("remove-transform");
    $(".mockup").addClass("custom-mockup");
    $(".img-zoom").addClass("zoom-default");
    $(".mockup").removeClass("nudge-frame");
  }
  if(index == "1" || index == "2"){
    $('.mockup').addClass('custom__mobile__frame')
  }
  else $('.mockup').removeClass('custom__mobile__frame')
}

function initSlick(index, is_start = false) {
  $(".portfolio-image-wrap").addClass("loader__wrap");
  $("#carousel_loader").removeClass("d-none");
  if (is_start === false) {
    $("#carousel_list_slider" + index).slick("unslick");
  }
  $("#carousel_list_slider" + index).slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  });
  setTimeout(function() {
    $("#carousel_list_slider" + index).slick("setPosition");
    $("#portfolio-skelton").addClass("d-none");
    $("#portfolio-skelton").addClass("d-none");
    $("#portfolio-skelton-content").removeClass("d-none");
  }, 1500);
  setTimeout(function() {
    $("#carousel_loader").addClass("d-none");
    $(".portfolio-image-wrap").removeClass("loader__wrap");
  }, 2000);
}
$(document).on("click", "#some > #left_arrow", function() {
  $(".skelton-animation").removeClass("intro-remove");
  $(".project-skeleton").removeClass("remove-skelton");
  var project_index = $(this).attr("data-id");
  projectDetailed(project_index);
});

$(document).on("click", "#some > #right_arrow", function() {
  $(".skelton-animation").removeClass("intro-remove");
  $(".project-skeleton").removeClass("remove-skelton");
  var project_index = $(this).attr("data-id");
  projectDetailed(project_index);
});

function loadSkelton() {
  $("#portfolio-skelton").removeClass("d-none");
  $("#portfolio-skelton-content").addClass("d-none");
}

$(function() {
  $(".custom-form")
    .find(".form-control")
    .each(function() {
      var targetItem = $(this).parent();
      if ($(this).val()) {
        $(targetItem)
          .find("label")
          .css({
            top: "-6px",
            fontSize: "15px",
            color: "#ff512f"
          });
      }
    });
  $(".custom-form")
    .find(".form-control")
    .focus(function() {
      $(this)
        .parent(".input-block")
        .addClass("focus");
      $(this)
        .parent()
        .find("label")
        .animate(
          {
            top: "-6px",
            fontSize: "15px",
            color: "#ff512f"
          },
          300
        );
    });
  $(".custom-form")
    .find(".form-control")
    .blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .parent(".input-block")
          .removeClass("focus");
        $(this)
          .parent()
          .find("label")
          .animate(
            {
              top: "13px",
              fontSize: "15px"
            },
            300
          );
      }
    });
});

// $(".phone-mask").mouseover(function() {
//   if ($(this).val().length == 0 && !$(this).is(":focus")) {
//     $(this)
//       .parent()
//       .find("label")
//       .animate({ top: "-6px", fontSize: "15px" }, 300);
//   }
// });
// $(".phone-mask").mouseout(function() {
//   if ($(this).val().length == 0 && !$(this).is(":focus")) {
//     $(this)
//       .parent()
//       .find("label")
//       .animate({ top: "13px", fontSize: "15px" }, 300);
//   }
// });


function refreshCaptcha(_id, url) {
  $("#" + _id).attr("src", url);
}
