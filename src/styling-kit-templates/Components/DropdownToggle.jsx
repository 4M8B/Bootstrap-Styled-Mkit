/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <DropdownToggle> component for toggling dropdowns.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { DropdownToggle } from '@bootstrap-styled/v4'

/*
Atrrs: aria-haspopup caret children color cssModule data-toggle	disabled nav onClick split tag

ClassNames: CSS

Theme-
Variables: None
*/

const StyledDropdownToggle = styled(DropdownToggle).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledDropdownToggle extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDropdownToggle {...props}>
                {children}
            </StyledDropdownToggle>
        )
    }
}