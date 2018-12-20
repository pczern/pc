import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Html from './components/HTML';
import App from '../client/app';

const serverRenderer = () => (req, res) => {
    const content = renderToString(
        <Provider store={req.store}>
            <Router location={req.url} context={{}}>
              <App />
            </Router>
        </Provider>
    );

    const state = JSON.stringify(req.store.getState());

    return res.send(
        '<!doctype html>' +
            renderToString(
                <Html
                    css={[res.locals.assetPath('vendor.css'), res.locals.assetPath('bundle.css')]}
                    scripts={[res.locals.assetPath('vendor.js'), res.locals.assetPath('bundle.js')]}
                    state={state}
                >
                    {content}
                </Html>
            )
    );
};

export default serverRenderer;
