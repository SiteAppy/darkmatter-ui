import React, { Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'

import './index.css'

export default class NavBar extends Component {
    render() {
        const {
            className,
            ...props
        } = this.props

        return (
            <div className={classnames('navbar', className)} {...props}>
                <header className='navbar__header'>
                    <svg src='/img/navbar-logo.svg' />
                    <span className='navbar__title'>Ironclad</span>
                </header>
                <nav className='navbar__navigation'>
                    <Link className='navigation__link' to='/dashboard'>
                        <i className='icon icon--dashboard'/>
                        <span className='link__text'>Dashboard</span>
                    </Link>
                    <Link className='navigation__link' to='/dashboard/workflows'>
                        <i className='icon icon--workflows'/>
                        <span className='link__text'>Workflows</span>
                    </Link>
                    <Link className='navigation__link' to='/dashboard/records'>
                        <i className='icon icon--records'/>
                        <span className='link__text'>Records</span>
                    </Link>
                    <Link className='navigation__link' to='/dashboard/company'>
                        <i className='icon icon--company'/>
                        <span className='link__text'>Company</span>
                    </Link>
                    <Link className='navigation__link' to='/dashboard/settings'>
                        <i className='icon icon--settings'/>
                        <span className='link__text'>Settings</span>
                    </Link>
                    <div className='layout-spacer'></div>
                    <Link className='navigation__link' to='/dashboard'>
                        <i className='icon icon--help'/>
                        <span className='link__text'>Help</span>
                    </Link>
                </nav>
            </div>
        )
    }
}