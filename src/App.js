import {Routes, Route} from 'react-router-dom'
import React from "react";
import "./App.css"
const LazyHome= React.lazy(()=> import ('./components/Home'))
function App (){
  return(
    <Routes>
        <Route path="/" element={
        <React.Suspense fallback="Loading...">
            
            <LazyHome/>
        </React.Suspense>
        }/>
    </Routes>
  )
}
export default App;