// 달력 생성자함수 /////

MakeDallyeok();

function MakeDallyeok(){

    // 선택함수 ////
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);
    // 메시지 ////
    const cg = x => console.log(x);


    // 1. 변수 셋팅
    // (1) 변경할 현재날짜 객체
    const curr_date = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = qs('.yearTit'); 
    // (4) 월요소 : .monthTit
    const monthTit = qs('.monthTit'); 
    // (5) 날짜요소 : .dates
    const dates = qs('.dates'); 

    cg(dates)

    // 2. 함수 만들기 ////
    // (1) 달력 초기화구성 함수
    const initDallyeog = () => {
        // getMonth() 정보는 항상 현재달 숫자보다 1작음(배열순번)
        // 1. 전달 마지막 날짜(옵션:0) -> 달력 전달끝쪽 날짜표시 
        const prevLast = new Date(curr_date.getFullYear(),curr_date.getMonth(),0);
        // cg(prevLast);

        // 2. 현재달 첫째 날짜(옵션:1 -> 전달로 셋팅) 
        // -> 달력 전달셋팅을 위한 요일 구하기 위해! 
        const thisFirst = new Date(curr_date.getFullYear(),curr_date.getMonth(),1);
        // cg(thisFirst);
        
        // 3. 현재달 마지막 날짜(옵션:0) 
        // -> 현재달력 날짜셋팅을 위해! 
        const thisLast = new Date(curr_date.getFullYear(),curr_date.getMonth()+1,0);
        // cg(thisLast);

        // 4. 년도 표시하기
        yearTit.innerHTML = curr_date.getFullYear();
        // 5. 월 표시하기
        monthTit.innerHTML = curr_date.getMonth()+1;
        // 6. 날짜넣을 배열변수 만들기
        const  dset = [];

        // 달력만들기

        //7? 1. 전달 날짜 앞쪽채우기 
        // 조건: 현재달첫날짜 요일이 0이 아니면 내용있음
        // cg(thisFirst.getDay())
        if(thisFirst.getDay() !== 0){
            // for문 셋팅 : 몇바퀴 돌리나? 요일순번보다 작을때까지++
            for(let i=0; i <thisFirst.getDay(); i++){
                // cg(i)
                // 반복횟수 만큼 배열 앞쪽에 추가한다.
                // 전달은 클래스 'bm' 으로 구분
                // 전달 마지막 날짜부터  -> prevLast.getDate()
                dset.unshift(`<span style="color:#ccc" class="bm">${prevLast.getDate()-i}</span>`)
                // 마지막날짜 -i 증가변수 = 1씩 작아지는 숫자 추가됨
                // unshift() 배열앞에 값추가하는 메서드
            } // for ////
        } // if ////

        //8? 2. 현재월 삽입하기 ////
        // 반복문 구성: 현재월 1일부터 마지막날짜까지 반복 배열추가
        // 현재월 마지막날짜 thislast
        for(let i=1; i <=thisLast.getDate(); i++){
            dset.push(i);
        } // for ////
        console.log(thisLast.getDate());
        

        //9? 3. 다음달 나머지 칸 삽입하기
        // 다음달은 클래스 'am'으로 구분한다.
        // 반복구성: 1부터 2주분량정도 넣는다.
        for(let i=1; i<14; i++){
            dset.push(`<span style="color:#ccc" class="am">${i}</span>`);
        }/// for////
        // cg(dset);

        // 화면에 뿌릴 html변수 
        let hcode = "";

        //10? 4. 날짜만큼 배열정보로 셋팅하기 ////
        // 7일 * 6주 -> 42개 만큼 돌기 
        for(let i=0 ; i < 42;i++){
            // 오늘날짜표시
            if( // 년 월 일이 모두 일치하는 날(오늘) 표시 (클래스 today넣기)
                today.getDate()===dset[i] && 
                today.getMonth()=== curr_date.getMonth() &&
                today.getFullYear()===curr_date.getFullYear()){
                hcode += `<div class="date today">${dset[i]}</div>`;
            }
            else{
                hcode += `<div class="date">${dset[i]}</div>`;
            }
        }  

        //11? 5. 코드 화면에 넣기
        // 대상: .dates -> dates
        dates.innerHTML = hcode;

        // 각 날짜 .date 요소에 링크설정 
        qsa(".date").forEach(
            ele=>ele.onclick=()=>{
                // 년
                let cyear = yearTit.innerText;
                // 월
                let cmonth = monthTit.innerText;
                // 일
                let cdate = ele.innerText;

                // 전달/다음달은 span태그가 있으므로 구분함
                let isSpan = ele.querySelector('span');
                cg(isSpan);
                // 없을 경우 null값이 나옴 -> if문에서 false처리됨
                if(isSpan){ // null 이 아닐때만 true처리되어 들어감

                    let cls = isSpan.classList.contains('bm')
                    cg(cls);
                    if(cls){ // 전달일경우 ////
                        // 월에서 1을 뺀다
                        // Number(문자형숫자) -> 숫자형변환
                        // -, *, / 연산은 브라우저가 자동변환해준다.
                        // 그러나 + 연산은 문자 더하기가 가능하므로
                        // 이것을 강제 형변환을 해줘야한다.
                        cmonth = Number(cmonth) - 1;

                        // 만약 1월이면 이전달은 0 이아니므로 12로처리
                        if(cmonth === 00){ 
                            cmonth = 12;
                            cyear = Number(cyear) -1;
                        
                        }
                    } //// if ////
                    else{ // 다음달일 경우
                        cmonth = Number(cmonth) + 1;

                        // 만약 12월이면 다음달이 13이 아니므로 1로처리 
                        if(cmonth === 13){
                            cmonth = 1;
                            // 년도도 다음년도로 1더함
                            cyear = Number(cyear) +1;
                        }
                    } // else ////
                } // if ////

                // 최종데이터
                let comp = cyear + "-" + addZero(cmonth) + "-" + addZero(cdate)
                cg(comp);
            });     
    }; // initDallyeog 함수 ////
    
    // 0자릿수 만들기 함수////
    const addZero = x => x<10?"0"+x:x;
    // 보낸숫자가 10보다 작으면 앞에 '0'을 더해서 리턴


    initDallyeog(); // 최초호출

    // (2) 이전달력 출력하기 ////
    const prevCal = () => {
        // 이전월로 변경하여 initDallyeok() 함수호출
        // getMonth() 월 가져오기 / setMonth() 월 셋팅하기
        curr_date.setMonth(curr_date.getMonth()-1)
        initDallyeog();
    } // prevCal 함수 ////

    // (3) 다음달력 출력하기 ////
    const nextCal = () => {
        // 다음월로 변경하여 initDallyeok() 함수호출
        // getMonth() 월 가져오기 / setMonth() 월 셋팅하기
        curr_date.setMonth(curr_date.getMonth()+1)
        initDallyeog();
    } // prevCal 함수 ////

    // 버튼에 클릭설정하기 /// 
    qs('.btnL').onclick = prevCal;
    qs('.btnR').onclick = nextCal;

    




} // MakeDallyeok 함수 ////