import React from 'react'
import PropTypes from 'prop-types';
import { Spinner } from '../components'

const withSpinner = Comp => ({ isLoading, children, ...props }) => {
    if (isLoading) {
        return (
            <Comp style={{ flex: 1 }}>
                <Spinner isLoading={isLoading} />
            </Comp>)
    } else {
        return (
            <Comp style={{ flex: 1 }}{...props}>
                {children}
            </Comp>
        )
    }
};

export default withSpinner;