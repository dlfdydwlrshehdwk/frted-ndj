$(()=>{

    // 이벤트대상 윈도우
    const wdw = $(window)
    // '.cubewrap' <- 클래스를 주어야 할 대상
    const tg = $('.cubewrap')

    wdw.on('scroll',function(){
        cube(tg)
    })

    function cube(x){
        console.log('큐브',this)
        let a = wdw.scrollTop();
        
        if(a!==0) $(x).addClass('on');
        else $(x).removeClass('on');
    }


}); // jqb