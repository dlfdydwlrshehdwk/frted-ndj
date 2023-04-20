// 보그 PJ 카테고리 페이지 JS - category.js

// 넘어온 url 받기! pm -> parameter(전달값변수)
let pm = location.href;
// location.href 이 이퀄 오른쪽에 있으면 url주소 읽어옴!

// 만약 메뉴를 클릭하여 파라미터가 없는 경우
// 물음표로 구분하여 없으면 돌려보내기
if(pm.indexOf('?')===-1){
     location.href = 'index.html';
} // if ////
// console.log('물음표',pm.indexOf('?'))

// 문자열 잘라서 값 읽어오기
// -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
pm = pm.split("?")[1].split("=")[1];

// pm값 특수문자 복원하기
pm = decodeURIComponent(pm);

console.log(pm);

// 로딩구역 //
$(()=>{
    // 뷰JS 데이터바인딩코드
    const vmCont = new Vue({
        // 대상선정 : 메인컨텐츠영역요소
        el : '#cont',
        data : {
            items:{}, // json데이터 루트에 맞춤
            // 파라미터 넘어온 값을 경로값 비교하기위해
            // 뷰 JS 데이터변수로 셋팅한다.
            catName: pm.replace(" & ","-")
        },
        mounted : function(){
            // 엑시오스로 제이슨 연결
            axios.get('./js/mdata.json')
            .then(x=>this.items=x)

            // 탭메뉴 타이틀 변경하기 
            $('title').prepend(pm+' ')
        },
    }); // vue ////

    // GNB 메뉴 SPA를 위한 재정의하기
    // -> 뷰JS 인스턴스를 생성하면 대상요소가 
    // 기존JS의 모든 기능이 초기화 하여 작동되지 않는다.
    new Vue({
        // 대상 #gnb
        el : '#gnb',
        data : {
        },
        methods : {
            // 메뉴변경하기
            chgMenu(e){
                console.log('ㄴㅇㄴ')
                // 컨텐츠 영역의 뷰에 설정된변수 catName에
                // 접근하여 변수의 값을 변경한다.
                // vmCont 변수에 인스턴스가 담겼으므로 
                // vmCont.catName 으로 접근하여 
                // 클릭된요소의 글자를 읽고 이를 소문자로 변경
                // " & " 를 "-"로 치환만 해주면된다.

                // a요소 문자열 변경하기
                let txt = e.target.innerText
                .replace(" & ","-").toLowerCase();

                // 뷰 데이터에 반영하기 -> 가상돔의 변경 -> 실제돔반영
                vmCont.catName = txt;
                console.log(txt)

                // 탭메뉴 타이틀변경하기
                $('title').text(vmCont.catName+ ' | 2023 보그 코리아 (Vogue Korea)')

            }
        }, // 메서드 구역
    }); // GNB Vue // 

}); // 로딩구역