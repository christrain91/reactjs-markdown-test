import React from 'react';

import MarkdownEntry from './MarkdownEntry';
import MarkdownDisplay from './MarkdownDisplay';
import Time from './Time';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            markdown: 'initial'
        };
    }

    markdownChange(markdown) {
        this.setState({markdown});
    }

   render() {

    return (
        <div className="container">
            <Time />
            <div> 
                <div className="col-xs-6">
                    <MarkdownEntry changeHandler={this.markdownChange.bind(this)}/>
                </div>
                <div className="col-xs-6">
                    <MarkdownDisplay value={this.state.markdown}/>
                </div>
            </div>
        </div>
    );
   }
}
