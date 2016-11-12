import React from 'react';
import marked from 'marked';

class App extends React.Component {
   render() {
    return (
        <div dangerouslySetInnerHTML={__html: marked('some markdown text here')}>
            
        </div>
    );
   }
}

export default App;