import React from 'react';
import './App.css';
import Header from "./layouts/header/Header";
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import TokenWatcher from "./components/authentication/TokenWatcher";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import PrivateRoute from "./components/authentication/PrivateRoute";
import Home from "./Home";
import TrainingPage from "./components/trainings/trainingPage/TrainingPage";
import TrainingPlansList from "./components/trainingPlan/TrainingPlansList";
import TrainingPlanPage from "./components/trainingPlan/TrainingPlanPage";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                  <Header />
                    <Layout.Content style={{padding: '0 50px', marginTop: 64}}>
                        <TokenWatcher/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/training/:trainingId" component={TrainingPage}/>
                        <PrivateRoute exact path="/training" component={TrainingPage}/>
                        <PrivateRoute exact path="/plans" component={TrainingPlansList}/>
                        <PrivateRoute path="/plans/:planId" component={TrainingPlanPage}/>
                    </Layout.Content>
                    {/*<Layout.Footer style={{textAlign: 'center'}}>
                        Progress Tracker ©2020 Created by Patryk
                    </Layout.Footer>*/}
                </Layout>
            </BrowserRouter>
        </div>
    );
}





