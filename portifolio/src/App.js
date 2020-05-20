import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./pages/";
import Product from "./pages/product"

const App = () => {
  return (
    <div>
     <Switch>
       
       <Route exact path ="/"><Home/></Route>
       <Route  path ="/:slug"><Product/></Route>
       
       </Switch> 
    </div>
  )
}

export default App
