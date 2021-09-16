import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <MainContainer>
            <h1>
                Welcome to the<br />
                Mern stack
            </h1>
        </MainContainer>
    )
}

export default Header;

//MAIN CONTAINER

const MainContainer = styled.header`
    background: #252529;
    height: 25rem;

    h1{
        transform: translate(-50%, -50%);
        color:#fff;
        font-weight:900;
        position:absolute;
        top:25%;
        left:50%;
    }
`;
