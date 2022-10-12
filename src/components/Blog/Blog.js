import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 class="text-xl mb-6">Frequently asked questions</h2>
            <h4>1. What is the purpose of React Router?</h4>
            <p class="mb-6">Answer: In web application, Routing is a process of binding a web URL to a specific resource in the web application. In React, it is binding an URL to a component. React does not support routing natively as it is basically an user interface library. React community provides many third party component to handle routing in the React application. Let us learn React Router, a top choice routing library for React application.</p>
            <h4>2. What is context API?</h4>
            <p class="mb-6">Answer: In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.</p>
            <h4>3. What is useRef() hook?</h4>
            <p>Answer: useRef() hook helps us to access DOM nodes directly. In React, data-flow is unidirectional. If a child component in React, needs to update something in parent component, the parent needs to pass a reference to child. Child then uses the reference for updating the parent.</p>
        </div>
    );
};

export default Blog;