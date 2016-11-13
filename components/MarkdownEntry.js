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
           borderRadius: '3px',
           borderColor: '#CCC',
           fontSize: '20px',
           padding: '10px'
       };

    return (
        <div>
            <label>Enter your markdown here</label>
            <textarea style={textAreaStyle} onChange={this.onChange.bind(this)}></textarea>
        </div>
    );
   }
}
