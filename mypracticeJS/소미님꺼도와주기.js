$(()=>{

    const imbx = $('.imbx')
    const pg2 = $('.pg2')
    console.log(imbx)
    let qustn = 0;


    imbx.on('wheel',function(){
        event.preventDefault();
        let delta = event.wheelDelta;
        if(delta === 120) qustn++;
        else if(delta === -120) qustn --
        console.log(qustn)
    })
}); // jqb