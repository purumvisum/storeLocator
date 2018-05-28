import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as ReactDOM from 'react-dom';

// class AppState {
//     @observable timer = 0;
//
//     constructor() {
//         setInterval(() => {
//             this.timer += 1;
//         }, 1000);
//     }
//
//     resetTimer() {
//         this.timer = 0;
//     }
// }


export default class StoreLine extends React.Component {
    render() {
        return (
            <div>
               dfgadfgad
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </div>
        );
     }


};

// const appState = new AppState();
// ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
