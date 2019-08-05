import React from 'react';
import image from './assets/bond_approve.jpg';

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

      if (this.state.firstName === '') {
        this.setState({ errorMessageForName: 'Нужно указать имя' })
      } else if (this.state.firstName !== 'James') {
        this.setState({ errorMessageForName: 'Имя указано не верно' })
      } else { console.log('name is correct')}
      
      if (this.state.lastName === '') {
        this.setState({ errorMessageForLastName: 'Нужно указать фамилию' })
      } else if (this.state.lastName !== 'Bond') {
        this.setState({ errorMessageForLastName: 'Фамилия указана не верно' })
      } else { console.log('lastname is correct') }
      
      if (this.state.password === '') {
        this.setState({ errorMessageForPassword: 'Нужно указать пароль' })
      } else if (this.state.password !== '007') {
        this.setState({ errorMessageForPassword: 'Пароль указан не верно' })
      } else {
        console.log('password is correct')
      }

      if (this.state.firstName === 'James' && this.state.lastName === 'Bond' && this.state.password === '007') {
          this.setState({ isDataCorrect: true }) 
      }
    };

    render() {

      const { firstName, lastName, password, errorMessageForName, errorMessageForLastName, errorMessageForPassword, isDataCorrect } = this.state;

      return (
      <div className="app-container">
        { isDataCorrect ? <img src={image}/>
        : <form className="form">

        <h1>Введите свои данные, агент</h1>

        <p key="firstName" className="field">
            <label className="field__label" htmlFor="firstname">
            <span className="field-label">Имя:</span>
            </label> 

            <input type="text" name="firstName" value={firstName} className="field__input field-input t-input-firstname" onChange={this.handleInputChange} />
            <span className="field__error field-error t-error-firstname">{errorMessageForName}</span>
        </p>

        <p key="lastName" className="field">
            <label className="field__label" htmlFor="lastname">
            <span className="field-label">Фамилия:</span>
            </label> 

            <input type="text" name="lastName" value={lastName} className="field__input field-input t-input-lastname" onChange={this.handleInputChange} />
            <span className="field__error field-error t-error-lastname">{errorMessageForLastName}</span>
        </p>

        <p key="password" className="field">
            <label className="field__label" htmlFor="password">
            <span className="field-label">Пароль:</span>
            </label> 

            <input type="text" name="password" value={password} className="field__input field-input t-input-password" onChange={this.handleInputChange} />
            <span className="field__error field-error t-error-password">{errorMessageForPassword}</span>
        </p>

        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" onClick={this.handleSubmit}></input>
        </div>
        
        </form> }
      </div>

      )
    }
  }

export default Form;