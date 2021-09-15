import React from 'react';
import './App.css';
import IndexMenu from './componentes/Index/IndexMenu.jsx';
import SecondMenu from './componentes/SecondTierPages/SecondTierMenu.jsx';
import ThirdMenu from './componentes/ThirdTierPages/ThirdTierMenu.jsx';
import FourthMenu from './componentes/FourthTierPages/FourthTierMenu.jsx';
import Index from './componentes/Index/Index.jsx'
import Cultura from './componentes/FirstTierPages/Cultura.jsx';
import Globo from './componentes/FirstTierPages/Globo.jsx';
import Band from './componentes/FirstTierPages/Band.jsx';
import Sbt from './componentes/FirstTierPages/Sbt.jsx';
import Record from './componentes/SecondTierPages/Record.jsx';
import FalaBrasil from './componentes/SecondTierPages/FalaBrasil.jsx';
import AFazenda from './componentes/SecondTierPages/AFazenda.jsx';
import RaulGil from './componentes/SecondTierPages/RaulGil.jsx';
import CidadeAlerta from './componentes/SecondTierPages/CidadeAlerta.jsx';
import BalancoGeral from './componentes/ThirdTierPages/BalancoGeral.jsx';
import Interior from './componentes/ThirdTierPages/Interior.jsx';
import Brasilia from './componentes/ThirdTierPages/Brasilia.jsx';
import Culinaria from './componentes/ThirdTierPages/Culinaria.jsx';
import Capital from './componentes/FourthTierPages/Capital.jsx';
import Politica from './componentes/FourthTierPages/Politica.jsx';
import Esportes from './componentes/FourthTierPages/Esportes.jsx';
import Educacao from './componentes/FourthTierPages/Educacao.jsx';
import Culinaria2 from './componentes/FourthTierPages/Culinaria.jsx';
import Policia from './componentes/FourthTierPages/Policia.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
                <IndexMenu/>
                <Index/>
           </Route>
           <Route exact path="/cultura">
                <IndexMenu/>
                <Cultura/>
           </Route>
           <Route exact path="/globo">
                <IndexMenu/>
                <Globo/>
           </Route>
           <Route exact path="/band">
                <IndexMenu/>
                <Band/>
           </Route>
           <Route exact path="/sbt">
                <IndexMenu/>
                <Sbt/>
           </Route>
           <Route exact path="/record">
                <SecondMenu/>
                <Record/>
           </Route>
           <Route exact path="/record/falabrasil">
                <SecondMenu/>
                <FalaBrasil/>
           </Route>
           <Route exact path="/record/afazenda">
                <SecondMenu/>
                <AFazenda/>
           </Route>
           <Route exact path="/record/raulgil">
                <SecondMenu/>
                <RaulGil/>
           </Route>
           <Route exact path="/record/cidadealerta">
                <SecondMenu/>
                <CidadeAlerta/>
           </Route>
           <Route exact path="/record/balancogeral">
                <ThirdMenu/>
                <BalancoGeral/>
           </Route>
           <Route exact path="/record/balancogeral/interior">
                <ThirdMenu/>
                <Interior/>
           </Route>
           <Route exact path="/record/balancogeral/brasilia">
                <ThirdMenu/>
                <Brasilia/>
           </Route>
           <Route exact path="/record/balancogeral/culinaria">
                <ThirdMenu/>
                <Culinaria/>
           </Route>
           <Route exact path="/record/balancogeral/capital">
                <FourthMenu/>
                <Capital/>
           </Route>
           <Route exact path="/record/balancogeral/capital/politica">
                <FourthMenu/>
                <Politica/>
           </Route>
           <Route exact path="/record/balancogeral/capital/esportes">
                <FourthMenu/>
                <Esportes/>
           </Route>
           <Route exact path="/record/balancogeral/capital/educacao">
                <FourthMenu/>
                <Educacao/>
           </Route>
           <Route exact path="/record/balancogeral/capital/culinaria2">
                <FourthMenu/>
                <Culinaria2/>
           </Route>
           <Route exact path="/record/balancogeral/capital/policia">
                <FourthMenu/>
                <Policia/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
