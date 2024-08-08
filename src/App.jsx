import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return (
    <>
      {data &&
        data.map((i) => (
          <div key={i.id}>
            <h1>1</h1>
            <div>
              <h1>2</h1>
              {data.map((i) => (
                <div key={i.id}>
                  <h1>3</h1>
                  <div>
                    <h1>4</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}

export default App;
