import React from 'react';
import { Link } from 'react-router-dom';
import './validationpdf.css';

const ValidationPdf = () => {
  
  function handleOnChange(e){
    console.log(e.target.files[0])
  }

  function handleSendPdf(e){
    e.preventDefault();
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

        <button onClick={handleSendPdf}>
          Validar
        </button>
      </form>
    </main>
  )
}

export default ValidationPdf;