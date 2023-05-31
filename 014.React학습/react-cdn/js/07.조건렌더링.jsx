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