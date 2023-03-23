
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료");

    // 배열데이터
    let by = ["안녕하세요","반갑습니다","안녕히가세요"]
    let by2 = ["안녕하세요의 내용","반갑습니다의 내용","안녕히가세요의 내용"]

    // li
    const li = document.querySelectorAll('li');
    // 버튼
    const btns = document.querySelectorAll('.btns button')
    // 최초출력
    li.forEach((ele,idx)=>{
        ele.innerHTML = by[idx]; 
    })
    
    // 배열에서 자른값을 넣을 데이터변수
    let bs;
    
    console.log(by)

    // bnts[1] 오른쪽버튼 을 누르면 함수실행
    // li의 각요소들에게 트랜지션을 먼저 없애고 투명하게
    btns[1].onclick = () =>{
        li.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })
         
        //  배열에 값을 담을 변수
        bs = by[2];

        // 맨뒤에 요소를 제거! by배열의
        by.pop();
        // console.log('by',by,'bs',bs);

        // 배열에 맨앞에 추가해! bs값을
        by.unshift(bs);
        // console.log(by)
        // li업데이트
        li.forEach((ele,idx)=>{
            ele.innerHTML = by[idx]; 
        })
        // 업데이트후 시간차를 주기위해 셋타임아웃 사용
        // 각li요소 들에게 트랜지션을 선 부여 후 투명도 1
        setTimeout(()=>{
            li.forEach((ele)=>{
                ele.style.transition = '.5s'
                ele.style.opacity = 1;
            })
        },500)
    }



    // 버튼[0] 왼쪽을 누르면 함수실행
    // li의 각요소들에게 트랜지션을 먼저 없애고 투명하게
    btns[0].onclick = () => {
        li.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })

        // 배열의 값을 담을 변수
        let ba;

        // ba는 배열의 맨처음값
        ba = by[0];
        // by의 맨앞을 삭제해!
        by.shift();
        // by에 맨뒤에 ba값을 추가해!
        by.push(ba);
        // li업데이트
        // li의 각요소들에게 배열데이터를 순번에 맞게 출력
        li.forEach((ele,idx)=>{
            ele.innerHTML = by[idx]; 
        })

        // 시간차를 주기위해 셋타임아웃 사용 
        // li의 각요소들에게 트랜지션을 먼저 부여후 투명도 1
        setTimeout(()=>{
            li.forEach((ele)=>{
                ele.style.transition = '.5s'
                ele.style.opacity = 1;
            })
        },500)
    }

}); // 로딩구역