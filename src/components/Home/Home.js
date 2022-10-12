import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Test from '../Test/Test';
import './Home.css';
import Lottie from "lottie-react";
import comp_quiz from "../../test.json";

const Home = () => {
    const testDetails = useLoaderData();
    const tests = testDetails.data;

    return (
        <div className="home-container">
            <div className='animation-container'>
                <Lottie  animationData={comp_quiz} loop={true} />
            </div>
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