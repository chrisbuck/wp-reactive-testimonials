var $ = jQuery;

var sliderIndexes = 
jQuery(document).ready(function($){
    var carouselInner = $('.carousel-inner');
    var innerCode = carouselInner.html();
        var pReg = new RegExp('<p></p>', 'g');
        innerCode = innerCode.replace(pReg, '');
    carouselInner.html(innerCode);
    
    var carouselItems = $('.carousel-item');
    
    carouselItems.each(function(i, itm){
        if( i == 0 ){
            $(itm).addClass('active'); 
            //$(itm).addClass('fadeOutLeft');
            //setTimeout(function(){
                //$(itm).removeClass('fadeOutLeft');
            //},1000);

        }

    });
    
    /*
    $('#text-carousel').on('slide.bs.carousel', function(e){
        var currentSlide = e.currentTarget;
        $('#text-carousel').on('slide.bs.carousel', function(e){
            $(currentSlide).animate({opacity: 0},500);
            setTimeout(function(){
                $(currentSlide).css('opacity', 1);
            },500);
        });
    });
    */
    
    try{
        $('#testimonials-carousel').carousel({
            interval: 10000
        });
    }
    catch(err){
        console.log(err);
    }
});