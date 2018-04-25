$(function transitAd(){
    $('#transitad-item1').transition({opacity: 1}, 1000)
    .transition({opacity: 0, delay: 9000}, 1000)

    $('#transitad-text1').transition({opacity: 1, delay: 1000}, 1000)
    .transition({opacity: 0, delay: 2000}, 1000);

    $('#transitad-text2').transition({opacity: 1, delay: 6000}, 1000)
    .transition({opacity: 0, delay: 2000}, 1000);
});
    
$(function sandWich(){
    $('#transitad-item2').transition({opacity: 1}, 1000)
    .transition({opacity: 0, delay: 4000}, 1000)
    .transition({opacity: 0}, 1000);

    $('#transitad-text3').transition({opacity: 1, delay: 1000}, 1000)
    .transition({opacity: 0, delay: 3000}, 1000)
    .transition({opacity: 0, complete: transitAd()}, 1000);
});