'use strict'

/**
 * グローバル宣言
 */

//画面サイズ
const screen_width = 600;
const screen_height = 400;

//本画面
const canvas  = document.getElementById('can');
const context = canvas.getContext('2d');

//仮想画面
const can = document.createElement('canvas');
const con = can.getContext('2d');
canvas.width = can.width = screen_width;
canvas.height = can.height = screen_height;

//ピアノを書く処理
function Render() {

    //描画処理
    setInterval(pix,100,canvas,can,screen_width,screen_height);

    //ピアノ素材
    const img = new Image();
    img.src = "piano.png";

    /**
     * 鍵盤の画像サイズ・座標
     * 
     * z = 座標
     * w = 横
     * h = 縦
     * shadow = 影
     * 
     * hk = 白鍵
     * kk = 黒鍵
     * 
     * 白鍵影 - 白鍵 - 黒鍵 - 黒鍵影
     */

    //ピアノの縦座標（配置位置・png画像の読み取り位置）
    const key_h_z = 0;
    const key_img_h = 0;

     //白鍵影
     const hk_w = 23;
     const hk_h = 150;
     const shadow_hk_w_z = 0;

     //白鍵
     const hk_w_z = hk_w;

     //黒鍵
     const kk_w = 11;
     const kk_h = 95;
     const kk_w_z = hk_w_z * 2;

     //黒鍵影
     const shadow_kk_w_z = kk_w_z + kk_w;

    //白鍵描画
    for(let i = 0; i < 8; i++) {
        con.drawImage(img,hk_w_z,key_img_h,hk_w,hk_h,hk_w_z * i,key_img_h,hk_w,hk_h);
    }
}
Render();

//描画処理
function pix(canvas,con,screen_width,screen_height) {
    const context = canvas.getContext('2d');
    context.drawImage(con,0,0,screen_width,screen_height,0,0,screen_width,screen_height);
}

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
