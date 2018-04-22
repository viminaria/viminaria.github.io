$('#stage').mouseenter(function(){
    $('#flip-animation-box').transition({rotateY: '+=540deg'}, 600);
    $('.animated-item').css({borderRadius: '40vmin'}, 30000);
});

$('#stage').mouseleave(function(){
    $('#flip-animation-box').transition({rotateY: '+=180deg'}, 600);
    $('.animated-item').css({borderRadius: '0vmin'}, 1000);
});