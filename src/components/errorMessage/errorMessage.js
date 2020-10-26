import React from 'react';
import styled from 'styled-components';
import img from './error.png';

const ErrorImage = styled.img`
    width: 50px;
`

const ErrorMessage = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <span>Something goes wrong</span>
            <ErrorImage src={img}/>
        </div>
    )
}

export default ErrorMessage;