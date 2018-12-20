/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';

type PropsT = {
    children: any,
    css: string[],
    scripts: string[],
    state: string,
};

export default class HTML extends React.Component<PropsT> {
    static defaultProps = {
        css: [],
        scripts: [],
        state: '{}',
    };

    render() {
        const head = Helmet.renderStatic();
        const { children, scripts, css, state } = this.props;
        console.log(css);
        return (
            <html lang="">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {head.base.toComponent()}
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {head.script.toComponent()}
                    {css.map((href) => {
                        return <link key={href} rel="stylesheet" href={href} />;
                    })}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.__PRELOADED_STATE__ = ${state}`,
                        }}
                    />
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
                    {scripts.map((src) => {
                        return <script key={src} src={src} />;
                    })}
                </body>
            </html>
        );
    }
}
