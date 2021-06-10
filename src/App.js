import React from 'react'
import Tesseract from 'tesseract.js';

const loadData = async()=>{

    const result = await Tesseract.recognize(
        'https://tesseract.projectnaptha.com/img/eng_bw.png',
        'eng',
        { logger: m => console.log(m) }
        );

    console.log(result);
}
loadData();
const App =()=>{

    return(
        <>
            <h1>Hello React</h1>
        </>
    )
}

export default App;