"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWolrd = void 0;
function HelloWolrd(request, response) {
    var nothing = {
        message: 'shut up'
    };
    return response.json();
}
exports.HelloWolrd = HelloWolrd;
