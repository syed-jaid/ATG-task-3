import React, { useEffect, useState } from 'react';
import './User.css'

const Users = () => {
    // set and get user info
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [])


    return (
        <div>
            <div className='main-div'>
                <div>
                    <h4 className='User-list-title'>USERS LIST</h4>
                    {
                        users?.map(user =>
                            <div>
                                <h3>user name:{user?.profile?.username}</h3>
                            </div>
                        )
                    }
                </div>
                <div>
                    <h4 className='User-list-title'>USER DETAILS</h4>

                </div>
            </div>
        </div>
    );
};

export default Users;