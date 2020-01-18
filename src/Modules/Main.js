import React from 'react';
import CodeSplitting from '../Components/CodeSplitting'
import App from '../Components/Context/WithoutContext';
import AppWithContext from '../Components/Context/WithContext';
import DynamicContext from '../Components/Context/DynamicContext';
import ErrorBoundariySample, { ErrorBoundary } from '../Components/ErrorBoundaries';

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
            <br />
            <div>--------- Error Boundaries --------</div>
            <ErrorBoundary>
                <div>
                    {/* <ErrorBoundariySample /> */}
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default Main;