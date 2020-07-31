export default class PlayerControlls {
	protected mediaObject: HTMLMediaElement;
	protected mediaControls: {
		buttonPlay: Element;
		buttonStop: Element;
		buttonVolumeDown: Element;
		buttonVolumeUp: Element;
		progressBar: HTMLProgressElement;
		volumeBar: HTMLProgressElement;
		timeCurrent: Element;
		timeEnd: Element;
	};

	constructor(target: any, second_target: any) {
		this.mediaObject = target;
		this.mediaControls = {
			buttonPlay: second_target[0],
			buttonStop: second_target[1],
			timeCurrent: second_target[2],
			progressBar: second_target[3],
			timeEnd: second_target[4],
			buttonVolumeDown: second_target[5],
			volumeBar: second_target[6],
			buttonVolumeUp: second_target[7],
		};
	}

	private play() {
		this.mediaObject.play();
	}
	public stop() {
		this.mediaObject.pause();
		this.mediaObject.currentTime = 0;
	}
	private pause() {
		this.mediaObject.pause();
	}
	/**
	 * on second forward
	 * @param num number
	 */
	public forward(num: number): void {
		this.mediaObject.currentTime += num;
	}
	/**
	 * on second rewind
	 * @param num number
	 */
	public rewind(num: number): void {
		if (this.mediaObject.currentTime - num <= 0) this.mediaObject.currentTime = 0;
		else this.mediaObject.currentTime -= num;
	}
	/**
	 * Toogle Icons from controll player
	 * @param old_ ald name icon
	 * @param new_ new name icon
	 */
	protected toogleIcons(old_: string, new_: string) {
		this.mediaControls.buttonPlay.classList.remove(old_);
		this.mediaControls.buttonPlay.classList.add(new_);
	}
	public tooglePlayer() {
		if (this.mediaObject.paused) {
			this.play();
			this.toogleIcons("fa-play", "fa-pause");
		} else {
			this.pause();
			this.toogleIcons("fa-pause", "fa-play");
		}
	}
	public volumeDown(num?: number): void {
		if (this.mediaObject.volume <= 0 || this.mediaObject.volume - (num ? num : 10) / 100 < 0)
			this.mediaObject.volume = 0;
		else this.mediaObject.volume -= (num ? num : 10) / 100;
		return;
	}
	public volumeUp(num?: number): void {
		if (this.mediaObject.volume >= 1 || this.mediaObject.volume - (num ? num : 10) / 100 > 1)
			this.mediaObject.volume = 1;
		else this.mediaObject.volume += (num ? num : 10) / 100;
		return;
	}
}
