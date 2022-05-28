/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <code> tag is used to define a piece of computer code.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Code } from '@bootstrap-styled/v4'

/*
Atrrs: tag theme

ClassNames: CSS

Theme-
Variables:
$code-font-size: string
$code-padding-x: string
$code-padding-y: string
$code-color: string
$code-bg: string
$enable-rounded: bool
$font-family-monospace: string
*/

const theme = {
    init: {}
}

const StyledCode = styled(Code).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledCode extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledCode {...props} theme={theme.init}>
                {children}
            </StyledCode>
        )
    }
}