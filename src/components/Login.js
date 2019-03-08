import * as React       from 'react';
import { connect }      from 'react-redux'

import {Input, Button, Form, Row, Col, Card} from 'antd';

import {user} from '../actions';

import loginCss from './Login.css';

class Login extends React.Component {

    state = {
        email       : '',
        password    : ''
    };

    onInputChange = (name, ev) => this.setState({
        [name] : ev.target.value
    });

    onLogin = ev => {
        ev.preventDefault();

        this.props.onLogin(this.state.email, this.state.password);
    };

    render() {

        const {
            email, password
        } = this.state;

        return (
           <Row>
               <Col span={16} offset={4}>
                   <Card
                       title="Login"
                   >
                       <Form onSubmit={this.onLogin} layout="vertical">
                           <Form.Item
                               label="Email"
                           >
                               <Input value={email} onChange={this.onInputChange.bind(this, 'email')} placeholder="Email" id="email" type="email" required/>
                           </Form.Item>
                           <Form.Item
                               label="Password"
                           >
                               <Input value={password} onChange={this.onInputChange.bind(this, 'password')} placeholder="Password" id="password" type="password" required/>
                           </Form.Item>
                           <Form.Item>
                               <a className="login-form-forgot" href="">Forgot password</a>
                               <Button className={loginCss.submitButton} type="primary" htmlType="submit" onClick={this.props.onLogin}>LOGIN</Button>
                           </Form.Item>
                       </Form>
                   </Card>
               </Col>
           </Row>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: () => {
            dispatch(user.login('e', 'p'));
        }
    }
};


export default connect(
    null,
    mapDispatchToProps
)(Login);