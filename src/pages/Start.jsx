import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoLogin from '../components/TelaStart';
import LogoStart from '../components/StartLogo';





export default function Start () {
    return(
        <>
        <LogoStart />
        <BotaoLogin />
        </>
    )
}