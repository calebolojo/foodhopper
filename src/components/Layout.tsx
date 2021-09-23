import React, { FunctionComponent } from 'react'
import Footer from './Footer'
import Headbar from './Headbar'
import { HeadbarProps } from '../ts/global'



const Layout: FunctionComponent<HeadbarProps> = (props) => {
    return (
        <>
            <Headbar stage={0}></Headbar>
            <main>
                { props.children }
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout



