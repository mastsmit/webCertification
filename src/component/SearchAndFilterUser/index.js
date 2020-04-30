import React, { useState } from 'react';
import { Input, Checkbox } from 'antd';


function SearchAndFilterUser({
    userData,
    credentials,
    updateUserData,
}) {

    const searchUser = (searchText) => {
        const temp = userData.filter(user => user.name.includes(searchText))
        updateUserData(temp);
    }

    const onChange = (e) => {
        searchUser(e.target.value);
    }

    const handleChangeInCheckbox = (checkedValues) => {
        const filteredUsers = userData.filter(user => {
            if (checkedValues.length === 0) {
                return user;
            }
            else {
                return JSON.stringify(user.credentials).includes((JSON.stringify(checkedValues)));
            }
        })
        updateUserData(filteredUsers)
    }


    return (
        <div>
            <div className="search-by-name">
                <div>
                    <Input onChange={onChange} />
                </div>
                <div>
                    <Checkbox.Group options={credentials} onChange={handleChangeInCheckbox} />
                </div>
            </div>
        </div>
    )
}
export default SearchAndFilterUser;