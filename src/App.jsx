import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Surround from './components/Surround'
import Slots from './components/Slots'
import Intervene from './components/Intervene'
import EventButtons from './components/EventButtons'
import List from './components/List'
function App() {
  const itms = [
    {name: 'Vijay' , email: 'vijaynair@mail.com'}, {name: 'Vishnu', email: 'vijaynair@mail.com' }, {name: 'Venugopal', email: 'vijaynair@mail.com' }
  ];
  return (
    <div className="App">  
    <EventButtons />
    <List items={itms} />

    </div>
  )
}

export default App
