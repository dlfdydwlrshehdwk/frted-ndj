// 쇼핑몰갤러리 JS - small.js

// 템플릿 html코드 객체 JS 가져오기
import hcode from "./hcode.js";

// 뷰 JS 인스턴스 생성용 함수 !
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣은 전역컴포넌트 만들기
Vue.component("tit-comp", {
    template: hcode.tit,
}); // 전역 컴포넌트 1 //

//   뷰 인스턴스 생성하기 : 반드시 컴포넌트 아래에서 작성
new Vue({
    el: ".tit",
});
// new Vue({
//     el : '.tit2',

// })
makeVue(".tit2");

// 숫자증감 변수
let num = 0;

// 2. 갤러리 리스트에 넣을 전역컴포넌트 만들기
// 여기가 자식이다.
Vue.component("list-comp", {
    // v-on:click="goPapa" 로 부모이벤트 접근시작
    template: hcode.list,

    // 부모에서 v-bind:속성명=값 으로 전달한 속성변수를
    // props:[] / {} 로 받음
    props: ["haha", "myseq", "endlet"],
    // props:{'haha':Number}, -> 데이터형 일치
    // props:{'haha':String}, -> 데이터형 오류메시지나옴
    // 컴포넌트 내부 변수셋팅
    data: function () {
        return {
            // 1. 상품이미지 경로
            gsrc: `img_gallery/${this.haha}.jpg`,
            // 2. 상품명
            gname: `Sofia` + this.haha + this.endlet + (this.myseq % 2 ? "❗" : "❕"),
            // 3. 단위가격(원가)
            gprice: this.insComma(2000 * this.haha) + `원`,
            // 4. 할인가격 : 30% 할인된 가격(원가격 * 0.7) round 반올림
            sale: this.insComma((Math.round(2000 * this.haha) / 10) * 10 * 0.7) + `원`,
        };
    },
    methods: {
        // 부모이벤트호출 전달하기 : $emit() 메서드사용
        goPapa() {
            //  $emit(부모가만든이벤트명)
            this.$emit("hull");
        },
        ovNow() {
            this.$emit("gotkimchi");
            // 부모요소에 v-on:gotkimchi = 메서드명
            // 이것을 만들어서 사용함
        },

        // 정규식함수(숫자 세자리마다 콤마해주는기능)
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        // 세일표시 여부 리턴 메서드
        condiRet() {
            return this.haha == 3 || this.haha == 5 || this.haha == 10;
        },
    },
}); // 뷰 JS 컴포넌트 ////

// 리스트 뷰 인스턴스 생성하기
// 여기가 부모입니다.
new Vue({
    el: ".grid",
    // 부모 뷰인스턴스 메서드구역
    methods: {
        // 자식이벤트 전달후 실행메서드
        goMsg() {
            // alert("자식인 부모에게 이벤트전달 성공");
        },
        ovMsg() {
            // console.log("오버!");
        },
    },
}); // Vue 인스턴스

// 큰이미지보기 배경박스 컴포넌트 //
Vue.component("win-comp", {
    template: hcode.big,
}); // win-comp 컴포넌트 //

// win-comp 뷰JS 인스턴스 생성하기 //
new Vue({
    el: "#pbg",
    // DOM 이 모두 로딩된 후 실행구역
    mounted: function () {
        // [ 제이쿼리 기능구현 ]

        // 공유번호변수
        let nowNum = 1;

        // 1. 갤러리 리스트 클릭시 큰이미지박스 보이기
        $(".grid > div").click(function (e) {
            e.preventDefault();

            // 1. 클릭된 이미지 경로 읽어오기
            let isrc = $(this).find("img").attr("src");
            console.log(isrc);

            // 2. 클릭된 이미지 경로를 큰 이미지 src로 넣기
            $(".gimg img").attr("src", isrc);

            // 3. 큰이미지 박스 보이기
            $("#bgbx").show();

            // 4. 다음/이전 이미지 변경을 위한 data-num 속성읽기
            nowNum = $(this).attr("data-num");
            console.log(nowNum);

            // 5. 값셋팅하기
            setVal();
        }); // click //

        // 상품명 / 가격 등 데이터 셋업함수
        function setVal() {
            // nowNum에 의한 대상선정
            const tg = $(`.grid>div[data-num=${nowNum}]`);
            // console.log(tg.find("h2").text())
            // console.log(tg.find("h3").text())

            // 상품명 / 가격 큰박스에 넣기
            $("#gtit").text(tg.find("h2").text());
            // 상품가격 큰박스에 넣기
            // 세일일 경우와 아닌경우 나누기
            // 세일일때
            if(tg.find("h3 span").first().is('.del')){
                $("#gprice, #total").html(
                    "<small>30% 세일가</small>"+tg.find("h3 span").last().text());
            }  // if //
            // 세일아닐때
            else {
                $("#gprice, #total").text(tg.find("h3 span").first().text());
            }   // else //
        } // setVal 함수 //

        // 2. 닫기버튼 클릭시 큰이미지 박스 숨기기
        $(".cbtn").click(function (e) {
            e.preventDefault();
            $("#bgbx").hide();
        });

        // 3. 이전 / 다음버튼 클릭시 이미지변경하기
        $(".abtn").click(function (e) {
            e.preventDefault();
            // 오른쪽버튼여부
            let isB = $(this).is(".rb");
            // 분기하기
            if (isB) {
                // 오른쪽
                nowNum++;
                if (nowNum === 51) nowNum = 1;
            } else {
                // 왼쪽
                nowNum--;
                if (nowNum === 0) nowNum = 50;
            }

            console.log(nowNum);

            // 4. 큰이미지 변경하기
            $(".gimg img").attr("src", `img_gallery/${nowNum}.jpg`);

            // 5. 값셋팅
            setVal();
        });
    }, // mounted 함수구역 //
}); // Vue 인스턴스 //
