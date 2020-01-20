import React from 'react'

const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            // secretValue is common accross components
            // extract it to HOC and use it with other components
            const secretValue = 50;
            return (
                <WrappedComponent
                    secretValue={secretValue}
                />
            )
        }
    }
    return HOC;
}
const MyComponent1 = (props) => {
    return (
        <div>MyComponent1 secret is {props.secretValue}</div>
    )
}
const MyComponent2 = (props) => {
    return (
        <div>MyComponent2 secret is {props.secretValue}</div>
    )
}
const SimpleHOC1 = higherOrderComponent(MyComponent1)
const SimpleHOC2 = higherOrderComponent(MyComponent2)

const MainHOC = () => {
    return (
        <>
            {/* these component don't need to repeat secretValue */}
            <SimpleHOC1 />
            <SimpleHOC2 />
        </>
    )
}

export default MainHOC;