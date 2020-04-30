import React, { useState } from 'react';
import * as s from './styles';

function UserInfoCard({
    userData
}) {
    return (
        userData.map(user => (
            <div className={s.userCardCompRoot}>
                <div className='user-profile-wrapper'>
                    <div className="user-image-wrapper">
                        <div>
                            <img src='./.' alt='hello i am img'></img>
                        </div>
                    </div>
                    <div className="user-name-and-credentials-wrapper">
                        <div className="user-name-wrapper">
                            {user.name}
                        </div>
                        <div className="user-bio-wrapper">
                            {user.bio}
                        </div>
                        <div className="user-credentials-wrapper">
                            {user.credentials.map(credential => (
                                <div>{credential}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="last-updated-details">
                    {user.updatedAt}
                </div>
            </div>
        ))

    )
}
export default UserInfoCard;