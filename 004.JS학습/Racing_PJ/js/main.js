// Racing PJ 메인 JS - main.js

// 요소선택함수 ///
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
// 메시지함수 ////
const cg = x => console.log(x);

//////////////// 로드구역 /////////////////////////
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩완료!");

    /****************************************** 
        [ 게임기능정의 ]
        1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이 때 토끼는 자동으로 이동하여 결승선에
        먼저 도달하는 레이서가 승리한다
        2. 토끼의 이동속도는 레벨로 설정
        3. 결승선 도착은 둘 중 하나가 먼저 도착할 경우
        판별함수에서 결과를 화면에 출력한다.
        4. 포커스가 버튼에 갈 경우 마우스가 아닌 
        키보드 버튼으로 조작할 수 없게 한다. (only 마우스)
        5. 기본적으로 거북이이동 버튼 클릭시
        토끼는 자동으로 작동됨
        6. 토끼이동버튼은 토끼만 미리 작동가능
        7. 처음으로 버튼은 전체를 리셋
    ******************************************/

    // 1. 대상선정
    // (1) 거북이 : #t1
    const t1 = qs("#t1");
    // (2) 토끼 : #r1
    const r1 = qs("#r1");
    // (3) 버튼 : #btns a
    const btns = qsa("#btns a");
    // (4) 레벨 : #level 
    const level = qs("#level");
    // (5) 메시지박스 : #msg
    const msg = qs("#msg");
    // (6) 토끼, 거북 위치값 변수
    let r1pos = 0, t1pos = 0
    // 토끼위치는 r1pos 거북위치는 t1pos
    // console.log('거북이:', t1 ,'\n토끼:' , r1 ,'\n버튼' , btns)

    // 2. 이벤트 설정하기 
    // 대상 : 버튼들 - btns 변수
    btns.forEach((ele)=>{
        // 1. 이벤트설정
        ele.onclick = (e) => {
            // (0) 기본기능막기
            e.preventDefault();
            // (1) 버튼종류확인 : 버튼텍스트
            let btxt = ele.innerText;
            cg(btxt);
            // (2) 버튼별 기능 분기하기
            // (2-1) 토끼 이동
            if(btxt === "토끼출발"){
                // 토끼 자동이동함수 호출
                goR1();

            }// if문 : 토끼출발 ////
            // (2-2) 거북이 이동
            else if(btxt === "거북출발"){
                // 거북멈춤 상태값(t1Stop)이 1이면 돌아가
                if(t1Stop) return;
                // 위치이동값 셋팅
                t1pos += 16;
                // 위치이동하기
                t1.style.left = t1pos + 'px'; 

                // 거북버튼 클릭시 포커스가 들어감으로
                // 엔터키보드작동으로 클릭이 가능해짐
                // 이것을 방지하기 위해 매번 포커스를 빼기
                ele.blur();
                // blur() 메서드 - 포커스가 사라짐
                // focus() 메서드 - 포커스가 들어감  

                // 토끼 자동이동함수 호출
                goR1();
            }// else if문 : 거북출발 토끼출발 ////

            // (2-3) 처음으로 버튼 클릭시
            else if(btxt ==="처음으로"){
                // 브라우저 캐싱을 지우고 다시 부르기
                // location.replace("index.html");

                // 현재 페이지 리로딩
                location.reload();
            }// else if ////

        };//click ////
    });//forEach////

    /**************************************** 
        함수명 : goR1
        기능 : 토끼 자동이동(인터발함수)
    ****************************************/
   let autoI; //인터발변수
    function goR1() {
        // 할당안된변수값은 undefined이고
        // if문에서 false처리가 되므로 
        // 할당전 상태일때만 if문에 들어가게하기위해 
        // !(not연산자)를 사용하면 된다.

        // cg(level.value);
        if(!autoI){//할당전에 1번만 허용
        autoI=setInterval(()=>{
            // 토끼 위치이동
            r1.style.left = (++r1pos) + 'px';
            whoWinner();
            // 토끼&거북이 위치값체크후 승자판별함수호출


        },level.value);
        // 인터발 시간은 선택박스의 
        // 옵션값을 읽어서 사용한다.
        // 옵션값들 : 10,9,8,7,6,5,4
    }//if ////
    }//goR1 함수 ////

    /* 
        함수명 : whoWinner
        기능 : 기준값 보다 레이서위치값이 큰경우
            승자를 판별하여 메시지를 보여준다.
    */
   let t1Stop = 0; //거북멈춤값(1멈춤,0허용)
    function whoWinner() {
        // cg("토끼:"+r1pos);
        // cg("거북:"+t1pos);

        // 1. 토끼 / 거북의 위치값이 기준값 이상일때
        // 기준값: 650px
        if(r1pos >= 650 || t1pos >=650 ){

            // (1) 토끼야 멈춰라! -> 인터발함수지우기!
            clearInterval(autoI);
            // (2) 거북아 멈춰라 -> 거북멈춤상태값 1로 변경
            t1Stop = 1;

            // 메시지 랜덤을 위한 랜덤수 만들기
            // 0~2 사이의 랜덤수
            // 1~3fmf 먼저 만든후 -> Math.random()*3
            // 내림을 하면 0~2가 된다. -> Math.floor(Math.random()*3)
            let rnum = Math.floor(Math.random()*3);
            console.log(rnum);

            // (3) 승자판별 후 메시지 보여주기
            if(r1pos > t1pos) 
                msg.innerText = msgtxt["토끼"][rnum];
            else if(r1pos < t1pos) 
                msg.innerText = msgtxt.거북[rnum];
            else msg.innerText = "비김 재승부"
            // (4) 메시지보이기
            msg.style.display ='block';
            msg.style.zIndex='4'
            // (5)전체 반투명 암전주기
            qs('.cover').innerHTML +=
            "<div style ='position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:black;opacity:0.5;z-index:1'></div>"
            // 주의사항 : body하위에 새로운 요소를 추가하면
            // 전체body 직계하위에 있는 요소들에 셋팅된 이벤트가 소실된다.
            // 왜? DOM이 재구조화 되기 때문이다.
            // 처음부터 편성된 박스에 넣어주면 
            // 이런 문제는 해결된다.
            // 여기서도 .cover요소 안에 새로운 요소를 넣어준 이유가 그러하다.
            // (처음으로 버튼 기능소실때문)

            // (6) 버튼 위로 올리기
            qs("#btns").style.zIndex = '200';
        }// if 문 ////
    }// whoWinner 함수 ////

    // 메시지변수 ////
    const msgtxt = {
        "토끼" : [
            "역시, 토끼가 이겼군!",
            "넌 안돼! 토끼승!",
            "토끼는 잠자면서가도 이겨~",
        ],
        "거북" : [
            "넌 뭐니? 토끼야? 내가 승!",
            "대대로 거북이 이겼단다.",
            "이제 넌 어쩌니? 토끼퇴출!",
        ],

    }; // msgtxt 객체 ////

}); /////////// 로드구역 ///////////////////////////
