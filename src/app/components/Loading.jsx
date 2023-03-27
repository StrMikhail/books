import React from 'react';
import { ReactComponent as Loader } from '../img/loader.svg';
const Loading = () => {
    return (
        <div className="loading">
            <Loader className="loading__svg" />
        </div>
    );
};

export default Loading;
