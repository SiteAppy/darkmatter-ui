import React, { Component } from 'react'
import classnames from 'classnames'

import './index.css'

export default class Layout extends Component {
    render() {
        const {
            className,
            children,
            ...props
        } = this.props

        return (
            <div className={classnames('layout', className)} {...props}>
                {children}
            </div>
        )
    }
}