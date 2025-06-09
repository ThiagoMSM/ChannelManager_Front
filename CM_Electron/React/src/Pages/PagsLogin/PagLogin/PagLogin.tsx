import React from "react";
import { useNavigate } from "react-router-dom";

function PagHome() {
    const navigate = useNavigate();

    

    return (
        <>
            <h1>PagLogin</h1>
            <button onClick={() => navigate("/PagNewAccount")}>Go to Page 1 (Nova conta) </button>
            <button onClick={() => navigate("/page2")}>Go to Page 2 (Esqueceu senha)</button>
            <button onClick={() => navigate("/page3")}>Go to Page 3 (Nova senha)</button>
            
        </>
    );
}

export default PagHome;