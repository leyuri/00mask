import React from 'react';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import NaverMap from "../components/NaverMap";
import { makeStyles } from '@material-ui/core/styles';

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