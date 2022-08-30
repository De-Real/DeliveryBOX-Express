import "./App.css";
import AddDelivery from "./components/AddForm/AddDelivery";
import Background from "./components/Background/Background";
import CartProvider from "./store/ListProvider";

function App() {
  return (
    <CartProvider>
      <Background>
        <AddDelivery />
        <div> Just text </div>
      </Background>
    </CartProvider>
  );
}

export default App;
