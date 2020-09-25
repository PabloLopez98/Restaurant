import React from 'react';
import './loading.scss';
import Loader from 'react-loader-spinner';

function loading() {
    return (
        <div className="loading-container">
            <Loader
                type="ThreeDots"
                color="goldenrod"
                height={100}
                width={100}
            />
        </div>
    )
}

export default loading;
