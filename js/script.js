console.log('video is running');

const video = document.getElementById('brandstovShowreel');

function playPauseVideo() {
	if(!video.paused) {
		video.pause()
	} else {
		video.play()
	}
}