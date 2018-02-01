var player;
var player2;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        videoId: '-guAClQdOq4',
        playerVars: {
            mute: 1,
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 0,
            enablejsapi: 1,
            modestbranding: 1,
            playlist: '-guAClQdOq4',
            vq: 'hd1080'
        },
        allowfullscreen: 1,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    player2 = new YT.Player('ytplayer2', {
        videoId: 'GDYcEAQwqBQ',
        playerVars: {
            mute: 1,
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 0,
            enablejsapi: 1,
            modestbranding: 1,
            playlist: 'GDYcEAQwqBQ',
            vq: 'hd1080'
        },
        allowfullscreen: 1,
        events: {
            'onStateChange': onPlayer2StateChange
        }
    });
}
function onPlayerStateChange(el) {
    if(el.data === 1) {
        jQuery('#video-overlay').hide();
    }
}
function onPlayer2StateChange(el) {
    if(el.data === 1) {
        jQuery('#video-overlay2').hide();
    }
}