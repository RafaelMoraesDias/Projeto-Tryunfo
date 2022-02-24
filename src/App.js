import React from 'react';
import './App.css';
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
      cards: [], // criado novo estado com array vazia

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
      const newCard = { ...this.state }; // recebe o novo estado sem apagar o anterior
      this.setState((prevState) => ({ // setado um novo estado mantendo o estado anterior
        nome: '',
        Description: '',
        Att1: 0,
        Att2: 0,
        Att3: 0,
        Image: '',
        Rare: 'normal',
        Trunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
        cards: [...prevState.cards, newCard], // atribuindo a dinamica ao array vazio
      }), () => this.CheckTrunfo());
    };

    CheckTrunfo = () => {
      const { cards } = this.state;
      const result = cards.some((el) => el.Trunfo);
      console.log(result);
      if (result === true) {
        this.setState({ hasTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
      }
    }

    saveDeck = () => {
      // const { cards } = this.state;
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
      } = this.state;
      return (
        <div className="tela">
          <h1>Tryunfo</h1>
          <Form
            { ...this.state } // renderiza o estado anterior
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
            { ...this.state }
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
          <div className="baralho">
            <h1> Meu Baralho </h1>
          </div>
        </div>
      );
    }
}

export default App;
