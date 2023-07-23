import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllUser } from '../services/auth.service';
import TopTwoProductsComponent from '../components/topTwoProducts/TopTwoProducts.Component';

const HomePageComponent = () => {

  const [users, setUsers] = useState({});

  useEffect(() => {
    getAllUser().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {users.length > 0 && users.map((user) => {
          return <li key={user._id}><Link to={`/user/${user._id}`}>{user.username} - {user.email}</Link></li>
        })}
      </ul>
      <h2>Top products</h2>
      <TopTwoProductsComponent />
    </>
  );
}

export default HomePageComponent