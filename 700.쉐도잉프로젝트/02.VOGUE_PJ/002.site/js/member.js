// 보그 PJ 회원가입 페이지 JS - member.js

////////// 제이쿼리 코드블록 ////////
$(()=>{

    // 로딩완료
    console.log('로딩완료')

    /********************************************* 
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트종류 : blur(포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상:
        -> id가 'email2'가 아니고 class가 'search'가 
        아닌 type이 'text'인 입력요소 input
        과 함께 type이 'password'인 입력요소 input

        ->>>> 제이쿼리 선택표현법:
        input[type=text][id!=email2][class!=search],
        input[type=password]
        >>> 대괄호는 속성선택자(CSS원래문법) 
        != 같지않다(제이쿼리전용)

    *********************************************/

        $(`input[type=text][id!=email2][class!=search],
        input[type=password]`)
        .blur(function(){
        // .on('blur',function(){

            // 1. 방금 블러가 발생한 요소의 아이디는?
            let cid = $(this).attr('id');
            // cid 는 current id 즉, 현재 아이디 라는 뜻.

            // 2. 블러가 발생한 요소의 입력값은?
            let cv = $(this).val().trim();
            // cv 는 current value 즉, 현재 입력값 라는 뜻
            // val() 메서드 - input요소의 값(value)를 읽기/쓰기용
            // trim() 메서드 - 앞뒤공백제거(공백만 있으면 공백제거)

            // 서비스 차원으로 공백제거된 데이터를 다시 원래입력창에 넣어줌
            $(this).val(cv); // val(값)

            /**************************************** 
                3. 빈값 여부 검사하기
            ****************************************/
            if(cv === ''){
                // 메시지 출력
                $(this).siblings('.msg').text('필수입력')
            }

            /**************************************** 
                4. 아이디일 경우 유효성 검사하기
                - 검사기준 : 영문자로 시작하는 6~20글자 영문자/숫자
            ****************************************/
            if(cv === ''){
                // 메시지 출력
                $(this).siblings('.msg').text('필수입력')
            }





            // 모두 통과일 경우 메시지 지우기
            else {
                // 메시지 지우기 : empty() 내용지움 메서드
                $(this).siblings('.msg').empty();
            } // else : 통과시 ////


            console.log('블러',cid,cv)

        }); //blur ////




}); // jqb ////

