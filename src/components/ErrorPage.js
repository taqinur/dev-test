import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 class="text-center  text-xl text-red-600">Oops! An error occured!</h1>
            <br />
            <p>{error.status} {error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;