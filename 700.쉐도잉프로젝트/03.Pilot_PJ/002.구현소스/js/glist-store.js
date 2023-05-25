// 전체 리스트 페이지 뷰엑스 스토어 셋팅 JS  - glist-store.js

// 전체 상품정보 불러오기
import gdata from "./gdsData/glist-items.js";

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        // 전체상품정보 전역화
        gdata : gdata,
        // 필터데이터용 배열
        chkarr : [true,true,true],
        // 필터데이터용 배열입력값 변수
        selnm:["","",""],
        // 페이징용 변수
        pnum : 0,
        // 모어용 변수
        mnum : 0,
        // 모어버튼 표시변수
        mbtn : true,
    },
    // state 데이터 변경 메서드구역!
    mutations: {
        // 체크박스 체크시 처리메서드
        resCheck(dt){
            console.log(dt.chkarr);
            // 3개의 체크박스 상태배열변수값에 따라
            // 실제 조건에 들어갈 cat명을 넣어준다!

            // v는 배열값인 true/false값이 들어옴!
            dt.chkarr.forEach((v,i)=>{
                if(v){// 체크박스 체크시
                    dt.selnm[i] = 
                    i==0?"men":i==1?"women":"style";
                    // 조건1?값1:((조건2?값2):최종값);
                    // 중첩3항연산자 사용!
                }
                else{// 체크박스 체크안됨
                    //무조건 빈값을 할당!!!
                    dt.selnm[i] = "";
                }
            });
        }, // resCheck

        // 페이징 변수 업데이트 메서드
        updatePaging(dt,pm){
            // pnum 은 리스트범위 수
            // pm 은 업데이트할 전달숫자 
            dt.pnum = pm;
        }, // updatePaging // 

        // 모아 변수 업데이트 메서드
        updateMore(dt,pm){
            // mnum 은 모어 범위수 : += 로 여러번 모어진행
            // pm 은 업데이트할 전달숫자 
            dt.mnum += pm;
            // 업데이트 후 모어버튼 없애기(한계수를 넘으면)
            if(dt.mnum>=25){ dt.mbtn =false;}
                
        }, // updateMore // 

        // 1. 장바구니 데이터 업데이트 메서드 
        setData(dt,pm){ // pm - 배열데이터 순번
            console.log("장바구니",pm)
            console.log("선택gdata",dt.gdata[pm])
            console.log('카트전',localStorage.getItem("cart"))

        // 2. 로컬스 데이터 cart가 없으면 [] 배열형식으로 문자넣기
        if(localStorage.getItem("cart")==null)
        localStorage.setItem("cart","[]")
        console.log('카트후',localStorage.getItem("cart"))

        // 로컬스토리지 객체데이터 가져오기
        // 입력된 데이터는 문자형 객체이므로 
        // 다시 파싱항 원래 객체로 복원한다.
        let org = localStorage.getItem('cart');
        console.log(org);
        org = JSON.parse(org);
        console.log('변환객체:',org);

        // 이미 선택한 상품일 경우 분기하기 // 
        // 저장상태변수
        let save = true
        org.forEach((v)=>{
            // 같은 데이터인가?(idx값으로 비교)
            // v.idx 는 현재 카트에 있는 아이템 idx
            // dt.gdata[pm].idx 는 입력하려는 새로운 아이템 idx
            // -> 카트에 있는 값과 들여올 값을 비교해서 같으면 못넣게한것
            if(v.idx ==dt.gdata[pm].idx){
                alert('이미 선택한 상품입니다.')
                save=false;
            }
        }) // forEach // 

        // save == true일때만 배열넣고 처리하기
        if(save){
            // 3. 배열뒤에 밀어넣기 메서드 : push(값)
            org.push(dt.gdata[pm])
            console.log(org)
    
            // 4. 객체를 문자형으로 변환후 로컬스토리지에 반영
            localStorage
            .setItem('cart',JSON.stringify(org))
            console.log('반영후 로칼쓰',localStorage.getItem('cart'));
    
            // 5. 카트 애니메이션 버튼을 등장시켜 카트리스트까지 연동한다.
            this.commit('cartAni',org.length);
            // org.length는 배열 데이터의 개수를넘김
        } // if // 

        // 내용 초기화
        // localStorage.clear();

        }, // setData //

        // 테스트 편의상 로컬스토리지 데이터 지우기
        clearData(){
            // 특정 변수만 지운다. : cart만!
            localStorage.removeItem('cart');
            console.log('카트지움')
        },

        // 장바구니 애니메이션 버튼 생성하기 // 
        cartAni(dt,pm){
            console.log("콰트로 맥시멈 미트 포커스드")

            // 0. 생성될 카트이미지 지우고 시작! -> 하나만 생성되게 하기위함
            $('#mycart').remove();

            // gif애니메이션 이미지를 사용하여 
            // 화면중앙에 등장하여 장바구니 담김을 알림
            $('body').append(`<img id="mycart" 
            src="./images/mycart.gif" 
            title="${pm}개의 상품이 카트에 있습니다.">`)
            console.log($('#mycart').attr('title'))

            // 추가한 이미지 화면 중앙에 위치하기 
            $('#mycart').css({
                position : "fixed",
                top : '50%',
                left : '50%',
                transform : 'translate(-50%,-50%)',
                cursor : 'pointer',
                zIndex : "99999",
            })
            .delay(3000)
            .animate({
                top : '5%',
                left : '80%',
                width : '50px',
            },1000,'easeInExpo')
            // 클릭하면 카트리스트가 보이기 
            .click(function(){
                // 1. 만약 카트리스트 박스가 없으면 만들기
                if($("cartlist").length == 0){
                    // body에 카트리스트 요소넣기
                    $('body').append(`
                        <section id="cartlist">
    
                        </section>
                    `);
                    console.log('카트박스 만들기')
                } // if // 

                // 2. 로컬스 데이터로 테이블 레코드 태그 구성하기
                // 카트가 보이지 않는 상태임(right : '-60vw') 
                store.commit('bindData','-60vw');
                

            }) // 카트버튼 click // 




        }, // cartAni //

        // 카트 아이템 삭제 메서드 // 
        delRec(dt,pm){
            console.log('아이템 삭제',pm)
            // 1. 로컬스 데이터읽기
            // 2. 로컬스 데이터 파싱
            let org = localStorage.getItem('cart');
                org = JSON.parse(org);
                console.log('삭제구성 객체:',org);
            // 3. 삭제아이템 찾아 지우기 : splice(순번,1)
            org.forEach((v,i)=>{
                // 지울아이템과 같으면 
                if(v.idx==pm){
                    // 지울것인지 물어봄(확인시 true)
                    if(confirm('장바구니에서 지우시겠습니까?')){
                        org.splice(i,1);
                    }
                }
            })
            // 4. 로컬스 문자화하여 넣기 
            localStorage
            .setItem('cart',JSON.stringify(org))
            console.log('삭제후 로칼쓰',localStorage.getItem('cart'));

            // 5. 리스트 갱신하기 : 카트가 보이는 상태임
            store.commit('bindData','0');

            // 6. 카트버튼 툴팁 문구 업데이트하기
            if(org.length ==0){ // 데이터가 없으면 장바구니삭제
                $('#mycart').remove();
                $('#cartlist').remove();
            } // if //
            else{ // 타이틀 재 셋팅
                $('#mycart')
                .attr('title',
                org.length + '개의 상품이 카트에 있습니다.')
            } // else // 

        }, // delRec //

        // 리스트 바인딩 메서드
        bindData(dt,pm){ // pm은 카트박스 right값 전달
            // (1) 로컬스 데이터 읽어와서 객체화하기
            let org = localStorage.getItem('cart');
            org = JSON.parse(org);
            console.log('리스트구성 객체:',org);

            // (2) 데이터를 이용하여 리스트 태그 만들기
            // forEach((값,순번)=>{})
            // map((값,순번)=>{})
            // -> 차이는? map은 리턴값으로 처리할 경우 
            // 값을 자동으로 대입연산처리한다.
            // v - 배열각 값 / i 배열 순번 값

            // forEach 처리 문
            // let rec = "";
            // org.forEach((v,i)=>{ // v - 배열의 각 값, i - 배열순번
            //     rec += `
            //         <tr>
            //         <!-- 상품이미지 -->
            //         <td>
            //             <img 
            //             src="${
            //             'images/goods/'+v.cat+'/'+v.ginfo[0]+'.png'
            //             }"
            //             style="width : 50px" 
            //             alt="item">
            //         </td>
            //         <!-- 번호 : 리스트 순서번호 -->
            //         <td>${i+1}</td>
            //         <!-- 상품명 -->
            //         <td>${v.ginfo[1]}</td>
            //         <!-- 상품코드 -->
            //         <td>${v.ginfo[2]}</td>
            //         <!-- 단가 -->
            //         <td>${v.ginfo[3]}</td>
            //         <!-- 수량 -->
            //         <td>1</td>
            //         <!-- 합계 -->
            //         <td>${v.ginfo[3]}</td>
            //         <!-- 삭제 -->
            //         <td>
            //             <button class="cfn" data-idx="${v.idx}">×</button>
            //         </td>
            //         </tr>
            //     `
            // })

            // map을 이용한 처리 문 
            let rec = org.map((v,i)=>
             // v - 배열의 각 값, i - 배열순번
                `
                    <tr>
                    <!-- 상품이미지 -->
                    <td>
                        <img 
                        src="${
                        'images/goods/'+v.cat+'/'+v.ginfo[0]+'.png'
                        }"
                        style="width : 50px" 
                        alt="item">
                    </td>
                    <!-- 번호 : 리스트 순서번호 -->
                    <td>${i+1}</td>
                    <!-- 상품명 -->
                    <td>${v.ginfo[1]}</td>
                    <!-- 상품코드 -->
                    <td>${v.ginfo[2]}</td>
                    <!-- 단가 -->
                    <td>${v.ginfo[3]}</td>
                    <!-- 수량 -->
                    <td>1</td>
                    <!-- 합계 -->
                    <td>${v.ginfo[3]}</td>
                    <!-- 삭제 -->
                    <td>
                        <button class="cfn" data-idx="${v.idx}">×</button>
                    </td>
                    </tr>
                `
            )
            // [ forEach 메서드는 변수를 선언후 
            //     대입연산처리하여 값을 모아야함]

            // let rec = "";
            // org.forEach((v,i)=>{
            //     rec += `<li>${v}</li>`;
            // })
            // ____________________________
            // 반면...
            // [ map 메서드는 변수에 직접할당해도
            //     리턴값을 대입연산처리해줌!]

            // let rec = org.map((v,i)=> `<li>${v}</li>`)

            // 3. 생성된 카트리스트에 테이블넣기
            $('#cartlist')
            // (1) html 테이블 태그 넣기
            .html(`
                <a href="#" class="cbtn cbtn2"></a>
                <table>
                    <caption>
                        <h1>카트리스트</h1>
                    </caption>
                    <tr>
                        <th>상품</th>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>상품코드</th>
                        <th>단가</th>
                        <th>수량</th>
                        <th>합계</th>
                        <th>삭제</th>
                    </tr>
                    ${rec}
                </table>
            `) // html 을 넣는 코드 부분 // 

            // (2) 카트박스 CSS넣기
            .css({
                position : 'fixed',
                top : '0',
                right : pm, //'-60vw',
                width : '60vw',
                height : '100vh',
                backgroundColor : 'rgba(255,255,255,1)',
                zIndex : "99999999",
            })
            .animate({
                right:"0",
            },600,'easeOutQuint')
            // (4) table css 넣기
            .find('table')
            .css({
                width:"90%",
                margin:"50px auto",
                fontSize : "14px",
                borderTop:"2px solid #222",
                borderBottom:"2px solid #222",
                borderCollapse : "collapse",
            })
            // (5) td css 넣기
            .find('td')
            .css({
                padding : "10px 0",
                borderTop : "1px solid #555",
                textAlign : "center",
            })
            // (6) th css넣기
            .parents('table')
            .find('th')
            .css({
                padding : "15px 0",
                backgroundColor : "#ccc",
                fontSize : "16px",
            })
            // (7) caption css넣기
            .parents('table')
            .find('caption')
            .css({
                padding : '20px 0',
                textDecoration : "underline",
                textDecorationStyle : "wavy",
                fontSize : "30px"
            })

            // (8) 닫기버튼 셋팅
            $(".cbtn2").click(()=>{
                $('#cartlist')
                .animate({
                    right:'-60vw',

                },600,'easeOutBounce')
            }) // click

            // (9) 삭제버튼 처리 연결하기 
            $('.cfn').click(function(){
                store.commit('delRec',
                $(this).attr('data-idx'))
                // 삭제할 idx정보를 넘겨준다.
            }) // cfn 클릭 //
        }, // bindData //
    },
});

// 내보내기
export default store;