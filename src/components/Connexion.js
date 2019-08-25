import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = (event) => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render() {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form onSubmit={this.handleSubmit} className='connexion'>
          <input
            onChange={this.handleChange}
            value={this.state.pseudo}
            type='text'
            placeholder='Pseudo'
            required />
            <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
