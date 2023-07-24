$(()=>{

    function clock(a){
        $(a).append(`<div class='clock'></div>`)
        $('.clock').css({
            width : '200px',
            border : '1px solid black',
            textAlign : 'center',
        })

        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let day = new Date().getDay();
        let date = new Date().getDate();
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
        if(hour < 10) hour = '0' + hour
        if(hour < 13) ampm = 'AM'; else ampm = 'PM'
        if(hour > 12) hour = hour - 12

        $('.clock').html(`
            <h4>
                ${year}.${hour}.${date}.${day}
            </h4>
            <h4>
                (${ampm}) ${hour} : ${minute}
            </h4>
        `)
    }


    clock('body')



})