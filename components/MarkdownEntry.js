import React from 'react';

import marked from 'marked';

export default class MarkdownEntry extends React.Component {

    onChange(e) {
        this.props.changeHandler(marked(e.target.value));
    } 

   render() {
       const textAreaStyle = {
           width: '100%',
           height: '700px',
           resize: 'none',
           color: '#777',
           borderRadius: '3px',
           fontSize: '20px'
       };

    return (
        <div>
            <label>Enter your markdown here</label>
            <textarea style={textAreaStyle} onChange={this.onChange.bind(this)}></textarea>
        </div>
    );
   }
}
