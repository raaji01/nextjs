// pages/ssr.js
import { useState, useEffect } from 'react';

// This is an example of a component that will be rendered on the client-side
const ClientComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h3>Client-Side Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// This is the server-side rendered page
const SSRPage = ({ serverData }) => {
  return (
    <div id='con'>
        <h2>Basic server and client side rendering</h2>
      <h2>Server-Side Rendered Page</h2>
      <p>Data from the server(Json Placeholder): {serverData}</p>
      <ClientComponent />
    </div>
  );
};

export async function getServerSideProps() {
    // Simulate fetching data from an API or database on the server side
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      const data = await response.json();
  
      // Return the data as props
      return {
        props: {
          serverData: data.title,
        },
      };
    } catch (error) {
      console.error('Error fetching server data:', error);
  
      // Return an empty object in case of an error
      return {
        props: {},
      };
    }
    
  }

export default SSRPage;
