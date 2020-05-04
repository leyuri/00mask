/* global naver */

import React from  "react";
import { styled } from '@material-ui/core/styles';

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
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 15
        };
        
        this.map = new naver.maps.Map(node, mapOptions);
        
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

export default NaverMap;









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



*/