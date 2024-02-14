import React from "react";
import GlobalStyle from './styles/global.js'  
import  Header from "./components/Header/index.js"; 

const App = () => { 
    return (
        <div>
            <Header />  
            <GlobalStyle />  
        </div>
    )   
}

export default App;