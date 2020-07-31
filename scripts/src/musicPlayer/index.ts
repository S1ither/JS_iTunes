//import PlayerControlls from "../utils/playerControlls";

export default class MusicPlayer /* extends PlayerControlls */ {
	/* constructor(target: string){
        super(target)
    } */
	public main() {
		const addZero: (num: number) => string | number = (num: number) => (num < 10 ? "0" + num : num);

		const audio = document.querySelector(".audio") as Element;
		const audioImg = document.querySelector(".audio-img") as HTMLImageElement;
		const audioHeader = document.querySelector(".audio-header") as Element;
		const audioPlayer = document.querySelector(".audio-player") as HTMLAudioElement;
		const audioNavigation = document.querySelector(".audio-navigation") as Element;
		const audioButtonPlay = document.querySelector(".audio-button__play") as HTMLButtonElement;
		const audioProgress = document.querySelector(".audio-progress") as HTMLProgressElement;
		const audioProgressTiming = document.querySelector(".audio-progress__timing") as HTMLProgressElement;
		const audioTimePassed = document.querySelector(".audio-time__passed") as Element;
		const audioTimeTotal = document.querySelector(".audio-time__total") as Element;

		const playList = ["hello", "flow", "speed"];

		let trackIndex = 0;

		const loadTrack = () => {
			const isPlayed = audioPlayer.paused;
			const track = playList[trackIndex];

			audioImg.src = `./audio/${track}.jpg`;
			audioPlayer.src = `./audio/${track}.mp3`;

			audioHeader.textContent = track.toUpperCase();

			if (isPlayed) {
				audioPlayer.pause();
			} else {
				audioPlayer.play();
			}
		};

		const prevTrack = () => {
			if (trackIndex !== 0) {
				trackIndex--;
			} else {
				trackIndex = playList.length - 1;
			}
			loadTrack();
		};

		const nextTrack = () => {
			if (trackIndex === playList.length - 1) {
				trackIndex = 0;
			} else {
				trackIndex++;
			}
			loadTrack();
		};

		audioNavigation.addEventListener("click", (event) => {
			const target = event.target as any;
			const track = playList[trackIndex];

			if (target.classList.contains("audio-button__play")) {
				audio.classList.toggle("play");
				audioButtonPlay.classList.toggle("fa-play");
				audioButtonPlay.classList.toggle("fa-pause");

				if (audioPlayer.paused) {
					audioPlayer.play();
				} else {
					audioPlayer.pause();
				}
				audioHeader.textContent = track.toUpperCase();
				audioImg.src = `./audio/${track}.jpg`;
			}

			if (target.classList.contains("audio-button__prev")) {
				prevTrack();
			}

			if (target.classList.contains("audio-button__next")) {
				nextTrack();
			}
		});

		audioPlayer.addEventListener("ended", () => {
			nextTrack();
			audioPlayer.play();
		});

		audioPlayer.addEventListener("timeupdate", () => {
			const duration = audioPlayer.duration;
			const currentTime = audioPlayer.currentTime;
			const progress = (currentTime / duration) * 100;

			audioProgressTiming.style.width = progress + "%";

			const minutesPassed = Math.floor(currentTime / 60) || 0;
			const secondsPassed = Math.floor(currentTime % 60) || 0;

			const minutesTotal = Math.floor(duration / 60) || 0;
			const secondsTotal = Math.floor(duration % 60) || 0;

			audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
			audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
		});

		audioProgress.addEventListener("click", (event) => {
			const x = event.offsetX;
			const allWidth = audioProgress.clientWidth;
			const progress = (x / allWidth) * audioPlayer.duration;

			audioPlayer.currentTime = progress;
		});

		audioPlayer.addEventListener("pause", () => {
			audio.classList.toggle("play");
			audioButtonPlay.classList.toggle("fa-play");
			audioButtonPlay.classList.toggle("fa-pause");
		});
	}
}
