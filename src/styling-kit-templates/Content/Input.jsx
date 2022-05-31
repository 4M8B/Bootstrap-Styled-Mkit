/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <input> tag specifies an input field where the user can enter data.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Input } from '@bootstrap-styled/v4'

/*
Atrrs: addon children cssModule indeterminate onChange ref size state static tag theme type

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$enable-hover-media-query: bool
$enable-transitions: bool
$font-weight-normal: string
$font-size-base: string
$font-size-lg: string
$font-size-sm: string
$font-size-xs: string
$btn-padding-x: string
$btn-padding-y: string
$btn-line-height: string
$btn-font-weight: string
$btn-transition: string
$btn-box-shadow: string
$btn-block-spacing-y: string
$btn-primary-color: string
$btn-primary-bg: string
$btn-primary-border: string
$btn-secondary-color: string
$btn-secondary-bg: string
$btn-secondary-border: string
$btn-info-color: string
$btn-info-bg: string
$btn-info-border: string
$btn-success-color: string
$btn-success-bg: string
$btn-success-border: string
$btn-warning-color: string
$btn-warning-bg: string
$btn-warning-border: string
$btn-danger-color: string
$btn-danger-bg: string
$btn-danger-border: string
$btn-link-disabled-color: string
$btn-padding-x-lg: string
$btn-padding-y-lg: string
$btn-padding-x-sm: string
$btn-padding-y-sm: string
$btn-border-radius: string
$btn-border-radius-lg: string
$btn-border-radius-sm: string
$input-btn-border-width: string
$link-color: string
$link-hover-color: string
$link-hover-decoration: string
$cursor-disabled: string
*/

const theme = {
    init: {}
}

const StyledInput = styled(Input).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledInput extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledInput {...props} theme={theme.init}>
                {children}
            </StyledInput>
        )
    }
}