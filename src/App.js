import React from "react";
import "./App.css"
const LazyHome= React.lazy(()=> import ('./components/Home'))
function App (){
  return(
    
        
        <React.Suspense fallback="Loading...">
            
            <LazyHome/>
        </React.Suspense>
        
    
  )
}
export default App;