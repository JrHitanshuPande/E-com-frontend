import { useState, useEffect } from 'react';

const usefetch1 = (url, name ,email,password) => {


    // setTimeout(() => {
      fetch(url+`?name=${name}&email=${email}&password=${password}`)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err)
      })
//     // }, 1);
//   }, [url])

// return { data, isPending, error };
}
export default usefetch1;