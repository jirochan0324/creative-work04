const stamps=document.querySelectorAll('.stamp');
const model=document.querySelector('.stamp-exp-wrap');
const closeBtn=document.getElementById('modelClose');
const qrModel=document.getElementById('qrInput');
const stampGet=document.getElementById('stampGet');
const get=document.querySelector('.stamp-get');

import { DotLottie } from 'https://esm.sh/@lottiefiles/dotlottie-web';
const canvas=document.querySelector('#dotlottie-canvas');
const src="https://lottie.host/c50d8e54-c706-433f-919a-b00a2dadab16/pffknLzwvs.json";
const dotLottie = new DotLottie({
    canvas,
    src,
    loop: false,
    autoplay: false,
});

// どのスタンプをクリックしてもモーダルが表示されるようにする
stamps.forEach(stamp => {
    stamp.addEventListener('click',()=>{
        model.classList.add('modelUp');
    })

    closeBtn.addEventListener('click',()=>{
        model.classList.remove('modelUp');
    })
});

//
let stream;
stampGet.addEventListener('click',()=>{
    model.classList.remove('modelUp');
    qrModel.classList.add('modelUp');
    const video = document.getElementById("video");
    navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 320 },
        audio: false,
    }).then(s => {
        stream = s;
        video.srcObject = stream;
        video.play()
    }).catch(e => {
        console.log(e)}
    );
    setTimeout((stream)=>{
        get.classList.add('modelUp');
        dotLottie.play();
        qrModel.classList.remove('modelUp');
    },"5000");
    setTimeout((stream)=>{
        window.location.href = "stampget.html";
    },"8000");
})

document.getElementById('qrClose').addEventListener('click',()=>{
    qrModel.classList.remove('modelUp');
    if(stream){
        stream.getTracks().forEach(track => track.stop())
    }
})

document.getElementById('backBtn').addEventListener('click',()=>{
    window.location.href = "index.html";
})

console.log(stamps);