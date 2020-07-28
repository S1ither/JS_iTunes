import PlayerControlls from "../utils/playerControlls.js";
export default class VideoPlayer extends PlayerControlls {
    constructor(target) {
        const _object_ = document.querySelector(target);
        if (!_object_)
            return;
        super(_object_.children[0], _object_.children[1].children);
        const addZero = (num) => (num < 10 ? "0" + num : num);
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
    }
}
