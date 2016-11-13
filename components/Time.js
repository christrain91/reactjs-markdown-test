import React from 'react';

import moment from 'moment';

export default class MarkdownEntry extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTime: this.getTime()
        };

        setInterval(this.updateTime.bind(this), 1);
    }

    getTime() {
        return moment().format('HH:mm:ss');
    }

    updateTime() {
        const currentTime = this.getTime();
        this.setState({
            currentTime
        });
    }

    render() {
        const timeStyle = {
            fontSize: '20px',
            color: '#888'
        };

        return ( 
            <div className="text-center" style={timeStyle}>
                <span className="glyphicon glyphicon-time"></span>
                <span> {this.state.currentTime}</span>
            </div>
        );
    }
}