import { useState } from "react";
import "./App.css";
import AddDelivery from "./components/AddForm/AddDelivery";
import Background from "./components/Background/Background";
import DisplayList from "./components/DisplayList/Display/DisplayList";
import EditModal from "./components/Modals/EditModal";
import CartProvider from "./store/ListProvider";

function App() {
  const [isEditingOpened, setIsEditiongOpened] = useState(false);

  const onEditClose = () => {
    setIsEditiongOpened(false);
  };

  return (
    <CartProvider>
      <Background>
        <AddDelivery />
        <DisplayList />
        {isEditingOpened && <EditModal />}
      </Background>
    </CartProvider>
  );
}

export default App;
