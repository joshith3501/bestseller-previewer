// import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
// import InputForm from "./components/InputForm";
// import InputForm from "./components/InputForm";
function App() {

  // let [idValue, setIdValue] = useState(0);


  // const updateValue = (id: number) => {
  //   console.log('value updated');
  //   setIdValue(id);
  // }

  return (
  <>
    {/* <InputForm onSubmit={updateValue}/> */}
    <BookList />
  </>
  )
}

export default App;
