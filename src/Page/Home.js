import React from 'react';

const Home = () => {
  const [data, setData] = React.useState([]);
  const [path, setPath] = React.useState([]);

  React.useEffect(() => {
    async function data(){
      const response = await fetch('http://localhost:5000/certificado');
      const json = await response.json();
      setData(json)
    }
    data();
  }, []);

  function handleClick(id, curso){
    fetch('http://localhost:5000/certificado', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        id,
        curso
      })
    })
    .then(response => response.json())
    .then(json => setPath(json))
    .catch(erro => console.error(erro))
  }
  
  return (
    <div>
      <h1>CERTIFICADOS</h1>
      {data.map(({id, curso, name}) => (
        <div
          onClick={() => handleClick(id, curso)} 
          style={{
            border: '2px solid',
            width: '500px',
            padding: '16px',
            cursor: 'pointer'
          }}
          key={id}>
          <h3>{curso}</h3>
        </div>
      ))}
      
      <hr/>
      <p>{ path && path.filename }</p>
    </div>
  )
}

export default Home