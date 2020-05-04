/* global naver */

import React from  "react";
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const MapDiv = styled('div')({
    width: "100%",
    height: "100vh",
    
});

class NaverMap extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
      }

    /*
    Accessing Refs
    When a ref is passed to an element in render, a reference to the node becomes 
    accessible at the current attribute of the ref.
    
    */
    componentDidMount() {
        const node = this.mapRef.current;
        var mapOptions = {
            center: new naver.maps.LatLng(...this.props.mapCenter),
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

        naver.maps.Event.addListener(this.map, 'dragend', e => {
            console.log(e);
        });
        naver.maps.Event.addListener(this.map, 'zoom_changed', e => {
            console.log(e);
        });
    }


    render() {
        return (
            <MapDiv ref={this.mapRef}/>
            /* 이렇게 id를 주면 컴포넌트들로서의 역할을 할 수 없다. 
            리액트의 refs를 사용하는 방식으로!
            */

        )
    }

}

function mapStateToProps(state) {
    const { mapCenter, mapZoom } = state
    // center라는 변수에다가 state.center을 집어넣으라는 의미
    // state 중에서 center을 받아올 것
    return { mapCenter, mapZoom }
    // 이것을 다시 center에다가 넣어주면?
    // center(key) : center(const { center } = state의 value)
    // return { center : center} = return { center }

    // mapZoom 추가..줌된 모습을 기억하기 위해서ㅜ
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
