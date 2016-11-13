import React from 'react';

import MarkdownEntry from './MarkdownEntry';
import MarkdownDisplay from './MarkdownDisplay';
import Time from './Time';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            markdown: ''
        };
    }

    markdownChange(markdown) {
        this.setState({markdown});
    }

   render() {

       const layoutStyle = {
           color: '#666'
       };

    return (
        <div className="container" style={layoutStyle}>
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
