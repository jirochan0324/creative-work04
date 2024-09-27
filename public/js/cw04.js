
document.addEventListener('DOMContentLoaded', function() {
    // search要素を取得
    const searchElement = document.querySelector('.search');

    // search要素がクリックされたときの処理
    searchElement.addEventListener('click', function() {
        // プレースホルダーを非表示にする
        this.placeholder = '';
    });

    // document全体がクリックされたときの処理
    document.addEventListener('click', function(event) {
        // クリックされた要素がsearch要素でない場合
        if (!event.target.matches('.search')) {
            // プレースホルダーを再度表示する
            searchElement.placeholder = '現在地から検索';
        }
    });
});


// カメラ起動
// 以下OpenAiのコード
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-camera');
    const closeButton = document.getElementById('video-close');
    const videoWrap = document.getElementById('video-wrap');
    const cameraVideo = document.getElementById('camera');

    // カメラを起動して映像を表示する関数
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraVideo.srcObject = stream;
            videoWrap.style.display = 'block';
        } catch (err) {
            console.error('カメラの起動に失敗しました:', err);
        }
    }

    // カメラ起動ボタンのクリックイベント
    startButton.addEventListener('click', startCamera);

    // カメラ閉じるボタンのクリックイベント
    closeButton.addEventListener('click', function() {
        videoWrap.style.display = 'none';
        // カメラのストリームを停止
        const stream = cameraVideo.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        cameraVideo.srcObject = null;
    });
});




// index.html
// buttomをクリックした時に#video-wrapをdisplay:block;にする
document.querySelector("#start-camera").onclick=function(){
    document.querySelector("#video-wrap").style.display="block";
};

// buttomをクリックした時に#video-wrapをdisplay:block;にする
document.querySelector("#video-close").onclick=function(){
    document.querySelector("#video-wrap").style.display="none";
};


// module-close　閉じる
const closeBtn=document.querySelector("#closeBtn");
const module=document.querySelector(".shop-describe");
closeBtn.onclick=function(){
    document.querySelector(".shop-describe").style.animation="moduleDown forwards 1s";
};

// camera起動後自動で別ページへ
window.onload = function() {
    var element = document.getElementById('video-wrap'); // 監視する要素のIDを指定
    var displayedFor = 0; // 要素が表示されている時間（秒）
    var interval = setInterval(function() {
        if (element && window.getComputedStyle(element).display !== 'none') {
            displayedFor++; // 要素が表示されている時間をカウントアップ
            if (displayedFor >= 10) { // 要素が10秒間表示され続けた場合
                clearInterval(interval); // タイマーをクリア
                window.location.href = 'stamp-get.html'; // 別のページにリダイレクト
            }
        } else {
            displayedFor = 0; // 要素が非表示になった場合、表示時間をリセット
        };
    }, 1000); // 1秒ごとにチェック
};

document.getElementById('video-wrap').onload=function(){
    alert("10秒後に自動で画面が切り替わります。")
};