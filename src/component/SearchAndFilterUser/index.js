import React, { useState } from 'react';
import { Input, Checkbox, Menu } from 'antd';
import * as s from './styles';

const { SubMenu } = Menu;
function SearchAndFilterUser({
    userData,
    credentials,
    updateUserData
}) {

    const searchUser = (searchText) => {
        const temp = userData.filter(user => user.name.includes(searchText))
        updateUserData(temp);
    }

    const onChange = (e) => {
        searchUser(e.target.value);
    }

    const handleChangeInCheckbox = (checkedValues) => {
        let filteredUsers = userData;
        let andOp = false;
        filteredUsers = userData.filter(user => {
            checkedValues.map((tag, index) => {
                if (index === 0) {
                    andOp = true;
                }
                andOp = andOp && user.credentials[tag];
            });
            if (checkedValues.length === 0) {
                return true;
            }
            return andOp;
        });

        updateUserData(filteredUsers)
    }


    return (
        <div className={s.searchAndFilterUserRoot}>
            <div className="search-by-name">
                <div className="search-label">Name</div>
                <div className="search-bar-wrapper">
                    <Input onChange={onChange} placeholder="Search by name" style={{ minHeight: '28px', fontSize: '15px', width: '98%' }} />
                </div>
            </div>
            <div className="search-by-credentials"></div>
            <Checkbox.Group options={credentials} onChange={handleChangeInCheckbox} />
        </div>
    )
}
export default SearchAndFilterUser;