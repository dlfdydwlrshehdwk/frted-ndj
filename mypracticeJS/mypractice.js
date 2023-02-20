
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료");
    const btns = document.querySelectorAll(".btns button");
    const slide = document.querySelector('.slidect');
    const next = document.querySelector('.next');

    btns.forEach((ele,idx)=>{
        ele.onclick=()=>{
            console.log(ele,idx);
        
        slide.style.transform = `translateX(${'-' + idx * '100' + 'vw'})`;
        console.log(`${'-' + idx * '100'}`)
        
        
        // if(idx===1){
        //     slide.style.transform = 'translateX(-100vw)';
        // }
        // else if(idx===2){
        //     slide.style.transform = 'translateX(-200vw)';
        // }
        // else{
        //     slide.style.transform = 'translateX(0)';
        // }
        

        }

    })
    let i = 1;
    next.onclick=()=>{
        slide.style.transform=`translateX(${'-' + i *'100' + 'vw'})`;
        i++;
        if(i==3){
            i = 0;
        }
    }

});