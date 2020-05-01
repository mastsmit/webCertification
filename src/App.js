import React, { useState } from 'react';
import UserInfoCard from './component/UserInfoCard';
import UserInfoCardHeader from './component/UserInfoCardHeader';
import SearchAndFilterUser from './component/SearchAndFilterUser';
import moment from 'moment';
import * as s from './styles';
import './App.css';
const data = [
  {
    userId: 1,
    name: 'smit patel',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hi',
    credentials: { 'Associate Cloud Engineer': 1, 'Professional Cloud Network Engineer': 1, 'Professional Cloud Security Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 2,
    name: 'sandip patel',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hello',
    credentials: { 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 3,
    name: 'vaibhav patel',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hi',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1, 'Google Cloud Platform': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 4,
    name: 'udit Shah',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'udit',
    credentials: { 'Cloud Engineer': 1, 'Cloud Architect': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 5,
    name: 'nirav',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hi',
    credentials: { 'Cloud Engineer': 1, 'Cloud Architect': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 6,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 7,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 8,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 9,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 10,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 11,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 12,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: { 'Associate Cloud Engineer': 1, 'Cloud Engineer': 1 },
    updatedAt: moment().format('LLLL'),
  },
]

const credentials = ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform', 'Cloud Architect', 'Professional Cloud Network Engineer', 'Professional Cloud Security Engineer'];
function App() {
  const defaultPageSize = 4;
  const [computedData, setComputedData] = useState(data);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(defaultPageSize);
  const totalNumberOfUsers = data.length;
  // const updateComputedData = (temp) => {
  //   setComputedData(temp)
  // }


  return (
    <div className={s.appRoot} >
      <div className="search-and-filter-wrapper">
        <SearchAndFilterUser credentials={credentials} updateUserData={setComputedData} userData={data} computedData={computedData} />
      </div>
      <div className="header-and-user-info-wrapper" >
        <div>
          <UserInfoCardHeader
            userData={computedData}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            maxValue={maxValue}
            totalNumberOfUsers={totalNumberOfUsers}
            defaultPageSize={defaultPageSize} />
        </div>
        <div>
          <UserInfoCard userData={computedData} credentials={credentials} minValue={minValue} maxValue={maxValue} />
        </div>
      </div>
    </div>
  );
}
export default App;
