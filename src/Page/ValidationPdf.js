import React from 'react';
import { Link } from 'react-router-dom';
import './validationpdf.css';

const ValidationPdf = () => {
  const [pdf, setPdf] = React.useState(null);

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
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <main className='main__validation'>
      <header>
        <h1>Validação de PDF</h1>
        <Link to="/">Voltar home</Link>
      </header>

      <form>
        <label>
          <input 
            type="file"
            //id='filepdf'
            //name='filepdf'
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
    </main>
  )
}

export default ValidationPdf;