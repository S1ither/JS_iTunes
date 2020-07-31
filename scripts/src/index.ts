//#region Import's
import MusicPlayer from "./musicPlayer/index.js";
import VideoPlayer from "./videoPlayer/index.js";
import RadioPlayer from "./radioPlayer/index.js";
//#endregion

//#region Variables
const playerBtn: NodeListOf<Element> = document.querySelectorAll(".player-btn");
const playerBlock: NodeListOf<Element> = document.querySelectorAll(".player-block");
const temp: Element | null = document.querySelector(".temp");

//#endregion

//#region Other
for (const [key, item] of playerBtn.entries()) {
	item.addEventListener("click", () => {
		if (
			temp &&
			!temp
				.getAttribute("style")
				?.split(";")
				.find((fn) => fn.split(":")[0] == "display")
		)
			temp.setAttribute("style", "display: none;");
		for (const item of playerBlock) {
			item.classList.remove("active");
		}
		for (const item of playerBtn) {
			item.classList.remove("active");
		}
		let t: any = document.querySelector(".video")?.children[0].children[0].children[0] as HTMLVideoElement;
		t.pause();
		t = document.querySelector(".audio")?.children[0].children[0].children[2] as HTMLAudioElement;
		t.pause();
		item.classList.add("active");
		playerBlock[key].classList.add("active");
	});
}

new VideoPlayer(".video-container");
new RadioPlayer(/* ".radio" */).main();
new MusicPlayer(/* ".radio" */).main();
//#endregion
