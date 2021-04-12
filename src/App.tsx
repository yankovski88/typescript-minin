import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage"; //  npm i @types/react-router-dom Нужно чтобы распознать js


const App: React.FC = () => {

    return (<BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path="/" exact></Route>
                    <Route component={AboutPage} path="/about" exact></Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
