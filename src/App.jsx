import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(0);

  console.log('Component rendered');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://project-create-api-oxford-1-3000-production.up.railway.app/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if(response.ok) {
          const result = await response.json()
          console.log(result.values)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []);

  return <div>App</div>;
};

export default App
