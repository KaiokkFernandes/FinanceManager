import React from "react";
import GlobalStyle from './styles/global.js'  
import  Header from "./components/Header/index.js"; 
import Resume from "./components/Resume/index.js";
import Form from "./components/Form/index.js";


const App = () => { 
    return (
        <div>
              <Header />  
             <Resume />
             <Form  />
            <GlobalStyle />  
        </div>
    )   
}

export default App;