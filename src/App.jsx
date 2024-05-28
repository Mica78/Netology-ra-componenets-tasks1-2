import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc'
import ShopItemFuncCC from './components/ShopItemFunc/ShopItemFuncCC'
import './App.css'

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <>
      <ShopItemFunc info={item}/>
      <ShopItemFuncCC info={item}/>
    </>
  )
}

export default App
