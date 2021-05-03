import React from 'react'
import './App.css'
import Admin from './components/Admin'
import Header from './components/Header'
import Card from './components/Card'
import withFirebase from './hoc/withFirebase'

const App = ({
  match,
  recettes,
  ajouterRecette,
  majRecette,
  supprimerRecette,
  chargerExemple }) => {
  const cards = Object.keys(recettes)
    .map(key => <Card key={key} details={recettes[key]} />)

  return (
    <div className='box'>
      <Header pseudo={match.params.pseudo} />

      <div className="cards">
        {cards}
      </div>

      <Admin
        pseudo={match.params.pseudo}
        recettes={recettes}
        ajouterRecette={ajouterRecette}
        majRecette={majRecette}
        supprimerRecette={supprimerRecette}
        chargerExemple={chargerExemple} />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
