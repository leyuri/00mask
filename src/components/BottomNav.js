import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RoomIcon from '@material-ui/icons/Room';
import ListIcon from '@material-ui/icons/List';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: "#eee",
    position: "fixed",
    bottom: 0,
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
        minWidth: 0
    }
  },

});

export default function SimpleBottomNavigation() {

  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(() =>{

      const path = location.pathname;
      //pathname은 URL의 경로 이름을 설정하거나 반환합니다.
      if (path === "/list") return 1;
      if (path === "/help") return 2;
      if (path === "/about") return 3;
      return 0; 
  });
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
