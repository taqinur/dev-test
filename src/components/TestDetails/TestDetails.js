import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TestDetails = () => {
    const data = useLoaderData();
    const {name, total} = data.data;
    const questions = data.data.questions;

    return (
        <div class="bg-gray-400">
            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name} Test</h2>
            <h4>Answer {total} Questions</h4>
            {
                questions.map( question =><Questions key={question.id}
                questions = {question}
                ></Questions>)
            }
        </div>
    );
};

export default TestDetails;