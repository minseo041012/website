function movePage(){
    location.href="yes.html";
}

function runAway(){
    const noBtn = document.getElementById('no');
    const veiw = document.getElementById('view');

    const x = Math.random() * (view.clientWidth - noBtn.clientWidth);
    const y = Math.random() * (view.clientHeight - noBtn.clientHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}
let currentScale = 1;

function size_up(){
    const yesBtn = document.getElementById('yes');
    currentScale += 0.3;
    yesBtn.style.transform = `scale(${currentScale})`;
    yesBtn.style.transition = "transform 0.2s ease-in-out";
}



// success.html이 로드될 때 실행
window.onload = function() {
    const fileName = window.location.pathname.split("/").pop();
    
    // 현재 페이지가 success.html (또는 yes.html) 일 때만 실행
    if (fileName === "yes.html") {
        createHearts();
    }
};
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '❤️';
        
        // 가로 위치 랜덤
        heart.style.left = Math.random() * 100 + 'vw';
        
        // 속도 랜덤 (2초 ~ 5초)
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // 시작 시간 랜덤 (한꺼번에 떨어지지 않고 순차적으로 떨어지게)
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(heart);
        
        // 애니메이션이 끝나면 브라우저 메모리를 위해 요소를 삭제해주는 게 좋습니다
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
