$('.transitbutton').click(function(){
    $('#transitobject1').transition({x:'30px'}, 300)
    .transition({x:'0px'}, 300)
    .transition({rotate:'+=90deg'}, 300)
    .transition({scale:'0.2'}, 300)
    .transition({scale:'1'}, 300);
    $('#transitobject2').transition({x:'-30px', delay: 1200}, 600)
    .transition({opacity: '0.5'}, 600);
});

$(document).ready(function eyes(){
    $('#transit-item1').transition({opacity: '1', delay: 1000}, 1000)
    .transition({opacity: '0', delay: 5000}, 1000);

    $('#transit-text1').transition({opacity: '1', delay: 2000}, 1000)
    .transition({opacity: '0', delay: 1000}, 1000)
    .transition({opacity: '0'}, 3000);

    eyes();
});