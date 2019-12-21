import React from 'react';

const Button = ({classNames,children,type,color,onClick}) => {
    return (
        <button onClick={onClick} type={type} className={['btn','btn-'+ color, classNames].join(' ')}>
            {children}
        </button>
    );
};

export default Button;