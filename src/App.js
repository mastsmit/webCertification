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
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 2,
    name: 'sandip patel',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hello',
    credentials: ['Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 3,
    name: 'vaibhav patel',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hi',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 4,
    name: 'udit Shah',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'udit',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 5,
    name: 'nirav',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    bio: 'hi',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 6,
    name: 'divyesh',
    bio: 'hello',
    imageUrl: 'https://avatars3.githubusercontent.com/u/29017855?s=460&u=59fd51dac68314a0859f083e0ce86ae8a815ebe6&v=4',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
]

const credentials = ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform', 'Cloud Architect'];
function App() {
  const [computedData, setComputedData] = useState(data);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);

  const updateComputedData = (temp) => {
    setComputedData(temp)
  }


  return (
    <div className={s.appRoot} >
      <div className="search-and-filter-wrapper">
        <SearchAndFilterUser credentials={credentials} updateUserData={updateComputedData} userData={data} />
      </div>
      <div className="header-and-user-info-wrapper" >
        <div>
          <UserInfoCardHeader userData={computedData} setMinValue={setMinValue} setMaxValue={setMaxValue} maxValue={maxValue} />
        </div>
        <div>
          <UserInfoCard userData={computedData} credentials={credentials} minValue={minValue} maxValue={maxValue} />
        </div>
      </div>
    </div>
  );
}
export default App;
