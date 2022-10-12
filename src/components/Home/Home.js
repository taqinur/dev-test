import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Test from '../Test/Test';
import './Home.css';

const Home = () => {
    const testDetails = useLoaderData();
    const tests = testDetails.data;
    
    return (
        <div className="home-container">
            <div className="test-container">
            {
                tests.map(test => <Test key={test.id}
                test={test}>
                </Test>)
            }
        </div>
        </div>
    );
};

export default Home;