$(()=>{

    function clock(a){

        // 박스 형태 만들어주기 + css 간단하게 설정
        $(a).append(`
        <div class='clock'>
            <div>
                <span class="year"></span>.
                <span class="month"></span>.
                <span class="date"></span>.
                (<span class="day"></span>)
            </div>
            <div>
                <span class="ampm"></span>
                <span class="hour"></span> :
                <span class="minute"></span> :
                <span class="second"></span>
            </div>
        </div>
        `)

        $('.clock').css({
            width : '200px',
            border : '1px solid black',
            textAlign : 'center',
            fontWeight : 'bold'
        })

        // 함수안에서 1초마다 실행될 함수를 만들어줌
        function set(){

        // 변수 세팅 - 영어 이정도는 아실거같으니까 따로 적지않습니다.
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let date = new Date().getDate();
        let day = new Date().getDay();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        let ampm;

        // 조건문을 이용한 디테일 살리기
        switch(day){
            case 0 : day = '일'; break;
            case 1 : day = '월'; break;
            case 2 : day = '화'; break;
            case 3 : day = '수'; break;
            case 4: day = '목'; break;
            case 5 : day = '금'; break;
            case 6 : day = '토'; break;
        }
        if(month < 10) month = '0' + month
        if(hour < 10) hour = '0' + hour
        if(hour < 13) ampm = 'AM'; else ampm = 'PM'
        if(hour > 12) hour = hour - 12
        if(minute < 10) minute = '0' + minute
        if(second < 10) second = '0' + second
            
            // 요소에 알맞게 데이터 삽입
            $('.year').text(year)
            $('.month').text(month)
            $('.date').text(date)
            $('.day').text(day)
            $('.hour').text(hour)
            $('.minute').text(minute)
            $('.second').text(second)
            $('.ampm').text(ampm)
        }

        // 최초로 한번실행해준다
        set()
        // 1초마다 한번씩 시간이 업데이트 되게 해준다.
        setInterval(set,1000);
    }

    clock('body')

})