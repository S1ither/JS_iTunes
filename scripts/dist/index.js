//#region Import's
import MusicPlayer from "./musicPlayer/index.js";
import VideoPlayer from "./videoPlayer/index.js";
import RadioPlayer from "./radioPlayer/index.js";
//#endregion
//#region Variables
const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");
//#endregion
//#region Other
for (const [key, item] of playerBtn.entries()) {
    item.addEventListener("click", () => {
        var _a, _b, _c;
        if (temp &&
            !((_a = temp
                .getAttribute("style")) === null || _a === void 0 ? void 0 : _a.split(";").find((fn) => fn.split(":")[0] == "display")))
            temp.setAttribute("style", "display: none;");
        for (const item of playerBlock) {
            item.classList.remove("active");
        }
        for (const item of playerBtn) {
            item.classList.remove("active");
        }
        let t = (_b = document.querySelector(".video")) === null || _b === void 0 ? void 0 : _b.children[0].children[0].children[0];
        t.pause();
        t = (_c = document.querySelector(".audio")) === null || _c === void 0 ? void 0 : _c.children[0].children[0].children[2];
        t.pause();
        item.classList.add("active");
        playerBlock[key].classList.add("active");
    });
}
new VideoPlayer(".video-container");
new RadioPlayer( /* ".radio" */).main();
new MusicPlayer( /* ".radio" */).main();
//#endregion
