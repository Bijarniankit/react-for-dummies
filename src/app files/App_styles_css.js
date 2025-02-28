import './App.css'
import './Style.css'
import style from './custom.module.css'

import React from 'react'

function App(){

    return(
        <div className="App">
            <h1 className="primary">Style 1 in Reactjs</h1>
            <h1 style={{backgroundColor:'yellow',color:'red'}}>Style 2 in Reactjs</h1>
            <h1 className={style.success}>Style 3 in Reactjs</h1>
      
        </div>
    )
}

export default App