import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
    const cards = data.map(card => {
        return <Card key={card.id} {...card} />
    }
    )

  return (
    <div>
        <Header />
        {cards}
    </div>
  )
}

export default App