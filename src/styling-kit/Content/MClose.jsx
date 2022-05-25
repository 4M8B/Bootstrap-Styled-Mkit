/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Close component, Run a function on closing.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Close } from '@bootstrap-styled/v4'

/*
Atrrs: onDismiss closeLabel cssModule sr-only theme

ClassNames:
- close

Theme-
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
*/

const theme = {
    init: {}
}

const StyledClose = styled(Close).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledClose extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledClose theme={theme.init}>
                {children}
            </StyledClose>
        )
    }
}