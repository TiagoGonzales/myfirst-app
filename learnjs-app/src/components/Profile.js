import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
        <h1>Profile Page</h1>
        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
        <p>E-mail: {user.email}</p>
    </div>
  );
}

export default Profile;
