import React, { useState } from 'react';
import { Input, Checkbox, Menu } from 'antd';
import * as s from './styles';

const { SubMenu } = Menu;
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
        <div className={s.searchAndFilterUserRoot}>
            <div className="search-by-name">
                <div className="search-label">Name</div>
                <div>
                    <Input onChange={onChange} placeholder="Search by name" />
                </div>
            </div>
            <div className="search-by-credentials"></div>
            <Checkbox.Group options={credentials} onChange={handleChangeInCheckbox} />
        </div>
    )
}
export default SearchAndFilterUser;