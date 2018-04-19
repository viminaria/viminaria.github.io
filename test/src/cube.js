$(document).ready(function cubespin(){
    $('.animated-cube').transition({ rotateX: '0deg', rotateY: '0deg', rotateZ: '0deg', delay: 300}, 1000)
    .transition({ rotateY: '-90deg', delay: 300}, 1000)
    .transition({ rotateY: '-180deg', delay: 300}, 1000)
    .transition({ rotateY: '0deg', rotateX: '-90deg', delay: 300}, 1000)
    .transition({ rotateY: '90deg', rotateX: '0deg', delay: 300}, 1000)
    .transition({ rotateY: '0deg', rotateX: '90deg', rotateZ: '180deg', delay: 300}, 1000);

    cubespin();
});