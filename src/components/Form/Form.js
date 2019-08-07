import React from 'react';
import image from './assets/bond_approve.jpg';
import TextField from './TextField';

class Form extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      password: '',
      errorMessageForName: '',
      errorMessageForLastName: '',
      errorMessageForPassword: '',
      isDataCorrect: false
    };

    handleInputChange = (e) => {
      this.setState({ 
        errorMessageForName: '',
        errorMessageForLastName: '',
        errorMessageForPassword: '',
        [e.target.name]: e.target.value
      })
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.checkInputValues(this.convertValuesToLowerCase());
    };
    
    convertValuesToLowerCase = () => {
      const {firstName, lastName, password} = this.state;
      var inputValues = {
        firstName: firstName,
        lastName: lastName,
        password: password
      };
      for (let valueProperty in inputValues) {
        inputValues[valueProperty] = inputValues[valueProperty].toLowerCase()
        console.log(valueProperty + ': ' + inputValues[valueProperty]);
      }
      return inputValues
    }

    checkInputValues = (valuesObject) => {
      
      var inputValues = valuesObject;

      if (inputValues.firstName === '') {
        this.setState({ errorMessageForName: 'Нужно указать имя' })
      } else if (inputValues.firstName !== 'james') {
        this.setState({ errorMessageForName: 'Имя указано не верно' })
      } else { console.log('name is correct')}
      
      if (inputValues.lastName === '') {
        this.setState({ errorMessageForLastName: 'Нужно указать фамилию' })
      } else if (inputValues.lastName !== 'bond') {
        this.setState({ errorMessageForLastName: 'Фамилия указана не верно' })
      } else { console.log('lastname is correct') }
      
      if (inputValues.password === '') {
        this.setState({ errorMessageForPassword: 'Нужно указать пароль' })
      } else if (inputValues.password !== '007') {
        this.setState({ errorMessageForPassword: 'Пароль указан не верно' })
      } else {
        console.log('password is correct')
      }

      if (inputValues.firstName === 'james' && inputValues.lastName === 'bond' && inputValues.password === '007') {
          this.setState({ isDataCorrect: true }) 
      }

    }


    render() {

      const { firstName, lastName, password, errorMessageForName, errorMessageForLastName, errorMessageForPassword, isDataCorrect } = this.state;

      return (
      <div className="app-container">
        { isDataCorrect ? <img src={image} alt='james_bond' className='t-bond-image'/>
        : <form className="form">

        <h1>Введите свои данные, агент</h1>

        <TextField 
          inputKey="firstName"
          label="Имя"
          onChange={this.handleInputChange}
          value={firstName}
          inputClassName="field__input field-input t-input-firstname"
          spanClassName="field__error field-error t-error-firstname"
          errorMessage={errorMessageForName}/>

        <TextField 
          inputKey="lastName"
          label="Фамилия"
          onChange={this.handleInputChange}
          value={lastName}
          inputClassName="field__input field-input t-input-lastname"
          spanClassName="field__error field-error t-error-lastname"
          errorMessage={errorMessageForLastName}/>

        <TextField 
          inputKey="password"
          label="Пароль"
          onChange={this.handleInputChange}
          value={password}
          inputClassName="field__input field-input t-input-password"
          spanClassName="field__error field-error t-error-password"
          errorMessage={errorMessageForPassword}/>

        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" onClick={this.handleSubmit}></input>
        </div>
        
        </form> }
      </div>

      )
    }
  }

export default Form;
