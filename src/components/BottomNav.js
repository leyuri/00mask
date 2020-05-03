import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RoomIcon from '@material-ui/icons/Room';
import ListIcon from '@material-ui/icons/List';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
        minWidth: 0
    }
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
// 현재 누가 선택되어있는지는 valueState를 통해 하는 것 같다

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction 
        label="Map" 
        icon={<RoomIcon />} 
        component={Link}
        to="/"
    />
    <BottomNavigationAction 
        label="List" 
        icon={<ListIcon />} 
        component={Link}
        to="/list"
    />
    <BottomNavigationAction 
        label="Help" 
        icon={<HelpIcon />} 
        component={Link}
        to="/help"
    />
    <BottomNavigationAction 
        label="About" 
        icon={<InfoIcon />} 
        component={Link}
        to="/about"
    />
    </BottomNavigation>
  );
}
