import Message from "./components/Message"
import ListGroup from "./components/ListGroup"
import { MoviePage } from "./pages/MoviePage"
import { CitiesPage } from "./pages/CitiesPage";
import { useState } from "react";


export default function App() {
  const pages = {
    home: MoviePage,
    cities: CitiesPage,
  }

  const [state, setState] = useState<keyof typeof pages | undefined>(undefined)

  if (state) {
    const Page = pages[state]
    return <Page />
  }
  else {

    return (
      <>
        <h1>Hi!</h1>
        <button className="btn btn-primary" onClick={() => setState("cities")} >Cities Page</button>
        <br /> <br /> 
        <button className="btn btn-primary" onClick={() => setState("home")}>Movie Page</button>
      </>
    );
  }
}