import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ProfileRight from '../components/ProfileRight'
import ProfileLeft from '../components/ProfileLeft'

function ProfileScreen() {
    
// const dispatch = useDispatch()
// const {isLoggedin} = useSelector(state => state.auth)

//   useEffect(()=>{
//           if(isLoggedin)
//               dispatch(userDetails())
           
//     },[dispatch, isLoggedin])

    return (
        <div className='cartContainer'>

            <ProfileRight />
            <ProfileLeft />
            
        </div>
    )
}

export default ProfileScreen
