import React, {Fragment} from "react";
import PropTypes from "prop-types"

class Provider extends React.Component {
    getChildContext() {

        return {
            store:this.props.store
        }
    };

    render() {

        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }

}

Provider.childContextTypes = {
    store: PropTypes.object
}

export default Provider