jQuery(function($) {

    if(matchMedia("screen and (max-width: 767px)").matches){
        console.log("mobile");
      }else if(matchMedia("screen and (max-width: 1023px)").matches){
        console.log("tablet");
      }else if(matchMedia("screen and (min-width: 1024px)").matches){
        console.log("desktop");
      }
      
      window.onresize = function(){
        document.location.reload();
      };

});