/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Drawer> component to create page sections like side-nav's that a toggled by a button click.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Drawer } from '@bootstrap-styled/v4'

/*
Atrrs: active bottom cssModule docked left right theme top

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$drawer-bg: string
$drawer-transition: string
$drawer-box-shadow: string
$drawer-border-radius: string
$drawer-zindex: string
$drawer-docked-width: string
*/

const theme = {
    init: {
    }
}

const StyledDrawer = styled(Drawer).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledDrawer extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDrawer {...props}>
                {children}
            </StyledDrawer>
        )
    }
}