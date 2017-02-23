import React, { Component } from 'react'
import classnames from 'classnames'

import './index.css'

export default class Header extends Component {
    render() {
        const {
            className,
            title,
            ...props
        } = this.props

        return (
            <header className={classnames('header', className)} {...props}>
                <span class='header__title'>{title}</span>
            </header>
        )
    }
}