// 리스트페이지 JS - list.js

// [ 제이슨 파일 데이터 로컬스토리지에 넣기 ]
// 1. 변수에 제이슨 파일 문자화 하여 불러오기 
let jsn = JSON.stringify(mydata);
// console.log('제이슨',jsn);

// 2. 로컬스토리지 변수를 설정하여 할당하기
localStorage.setItem('bdata',jsn);
// console.log('비데이터',localStorage.getItem('bdata'));

// 3. 로컬스토리지 데이터를 파싱하여 게시판 리스트에 넣기
// 3-1. 로컬 스토리지 데이터 파싱하기 
let bdata = JSON.parse(localStorage.getItem('bdata'));
// console.log('로컬파싱',bdata,'개수',totnum);



// 페이지번호 : 페이지 단위별 순서번호
// let pgnum = 1; -> 함수 내 전달변수로 처리
// 페이지단위수 : 한 페이지 당 레코드 수 
const pgblock = 10;

// 시작번호생성 : (페이지번호 -1 )*블록수
// -> (pgnum-1)*pgblock
// 끝번호 생성
// ->pgnum*pgblock

/* 
    함수명 : bindList
    기능 : 페이지별 리스트를 생성하여 바인딩함
*/

function bindList(pgnum){ // pgnum - 페이지번호
    // 0. 게시판 리스트 생성하기
    let blist;
    // 전체 레코드 개수 : totnum 변수에 이미 할당
    let totnum =bdata.length;

    // 1. 일반형 for문으로 특정대상 배열 데이터 가져오기
    // 데이터 순서 : 번호 글제목 글쓴이 등록일자 조회수
    for(let i = (pgnum-1)*pgblock; i< pgnum*pgblock; i++ ){
        // 마지막 번호한계값 조건으로 마지막페이지 데이터 
        // 존재하는 데이터까지만 바인딩하기
        if(i<totnum){

            blist +=`
            <tr>
            <td>${bdata[i]["idx"]}</td>   
            <td>
            <a href="view.html?idx=${bdata[i]['idx']}">
            ${bdata[i]["tit"]}
            </a>
            </td>   
            <td>${bdata[i]["writer"]}</td>   
            <td>${bdata[i]["date"]}</td>   
            <td>${bdata[i]["cnt"]}</td>   
            </tr>
            `
        } // if // 
    } // for //

    // 2. 리스트 코드 테이블에 넣기
    $('#board tbody').html(blist);

    // 3. 페이징 블록 만들기 
    // 전체페이지 번호수 계산하기 
    // 전체레코드수 / 페이지단위수 (나머지 있으면) + 1
    // 전체 레코드 수 : totnum 
    let pgtotal = Math.floor(totnum / pgblock);
    let pgadd = totnum % pgblock;
    console.log(pgtotal,pgadd,pgblock);

    // 페이징코드변수
    let pgcode ="";
    // 3-2. 페이징코드 만들기 
    // 나머지가 있으면 1을 함함
    if(pgadd !=0) pgtotal = pgtotal+1; 
    console.log(pgtotal)
    // 코드만들기 for문
    for(let i = 1; i<pgtotal+1; i++){
    // for(let i = 1; i<=pgtotal; i++){
        pgcode +=
        pgnum == i ? `<b>${i}</b>` 
        : `<a href="#">${i}</a>`;

        // 사이구분자
        if(i !=pgtotal) pgcode +=" | ";

    } // for //

    // 3-3. 페이징코드 넣기
    $('.paging').html(pgcode);

    // 3-5. 이벤트링크 생성하기
    $('.paging a').click(function(e){
        e.preventDefault();
        // 바인딩함수 호출 (페이지번호 보냄)
        bindList($(this).text())
    }); // click //

} // bindList 함수 //


// console.log(blist);

// 로드구역 // 
$(()=>{

    // 최초 리스트 호출
    bindList(1);




}); // JQB //