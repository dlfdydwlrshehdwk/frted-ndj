// 공통데이터 - 상단,하단영역 : common.js

// GNB 메뉴 데이터 구성하기
const gnb_data = [
    {
        txt:"Home",
        link:"/",
    },
    {
        txt:"CHARACTERS",
        link:"/ct",
    },
    {
        txt:"COMICS",
        link:"/co1",
        sub:[
            {
                txt:"LATEST COMICS",
                link:"/co1",
            },
            {
                txt:"DC UNIVERSE INFINITE",
                link:"/co2",
            },
            {
                txt:"ALL COMICS SERIES",
                link:"/co3",
            },
    ],
},
{
    txt:"MOVIES & TV",
    link:"/mv",
    sub:[
        {
            txt:"DC MOVIES",
            link:"/mv",
        },
        {
            txt:"DC SERIES",
            link:"/mv",
        },
        {
            txt:"DC ON HBO MAX",
            link:"/mv",
        },
    ],
    },
    {
        txt:"GAMES",
        link:"/gm",
    },
    {
        txt:"NEWS",
        link:"/nw",
    },
    {
        txt:"VIDEO",
        link:"/vd",
    },
]
const fdata =[
    {
        txt:"PRIVACY POLICY ㅣ",
        link:"https://www.warnermediaprivacy.com/policycenter/b2c/WM/",
    },
    {
        txt:"TERMS ㅣ",
        link:"https://www.dcuniverseinfinite.com/terms?_gl=1*1sgbuvb*_gcl_au*ODUxNTMwOTIuMTY4NTU5MTU1OA..",
    },
    {
        txt:"AD CHOICES ㅣ",
        link:"https://www.warnermediaprivacy.com/policycenter/b2c/wm/",
    },
    {
        txt:"ACCESSIBLILTY ㅣ",
        link:"https://policies.warnerbros.com/terms/en-us/#accessibility",
    },
    {
        txt:"COOKIE SETTINGS",
        link:"https://www.dc.com/#compliance-link",
    },
]

export {gnb_data,fdata}