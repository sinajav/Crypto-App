import { useEffect, useState } from 'react';
import Header from './layout/Header';

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then((res) => res.json())
         .then((json) => setData(json));
   }, []);

   console.log(data);
   return (
      <>
         <Header />
      </>
   );
}

export default App;
