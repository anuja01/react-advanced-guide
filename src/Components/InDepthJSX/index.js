import React from 'react';

const MainJSX = () => {
    return (
        <>
            <p>Use Dot Notation if there is a single module that exports many react components</p>
            <MultipleExports.DatePicker />
            <MultipleExports.Calendar />
            <p>spread attributes</p>
            <Button color='red' user='parker' speciality='web' onClick={() => alert('clicked')} />
        </>
    )
}

const MultipleExports = {
    DatePicker: () => (
        <div>DatePicekr</div>
    ),
    Calendar: () => (
        <div>Calendar</div>
    )
}

const Button = (props) => {
    const { color, ...rest } = props;
    console.log(`Button props: ${JSON.stringify(props)}`)
    console.log(`Button props: ${JSON.stringify(rest)}`) // doesn't have color
    return (
        <button style={{ color: color }} {...rest} >Click</button>
    )
}

export default MainJSX;