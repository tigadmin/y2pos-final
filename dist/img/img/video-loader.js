(function() {
    var videosData = {
        videoMain: {
            class: 'video',
            mp4: 'resources/yumapos_site/video/yuma_intro.webm',
            webm: 'resources/yumapos_site/video/yuma_intro.mp4'
        },
        videoApp: {
            class: 'app-video',
            mp4: 'resources/yumapos_app/video/background.mp4',
            webm: 'resources/yumapos_app/video/background.webm'
            /*mp4: 'resources/yumapos_app/video/start-video.webm',
            webm: 'resources/yumapos_app/video/start-video.webm'*/
        },
        videoYumamartSection: {
            class: 'yumamart-section-video',
            mp4: 'resources/yumapos_app/video/background.mp4',
            webm: 'resources/yumapos_app/video/background.webm'
            /*mp4: 'resources/yumapos_app/video/start-video.webm',
            webm: 'resources/yumapos_app/video/start-video.webm'*/
        },
        videoPage: {
            class: 'video-page',
            mp4: 'resources/yumapos_site/video/yuma_page.webm',
            webm: 'resources/yumapos_site/video/yuma_page.mp4'
        }
    };

    if(!window.document.documentElement.className.match(/\bmobile\b/)) {
        var videos = [];
        for(var index in videosData) {
            if (videosData.hasOwnProperty(index)) {
                var videoItem = videosData[index];
                videos[index] = document.getElementsByClassName(videoItem.class);
                if(videos[index].length){
                    var videoHTML_introMain = "<video loop muted autoplay><source src='" + videoItem.webm + "' type='video/webm'><source src='" + videoItem.mp4 + "' type='video/mp4'></video>";
                    if(!window.document.documentElement.className.match(/\btablet\b/)) {
                        videos[index][0].innerHTML = videoHTML_introMain;
                    }
                    videos[index][videos[index].length-1].innerHTML = videoHTML_introMain;
                }
            }
        }
    }
})();