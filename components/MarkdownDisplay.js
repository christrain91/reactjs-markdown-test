import React from 'react';

export default class MarkdownDisplay extends React.Component {

    componentDidUpdate() {
        this.refs.markdownViewer.innerHTML = this.props.value;
    }

   render() {

    const viewerStyle = {
        marginTop: '30px',
        fontSize: '20px'
    };

    return (
        <div style={viewerStyle} ref="markdownViewer"></div>
    );
   }
}
