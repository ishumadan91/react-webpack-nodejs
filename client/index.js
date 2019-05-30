// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';

// ReactDOM.render(<App />, document.getElementById('root'));



import { fetchViaPromise, fetchViaCallback } from './utils/apis';


//multiple api calls
fetchViaCallback('/api/dummy', (res1) => {
    fetchViaCallback('/api/dummy2', (res2) => {
        console.log(res1, res2)
    })
})


fetchViaPromise('/api/dummy').then((res) => {
    console.log(res)
})
//multiple api calls
Promise.all([fetchViaPromise('/api/dummy'), fetchViaPromise('/api/dummy2')]).then((responses) => {
    console.log(responses)
})

async function processApi() {
    const res = await fetchViaPromise('/api/dummy')
    console.log(res)
    // any processing
}
processApi()
