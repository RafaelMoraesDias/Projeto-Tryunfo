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
      isSaveButtonDisabled: true,

    };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.validateValue = this.validateValue.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateValue());
  }

  validateValue = () => {
    const {
      nome,
      Description,
      Att1,
      Att2,
      Att3,
      Image,
      Rare,
    } = this.state;
    const maxAtt = 90;
    const maxAllAtt = 210;
    let validator = true;
    const parset1 = parseFloat(Att1);
    const parset2 = parseFloat(Att2);
    const parset3 = parseFloat(Att3);

    if (nome !== '' && Description !== '' && Image !== '' && Rare !== ''
      && (parset1 + parset2 + parset3) <= maxAllAtt
      && parset1 >= 0 && parset1 <= maxAtt
      && parset2 >= 0 && parset2 <= maxAtt
      && parset3 >= 0 && parset3 <= maxAtt) validator = false;
    console.log(validator);
    this.setState({ isSaveButtonDisabled: validator });
  }

    onSaveButtonClick = (el) => {
      el.preventDefault();
    };

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
            onSaveButtonClick={ this.onSaveButtonClick }
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
