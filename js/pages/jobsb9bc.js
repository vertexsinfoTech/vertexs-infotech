// joblisting api intrregation
$(function(){
$.ajax({
    type: 'GET',
    url: getBaseUrl() + '/jobs',
    dataType: 'json',
    success: function (joblistingData) {
        var joListingList = '';
        // console.log(joblistingData, "gdhghsgdhs job listing data is here")
        $.each(joblistingData, function (listindex, listitem) {
            joListingList += '<div class="card">' +
                    '<div class="card-header" id="headingOne_' + listindex + '">' +
                    '<h2 class="mb-0">' +
                    '<button class="d-flex align-items-center justify-content-between btn btn-link accordian-btn" data-id="' + listitem.id + '" data-toggle="collapse" data-target="#' + "StuffTypes_" + listindex + '" aria-expanded="false" aria-controls="' + "StuffTypes_" + listindex + '">' +
                    '<span class="dev_cat_img"><img src="./../assets/images/character1.png"/></span>' +
                    '<span class="job__title">' + listitem.title + '</span>' +
                    '<span class="exp__years">' + listitem.experience + '</span>' +
                    '<span class="fa-stack fa-sm arrow__icon">' +
                    '<svg class="fa-angle-down" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.77 18"><defs><style>.cls-1{fill:none;stroke:#050e3d;stroke-miterlimit:10;stroke-width:1.68px;}</style></defs><title>Down_icon</title><polyline class="cls-1" points="36.55 14.19 21.88 3.44 7.22 14.19"/></svg>' +
                    '</span>' +
                    '</button>' +
                    '</h2>' +
                    '</div>' +
                    '<div id="' + "StuffTypes_" + listindex + '" class="collapse" data-title="'+listitem.title+'" data-experience="'+listitem.experience+'" data-id="'+listitem.id+'" aria-labelledby="headingOne_' + listindex + '" data-parent="#job-accordian">' +
                    '<div class="card-body">' +
                    listitem.job_details
                    +
                    '<div class="contact-wrap">' + '<div class="alert alert-success alert-dismissible fade show send-success-job d-none" id="success_job_' + listitem.id + '">' +
                    '<div>' + 'Thank you for showing interest in Skycap. You will here from us very soon' + '</div>' +
                    '</div>' +
                    '<div class="alert alert-danger alert-dismissible fade show send-failure-job d-none" id="failure_job_' + listitem.id + '">' +
                    '<div>' + "Oh dear, it looks like something went horribly wrong. We'll be taking a look at that shortly. Try again after some time" + '</div>' +
                    '</div>' +
                    '<div class="alert alert-danger alert-dismissible fade show captcha-failure-job d-none" id="cap_job_' + listitem.id + '">' +
                    '<div>' + "Please enter a valid captcha code." + '</div>' +
                    '</div>' +
                    '<div class="hubspot-form" id="hubspot-form-'+listitem.id+'"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

        });
        // accordian ui for jin us page
        // console.log(joListingList,'listitem')
        $('#job-accordian').html(joListingList);

        $("#job-accordian").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target)
                    .prev()
                    .find("svg:last-child")
                    .toggleClass("fa-angle-down fa-angle-up");
        });

        // form js
        $(".custom-form")
                .find(".form-control")
                .each(function () {
                    var targetItem = $(this).parent();
                    if ($(this).val()) {
                        $(targetItem)
                                .find("label")
                                .css({
                                    top: "-6px"
                                    , fontSize: "15px"
                                    , color: "#ff512f"
                                });
                    }
                });
        $(".custom-form")
                .find(".form-control")
                .focus(function () {
                    $(this)
                            .parent(".input-block")
                            .addClass("focus");
                    $(this)
                            .parent()
                            .find("label")
                            .animate({
                                top: "-6px"
                                , fontSize: "15px"
                                , color: "#ff512f"
                            }
                            , 300
                                    );
                });
        $(".custom-form")
                .find(".form-control")
                .blur(function () {
                    if ($(this).val().length == 0) {
                        $(this)
                                .parent(".input-block")
                                .removeClass("focus");
                        $(this)
                                .parent()
                                .find("label")
                                .animate({
                                    top: "13px"
                                    , fontSize: "15px"
                                }
                                , 300
                                        );
                    }
                });

        // custom file type
        document.querySelector("html").classList.add('js');

        var fileInput = document.querySelector(".input-file"),
                button = document.querySelector(".input-file-trigger"),
                the_return = document.querySelector(".file-return");

        button.addEventListener("keydown", function (event) {
            if (event.keyCode == 13 || event.keyCode == 32) {
                fileInput.focus();
            }
        });
        button.addEventListener("click", function (event) {
            fileInput.focus();
            return false;
        });
        fileInput.addEventListener("change", function (event) {
            //the_return.innerHTML = this.value.substring(12); 
            $('.spinner-border').removeClass('d-none')
            $('.input-file-trigger').addClass('add-btn-width')
            setTimeout(function () {
                $('.spinner-border').addClass('d-none')
                $('.input-file-trigger').removeClass('add-btn-width')
            }, 2000);
        });
    },
    error: function (error) {
        console.log(error);

    }
});



});
$(document).on("submit",".job-form",function(e) {
  e.preventDefault();
  $.ajax({
    type: "post",
    url: getBaseUrl() + "/jobs/job_request",
    data: new FormData(this),
    processData: false,
    contentType: false,
    success: function(res){
      // console.log(res, "responsonse of job listing");
    if(res.resp === 'SUCCESS'){
      $(".job-form").trigger("reset");
      $(".file-return").html('');
      // console.log("class on job listing")
      $('.send-success-job').addClass("d-none");
      $('.send-failure-job').addClass("d-none");
      $('#success_job_'+res.job_id).removeClass("d-none");
      $('#job_captcha_img_'+res.job_id).attr('src', getBaseUrl()+'/captcha/generate/job');
      setTimeout(function(){
        $('.send-success-job').addClass("d-none");
      }, 7000);
    }
    else if(res.resp === 'ERROR'){
      $('.send-success-job').addClass("d-none");
      $('.send-failure-job').addClass("d-none");
      $('#failure_job_'+res.job_id).removeClass("d-none");
      setTimeout(function(){
        $('.send-failure-job').addClass("d-none");
      }, 7000);
    }else{
        $('.send-success-job').addClass("d-none");
      $('.send-failure-job').addClass("d-none");
      $('#cap_job_'+res.job_id).removeClass("d-none");
      setTimeout(function(){
        $('#cap_job_'+res.job_id).addClass("d-none");
      }, 7000);
    }
    },
    error: function(err){
      console.log(err.responseText);
    },
    complete: function(){
    }
  });
});
$('#job-accordian').on('shown.bs.collapse', function (e) {
  var jobId = $(e.target).data("id");
  var jobExperience = $(e.target).data('experience');
  var jobTitle = $(e.target).data("title");
  var hubSpotJobTitle = jobTitle + " ("+jobExperience+")";
  var mydiv = $('#hubspot-form-'+jobId);  
  $('.html-job-form').appendTo(mydiv);
  $(".html-job-form").removeClass("d-none");
  setTimeout(function() {
     $('iframe.hs-form-iframe').contents().find("input[name=job_position]").val(hubSpotJobTitle);
  }, 1000);
  
  this.scrollIntoView();
});

$('#job-accordian').on('hidden.bs.collapse', function (e) {
  $('iframe.hs-form-iframe').contents().find("input[name=job_position]").val("");
});

$(document).on('click', '.accordian-btn', function(){
    if(!$(this).hasClass('collapsed')){
        let index_id = $(this).attr('data-id');
        $('#job_captcha_img_'+index_id).attr('src', skycap.base_url+'/backend/api/captcha/generate/job');
    }
});

$(document).on('click', '.refresh-captcha', function () {
    let index_id = $(this).attr('data-id');
    $('#job_captcha_img_'+index_id).attr('src', skycap.base_url+'/backend/api/captcha/generate/job');
});


