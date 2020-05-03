import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import StoreHelper from "../util/StroeHelper";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));


// props으로 받는 것임
const StoreItem = ({store}) => {
    const { addr, name, remain_stat, stock_at } = store;
    const { color, desc, short } = StoreHelper(store);
    // 이것들을 store에서 뽑으면 됨
    return (
    <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon style={{color}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={
            <React.Fragment>
                <span style={{color}}>
                    {name}
                </span>
            </React.Fragment>
        } 
        secondary={
            <React.Fragment>
            <span>
                {addr}
            </span>
            </React.Fragment>   
        } />
    </ListItem> 
    )
}

const ListPage = () => {
    const classes = useStyles();
    const stores = useSelector(state => state.stores)
    // redux stores에 있는 것 중에 stores에 있는 것을 stores라는 변수로 링크시켜주고
    return (
        <div>
            <AppBar/>
            <List className={classes.root}>
                {/* Hooks에서 selector를  가지고 redux에 있는 것 중 어떤 것을 props로 가져오면 된다 .*/}
                {stores.map(store => <StoreItem store={store}/>)}
                {/* 
                const StoreItem = ({addr, name, remain_stat, stock_at}) => {
                        return (
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={name} secondary={addr} />
                        </ListItem>
                        )
                    }
                그러면 이렇게 받으면 안된다. 
                */}
            </List>
            <BottomNav/>
        </div>
    )
};
export default ListPage;

