import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

  return (
    <div>
        <h2>User Details</h2>
        {user && (<>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </>)}
    </div>
  )
}

export default UserDetails