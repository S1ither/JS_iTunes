"use strict";
//#region Import's
//import {} from "./musicPlayer/index";
//import {} from "./videoPlayer/index";
//import {} from "./audioPlayer/index";
//#endregion
//#region Variables
const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");
//#endregion
//#region Other
for (const [key, item] of playerBtn.entries()) {
    item.addEventListener("click", () => {
        var _a;
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
        item.classList.add("active");
        playerBlock[key].classList.add("active");
    });
}
//#endregion
