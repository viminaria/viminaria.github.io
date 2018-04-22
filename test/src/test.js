$(document).ready(function transitAd(){
    $('#transitad-item1').transition({opacity: '1', delay: 1000}, 1000)
    .transition({opacity: '0', delay: 5000}, 1000);

    $('#transitad-text1').transition({opacity: '1', delay: 2000}, 1000)
    .transition({opacity: '0', delay: 1000}, 1000)
    .transition({opacity: '0'}, 3000);

    transitAd();
});