import React from 'react';
import loginSVG from '../../login.jpg'

export class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="base-container" ref={ this.props.containerRef }>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={ loginSVG } alt=""/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Confirm Password</label>
                            <input type="text" name="role" placeholder="Role"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Confirm Password</label>
                            <input type="tel" name="phone" placeholder="Phone Number"/>
                        </div>
                        <div className="footer">
                            <button type="button" className="btn">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}