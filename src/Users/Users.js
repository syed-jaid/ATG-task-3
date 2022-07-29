import React, { useEffect, useState } from 'react';
import './User.css'
import avtar from '../Img/avater.png'
import avtard from '../Img/avterd.png'
import Loading from '../Img//loading.png'
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

    return (
        <div>

            <div className='main-div'>
                <div>
                    <h4 className='User-list-title'>USERS LIST</h4>
                    {
                        users.length ? <>
                            {
                                users?.map(user =>
                                    <div onClick={() => userDetailson(user)} onclick={() => userset()}>
                                        <div className='user-list-card'>
                                            <img src={avtar} alt="" />
                                            <h3 className='user-name'>{user?.profile?.username}</h3>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                            :
                            <div className='loading-div'>
                                <img className='App-logo' src={Loading} alt="" />
                                <h3 className='loading-text'>Loading</h3>
                            </div>
                    }
                </div>

                <div className='user-details-main'>
                    <h4 className='User-details-title'>USER DETAILS</h4>
                    <div className='user-details-info'>
                        <div className='user-details-img-name'>
                            <img className='user-details-img' src={avtard} alt="" />
                            {
                                userdetails.profile ? <p>{userdetails?.profile?.username}</p> : <p>User Name</p>
                            }
                            {
                                userdetails.profile ? <p className='user-details-boi'>{userdetails.Bio}</p> : <p className='user-details-boi'></p>
                            }
                        </div>
                        <div>
                            <small className='details-title'>Full Name</small>
                            {
                                userdetails.profile ? <div className='user-full-name'>{`${userdetails?.profile?.firstName}  ${userdetails?.profile?.lastName}`}</div> : <div className='user-full-name'></div>
                            }
                        </div>
                        <div>
                            <small className='details-title'>Job Title</small>
                            <div className='user-full-name'>{userdetails?.jobTitle}</div>
                        </div>
                        <div>
                            <small className='details-title'>Email</small>
                            <div className='user-full-name'>{userdetails?.profile?.email}</div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Users;