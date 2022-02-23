import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="nome">
          {' '}
          NOME
          <input type="text" name="nome" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          {' '}
          DESCRIÇÃO
          <textarea name="descricao" data-testid="description-input" />
        </label>
        <label htmlFor="att1">
          {' '}
          1º ATRIBUTO
          <input type="number" name="att1" data-testid="attr1-input" />
        </label>
        <label htmlFor="att2">
          {' '}
          2º ATRIBUTO
          <input type="number" name="att2" data-testid="attr2-input" />
        </label>
        <label htmlFor="att3">
          {' '}
          3º ATRIBUTO
          <input type="number" name="att2" data-testid="attr3-input" />
        </label>
        <label htmlFor="img">
          {' '}
          IMAGEM
          <input type="text" name="img" data-testid="image-input" />
        </label>
        <label htmlFor="isRare">
          {' '}
          GRAU DE RARIDADE:
          <select name="isRare" data-testid="rare-input">
            <option value="normal"> NORMAL </option>
            <option value="raro"> RARO </option>
            <option value="muito raro"> MUITO RARO </option>
          </select>
        </label>
        <label htmlFor="isSuper">
          {' '}
          SUPER-TRUNFO
          <input type="checkbox" name="isTrunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">SALVAR</button>
      </div>

    );
  }
}

export default Form;
