import "./userinfos.css";

const UserInfos = () => {
  return (
    <aside className="user-infos-aside">
      <img src="https://i.imgur.com/VdcR7Vs.png" className="user-img"></img>
      <ul>
        <li>User Name</li>
        <li>User Age</li>
        <li>useremail@gmail.com</li>
        <li>Games comentados:</li>
        <li>Games classificados:</li>
      </ul>
    </aside>
  );
};

export default UserInfos;
