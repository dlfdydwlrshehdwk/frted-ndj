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
        selnm:["","",""]
    },
    // state 데이터 변경 메서드구역!
    mutations: {
        // 체크박스 체크시 처리메서드
        resChk(dt){
            console.log(dt.chkarr);
            // 3개의 체크박스 상태배열변수 값에 따라
            // 실제 조건에 들어갈 cat명을 넣어준다.

            // v는 배열값인 true/false값이 렁러옴
            dt.chkarr.forEach((v,i)=>{
                if(v){ // 체크박스 체크시
                    dt.selnm[i] = 
                    i==0?"men" : i==1? "women" : "style";
                    // 조건1?값1:((조건2?값2):최종값);
                    // 중첩삼항연산자 ^_^ 에휴 ;
                }
                else{ // 체크박스 체크안됨
                    // 무조건 빈값을 할당
                    dt.selnm[i] = "";
                }
            });
        }, // resChk
    },
});

// 내보내기
export default store;