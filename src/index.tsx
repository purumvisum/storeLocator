import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Store from './store';

import App from './app';


const store: object = new Store();
window['store'] = store;


@observer
class StoreLocator extends React.Component<{Store: {}}> {
    render() {
        return (
            <Provider storeLocatorStore={store}>
                <div>
                    <App />
                    <DevTools />
                </div>
            </Provider>
        );
     }
};

ReactDOM.render(<StoreLocator Store={store} />, document.getElementById('root'));
