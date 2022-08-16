import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="form">
        <h2>Adicionar Nova Carta</h2>
        <label htmlFor="nome">
          {' '}
          NOME :
          <input
            type="text"
            name="nome"
            onChange={ onInputChange }
            value={ cardName }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          {' '}
          DESCRIÇÃO :
          <textarea
            name="Description"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="att1">
          {' '}
          1º ATRIBUTO :
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="Att1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="att2">
          {' '}
          2º ATRIBUTO :
          <input
            type="number"
            value={ cardAttr2 }
            name="Att2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="att3">
          {' '}
          3º ATRIBUTO :
          <input
            type="number"
            name="Att3"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="img">
          {' '}
          IMAGEM :
          <input
            type="text"
            name="Image"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="isRare">
          {' '}
          GRAU DE RARIDADE:
          <select
            name="Rare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal"> NORMAL </option>
            <option value="raro"> RARO </option>
            <option value="muito raro"> MUITO RARO </option>
          </select>
        </label>

        {hasTrunfo === false
          ? (
            <label htmlFor="isSuper">
              {' '}
              SUPER-TRUNFO
              <input
                type="checkbox"
                name="Trunfo"
                checked={ cardTrunfo }
                data-testid="trunfo-input"
                onChange={ onInputChange }
              />
            </label>
          ) : '"Você já tem um Super Trunfo em seu baralho"'}
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          SALVAR

        </button>
        {/* <button
          type="submit"
          data-testid="delete-button"
          onClick={ onSaveButtonClick }
        >
          EXCLUIR

        </button> */}
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
