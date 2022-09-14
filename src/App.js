import "./App.css";
import AddDelivery from "./components/AddForm/AddDelivery";
import Background from "./components/Background/Background";
import DisplayList from "./components/DisplayList/Display/DisplayList";
import CartProvider from "./store/ListProvider";
import ModalProvider from "./store/ModalProvider";

function App() {
  return (
    <CartProvider>
      <Background>
        <AddDelivery />
        <ModalProvider>
          <DisplayList />
        </ModalProvider>
      </Background>
    </CartProvider>
  );
}

export default App;
