$(()=>{

    const wrap = $('.wrap')
    wrap.hover(function(){
        console.log('hi')
        $('.c1,.rt1,.pg1').css({
            strokeDashoffset: 0,
        })
    },function(){
        console.log('bye')
        $('.c1,.rt1,.pg1').css({
            strokeDashoffset: '',
        })
    })

})