import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import * as s from './styles';

function UserInfoCard({
    userData,
    minValue,
    maxValue
}) {
    const numberOfUsers = userData.length;
    return (
        <div className={s.userCardCompRoot}>
            {
                numberOfUsers > 0 ?
                    (userData && userData.slice(minValue, maxValue)
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
                                            {user.credentials && Object.keys(user.credentials).map(key => (
                                                <div className="single-credential-tag">{key}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="last-updated-details">
                                    {user.updatedAt}
                                </div>
                            </div>
                        )))
                    :
                    <div className="user-not-found-card">
                        <div ><SearchOutlined /></div>
                        <div className="user-not-found-text-wrapper">sorry,we couldn't find any profiles matching your search criteria...</div>
                    </div>
            }
        </div>
    )
}
export default UserInfoCard;