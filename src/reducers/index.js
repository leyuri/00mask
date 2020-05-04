import produce from "immer"

const baseState = {

    loading: false,
    error:"",
    center: [37.3595704, 127.105399],
    stores: 
    [
        {
        addr: '서울특별시 중랑구 동일로143길 29 (중화동)',
        code: '11801841',
        created_at: '2020/05/03 14:10:00',
        lat: 37.6050705,
        lng: 127.0768575,
        name: '다정옵티마약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 08:55:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로62길 81 (망우동)',
        code: '11805544',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5959737,
        lng: 127.0997145,
        name: '새시장약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/02 18:06:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 면목로 430 1층 (면목동)',
        code: '11808519',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5902738,
        lng: 127.0872886,
        name: '메디컬수약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/02 08:39:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 상봉중앙로1길 12 1층 (상봉동)',
        code: '11811951',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5996326,
        lng: 127.0874444,
        name: '참약국',
        remain_stat: 'empty',
        stock_at: '2020/05/02 08:38:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 겸재로 194 (면목동)',
        code: '11817089',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5885154,
        lng: 127.0890953,
        name: '면목약국',
        remain_stat: 'empty',
        stock_at: '2020/05/02 08:26:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 중랑역로 51 태능프라자약국 1층 (중화동)',
        code: '11818093',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5983436,
        lng: 127.0769284,
        name: '태릉프라자약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 08:19:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로 403 3층 (망우동)',
        code: '11819669',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5994218,
        lng: 127.0968533,
        name: '희망약국',
        remain_stat: 'plenty',
        stock_at: '2020/04/29 09:29:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로63길 5 연세약국 (망우동)',
        code: '11821876',
        created_at: '2020/05/03 14:10:00',
        lat: 37.59979,
        lng: 127.0986146,
        name: '연세약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 14:15:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로 271 (상봉동, 서울중랑우체국)',
        code: '11825901',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5959175,
        lng: 127.0828423,
        name: '사랑약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 10:41:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 면목로 311 삼원빌딩 (면목동)',
        code: '11828153',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5799197,
        lng: 127.0878285,
        name: '프라자미약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/02 10:32:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 용마산로 435 통일로약국 1층 (면목동)',
        code: '11828188',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5903019,
        lng: 127.0970374,
        name: '통일로약국',
        remain_stat: 'few',
        stock_at: '2020/05/02 11:17:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로 247 로얄스포츠센터 1층 (중화동)',
        code: '11832002',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5953218,
        lng: 127.0795772,
        name: '로얄약국',
        remain_stat: 'few',
        stock_at: '2020/05/02 08:12:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 망우로 411 (망우동)',
        code: '11833203',
        created_at: '2020/05/03 14:10:00',
        lat: 37.599605,
        lng: 127.0978977,
        name: '이즈약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/03 08:54:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 면목로 303 (면목동)',
        code: '11834366',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5794828,
        lng: 127.0871485,
        name: '무궁화약국',
        remain_stat: 'some',
        stock_at: '2020/05/02 11:43:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 면목로 421 (면목동)',
        code: '11835923',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5896574,
        lng: 127.0870668,
        name: '건명약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/01 10:17:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 겸재로 121 (면목동)',
        code: '11837241',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5871879,
        lng: 127.0813364,
        name: '면목종로약국',
        remain_stat: 'empty',
        stock_at: '2020/05/02 08:19:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 봉우재로 39 (면목동)',
        code: '11839686',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5906778,
        lng: 127.0776297,
        name: '가나안약국',
        remain_stat: 'empty',
        stock_at: '2020/05/02 09:48:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 겸재로9길 53 1층 (면목동)',
        code: '11839759',
        created_at: null,
        lat: 37.5888252,
        lng: 127.0781333,
        name: '일월약국',
        remain_stat: null,
        stock_at: null,
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 겸재로 84 (면목동)',
        code: '11839775',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5858918,
        lng: 127.077244,
        name: '동성약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/02 09:43:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 동일로101길 63 (면목동)',
        code: '11839830',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5885476,
        lng: 127.0763246,
        name: '한신약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/02 10:13:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 중랑역로 21 (중화동)',
        code: '11839881',
        created_at: null,
        lat: 37.5959081,
        lng: 127.0759639,
        name: '세화당약국',
        remain_stat: null,
        stock_at: null,
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 겸재로 113 (면목동)',
        code: '11839929',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5869185,
        lng: 127.0803673,
        name: '미래약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 08:59:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 중랑천로 114-1 (중화동)',
        code: '11839937',
        created_at: '2020/05/03 14:10:00',
        lat: 37.5954864,
        lng: 127.0724376,
        name: '온누리신용약국',
        remain_stat: 'some',
        stock_at: '2020/05/03 13:33:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 동일로130길 52 (중화동)',
        code: '11840137',
        created_at: '2020/05/03 14:10:00',
        lat: 37.600186,
        lng: 127.0829599,
        name: '동아약국',
        remain_stat: 'empty',
        stock_at: '2020/05/02 10:43:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 중랑역로 150 (묵동)',
        code: '11840188',
        created_at: '2020/05/03 14:10:00',
        lat: 37.6067261,
        lng: 127.0773005,
        name: '홍성백약국',
        remain_stat: 'break',
        stock_at: '2020/05/02 08:37:00',
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 동일로169길 9 1층 (묵동)',
        code: '11840226',
        created_at: null,
        lat: 37.6137023,
        lng: 127.0761859,
        name: '새우정약국',
        remain_stat: null,
        stock_at: null,
        type: '01'
        },
        {
        addr: '서울특별시 중랑구 동일로 852 (묵동)',
        code: '11840285',
        created_at: '2020/05/03 14:10:00',
        lat: 37.6064627,
        lng: 127.0788466,
        name: '새대우약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/03 09:49:00',
        type: '01'
        },
    ]
};

// redux에서 데이터가 들어왔으니까 리스트 페이지에서 리스트를 만들 데이터가 생김


const reducer = produce((state, action) => {
}, baseState);

export default reducer;



/*
state와 action이 들어왔을 때 새로운 state를 만들어내는 function을.. -> immer을 통해 만들어 볼 것
const reducer = (state, action) => {
}
immer을 안쓰면 이렇게 되는데 immer의 produce를 사용하여 Immutable한 state를 바로 만들 것이다. 
그럼 이것을 produce 안에 한번만 감싸주면 된다. 
나중에 reducer가 여러개 생기면 combine reducer을 이용하면 된다. 
*/