import React from 'react'

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import StoreHelper from "../util/StoreHelper";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import NaverMap from '../components/NaverMap';

const useStyles = makeStyles((theme) => ({
    root: { 
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(1),
    },
    mapWrapper: {
        width: "100%",
        marginBottom: theme.spacing(7),
        height: '400px'
    },
    addr: {
        margin: `${theme.spacing(1)}px 0`,
        fontWeight: "bold",
        color: "#369"
    },
}));


const StorePage = () => {
    const classes = useStyles();
    const { code } = useParams();
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 

    const store = useSelector(state => state.stores[code]);
    if (!store) {
        return (<div>Loading</div>);
    }
    const stat = StoreHelper(store);

    return (
        <div>
            <AppBar/>

            <Container maxWidth="sm">
            <div className={classes.root}>
            <h1>{store.name}</h1>
            <div className={classes.addr}>{store.addr}</div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        <TableRow key="remain_stat">
                        <TableCell component="th" scope="row">
                            재고 수량
                        </TableCell>
                        <TableCell align="right">
                            {stat.desc}
                        </TableCell>
                        </TableRow>
                        <TableRow key="stock_at">
                        <TableCell component="th" scope="row">
                            입고 시간
                        </TableCell>
                        <TableCell>
                            {store.stock_at}
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <div className={classes.mapWrapper}>
            <NaverMap/>
            </div>
            </Container>
            <BottomNav/>
        </div>
    )
};
export default StorePage;