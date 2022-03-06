import React,{ useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Component = () => {
  //get code from url
  const [params] = useSearchParams();
  const code = useRef(params.get('code'));
  
  useEffect(() => {
    //login request
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://localhost:8080/api/login/facebook?code=${code.current}`
        });
        console.log(response.data)
      } catch (e) {
        console.log(e.response.data);
      }
    };
    
    fetchData();
  }, []);
  
  return <>
    <h1>Hello</h1>
  </>
}

export default Component;