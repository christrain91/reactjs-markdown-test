import React from 'react';
import marked from 'marked';
import moment from 'moment';

class App extends React.Component {
   render() {

    const time = moment().format('HH:mm:ss dddd');

    return (
        <h1 dangerouslySetInnerHTML={{__html: marked(`The time is ${time} ~~Hang out your washing.~~`)}}></h1>
    );
   }
}

export default App;