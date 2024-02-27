
import './App.css'
import CheckoutStepper from './components/CheckoutStepper.jsx'
const Checkkout_STEPS=[
  {
    name:"Customer Info",
    Component:()=><div>user info</div>
  },
  {
    name:"shipping Info",
    Component:()=><div>your product info</div>
  },
  {
    name:"Payment",
    Component:()=><div>your payment is succesfull</div>
  },
  {
    name:"Delivered",
    Component:()=><div>your product deliverd</div>
  },

]

function App() {
 
  return (
    <div>
      <h2>Checkout</h2>
    <CheckoutStepper stepconfig={Checkkout_STEPS} />   
    </div>
  )
}

export default App
