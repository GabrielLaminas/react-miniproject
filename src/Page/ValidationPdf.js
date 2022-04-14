import React from 'react';
import { Link } from 'react-router-dom';
import './validationpdf.css';

const ValidationPdf = () => {
  const [pdf, setPdf] = React.useState(null);
  const [resultado, setResultado] = React.useState({});

  function handleOnChange(e){
    setPdf(e.target.files[0]);
  }

  function handleSendPdf(e){
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append('pdf', pdf);

    fetch('http://localhost:5000/validacao', {
      method: 'POST',
      body: dataForm
    })
    .then(response => response.json())
    .then(result => setResultado(result))
    .catch(error => console.log(error))
  }

  return (
    <main className='main__validation'>
      <header>
        <h1>Validação de PDF</h1>
        <Link to="/">Voltar home</Link>
      </header>

      <form>
        <label htmlFor='filepdf'>
          <input 
            type="file"
            id='filepdf'
            accept='.pdf'
            onChange={handleOnChange}
          />
        </label>
        <button
          onClick={handleSendPdf}
          style={
            pdf 
              ? {opacity: 1, cursor: 'pointer'} 
              : {opacity: .5, pointerEvents: 'none'}
          }
        >
          Validar
        </button>
      </form>
      {resultado.tipo === 'error' 
        ? (<p 
            style={{
              color: 'red', 
              fontSize: '1.125rem'
            }}
          >
            {resultado.mensagem}
          </p>)
        : (<p 
          style={{
            color: 'forestgreen', 
            fontSize: '1.125rem'
          }}
          >
            {resultado.mensagem}
          </p>)
      }
    </main>
  )
}

export default ValidationPdf;