/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Dropdown> component to toggle contextual overlays for displaying lists of links and more.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Dropdown } from '@bootstrap-styled/v4'

/*
Atrrs: children cssModule disabled dropup group isOpen size tag tether theme toggle

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$enable-gradients: bool
$enable-hover-media-query: bool
$spacer-y: string
$body-color: string
$border-width: string
$font-size-sm: string
$font-weight-normal: string
$font-size-base: string
$font-size-lg: string
$zindex-dropdown-backdrop: string
$zindex-dropdown: string
$component-active-color: string
$component-active-bg: string
$caret-width: string
$line-height-lg: string
$border-radius-lg: string
$border-radius-sm: string
$input-padding-y-lg: string
$dropdown-min-width: string
$dropdown-padding-y: string
$dropdown-margin-top: string
$dropdown-bg: string
$dropdown-border-color: string
$dropdown-border-width: string
$dropdown-divider-bg: string
$dropdown-box-shadow: string
$dropdown-link-color: string
$dropdown-link-hover-color: string
$dropdown-link-hover-bg: string
$dropdown-link-active-color: string
$dropdown-link-active-bg: string
$dropdown-link-disabled-color: string
$dropdown-item-padding-x: string
$dropdown-header-color: string
$input-btn-border-width: string
$cursor-disabled: string
$btn-padding-x: string
$btn-active-box-shadow: string
$btn-padding-x-lg: string
$btn-padding-y-lg: string
$btn-border-radius-lg: string
$btn-border-radius-sm: string
$btn-padding-x-sm: string
$btn-padding-y-sm: string
$input-height-lg: string
*/

const theme = {
    init: {
    }
}

const StyledDropdown = styled(Dropdown).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledDropdown extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDropdown {...props}>
                {children}
            </StyledDropdown>
        )
    }
}