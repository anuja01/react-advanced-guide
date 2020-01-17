import React from 'react';
import CodeSplitting from '../Components/CodeSplitting'
import App from '../Components/Context/WithoutContext';
import AppWithContext from '../Components/Context/WithContext';
import DynamicContext from '../Components/Context/DynamicContext';
const Main = () => {
    return (
        <div>
            <CodeSplitting />
            <br />
            <App />
            <br />
            <div>--------- With Context ----------</div>
            <AppWithContext />
            <br />
            <div>--------- Dynamic Context (Changing themes)--------</div>
            <DynamicContext />
        </div>
    )
}

export default Main;