$(document).ready(function transitAd(){
    $('#transitad-item1').transition({opacity: 1}, 1000)
    .transition({opacity: 0, delay: 9000}, 1000)
    .transition({opacity: 0, delay: 5000}, 1000);
        

    $('#transitad-item2').transition({opacity: 1, delay: 11000}, 1000)
    .transition({opacity: 0, delay: 4000}, 1000);

    $('#transitad-text').transition({opacity: 1, delay: 1000}, 1500)
    .transition({opacity: 0, delay: 2000}, 1500)
    .transition({opacity: 0}, 11000);

    transitAd();
});