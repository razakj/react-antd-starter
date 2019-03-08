import * as React       from 'react';

import { Layout } from 'antd';

import Login from './Login';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Header>Test</Layout.Header>
                <Layout>
                    <Layout.Content>
                        <Login />
                    </Layout.Content>
                </Layout>

                <Layout.Footer>AAA</Layout.Footer>
            </Layout>
        )
    }
}