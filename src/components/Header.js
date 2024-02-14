import React, { useState } from 'react'
import{AppBar, Tabs,Tab, Toolbar, Typography} from '@mui/material'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#CD5C5C'}} position='sticky'>
        <Toolbar>
        <AssuredWorkloadIcon/>
        <Typography>Counselling and Visitor Management System</Typography>
        <Tabs textcolor='inherit' indicatorColor='primary' sx={{ml:"auto"}} value={value}
        onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink}to="/signup" label='Signup'/>
          <Tab LinkComponent={NavLink} to="/signin" label='Signin'/>
          <Tab LinkComponent={NavLink} to="/account" label='Account '/>
          <Tab LinkComponent={NavLink} to="/goldaccount" label='Goldaccount'/>
          <Tab LinkComponent={NavLink} to="/fetchregistration" label='FetchRegistration'/>
          
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header