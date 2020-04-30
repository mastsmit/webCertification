import React, { useState } from 'react';
import UserInfoCard from './component/UserInfoCard';
import UserInfoCardHeader from './component/UserInfoCardHeader';
import SearchAndFilterUser from './component/SearchAndFilterUser';
import moment from 'moment';
import './App.css';
const data = [
  {
    userId: 1,
    name: 'smit patel',
    bio: 'hi',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 2,
    name: 'sandip patel',
    bio: 'hello',
    credentials: ['Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 3,
    name: 'vaibhav patel',
    bio: 'hi',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 4,
    name: 'udit Shah',
    bio: 'udit',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 5,
    name: 'nirav',
    bio: 'hi',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
    updatedAt: moment().format('LLLL'),
  },
  {
    userId: 6,
    name: 'divyesh',
    bio: 'hello',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer'],
    updatedAt: moment().format('LLLL'),
  },
]

const credentials = ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform', 'Cloud Architect'];
function App() {
  const [computedData, setComputedData] = useState(data);

  const updateComputedData = (temp) => {
    setComputedData(temp)
  }

  return (
    <div>
      <div>
        <SearchAndFilterUser credentials={credentials} updateUserData={updateComputedData} userData={data} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <UserInfoCardHeader />
        </div>
        <div>
          <UserInfoCard userData={computedData} credentials={credentials} />
        </div>
      </div>
    </div>
  );
}
export default App;
