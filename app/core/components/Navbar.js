import React from 'react';
import {bem} from './../utils.js';
import {Decorator as Cerebral} from 'cerebral-react';

import './Navbar.css';

const b = bem('navbar');

@Cerebral({
    user: ['modules', 'core', 'user'],
    title: ['activeModule', 'ref', 'title']
})
class Navbar extends React.Component {
    render(){
        return <div className={b()}>
            <div className={b('placeholder')}>
                <div className={b('panel')}>
                    <a href="/#/" className={b('logo')}><span>{ this.props.title || 'Cerebral Modular' }</span></a>
                    <span className={b('controls').mix('user')}>
                        { this.props.user.FullName || 'Loading...' }
                    </span>
                </div>
            </div>
        </div>
    }
}

export default Navbar
