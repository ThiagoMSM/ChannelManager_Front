import React from 'react';
import './PagNewAc.css'; 
import { useNavigate } from "react-router-dom";
import HeaderLogin from '../../../Components/Headers/HeaderLogin';

const PagNewAc: React.FC = () => {
    document.title = "Nova conta";
    const navigate = useNavigate();
    return (
        <div className='PageNewAc'>
            <div className='Header'>
            <HeaderLogin/>
            </div>
            <button onClick={() => navigate("/")}>Go to Page 0</button>
        </div>
    );
};

export default PagNewAc;