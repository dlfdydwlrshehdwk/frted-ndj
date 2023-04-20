// 프로그레스 페이지 JS - progress.js

$(()=>{
    console.log('하이')

    // 1. 대상선정
    // 1-1. 버튼 : .act button
    const abtn = $('.act button');
    // 1-2. 퍼센트원 : .btns
    const btns = $('.btns');

    // 2. 이벤트설정
    // 2-1. 첫번째버튼(팽수1) - 퍼센트원
    abtn.first().click(progFn); //// click ////

    /********************************** 
        함수명 : progFn
        기능 : 퍼센트 증가에 따른 숫자, 그래프변경
    **********************************/
   // 변경할 숫자변수
   let num = 0;

   function progFn(){

    // 퍼센트 증가
    num++;

        // 첫번째 퍼센트원 진행하기
        btns.eq(0).find('circle')
        .css({
            strokeDashoffset:0,
        })

        /* 300% -> 0%
        300을 최대수로 볼때 백분율로 변경하면 
        최대수 * 소수점 = 원하는 %
        예) 100만원 * 0.2 = 20%
        */
        
        // 첫번째 퍼센트원 숫자 .ptxt
        btns.eq(0).find('.ptxt').text(num);

        // 재귀호출하기 : 기준수보다 작을때까지
        // 기준수의 숫자가 원하는 %가 된다.
        if(num < 100){
            setTimeout(()=>{
                progFn()
            },10)
        } // if ////
    } //// progFn ////


})