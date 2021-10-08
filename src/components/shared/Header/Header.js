import './Header.scss'
import React from 'react'
import NavMenu from '../../structure/NavMenu/NavMenu'

const Header = () => {
    return (
        <header>
            <img src="https://bloximages.chicago2.vip.townnews.com/pinalcentral.com/content/tncms/assets/v3/editorial/e/24/e24916cc-b8de-5c48-9fe7-94b44dc646c2/59c9913f22bda.image.gif" />
            <NavMenu />
        </header>
    )
}

export default Header
