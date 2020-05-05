/* global naver */

import React from  "react";
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { setMapZoom, setMapCenter} from "../actions/index";
import StoreHelper from "../util/StoreHelper";


import pinGreen from "../green.png";
import pinRed from "../red.png";
import pinYellow from "../yellow.png";
import pinBlack from "../black.png";
import pinGrey from "../grey.png";


const MapDiv = styled('div')({
    width: "100%",
    height: "100vh",
});

class NaverMap extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.markers = {};
        // marker를 key-value 형태로 넣어놓는다.
      }

    /*
    Accessing Refs
    When a ref is passed to an element in render, a reference to the node becomes 
    accessible at the current attribute of the ref.
    */

    loadPins() {
        const icons = [
            pinBlack, pinGrey, pinRed, pinYellow, pinGreen, pinBlack
        ];
        // 더 간결한 코드를 위해...

        var bounds = this.map.getBounds();
        // 현재 map의 bound를 찾고
        // hasLatLng(latlng) 객체의 좌표 경계 내에 지정한 좌표가 있는지 여부를 확인
        // 일단 getBounds를 받으면
        this.props.stores.forEach(store => {
           if (bounds.hasLatLng({ lat: store.lat, lng: store.lng})){
            // bounds가 이 좌표가 안에 있을 때만 찍어라!
                const marker = new naver.maps.Marker({
                    // 아까 해놓은 showMarker conde insert
                position: new naver.maps.LatLng(store.lat, store.lng),
                    // reducer 에서 살표보자..lat, lng 있네.? 가져옴
                
                map: this.map,
                icon: {
                    // 
                    url: icons[StoreHelper(store).idx],
                    //  StoreHelper 에서.. stat2idx에서 넘어오니까! 가져오고 그것을 remain_stat에 넣어줌
                    size: new naver.maps.Size(64, 64),
                    origin: new naver.maps.Point(0, 0),
                    anchor: new naver.maps.Point(11, 35)
                }
            });
            // 이렇게 만들어진 마커를 가지고 있어야 한다? ->
            this.markers[store.code] = marker;
            // store의 code가 marker 역할을 하므로 넣어놓는 것이다. 
           } else {
            // 좌표가 없으면 지우면 된다. 
           }

        })

    }

    // showStores(map) {
    // // stores의 lat & lng 마커로 다 찍어보자
    //     var marker = new naver.maps.Marker({
    //         position: new naver.maps.LatLng(37.3595704, 127.105399),
    //         map: map
    //     });
    // }
    componentDidMount() {
        const { mapCenter, mapZoom, dispatch} = this.props;
        const node = this.mapRef.current;
        var mapOptions = {
            center: new naver.maps.LatLng(...mapCenter),
            // redux를 통해 해보자..! -> mapStateToProps 이용
            // center: new naver.maps.LatLng(this.props.center) 이런 식(배열)으로 넣으면 안된다. 쪼개서 넣어야 한다. 
            zoom: this.props.mapZoom,
            scaleControl: true,
            mapTypeControl: true,
            zoomControl: true
        };
        // map page 에 있다가 list 이동 -> 다시 map으로 이동하면 원래 줌 크기로 돌아온다. 왜?
        // unMount 되었다가 다시 render가 되서 mount된 것임..
        
        this.map = new naver.maps.Map(node, mapOptions);

        naver.maps.Event.addListener(this.map, 'dragend', () => {
            const coord = this.map.getCenter();
            dispatch(setMapCenter([coord.lat(), coord.lng()]));
            // 이것을 어디로 보내야 할까?...mapCenter을 하도록 바꿔줘야 함 -> action을 만들자 ㅜ
        });

        naver.maps.Event.addListener(this.map, 'zoom_changed', zoom => {
            dispatch(setMapZoom(zoom));
        });

        this.loadPins();
        console.log("MAP INITIALIZED~~~~~~~")
    }


    render() {
        console.log("RENDER~~~~~~~")
        return (
            <MapDiv ref={this.mapRef}/>
            /* 이렇게 id를 주면 컴포넌트들로서의 역할을 할 수 없다. 
            리액트의 refs를 사용하는 방식으로!
            */

        )
    }

}

function mapStateToProps(state) {
    const { mapCenter, mapZoom, stores } = state
    // center라는 변수에다가 state.center을 집어넣으라는 의미
    // state 중에서 center을 받아올 것
    return { mapCenter, mapZoom, stores }
    // 이것을 다시 center에다가 넣어주면?
    // center(key) : center(const { center } = state의 value)
    // return { center : center} = return { center }

    // mapZoom 추가..줌된 모습을 기억하기 위해서ㅜ
    // stores추가..여기 있는 데이터도 가져오기 위해서ㅜㅜ
  }
  
export default connect(mapStateToProps)(NaverMap)






/*
Map 특성상 refs 등이 필요하다. 
구글맵에서 해봤던 것..
클래스가 더 편한 것 같아서 일단 클래스로 해봄

먼저 <div className={classes.root} ref={this.mapRef}></div> 이게 랜더링 된 다음에
componentDidMount가 불려진다. 그때 밑의 코드가 들어가야 한다..!

var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);




function mapStateToProps(state) {
    const { todos } = state
    return { todoList: todos.allIds }
  }
  
export default connect(mapStateToProps)(NaverMap)

NaverMap 컴포넌트에 커넥트를 붙여서 mapStateToProps를 갖고 props에다가 state를 넣어준다 .
그래서 state 들 중에서 center를 받아올 것!..






*/
