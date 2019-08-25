import React, {Component} from 'react'

class Formulaire extends Component {

  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    const { addMessage, pseudo, length } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }

    // Ajout du message
    addMessage(message)

    // Reset
    this.setState({ message: '', length })

  }

  handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = (event) => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='form'>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          required
          maxLength='140' />
        <div className='info'>
          { this.state.length }
        </div>
        <button type='submit'>
          Envoyer !
        </button>

      </form>
    )
  }
}

export default Formulaire
