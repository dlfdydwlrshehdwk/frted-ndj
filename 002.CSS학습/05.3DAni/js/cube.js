// 큐브애니 JS //// 

/* 
    [구현내용]
    - "돌아" 버튼을 클릭하면 멈춰있던 큐브가 돌아감
    이때! 버튼이 "멈춰!" 버튼으로 변경되어 있음
    "멈춰!" 버튼을 클릭하면 돌고있던 큐브가 멈춤.
    이때! 버튼이 "돌아" 버튼으로 변경되어 있음.
*/


////////////////////  로드구역 //////////////////
window.addEventListener("DOMContentLoaded",()=>{

console.log("로딩확인");

// 1. 대상선정
// 1-1 이벤트대상 : .btngo
const btngo = document.querySelector(".btngo");
// console.log("버튼:",btngo);

// 1-2 변경대상 : .cube
const cube = document.querySelector(".cube");
// console.log("큐브:",cube);

// 2. 버튼 클릭이벤트설정
btngo.onclick = () => {

    // 1. 큐브에 클래스 "on" 넣기
    cube.classList.toggle("on");
    // toggle()메서드는 지정한 클래스가 
    // 있으면 뺴고 없으면 넣는다.

    // 2. 현재 큐브에 "on" 클래스가 있는 여부검사
    let isOn = cube.classList.contains("on");
    console.log("온있냐?",isOn); 

    // 3. 버튼 텍스트 변경하기
    btngo.innerText = isOn ? "멈춰!" : "돌아!";
    // 삼항연산자(조건연산자) - 비?집:놀이동산;

    // isOn이 true라면 멈춰! 아니라면 돌아!
    // isOn이 true인 조건은 on 클래스가 들어가 있을 경우!
    // contains와 삼항연산자의 조합!

};//////////////////click 이벤트 함수 ////////////////////
/********************************************** 
    [ JS 클래스 컨트롤 내장객체 ]
    classList 객체

    -> 요소에 클래스를 넣거나 빼는 등 필요작업을
    하는 객체

    ((관련메서드))
    1. add(클래스명) : 클래스추가
    2. remove(클래스명) : 클래스제거
    3. toggle(클래스명) : 클래스추가/제거
    4. contains(클래스명) : 클래스있으면 true
    5. replace(이전클래스명,변경클래스명)
        : 특정클래스를 다른 클래스로 변경

    -> 클래스 추가/제거시 콤마로 구분하여
    여러개의 클래스를 추가하거나 제거할 수 있다!
    예) 요소.classList.add("tt","cc","dd")
    예) 요소.classList.remove("bb","ee")


**********************************************/





});///////////////로드구역/////////////////
