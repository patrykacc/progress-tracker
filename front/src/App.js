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
import TrainingPlansList from "./components/trainingPlan/TrainingPlansList";
import TrainingsList from "./components/trainings/trainingsTable/TrainingsList";
import ContextRecordDetail from "./components/base/recordDetail/ContextRecordDetail";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout style={{background: 'white'}}>
                  <Header />
                    <Layout.Content  style={{marginTop: '100px'}}>
                        <TokenWatcher/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/view/:id" component={ContextRecordDetail}/>
                        <PrivateRoute path="/Trainings" component={TrainingsList}/>
                        <PrivateRoute path="/Plans" component={TrainingPlansList}/>
                    </Layout.Content>
                    <Layout.Footer style={{textAlign: 'center', background: 'white'}}>
                        Progress Tracker ©2020 Created by Patryk
                    </Layout.Footer>
                </Layout>
            </BrowserRouter>
        </div>
    );
}





