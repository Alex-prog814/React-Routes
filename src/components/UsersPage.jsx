import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    
  return (
    <>
        <h2>Users Page</h2>
        {users.map(user => (
            <Link to={`/users/${user.id}`} key={user.id}>
                <li>{user.name}</li>
            </Link>
        ))}
    </>
  )
}

export default UsersPage