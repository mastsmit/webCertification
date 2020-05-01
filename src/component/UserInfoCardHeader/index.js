import React, { useState } from 'react';
import { Dropdown, Menu, Pagination, Select } from 'antd';
import * as s from './styles';
const { Option } = Select;
function UserInfoCardHeader({
    userData,
    setMinValue,
    setMaxValue,
    maxValue,
    totalNumberOfUsers,
    defaultPageSize
}) {
    const handleMenuClick = (key) => {
        console.log('key', key);
    }

    const handlePagination = (page) => {
        const offset = (page - 1) * defaultPageSize
        console.log('page', page);
        if (page <= 1) {
            setMinValue(0);
            setMaxValue(defaultPageSize);
        }
        else {
            setMinValue(offset);
            setMaxValue(page * defaultPageSize);
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

    return (
        <div className={s.userInfoCardHeaderRoot}>
            <div className="header-title-wrapper">
                Credentials Holder Directory
            </div>
            <div className="header-total-filter-and-pagination-wrapper">
                <div className="header-total-wrapper">
                    Total {totalNumberOfUsers} Members
                </div>
                <div className="header-filter-wrapper">
                    {/* <div>order by:</div> */}
                    <div>
                        {/* <Select defaultValue="newestFirst" dropdownClassName="dropDown-wrapper"
                            dropdownStyle={{
                                width: '21vw', backgroundColor: 'white', height: '22vh'
                            }}>
                            <Option value="newestFirst">NewestFirst</Option>
                            <Option value="OldestFirst">Oldest First</Option>
                            <Option value="new">A to Z</Option>
                            <Option value="newest">Z to A</Option>
                        </Select> */}
                        {/* <Dropdown overlay={menu}> */}
                        {/* <div> */}
                        {/* {selectedMenuItem} */}
                    </div>
                    {/* </Dropdown></div> */}
                </div>
                <div>
                    <Pagination
                        defaultCurrent={1}
                        showTotal={(total, range) => `Viewing ${range} of ${total}`}
                        defaultPageSize={defaultPageSize}
                        total={userData.length}
                        onChange={handlePagination}
                    />
                </div>
            </div>
        </div>
    )
}
export default UserInfoCardHeader;