export default class PlayerControlls {
    constructor(target, second_target) {
        this.mediaObject = target;
        this.mediaControls = {
            buttonPlay: second_target[0],
            buttonStop: second_target[1],
            timeCurrent: second_target[2],
            progressBar: second_target[3],
            timeEnd: second_target[4],
        };
    }
    play() {
        this.mediaObject.play();
    }
    stop() {
        this.mediaObject.pause();
        this.mediaObject.currentTime = 0;
    }
    pause() {
        this.mediaObject.pause();
    }
    /**
     * on second forward
     * @param num number
     */
    forward(num) {
        this.mediaObject.currentTime += num;
    }
    /**
     * on second rewind
     * @param num number
     */
    rewind(num) {
        if (this.mediaObject.currentTime - num <= 0)
            this.mediaObject.currentTime = 0;
        else
            this.mediaObject.currentTime -= num;
    }
    /**
     * Toogle Icons from controll player
     * @param old_ ald name icon
     * @param new_ new name icon
     */
    toogleIcons(old_, new_) {
        this.mediaControls.buttonPlay.classList.remove(old_);
        this.mediaControls.buttonPlay.classList.add(new_);
    }
    tooglePlayer() {
        if (this.mediaObject.paused) {
            this.play();
            this.toogleIcons("fa-play", "fa-pause");
        }
        else {
            this.pause();
            this.toogleIcons("fa-pause", "fa-play");
        }
    }
}
