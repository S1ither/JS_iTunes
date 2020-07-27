"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerControlls {
    constructor(target) {
        this._Target_ = null;
        const _object_ = document.getElementById(target);
        if ((_object_ === null || _object_ === void 0 ? void 0 : _object_.tagName) != "video" || "audio")
            return;
        this._Target_ = _object_;
    }
    start() { }
    stop() { }
    pause() { }
    forward() { }
    rewind() { }
}
exports.default = PlayerControlls;
