import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Avatar, Tooltip, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  primary: {
    position: 'absolute',
    top: 0,
    right: 0
  }
});

export default function Profile() {
  const cls = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const profile = useSelector(state => state.login.userData);
  const { avatar, first_name, last_name } = profile;

  const handleClickLogout = () => {
    localStorage.removeItem('cacheToken');
    document.location = `/login`;
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} className={cls.primary}>
        <Tooltip title={`${first_name} ${last_name}`}>
          <Avatar alt={first_name} src={avatar} />
        </Tooltip>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}