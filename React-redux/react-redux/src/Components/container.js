import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {newMonth} from '../redux/actions'
import { connect } from "react-redux"
import { fetchUser} from '../redux/actions'
function Container({users, fetchUser,names}) {
 useEffect(()=>{
    fetchUser()
 },[])
  return (
    <div>
        {users.loading ? <h1>Loading users </h1>: users.error !=="" ? <h1> Error</h1> : 
        <div>
            <h1>User lists</h1>
            <div>
            {users.data.map(ele => <p>{ele.name}</p>)}
            </div>
            
            </div>}
    </div>
  );
}

const mapStateToProps = state =>{
    return{
       users: state,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUser:()=> dispatch(fetchUser())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Container);
