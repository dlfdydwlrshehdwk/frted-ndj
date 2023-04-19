$(()=>{

    const wrap = $('.wrap')
    wrap.hover(function(){
        console.log('hi')
        $('.c1,.rt1,.pg1').css({
            strokeDashoffset: 0,
        });
        $('.svg3').css({
            top : '0%',
        })
    },function(){
        console.log('bye')
        $('.c1,.rt1,.pg1').css({
            strokeDashoffset: '-1200',
        });
    })




    // $('.wrap').hover(
    //     function(){
    //         $('.c1').css({
    //             strokeDashoffset:0,
    //         })
    //     },
    //     function(){
    //         $('.c1').css({
    //             transition : '.8s ease-in-out', 
    //             strokeDashoffset:-1200,
    //         });
    //         setTimeout(()=>{
    //             $('.c1').css({
    //                 transition : 'none',
    //                 strokeDashoffset:1200,
    //             });
    //         },800)
    //     })
}); // ㄹ드구역