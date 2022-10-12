import React from 'react';

const Questions = ({questions}) => {
    console.log(questions);
    const {question, options, correctAnswer} = questions; 

    return (
        <div class="mt-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question.slice(3,-4)}</h5>
            <small>
            {
                options.map( option => <p class="font-normal text-gray-700 dark:text-gray-400">{option}</p>)
            } 
            </small>
        </div>
    );
};

export default Questions;