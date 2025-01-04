//close_portfolio_modal
$(document).on('click','.select-technology',function(){
    //console.log($(this).attr('data-id'));
});

$(document).on('click','#close_portfolio_modal',function(){
    window.history.pushState({}, null, skycap.base_url+'/portfolio.php');
});

$(document).on('click','#close_portfolio_modal-quote',function(){
  window.history.pushState({}, null, skycap.base_url+'/portfolio.php');
});

$(document).on('click','#left_arrow',function(){
  $(".skelton-animation").removeClass("intro-remove");
      $(".project-skeleton").removeClass("remove-skelton");
    var project_index = $(this).attr('data-id');
    getProjectDetails(project_index);
    
});

$(document).on('click','#right_arrow',function(){
  $(".skelton-animation").removeClass("intro-remove");
      $(".project-skeleton").removeClass("remove-skelton");
    var project_index = $(this).attr('data-id');
    getProjectDetails(project_index);
});
var portfolioPack = [];
$(function(){
    $.ajax({
        type: 'GET',
        url:getBaseUrl() + '/projects',
        dataType: 'json',
        success: function(data) {
            $("#total_projects").val(data.length);
            $(data).each(function (index, item) {
                portfolioPack[index] = item;
                typeClass = "";
                if(item.ios == "1" ){
                    typeClass += " iosapp";                
                }
                
                if(item.android == "1" ){
                     typeClass += " androidapp"
                }

                if(item.web == "1" ) {
                    typeClass += " webapp";
                }

                if(item.game == "1" ) {
                    typeClass += " gameapp";
                }
                
                $('#projects-list').append(
                    '<div class="single-content card grid-item'+typeClass+'" onclick="getProjectDetails('+index+')">'+ 
                    '<a class="project-thumbnail" id="'+item.project_id+'" data-toggle="modal" data-target="#modal_Portfolio">' +
                    '<img class="p2" src= "'+ item.logo_url +'">'+
                    '<span class="project__name">'+ item.title +'</span>'+
                     '</a>' +
                    '</div>'
                );
      
            });
            isotropeFilter();
       
        },
        error: function (error) {
            console.log(error);
            
        }
    });
    
});



