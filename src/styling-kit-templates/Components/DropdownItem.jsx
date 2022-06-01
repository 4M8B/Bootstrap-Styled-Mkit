/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <DropdownItem> component to add items to your dropdown buttons.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { DropdownItem } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule disabled divider header onClick tag

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$DropdownItem-bg: string
$DropdownItem-transition: string
$DropdownItem-box-shadow: string
$DropdownItem-border-radius: string
$DropdownItem-zindex: string
$DropdownItem-docked-width: string
*/

const theme = {
    init: {
    }
}

const StyledDropdownItem = styled(DropdownItem).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledDropdownItem extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDropdownItem {...props}>
                {children}
            </StyledDropdownItem>
        )
    }
}