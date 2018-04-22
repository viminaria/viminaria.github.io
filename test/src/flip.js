$('#stage').mouseenter(function(){
    $('#flip-animation-box').transition({rotateY: '+=540deg', delay: 0}, 500);
    $('#flip-item-1').css({borderRadius: '40vmin'}, 1000);
    $('#flip-item-2').css({borderRadius: '40vmin'}, 1000);
});

$('#stage').mouseleave(function(){
    $('#flip-animation-box').transition({rotateY: '+=180deg'}, 500);
    $('#flip-item-1').transition({borderRadius: '0vmin'}, 1000);
    $('#flip-item-2').transition({borderRadius: '0vmin'}, 1000);
});