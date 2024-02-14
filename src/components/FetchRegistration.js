import React, { useState } from 'react'
import axios from 'axios'

const FetchRegistration = () => {
const [res,setRes ]=useState(null)
if(res==null){
axios.get('http://localhost:8080/retrive', {})
.then(response=>{
   setRes(response.data)
   console.log(Response.data)
})
}
  return (
    <div><h1>Registrations</h1>
    { JSON.stringify(res)}
    </div>
  )
}
export default FetchRegistration