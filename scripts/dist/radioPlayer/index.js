//import PlayerControlls from "../utils/playerControlls.js";
export default class RadioPlayer {
    /*constructor(target: string) {
        const _object_ = document.querySelector(target);
        if (!_object_) return;
        super(_object_.children[0], _object_.children[1].children);
        
    } */
    main() {
        const radio = document.querySelector(".radio");
        const radioNavigation = document.querySelector(".radio-navigation");
        const radioCoverImg = document.querySelector(".radio-cover__img");
        const radioItem = document.querySelectorAll(".radio-item");
        const radioHeaderBig = document.querySelector(".radio-header__big");
        const radioStop = document.querySelector(".radio-stop");
        const radioVolum = document.querySelector(".radio-volume");
        const radioIconValueOff = document.querySelector(".radio-icon-value-Off");
        const playerBtn = document.querySelectorAll(".player-btn");
        const audio = new Audio();
        audio.setAttribute("type", "audio/aac");
        radioStop.disabled = true;
        const changeIconPlay = () => {
            if (audio.paused) {
                radioStop.classList.add("fa-play");
                radioStop.classList.remove("fa-stop");
                radio.classList.remove("play");
            }
            else {
                radioStop.classList.add("fa-stop");
                radioStop.classList.remove("fa-play");
                radio.classList.add("play");
            }
        };
        const selectItem = (elem) => {
            radioItem.forEach((item) => item.classList.remove("select"));
            elem.classList.add("select");
        };
        radioNavigation.addEventListener("change", (event) => {
            const target = event.target;
            const parent = target.closest(".radio-item");
            selectItem(parent);
            const title = parent.querySelector(".radio-name").textContent;
            radioHeaderBig.textContent = title;
            radioCoverImg.src = parent.querySelector(".radio-img").src;
            radioStop.disabled = false;
            audio.src = target.dataset.radioStantion;
            audio.play();
            changeIconPlay();
        });
        radioStop.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
            }
            else {
                audio.pause();
            }
            changeIconPlay();
        });
        radioVolum.value = 50;
        radioVolum.addEventListener("input", () => {
            audio.volume = radioVolum.value / 100;
        });
        let radioVolumeValue = 100;
        const changeRadioVolume = (value) => {
            audio.volume = value / 100;
            radioVolum.value = value;
        };
        radioIconValueOff.addEventListener("click", () => {
            if (audio.volume != 0) {
                radioVolumeValue = radioVolum.value;
                changeRadioVolume(0);
                radioIconValueOff.classList.add("fa-volume-off");
                radioIconValueOff.classList.remove("fa-volume-down");
            }
            else {
                changeRadioVolume(radioVolumeValue);
                radioIconValueOff.classList.remove("fa-volume-off");
                radioIconValueOff.classList.add("fa-volume-down");
            }
        });
        playerBtn[0].addEventListener("click", () => {
            audio.pause();
            changeIconPlay();
        });
        playerBtn[1].addEventListener("click", () => {
            audio.pause();
            changeIconPlay();
        });
    }
}
