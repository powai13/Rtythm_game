'use strict'

//ピアノ配列（黒鍵は白鍵の後ろに・階調違いは多重配列で）
const pianoKey = ["KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK"];
const pianoAudio = [c4h,d4h,e4h,f4h,g4h,a4h,b4h];

//ピアノを鳴らす処理
function Keydown(e) {
    const x = e.code;
    console.log(x);
    const index = pianoKey.indexOf(x);
    
    if (index != -1) {
        const z = pianoAudio[index];
        z.pause();
        z.currentTime = 0;
        z.play();
    }
}
addEventListener('keydown',Keydown);