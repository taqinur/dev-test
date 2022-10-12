import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({questions}) => {
    console.log(questions);
    const {question, options, correctAnswer} = questions; 
      

    const notify = () => toast.info(`Correct answer: ${correctAnswer}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;

    return (
        <div class="mx-auto mt-6 p-6 max-w-xl bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class = "flex flex-row">
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question.slice(3,-4)}</h5>
            <button onClick={notify}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            <ToastContainer></ToastContainer>
            </div>
            <small>
            {
                options.map( option => <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-3 h-3 ml-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <p class="w-full ml-6 font-normal text-gray-700 dark:text-gray-400"> {option}</p>
                <label for="bordered-radio-1" class="py-4 ml-6 w-full text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>)
            } 
            </small>
        </div>
    );
};

export default Questions;