import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Test from '../Test/Test';
import './Home.css';

const Home = () => {
    const testDetails = useLoaderData();
    const tests = testDetails.data;
    console.log(tests);
    return (
        <div className="test-container">
            {
                tests.map(test => <Test key={test.id}
                test={test}>
                </Test>)
            }
        </div>
    );
};

export default Home;