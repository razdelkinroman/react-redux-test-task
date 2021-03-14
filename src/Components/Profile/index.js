import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Avatar, Tooltip, Menu, MenuItem } from '@material-ui/core';

import './styles.css';

const Profile = memo(() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const profile = useSelector(state => state.login.userData);
  const { name, email } = profile;

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
    <div className="profile">
      <IconButton onClick={handleClick} className="profile__icon">
        <Tooltip title={`${name} [${email}]`}>
          <Avatar alt={name} />
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
});

export default Profile;
