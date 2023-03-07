// 네비유형 6 : 배너셋팅 JS - ban.js ////

window.addEventListener('DOMContentLoaded',setBan);

// 배너 셋팅함수 ////
function setBan() {
    // 1. 호출확인
    console.log('배너호출');

    // 2. 대상선정 : .bancont 
    const bancont = document.querySelector('.bancont');
    console.log(bancont);

    // 3. 태그 구성하기
    // 태그변수
    let hcode = `<ul class="slide">`;

    for(let i = 1; i<= 13; i++){
        hcode += `
        <li>
            <img src="./nav06/img_nav06/ban${i}.png" alt="배너이미지">
        </li>
        `
    }// for ////

    hcode += `</ul>`;
    console.log(hcode);
    // 4. .bancont 에 출력하기
    bancont.innerHTML = hcode;
} // setBan 함수 ////