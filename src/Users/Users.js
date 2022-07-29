import React, { useEffect, useState } from 'react';
import './User.css'
import avtar from '../Img/avater.png'
import avtard from '../Img/avterd.png'

const Users = () => {
    // set and get user info
    const [users, setusers] = useState([])
    const [userdetails, setuserdetails] = useState({})

    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [])

    const userDetailson = (userinfo) => {
        setuserdetails(userinfo)
    }

    const userset = (userinfo) => {
        setuserdetails(userinfo)
    }

    console.log(userdetails)

    return (
        <div>
            <div className='main-div'>

                <div>
                    <h4 className='User-list-title'>USERS LIST</h4>
                    {
                        users?.map(user =>
                            <div className='user-list-card' onClick={() => userDetailson(user)} onclick={() => userset()}>
                                <img src={avtar} alt="" />
                                <h3 className='user-name'>{user?.profile?.username}</h3>
                            </div>
                        )
                    }
                </div>

                <div className='user-details-main'>
                    <h4 className='User-list-title'>USER DETAILS</h4>
                    <div className='user-details-info'>
                        <div className='user-details-img-name'>
                            <img className='user-details-img' src={avtard} alt="" />
                            <p>{userdetails?.profile?.username}</p>
                            <p className='user-details-boi'>Reiciendis quam fuga sunt ea debitis nemo. Reiciendis quam fuga sunt ea debitis nemo.</p>
                        </div>
                        <div>
                            <small className='details-title'>Full Name</small>
                            <div className='user-full-name'>Neoma Schaefer</div>
                        </div>
                        <div>
                            <small className='details-title'>Job Title</small>
                            <div className='user-full-name'>Regional Marketing Officer</div>
                        </div>
                        <div>
                            <small className='details-title'>Email</small>
                            <div className='user-full-name'>theron25@hotmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;