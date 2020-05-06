import React from 'react'
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StorePage = () => {

    const { code } = useParams();
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 
    const store = useSelector(state => state.stores[code])

    return (
        <div>
            <AppBar/>
            Detail: {code}
            <BottomNav/>
        </div>
    )
};
export default StorePage;