import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      Description: '',
      Att1: '0',
      Att2: '0',
      Att3: '0',
      Image: '',
      Rare: 'normal',
      Trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,

    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  onSaveButtonClick = (el) => {
    el.preventDefault();
  }

  render() {
    const {
      nome,
      Description,
      Att1,
      Att2,
      Att3,
      Image,
      Rare,
      Trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ Description }
          cardAttr1={ Att1 }
          cardAttr2={ Att2 }
          cardAttr3={ Att3 }
          cardImage={ Image }
          cardRare={ Rare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ Trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick
        />
        <Card
          cardName={ nome }
          cardDescription={ Description }
          cardAttr1={ Att1 }
          cardAttr2={ Att2 }
          cardAttr3={ Att3 }
          cardImage={ Image }
          cardRare={ Rare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ Trunfo }
        />
      </div>
    );
  }
}

export default App;
