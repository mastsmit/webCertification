import React, { useState } from 'react';
import { Input, Checkbox, Menu, Button } from 'antd';
import * as s from './styles';

const { SubMenu } = Menu;
function SearchAndFilterUser({
    userData,
    credentials,
    updateUserData,
    computedData,
}) {
    const [inputText, setInputText] = useState("");
    const [checkedBoxes, setCheckedBoxes] = useState([]);

    const searchUser = (searchText) => {
        const temp = userData.filter(user => user.name.includes(searchText))
        updateUserData(temp);
    }

    const onChange = (e) => {
        searchUser(e.target.value);
        setInputText(e.target.value)
    }

    const handleClearFilters = () => {
        setInputText("");
        setCheckedBoxes([]);
        updateUserData(userData);
    }

    const handleChangeInCheckbox = (checkedValues) => {
        setCheckedBoxes(checkedValues);
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
            <div className='search-credential-text-and-clear-filter-wrapper'>
                <div>Search credential holders:</div>
                <div><Button onClick={handleClearFilters}>Clear Filters</Button></div>
            </div>
            <div className="search-by-name">
                <div className="search-label">Name</div>
                <div className="search-bar-wrapper">
                    <Input onChange={onChange} value={inputText} placeholder="Search by name" style={{ minHeight: '28px', fontSize: '15px', width: '98%' }} />
                </div>
            </div>
            <div className="search-by-credentials"><div className="text-styles">Credentials</div>
                <Checkbox.Group options={credentials} onChange={handleChangeInCheckbox} value={checkedBoxes} />
            </div>
        </div>
    )
}
export default SearchAndFilterUser;