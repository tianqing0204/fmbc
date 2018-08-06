import React, {Component} from 'react';
import {get} from '../../../../common/api';
import './Rights.scss';
import {
    withRouter
  } from 'react-router-dom';
@withRouter
class Rights extends Component {
    handle () {
        // console.log(this.props);
        // console.log(this.props, '111111111111');
        const { matchId, history } = this.props;
        history.push('/detall');
        console.log(matchId);
        // get(`https://trad-pusher.8win.com/match/v2?k=cn020001${matchId}`).then((res) => {
        //     console.log(res.data.data);
        // })


    }
    render () {
        const { players, leagueName, matchTime } = this.props;
        // console.log(players, 'players');

        return (
            <div className="rights">
                <dl className="odl" onClick={this.handle.bind(this)}>
                    <dt>
                        <ul>
                            <li>                      
                                {
                                    leagueName
                                }
                                {
                                    matchTime.split(' ')[1].substr(0, 5)

                                }
                            </li>
                            <li>
                                <p className="op">
                                    <img src={players[0] && players[0].picUrl} alt=""/>
                                </p>
                                <span className="ospan">{players[0] && players[0].shortName}</span>
                            </li>
                            <li>
                                <p>
                                    <img src={players[1] && players[1].picUrl} alt=""/>

                                </p>
                                <span>{players[1] && players[1].shortName}</span>
                            </li>
                        </ul>
                    </dt>
                    <dd>

                    </dd>
                </dl>
            </div>
        );
    }
};
export default Rights;
