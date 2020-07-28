//#region Import's
//import {} from "./musicPlayer/index";
import VideoPlayer from "./videoPlayer/index.js";
//import {} from "./audioPlayer/index";
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
		item.classList.add("active");
		playerBlock[key].classList.add("active");
	});
}

new VideoPlayer(".video-container");
//#endregion
