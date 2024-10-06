// qrリーダー(webカメラ)を起動
document.querySelector('.qr-btn').addEventListener('click',()=>{
    const video = document.getElementById("video")
    document.getElementById('qrInput').style.display="block";
    navigator.mediaDevices.getUserMedia({
        video: false,
        audio: false,
        video: { width: 320, height: 320 },
    }).then(stream => {
        video.srcObject = stream;
        video.play()
    }).catch(e => {
        console.log(e)}
    );
})

document.getElementById('qrClose').addEventListener('click',()=>{
    document.getElementById('qrInput').style.display="none";
})

document.getElementById('siteTopBtn').addEventListener('click',()=>{
    document.querySelector('.siteTop-wrap').classList.remove("siteTop-wrap-out");
    document.querySelector('.siteTop-wrap').classList.add("siteTop-wrap-in");
})
document.getElementById('siteTopclose').addEventListener('click',()=>{
    document.querySelector('.siteTop-wrap').classList.add("siteTop-wrap-out");
})

