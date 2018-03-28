import React, {Component} from 'react';
import {connect} from 'react';

export const addedFunction = (WrappedComponent, click) => {
    return class Listify extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <WrappedComponent onClick={click} {...this.props} />
                </div>
            )
        }
    }
}