import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>Tell me about yourself.</p>
        </div>
    );
};

export default UserOutput;