import './profile.css';

import HeaderProfile from '../../HeaderProfile/HeaderProfile';
import UserInfos from '../../UserInfos/userInfos';
import BrowserGamesProfile from '../../BrowserGamesProfile/browserGamesProfile';
import React from 'react';

const Profile = () => {
    return(
        <>
         <HeaderProfile />
        <h1 className='title-profile-route'>Seu perfil</h1>
        <section className='container-profile'>
        <UserInfos />
        <BrowserGamesProfile />
        </section>        
        </>
       
    );
};

export default Profile;