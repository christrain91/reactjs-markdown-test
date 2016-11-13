import React from 'react';

export default class MarkdownDisplay extends React.Component {

    componentDidUpdate() {
        this.refs.markdownViewer.innerHTML = this.props.value;
    }

   render() {

    const viewerStyle = {
        fontSize: '20px',
        height: '700px',
        border: '1px solid #CCC',
        borderRadius: '3px',
        padding: '10px'
    };

    return (
        <div>
        <label>Rendered markdown</label>
        <div style={viewerStyle} ref="markdownViewer"></div>
        </div>
    );
   }
}
