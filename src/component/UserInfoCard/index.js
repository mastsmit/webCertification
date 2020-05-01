import React, { useState } from 'react';
import * as s from './styles';

function UserInfoCard({
    userData,
    minValue,
    maxValue
}) {
    return (
        <div className={s.userCardCompRoot}>
            {
                userData && userData.length > 0 && userData.slice(minValue, maxValue)
                    .map(user => (
                        <div className="single-user-card">
                            <div className='user-profile-wrapper'>
                                <div className="user-image-wrapper">
                                    <div className="user-image">
                                        <img src={user.imageUrl} alt='hello i am img' width={100} height={100} style={{ borderRadius: '50%' }}></img>
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
                                            <div className="single-credential-tag">{credential}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="last-updated-details">
                                {user.updatedAt}
                            </div>
                        </div>
                    ))}
        </div>
    )
}
export default UserInfoCard;