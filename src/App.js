import "./App.css";
import AddDelivery from "./components/AddForm/AddDelivery";
import Background from "./components/Background/Background";
import DisplayList from "./components/DisplayList/Display/DisplayList";
import CartProvider from "./store/ListProvider";

function App() {
  return (
    <CartProvider>
      <Background>
        <AddDelivery />
        <DisplayList />
      </Background>
    </CartProvider>
  );
}

export default App;
