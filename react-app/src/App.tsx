import { MoviePage } from "./pages/MoviePage"
import { CitiesPage } from "./pages/CitiesPage";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './styles/MoviePage.css'

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
        <button className="btn btn-primary" onClick={() => setState("cities")} >Cities Page</button>
        <br /> <br /> 
        <button className="btn btn-primary" onClick={() => setState("home")}>Movie Page</button>
      </>
    );
  }
}