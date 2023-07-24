$(()=>{

    function clock(a){
        $(a).append(`<div class='clock'></div>`)
        $('.clock').css({
            width : '200px',
            border : '1px solid black',
            textAlign : 'center',
        })

        // 년
        let year = new Date().getFullYear();
        // 월
        let month = new Date().getMonth() + 1;
        // 일
        let date = new Date().getDate();
        // 요일
        let day = new Date().getDay();
        // 시간
        let hour = new Date().getHours();
        // 분
        let minute = new Date().getMinutes();
        // 오전 오후 변수
        let ampm;

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
        if(minute < 11) minute = '0' + minute

        $('.clock').html(`
            <h4>
                ${year}.${month}.${date}.${day}
            </h4>
            <h4>
                (${ampm}) ${hour} : ${minute}
            </h4>
        `)
    }


    clock('body')



})