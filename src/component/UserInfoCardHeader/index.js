import React, { useState } from 'react';
import { Dropdown, Menu, Pagination } from 'antd';
import * as s from './styles';
function UserInfoCardHeader({
    userData,
    setMinValue,
    setMaxValue,
    maxValue
}) {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Newest First');
    const handleMenuClick = (key) => {
        console.log('key', key);
        setSelectedMenuItem(key.item.props.children[1]);
    }

    const handlePagination = (page) => {
        if (page <= 1) {
            setMinValue(0);
            setMaxValue(4);
        }
        else {
            setMinValue(maxValue);
            setMaxValue(page * 4);
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="newestFirst">Newest First</Menu.Item>
            <Menu.Item key="oldestFirst">Oldest First</Menu.Item>
            <Menu.Item key="aTOz">Name A > Z</Menu.Item>
            <Menu.Item key="zTOa">Name Z > A </Menu.Item>
        </Menu>
    )

    const numberOfUsers = userData.length;
    return (
        <div className={s.userInfoCardHeaderRoot}>
            <div className="header-title-wrapper">
                Credentials Holder Directory
            </div>
            <div className="header-total-filter-and-pagination-wrapper">
                <div>
                    Total {numberOfUsers} Members
                </div>
                <div className="header-filter-wrapper">
                    <div>order by:</div>
                    <div>
                        {/* <Dropdown overlay={menu}> */}
                        {/* <div> */}
                        {selectedMenuItem}
                    </div>
                    {/* </Dropdown></div> */}
                </div>
                <div>
                    <Pagination
                        defaultCurrent={1}
                        showTotal={(total, range) => `Viewing ${range} of ${total}`}
                        defaultPageSize={4}
                        total={numberOfUsers}
                        onChange={handlePagination}
                    />
                </div>
            </div>
        </div>
    )
}
export default UserInfoCardHeader;