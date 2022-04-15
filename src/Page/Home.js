import React from 'react';
import { Link } from 'react-router-dom';
import './homeStyle.css';

const Home = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function data(){
      const response = await fetch('https://mini-project-api.vercel.app/certificado');
      const json = await response.json();
      setData(json)
    }
    data();
  }, []);

  function handleClick(id, curso){
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const dataEmissao = date.toLocaleDateString();

    fetch('https://mini-project-api.vercel.app/certificado', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json",
        "Origin": "https://react-miniproject.vercel.app/"
      },
      body: JSON.stringify({
        id,
        curso,
        timestamp,
        dataEmissao
      })
    })
    .then(response => response.blob())
    .then(pdfBlob => {
      const blobUrl = URL.createObjectURL(pdfBlob);
      window.open(blobUrl, "_blank", "scrollbars=yes, resizable=yes, top=100, left=500, width=500, height=500");
    })
    .catch(erro => console.error(erro))
  }
  
  return (
    <main className='main__container'>
      <header>
        <h1>CERTIFICADOS</h1>
        <Link to="/validation">Validar PDF</Link>
      </header>

      {data.map(({id, curso}) => (
        <div
          className='main__container__course'
          key={id}>
          <h2>{curso}</h2>
          <button 
            onClick={() => handleClick(id, curso)}
          >
            Download
          </button>
        </div>
      ))}
    </main>
  )
}

export default Home;