///////////////////////////////////////
// 07. 조건 렌더링 + 리스트 렌더링 JSX //
///////////////////////////////////////


// 리액트에서는 조건부로 구성요소를 렌더링 할 수 있다!

////////////////////////////////////////
// 1. if문을 사용하여 조건부 렌더링하기 //
////////////////////////////////////////

// 선택적으로 로딩하도록 컴포넌트 2개만들기

// 1번 컴포넌트
function MakeDev(){
    return(
        <h1>나는 개발자야</h1>
    )
} // MakeDev 컴포 //

// 2번 컴포넌트
function LostDev(){
    return(
        <h1>개발자가 뭐야?</h1>
    )
} // LostDev 컴포 //

// 3번 컴포넌트
function MakeImg(props){
    return(
        <img src={props.isrc} alt={props.ialt} title={props.ialt}/>
    )
} // MakeImg 컴포 //

// 출력 메인 컴포넌트 // 
// 위의 2가지 컴포넌트 중 선택적으로 출력한다.
function Developer(props){ // 호출시 전달되는 속성 props
    const isNow = props.isDev; // true/false
    // 조건문
    if(isNow){
        return (
        <React.Fragment>
            {/* MakeDev 컴포넌트 선택출력 */}
        <MakeDev /><MakeImg isrc={props.isrc} ialt={props.ialt} />
        </React.Fragment>
        )
    }
    // else문 없이도 if문에 들어가면 
    // return 때문에 컴포넌트를 나감
    return (
    <React.Fragment>
    <LostDev /><MakeImg isrc={props.isrc} ialt={props.ialt}/>
    </React.Fragment>
    )
} // Developer 컴포 //

// 이미지경로 배열  
const wisrc = [
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F408%2F2023%2F05%2F09%2F0000188202_005_20230509124401505.jpg&type=a340',
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F243%2F2023%2F05%2F03%2F0000044310_001_20230503101705221.jpg&type=a340'
];

// 컴포넌트 호출하기 1!
ReactDOM.render(<Developer 
    isDev={1} 
    isrc={wisrc[0]}
    ialt={'사진'}
    />,document.querySelector('#root1'))
// 컴포넌트 호출하기 2!
ReactDOM.render(<Developer 
    isDev={0}
    isrc = {wisrc[1]}
    ialt = {'사진'}
    />,document.querySelector('#root2'))

/* 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
*/

// 2-1. 제목을 찍기위한 타이틀 컴포넌트
function Title(props){
    return <h1>개발자가 좋아하는 {props.tit}</h1>
}

// 음식리스트
// const foods =['스파게티','짜파게티','냉면','짜장면','마라탕']
const foods =[];

// 2-2. 반복리스트를 위한 컴포넌트 //
function FoodList(props){ // 음식명을 fname담아서 보내준다
    return <li>개발자는 {props.fname} 좋아해!</li>
} // FoodList 컴포 //

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 //
function WishList(props){ // wlist속성에 담아 보내준다.
    // 위시리스트 담기
    const myfood = props.wlist;
    // 코드리턴
    return (
        <React.Fragment>
            <Title tit="음식"/>
            {/* 음식 위시리스트가 길이가 0보다 클때만 출력 */}
            { myfood.length > 0 &&
                <div>
                    <h2>개발자가 좋아하는 음식은 모두 {myfood.length}가지 입니다.</h2>
                    <ul>
                        {
                            // 배열변수.map() 메서드 사용!
                            // map(변수=>{표현식})
                            // 변수는 화살표함수 안으로 값전달
                            myfood.map(
                                x => <FoodList fname={x} /> )
                        }
                    </ul>
                </div>
            }
            {/* 다른 경우출력은 별도의 JSX출력 중괄호구역에 코딩 */}
            {
                myfood.length == 0 &&
                <h2>아직 개발자음식 리스트가 업데이트되지 않았습니다.</h2>
            }
        </React.Fragment>
    )
} // WishList 컴포 //

// 컴포넌트 출력하기
ReactDOM.render(<WishList wlist={foods}/>,
document.querySelector("#root3"))

// 좀 더 복잡한 리스트를 출ㄺ하는 컴포넌트 //

// 전달할 배열변수 //
const movs = [
    {year : '2021년',mtit:'영화1'},
    {year : '2022년',mtit:'영화2'},
    {year : '2023년',mtit:'영화3'},
];

// 개발자가 좋아하는 영화 - 찍기!
// 컴포넌트 구성하여 찍기 

/* 
    [출력형태]
    개발자가 좋아하는 영화
    개발자가 좋아하는 영화는 모두 3가지 입니다.
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
*/

function MovieList(props){ // year - 년도, mname - 영화명
    return <li>{props.year}도 {props.mname}</li>
} // FoodList 컴포 //

