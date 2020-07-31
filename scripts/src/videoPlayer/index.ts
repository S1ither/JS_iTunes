import PlayerControlls from "../utils/playerControlls.js";

export default class VideoPlayer extends PlayerControlls {
	constructor(target: string) {
		const _object_ = document.querySelector(target);
		if (!_object_) return;
		super(_object_.children[0], _object_.children[1].children);
		if (!_object_.parentElement?.parentElement?.classList.contains("active")) this.stop();
		const addZero: (num: number) => string | number = (num: number) => (num < 10 ? "0" + num : num);
		this.mediaObject.addEventListener("click", () => this.tooglePlayer());
		this.mediaObject.addEventListener("play", () => this.toogleIcons("fa-play", "fa-pause"));
		this.mediaObject.addEventListener("pause", () => this.toogleIcons("fa-pause", "fa-play"));
		this.mediaControls.buttonPlay.addEventListener("click", () => this.tooglePlayer());
		this.mediaControls.buttonStop.addEventListener("click", () => this.stop());
		this.mediaObject.addEventListener("timeupdate", () => {
			const secondPassed = Math.floor(this.mediaObject.currentTime % 60);
			const minutePassed = Math.floor(this.mediaObject.currentTime / 60);

			const secondTotal = Math.floor(this.mediaObject.duration % 60);
			const minuteTotal = Math.floor(this.mediaObject.duration / 60);

			this.mediaControls.timeCurrent.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
			this.mediaControls.timeEnd.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
			this.mediaControls.progressBar.value = (this.mediaObject.currentTime / this.mediaObject.duration) * 100;
		});
		this.mediaControls.progressBar.addEventListener("change", () => {
			this.mediaObject.currentTime = (this.mediaControls.progressBar.value * this.mediaObject.duration) / 100;
		});
		this.mediaControls.buttonVolumeDown.addEventListener("click", () => {
			this.volumeDown();
		});
		this.mediaControls.buttonVolumeUp.addEventListener("click", () => {
			this.volumeUp();
		});
		this.mediaControls.volumeBar.addEventListener("change", () => {
			this.mediaObject.volume = this.mediaControls.volumeBar.value / 100;
		});
		this.mediaObject.addEventListener("volumechange", () => {
			this.mediaControls.volumeBar.value = this.mediaObject.volume * 100;
		});
	}
}
