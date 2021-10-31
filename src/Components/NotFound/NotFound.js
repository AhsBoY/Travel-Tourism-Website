import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
    return (
        <div className="App">
            <ErrorOutlineIcon className=" w-50 h-50" />
            <h2>You Shouldn't Visit Here</h2>
        </div>
    );
};

export default NotFound;