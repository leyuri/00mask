import React, { useEffect} from 'react';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import NaverMap from "../components/NaverMap";
import { makeStyles } from '@material-ui/core/styles';
import { fetchStoresByGeo } from "../actions";
import { useSelector, useDispatch } from "react-redux";

/* 왜 이렇게?..가로 세로 크기 주려고 */
const useStyles = makeStyles((theme) => ({
    mapWrapper: {
      width: "100%",
      marginBottom: theme.spacing(7),
      height: `calc(100vh - ${ 2 * theme.spacing(7)}px)`
    },
}));


const MapPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const center = useSelector(state => state.center);
    // center을 알고 있는 게 더 나을 것 같아서 , 현재 마지막 패치된 center 을 가지고 있는 것으로
    //  react hook
    useEffect(() => {
    // 컴포넌트가 마운트 되면 할 수 있는 것
        dispatch(fetchStoresByGeo(...center, 5000));
    })
    return (
        <div>
            <AppBar/>
                <div className={classes.mapWrapperot}>
                    <NaverMap/>
                </div>
            <BottomNav/>
        </div>
    )
};
export default MapPage;