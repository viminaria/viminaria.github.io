$('.transitbutton').click(function(){
    $('#transitobject1').transition({x:'30px'}, 300)
    .transition({x:'0px'}, 300)
    .transition({rotate:'+=90deg'}, 300)
    .transition({scale:'0.2'}, 300)
    .transition({scale:'1'}, 300);
    $('#transitobject2').transition({x:'-30px', delay: 1200}, 600)
    .transition({x:'0px'}, 600);
});