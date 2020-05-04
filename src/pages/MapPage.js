import React from 'react';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import NaverMap from "../components/NaverMap";
import { makeStyles } from '@material-ui/core/styles';


/* 왜 이렇게?..가로 세로 크기 주려고 */
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%"
    },
}));


const MapPage = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar/>
                <NaverMap className={classes.root}/>
            <BottomNav/>
        </div>
    )
};
export default MapPage;