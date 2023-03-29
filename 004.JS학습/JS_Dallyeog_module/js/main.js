// 2023캘린더

// 모듈불러오기 : import 
import MakeDallyeok from "./calendar.js";
// 현재같은 위치일지라도 ./를 반드시 써야 불러옴

// 생성자함수를 인스턴스로 호출하기 
// 인스턴스 생성이란 특정메모리 구역에
// 모듈을 로딩시켜서 개별화 기능이 적용되게 하는것

// 우리가만든 달력 생성자함수에서 전달값으로 받는 것은?
// 달력을 넣을 요소의 선택자정보임
// 달력넣을 요소 : .calbx
let calbx = new MakeDallyeok('.calbx');
// 초기화 함수를 호출함
calbx.initDallyeok();
// 다음달 달력호출하기
// calbx.nextCal();

// 다른요소에 달력 추가생성하기 
let calbx2 = new MakeDallyeok('.calbx2')
// 초기화 함수를 호출함
calbx2.initDallyeok();
// 다음달 달력호출하기
// calbx2.nextCal();

// 제이쿼리 라이브러리를 html페이지 상단에 호출후 사용
$('.myipt').click(function(){
    console.log(this);
    // 해당박스 달력보이기
    $(this).next().find('.calender').show();
})

// on(이벤트명, 함수) -> 이벤트명을 띄어쓰기로 여러개 셋팅가능
// -> addEventListener에서는 원래 하나씩 셋팅해야하는데 제이쿼리에서는 가능
$('.calender').on('mouseenter click',function(){
    // 두가지 셋팅한 이유
    // -> 첫시작시 날짜값이 셋팅이안되어서 첫달력을 열시 닫히지않는데
    // 마우스엔터로 달력안으로 들어갈때 셋팅을 해주어 첫시작시에도 바로닫히게
    // 만들어준다.

    // 하위 날짜박스인 .date를 클릭이벤트 설정한다
    // this는 .calender
    $(this).find('.date').click(()=>{
        // 일반 익명함수일때 this -> .date
        // 이벤트를 싸고 있는 이벤트 대상을 this로 만들고 싶을때
        // -> 화살표함수를 사용한다. -> 싸고있는 .calender가 this이다.
        
        console.log(this)
        // this -> .calender
        let val = $(this).find('.dinfo').val();
        // val() 메서드 - input의 value 값을 읽어옴
        $(this).parent().prev().val(val);
        // val(값) -> input에 내용넣기
        $(this).hide();

        // 두번째 캘린더에서 날짜를 선택하면 
        // 첫번째와 두번째 선택날짜 차이를 계산하여 .res에 표시한다.
        // 두번째 캘린더인지 구분하기 : 캘린더 부모박스가 .calbx2
        console.log("두번째달력인지 확인",$(this).parent().is('.calbx2'))
        // $(선택자).is(요소) -> 클래스등 요소인지 여부 판별 true/false
        // 조건 : 첫번째 입력창이 비어있는가? (비어있지 않아야함)
        console.log('첫번째 입력창이 비어있는가?',$('#myinput').val()==="");

        // 두번째 캘린더이고 첫번째 입력창이 비어있지 않으면 실행!
        if($(this).parent().is('.calbx2') && 
        $('#myinput').val() !==""){
            // 날짜차이 계산하기 함수 호출
            // 대상 : #myinput, #myinput2
            let val1 = $('#myinput').val();
            let val2 =  $('#myinput2').val();
            // 함수 : 생성자 함수 안에 있음
            // new키워드로 인스턴스를 생성한 변수하위로 접근가능
            // 이 함수는 결과를 리턴하므로 변수에 담는다!
            let res = calbx2.getDateDiff(val1,val2)

            // 원하는 곳에 출력 
            $('.res').html(res);


        } // if ////
    }); // click ////



})