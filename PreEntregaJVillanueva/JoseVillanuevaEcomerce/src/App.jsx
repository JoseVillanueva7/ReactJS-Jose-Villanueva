import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ItemDetailsContainer } from "./componets/ItemDetailsContainer";
import { ItemListContainer } from "./componets/ItemListContainer";
import { NavBar } from "./componets/NavBar";
function App() {
  

  return (
    <>
     
     <BrowserRouter>
     <NavBar />
       <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
        <Route path="*" element={404}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
