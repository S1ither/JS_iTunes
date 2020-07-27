export default class PlayerControlls {
	private _Target_: HTMLElement | null = null;

	constructor(target: string) {
		const _object_ = document.getElementById(target);
		if (_object_?.tagName != "video" || "audio") return;
		this._Target_ = _object_;
	}

	public start(): void {}
	public stop(): void {}
	public pause(): void {}
	public forward(): void {}
	public rewind(): void {}
}
