// 배너 컴포넌트 - Ban.js
import "./css/ban.css";
// 배너데이터
import ban_data from "./data/banner";
// 제이쿼리
import $ from "jquery";
$(()=>{

    // 광클금지 변수 
    let prot = 0;
    
    // 1. 버튼 클릭시 이동기능 구현
    $('.abtn').click(function(){
        // 0. 광클금지
        if(prot) return;
        prot = 1;
        setTimeout(()=>{prot = 0;},400)

        // 1. 버튼구분하기
        let isB = $(this).is(".rb");

        // 슬라이드 타겟설정 : 클릭된 버튼의 형제요소 슬라이더
        let tg = $(this).siblings('.slider')

        // 2. 분기하여 기능구현하기
        // (1) 오른쪽버튼 클릭시 : 오른쪽에서 들어옴(left : -100%)
        if(isB){
            tg.animate({left : "-100%"},400,
            function(){ // this sms 타겟
                // 첫번째 li 맨뒤로 보내기! 동시에 left값 0
                $(this).append($(this).find('li').first())
                .css({left:"0"});
            }); // ani //
        } // if //

        // (2) 왼쪽버튼 클릭시 : 왼쪽에서 들어옴(left : -100% -> 0)
        else{
            // 마지막 li맨앞이동 + 동시에 left : -100% 후 left:0 애니
            tg.prepend(tg.find('li').last())
            .css({left:'-100%'})
            .animate({left:'0'},400);
        }

        // 3. 배너와 일치하는 블릿에 클래스"on" 넣기
        // 대상: .indic li
        // eq(순번) -> 오른쪽이동시 1, 왼쪽이동시0
        // isB값으로 오른쪽은 true ->1, 왼쪽은 false->0
        // 순서가 바뀌는 슬라이드에 고유 순번속성 data-seq 값을 읽어옴
        $('.indic li').eq(tg.find('li').eq(isB).attr('data-seq'))
        .addClass('on').siblings().removeClass('on'); 
    });// click //

}); // JQB // 

// 반복리스트 코드 생성용 컴포넌트 //
function MakeList(props) { 
    // rec - 개별레코드값(객체형식)
    // key - 유일키
    return (
        <li data-seq={props.idx}>
            <img className="banimg" src={props.rec["src"]} alt="배너" />
            <section className="bantit">
                <h3>{props.rec["tit"]}</h3>
                <h2>{props.rec["tit2"]}</h2>
                <p>{props.rec["cont"]}</p>
                <button>{props.rec["btn"]}</button>
            </section>
        </li>
    );
} // MakeList 컴포 //

// 배너출력용 컴포넌트 //
function Ban(props) {
    // props.cat 은 배너데이터 구분 속성
    const sel_data = ban_data[props.cat];
    // sel_data에 담긴값은 data/banner.js의 객체의 배열값
    return (
        <div className="banner">
            {/* 이동슬라이드 */}
            <ul className="slider">
                {
                    sel_data.map((x,i)=>
                    <MakeList rec={x} key={i} idx={i} />)
                }
            </ul>
            {/* 이동 버튼 + 슬라이드 불릿 : 슬라이드가 두개 이상일때*/}
            {
                // 조건식 && 코드 : 조건식이 true 일때 코드 출력
                sel_data.length > 1 && 
                <>
                {/* 양쪽이동버튼 */}
                <button className='abtn lb'>＜</button>
                <button className='abtn rb'>＞</button>
                {/* 블릿 인디케이터 */}
                <ol className='indic'>
                    {
                        sel_data.map((x,i)=>
                        <li className={i==0?'on':''}></li>
                        )
                    }
                </ol>
                </>
            }
        </div>
    );
} // Ban 컴포 //

export default Ban;
