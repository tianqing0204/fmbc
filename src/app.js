import React, { Component } from 'react';
import './app.scss';
import {connect} from 'react-redux';
import Header from './components/common/Header';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    withRouter
  } from 'react-router-dom';
  import ROUTE_MAP from './Router';
@withRouter
class App extends Component {
    render() {
        
        const {location} = this.props;
        // console.log(location);
        return (
            <div className="app">
                <Header></Header>
                    <div className="contend">  
                        {
                            ROUTE_MAP.route.map((v, i) => {
                                return <Route path={v.path} exact component={v.component} key={i}></Route>;
                            })
                        }
                        <div className="footer">
                            {
                                /detall/.test(location.pathname) ?  
                                ROUTE_MAP.link.map((v, i) => {
                                    return <NavLink to={v.to} key={i}>{v.text}</NavLink>;
                                }) : ''
                            }
                        </div>
                    </div>
            </div>
        );
  }
}
export default App;
