$('#stage').mouseenter(function flip(){
    $('#flip-animation-box').transition({rotateY: '+=180deg'}, 850);
    $('#flip-item-1').transition({borderRadius: '40vmin'}, 800);
    $('#flip-item-2').transition({borderRadius: '40vmin'}, 800);
});

$('#stage').mouseleave(function flipBack(){
    $('#flip-animation-box').transition({rotateY: '+=180deg'}, 800);
    $('#flip-item-1').transition({borderRadius: '0vmin'}, 800);
    $('#flip-item-2').transition({borderRadius: '0vmin'}, 800);
});