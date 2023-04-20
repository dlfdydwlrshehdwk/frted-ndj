$(()=>{

    const wrap = $('.wrap')
    // wrap.hover(function(){
    //     console.log('hi')
    //     $('.c1,.rt1,.pg1').css({
    //         strokeDashoffset: 0,
    //     });
    //     $('.svg3').css({
    //         top : '0%',
    //     })
    // },function(){
    //     console.log('bye')
    //     $('.c1,.rt1,.pg1').css({
    //         strokeDashoffset: '-1200',
    //     });
    // })
    // wrap.mouseover(function(){
    //     console.log('hi')
    //     $('.c1,.rt1,.pg1')
    //     .animate({
    //         strokeDashoffset:0,
    //     },1000,'linear')
    //     .delay(300)
    //     .animate({
    //         strokeDashoffset:-1200
    //     },500,'linear',function(){
    //         $('.c1,.rt1,.pg1')
    //         .hide()
    //         .css({
    //             strokeDashoffset:1200,
    //         })
    //         .show()
    //         .animate({
    //             strokeDashoffset:0,
    //         },1000,'linear')
    //         .delay(300)
    //         .animate({
    //             strokeDashoffset:-1200
    //         })
    //     })
        // wrap.mouseover(function(){
        //     console.log('hi')
        //     $('.c1,.rt1,.pg1')
        //     .animate({
        //         strokeDashoffset:0
        //     },1000,'linear')
        //     .delay(1000)
        //     .animate({
        //         strokeDashoffset:-1200
        //     },1000,'linear')
        //     .delay(1000)
        //     .animate({
        //         strokeDashoffset :1200
        //     },0)

        // }) // gkatn

        const gg = ()=>{
            $('.c1,.rt1,.pg1')
            .animate({
                strokeDashoffset:0
            },1000,'linear')
            .delay(1000)
            .animate({
                strokeDashoffset:-1200
            },1000,'linear')
            .delay(1000)
            .animate({
                strokeDashoffset :1200
            },0)
        }
        // 함수안에 함수안에 함수 재귀재귀재귀
        // gg(gg(gg()))
    }) // JQB

    


 // ㄹ드구역