// 2-3. 개발자 선호 영화 리스트 출력 컴포넌트 //
function WishList2(props){ // wlist속성에 담아 보내준다.
    // 위시리스트 담기
    const mymv = props.wlist;
    // 코드리턴
    return (
        <React.Fragment>
            <Title tit="영화"/>
            {/* 영화 위시리스트가 길이가 0보다 클때만 출력 */}
            { mymv.length > 0 &&
                <div>
                    <h2>개발자가 좋아하는 영화는 최근{mymv.length}년간 아래와 같습니다.</h2>
                    <ul>
                        {
                            // 배열변수.map() 메서드 사용!
                            // map(변수=>{표현식})
                            // 변수는 화살표함수 안으로 값전달
                            // 배열값으로 객체가 들어가 있으므로 
                            // 각 배열값은 객체의 속성으로 지정한다.
                            // x.year / x.mtit
                            mymv.map(
                                x => <MovieList mname={x.mtit} year={x.year}/> )
                        }
                    </ul>
                </div>
            }
            {/* 다른 경우출력은 별도의 JSX출력 중괄호구역에 코딩 */}
            {
                mymv.length == 0 &&
                <h2>아직 개발자영화 리스트가 업데이트되지 않았습니다.</h2>
            }
        </React.Fragment>
    )
} // WishList 컴포 //

// 컴포넌트 출력하기
ReactDOM.render(<WishList2 wlist={movs}/>,
document.querySelector("#root4"))


/* 
    3. 조건 연산자 (삼항연산자) 를 사용하여 조건부 렌더링하기 
*/

// 명화 데이터 
const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg"
};
// 개발자가 좋아하는 그림(명화)

// 3-1. 타이틀과 그림찍기 컴포넌트
// 구성 : 작가이름 + 작품이미지
// 데이터 : 작가이름(painter), 이미지경로(작가이름의 객체wokrsrc이용)
//          작품명(wname)  
function MakeWork(props){
    return (
        <div>
            <h2>{props.painter}</h2>
            <img 
            src={worksrc[props.painter]} 
            alt={props.wname}
            title={props.wname}
            style={{width:'400px'}}
            />
        </div>
    );

} // MakeWork 컴포 //

// 3-2. 전체 출력 컴포넌트 //
// 구성 : 전체타이틀(Title컴포넌트) + 변경버튼 + 작가와 그림출력(MakeWork컴포)
// 특이사항 : 변경버튼 클릭시 MakeWork 컴포넌트의 데이터를
//              변경하여 다시 출력하도록 한다.

function ExpComp(props){ // isChg  는 true/false값 받는속성
    // 후크를 사용한 상태변수로 만들기 
    const [result,setResult] = React.useState(props.isChg);
    // let result = props.isChg;
    // isChg 속성은 true/false 데이터를 전달하여
    // MakeWork 컴포넌트의 변경여부를 결정
    
    // result 에 담긴 true/false값을 반대로 전함함
    const again = () => {
        // 훅크 상태변수의 업데이트는 set변수 를 사용한다
        setResult(!result);
        // result = !result;
        console.log(result);
    }; // again // 

    return(
        <React.Fragment>
            {/* 큰제목 */}
            <Title tit='명화'/>
            {/* 2.변경버튼 : again함수를 호출함 */}
            <button onClick={again}>작가변경</button>
            {/* 3. 작품출력 : 3항연산자로 작품변경하기*/}
            {
                result?
                <MakeWork painter='피카소' wname='우는여인'/> :
                <MakeWork painter='모네' wname='양산을 쓴 여인'/> 
            }

        </React.Fragment>
    );

} // ExpComp 출력 컴포 //

// 컴포넌트 출력하기
ReactDOM.render(<ExpComp isChg={false} />,
document.querySelector("#root5"));

/* 
    [ 리액트 훅크 : React Hook ]
    - 일반적으로 리액트에 사용되는 변수는 처음에 
    컴포넌트에 전달되어 초기 셋팅에 활용된다.
    그런데 이 변수가 변경될 경우 컴포넌트의 변경이 
    자동적으로 이루어지지 않는다!
    이런 종류의 변수 업데이트가 가상돔과 실제돔에 
    바로 반영되도록 실시간 감시역할을 하는
    리액트의 기내내용을 담고 있는 것이 훅크 이다.

    1. 목적 : 어떤 특정 데이터가 변경될 때
        이 데이터를 할당하여 사용하고 있는 컴포넌의의 
        변경이 반영되도록 하고자 할때 후크를 사용한다.

    2. 구현방법 : 
        1) 노드JS SPA 개발환경에서는 상단에 import useState를 한다.
        -> CDN 에서는 React.useState 로 사용함!
        2) 코딩법 useState() 메서드 사용
            배열변수 = useState(초기값)
            (CDN) -> 배열변수 = React.useState(초기값)
            
            ((일반형))
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로 사용
            예) myname,setMyname
            -> set변수명(값) : 메서드형태로 후크변수의 값을 셋팅함

    3. 작동원리 :
        - useState에 쓴 초기값이 배열변수 첫번째변수에 할당된다.
        - 코드에서 set변수명에 값을 할당하면 
        useState메서드가 이것을 체크하여 이 변수를 사용한 다른부분의 
        업데이트를 실행한다.
        예컨데 컴포넌트 내부에 사용한 경우 컴포넌트가 업데이트 됨.

    4. 사용결과 :
        별도의 메서드 호출없이 후크 상태변수를 사용한 곳이 자동으로 
        변경될 때마다 다시 갱신되는 것을 확인 할 수 있다.

    -> 뷰JS의 리액티브 데이터와 매우 유사함.
*/