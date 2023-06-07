// menubtn 사용 데이터 - data/menubtn.js
// -> 메인페이지에서 한번만 사용되므로 객체형으로 
// 페이지별 데이터 구분이 필요없으므로 바로 배열형
// 데이터로 셋업함!

const menu_data = [
    {
        "isrc" : "./images/menubtn/menubtn1.jpg",
        "tit" : "WORLDS COLLIDE^THE FLASH IS ONLY IN THEATERS JUNE 16",
        "btn" : "TICKETS ON SALE NOW",
        "link" : "/co"
    },
    {
        "isrc" : "./images/menubtn/menubtn2.jpg",
        "tit" : "DC SHOP^GET NUTS WITH THE 1/6 SCALE BATMAN FIGURE",
        "btn" : "SHOP NEW ARRIVALS",
        "link" : "/mv"
        
    },
    {
        "isrc" : "./images/menubtn/menubtn3.jpg",
        "tit" : "DC PRIDE^CELEBRATE WITH LGBTQ CREATORS, CHARACTERS, &...",
        "btn" : "VISIT OUR PRIDE HUB",
        "link" : "/gm"
    },
    {
        "isrc" : "./images/menubtn/menubtn4.jpg",
        "tit" : "DC COMMUNITY^SHARE YOUR DC PRIDE FANWORKS",
        "btn" : "SUBMIT YOUR ART",
        "link" : "/nw"
    },
]

export default menu_data;