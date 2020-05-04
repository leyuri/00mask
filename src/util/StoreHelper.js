import { green, amber, red, grey  }from '@material-ui/core/colors';

/*
store을 받아서 다른 정보들을 추가적으로 내보내 보자!
"plenty", "some", "few", "break", "empty"
색깔과 글자들을 다르게.. -> index화 시켜보자!~
인덱스를 통해 배열 같은 것을 만들어 놓으면 쉽게 내보낼 수 있다. 
*/

// 이걸 따로 만드는 이유는 최대한 재사용하면서도 감추기 위해서..!
function stat2idx(remain_stat) {
    switch(remain_stat) {
        case "empty": 
            return 1;
        case "few": 
            return 2;
        case "some": 
            return 3;
        case "plenty": 
            return 4;
        case "break": 
            return 5;
        default: 
            return 0
    }
}
const COLOR = ["#000", grey[500], red[600], amber[600], green[800], grey[900] ];

const DESC = [
    "정보없음",
    "1개 이하",
    "2개 ~ 29개",
    "30개 ~ 99개",
    "100개 이상",
    "판매 중지"
];

const SHORT = ["-", "0-1", "2+", "30+", "100+", "X"];
export default function(store){
    const idx = stat2idx(store.remain_stat);
    return {
        idx: idx,
        color: COLOR[idx],
        desc: DESC[idx],
        short: SHORT[idx],
    }
}