function getProjectDetails(project_index){
  loadSkelton();
    var total = parseInt($("#total_projects").val());
    $("#current_project").text(parseInt(project_index) + 1);
    $("#total_project").text(total);
    if(parseInt(project_index) === (total-1)){
        $('#right_arrow').addClass('d-none');
        $('#left_arrow').attr('data-id',parseInt(project_index)-1);
    }else{
        $('#right_arrow').removeClass('d-none');
        $('#left_arrow').attr('data-id',parseInt(project_index)-1);
    }
    if(parseInt(project_index) === 0){
        $('#left_arrow').addClass('d-none');
        $('#right_arrow').attr('data-id',parseInt(project_index)+1);
    }else{
        $('#left_arrow').removeClass('d-none');
        $('#right_arrow').attr('data-id',parseInt(project_index)+1);
    }
    var project = portfolioPack[project_index];
    window.history.pushState({}, null, skycap.base_url+'/portfolio/?id='+project.project_id);
    
    $(project).each(function (indexnew, itemnew) {
        var i;
        var images = {  0: [], 1: [], 2:[],3:[]  }; 
        var tabs = {  0: 'featured', 1: 'ios', 2: 'android', 3: 'web'};
        var tabs_text = {  0: 'Featured', 1: 'iOS', 2: 'Android', 3: 'Web'};
        var tabs_icons = {  0: 'skycap_icon.png', 1: 'apple_icon.png', 2: 'android_icon.png', 3: 'global_icon.png'};
        var tabs_data = '';
        $(itemnew.project_images).each(function(ix, index){
          
          images[index.type].push(index);
        });
          $("#main-cont").html('');
        $.each(images,function(ix1, index1){
          if(index1.length > 0){
              var zoom_in = (ix1 == '0') ? 'zoom-inout' : '';
          tabs_data += '<button onclick="getProjectImages('+ix1+',this.id, '+itemnew.ios_frame_type+', '+itemnew.ios_frame_color+')" class="d-flex justify-content-center align-items-center learn-more  '+tabs[ix1]+'" id="'+tabs[ix1]+'">'+
        '<div class="circle">'+
          '<span class="icon arrow  '+tabs[ix1]+'"><img src="../assets/images/icons/'+tabs_icons[ix1]+'" alt=""></span>'+
        '</div>'+
        '<p class="button-text flex-fill"> '+tabs_text[ix1]+'</p>'+
      '</button>';
          }
          $("#main-cont").append('<div class="single-itemx skelton-animation" id="carousel_list'+ix1+'" ><div class="single-itemx" id="carousel_list_slider'+ix1+'" > </div></div>');
          $('#carousel_list_slider'+ix1+'').html('');
            $.each(index1, function(ab, itemlast){
            $('#carousel_list_slider'+ix1+'').append(
              '<div class="slick_div slick_'+ab+'" data-id="'+ab+'">'+ '<div class="img-fill">'+ '<img data-id="'+itemlast.image_id+'" class="img_'+project_index+' img-zoom" src="'+ itemlast.image_path +'" alt="'+ itemlast.image_id +'"  data-high-res-src="'+ itemlast.image_path +'">'+ '</div>' + '</div>'
            );
            setTimeout(function(){
                initSlick(ix1, true);
            }, 100);
          });
        });
        $("#tec_btn-wrap").html('');
        $("#tec_btn-wrap").html(tabs_data);
            
            var gp_link = (itemnew.google_play !=='') ? itemnew.google_play : 'javascript:;';
            var apl_link = (itemnew.apple_app_store !=='') ? itemnew.apple_app_store : 'javascript:;';
            var web_link = (itemnew.web_link !=='') ? itemnew.web_link : 'javascript:;';
            var features = '';/*(itemnew.features !== null && itemnew.features !=='') ? ' <div class="d-black-color mb-10">'+ itemnew.features + '</div>' : '';*/
        $('#modal-foot').html(
        '<div class="footer-remove text-center text-md-left">'+
        '<div class="wrap-heading-logo ">' +
        '<h2 class="secondary-heading d-black-color">' + itemnew.title + '</h2>'+
        '</div>'  + itemnew.project_desc +' '+features +
              ' <h3 class="available">Available On</h3>'+
        '<div class="share-bn">'+
        (itemnew.android == 1 ? '<span><a href="'+gp_link+'" target="_blank"><img src="'+skycap.base_url+'/assets/images/icons/Play_store_icon.png" alt="playstore_icon.png"></a></span>' : '') +
        (itemnew.ios == 1 ? '<span><a href="'+apl_link+'" target="_blank"><img src="'+skycap.base_url+'/assets/images/icons/App_store_icon.png" alt="appstore_icon.png"></a></span>' : '') +
        (itemnew.web == 1 ? '<span><a href="'+web_link+'" target="_blank"><img src="'+skycap.base_url+'/assets/images/icons/Web_icon.png" alt="appstore_icon.png"></a></span>' : '') +
        '</div>'+
        '</div>'
        );
    });
    
            setTimeout(function(){
              $(function () {
                var viewer = ImageViewer('#iv-container',{
                  zoomValue: 40
              });
                $('.zoom-default').click(function () {
                    //alert($(this).attr('data-id'))
                  var imgSrc = this.src,
                  highResolutionImage = $(this).data('high-res-img');
                  viewer.show(imgSrc, highResolutionImage);
                  });
                });
          }, 1000);
    $('#modal_Portfolio').on('shown.bs.modal', function () { 
   
    });
    $('#modal_Portfolio').on('hidden.bs.modal', function () {
      $(".skelton-animation").removeClass("intro-remove");
      $(".project-skeleton").removeClass("remove-skelton");
      $('.img_'+project_index).removeClass('d-none');
      
    });
    // add skelton for portfolio slider
  $('#carousel_list_slider','#carousel_list_slider1').on('init', function(event, slick){
    //  console.log("slider-initalize")
     $(".skelton-animation").addClass("intro-remove");
     $(".project-skeleton").addClass("remove-skelton");
    $('.img_'+project_index).removeClass('d-none');
  });
setTimeout(function(){
  $("#tec_btn-wrap > button:first").click();
}, 1000);

setTimeout(function(){
  $("#portfolio-skelton").addClass('d-none');
  $("#portfolio-skelton-content").removeClass("d-none");
}, 1500);

// setTimeout(function(){
//   wheelzoom(document.querySelectorAll('.zoom-inout'), {zoom: 0.1, maxZoom: 10});
// }, 2000);
}
$(document).ready(function(){
  $('#carousel_list3').slick({
    adaptiveHeight: true
    });
});