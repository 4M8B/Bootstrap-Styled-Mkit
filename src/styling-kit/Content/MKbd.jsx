/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- Use the <kbd> to indicate input that is typically entered via keyboard.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Kbd } from '@bootstrap-styled/v4'

/*
Atrrs: children theme

ClassNames: CSS

Theme-
Variables: 
$enable-rounded: bool
$enable-shadows: bool
$font-family-monospace: string
$font-weight-bold: string
$border-radius-sm: string
$code-font-size: string
$code-padding-x: string
$code-padding-y: string
$kbd-color: string
$kbd-bg: string
$kbd-box-shadow: string
$nested-kbd-font-weight: string
*/


const StyledKbd = styled(Kbd).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledKbd extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledKbd {...props}>
                {children}
            </StyledKbd>
        )
    }
}