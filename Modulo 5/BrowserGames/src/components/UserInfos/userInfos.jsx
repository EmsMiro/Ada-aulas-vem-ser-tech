import React from "react";
import "./userinfos.css";

const UserInfos = () => {
  // Recuperando os dados do usuário do localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>Nenhum usuário encontrado</div>;
  }

  return (
    <aside className="user-infos-aside">
      <img src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png" className="user-img" alt="user-img" />
      <ul>
        <li>User Name: {user.name}</li>
        <li>User Age: {user.age}</li>
        <li>Email: {user.email}</li>
        <li>Games comentados:</li>
        <li>Games classificados:</li>
      </ul>
    </aside>
  );
};

export default UserInfos;
