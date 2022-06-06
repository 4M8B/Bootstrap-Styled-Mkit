/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Navbar> component to create a navbar.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Navbar } from '@bootstrap-styled/v4'

/*
Atrrs: color cssModule fixed full inverse light role sticky tag theme toggleable

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
$grid-breakpoints: object
$border-width: string
$font-size-lg: string
$body-bg: string
$component-active-bg: string
$component-active-color: string
$border-radius: string
$navbar-padding-x: string
$navbar-padding-y: string
$nav-link-padding: string
$nav-disabled-link-color: string
$nav-tabs-border-color: string
$nav-tabs-border-width: string
$nav-tabs-border-radius: string
$nav-tabs-link-hover-border-color: string
$nav-tabs-active-link-hover-color: string
$nav-tabs-active-link-hover-bg: string
$nav-tabs-active-link-hover-border-color: string
$nav-pills-border-radius: string
$nav-pills-active-link-color: string
$nav-pills-active-link-bg: string
$cursor-disabled: string
$zindex-navbar: string
$zindex-navbar-fixed: string
$zindex-navbar-sticky: string
$navbar-brand-padding-y: string
$navbar-divider-padding-y: string
$navbar-toggler-padding-y: string
$navbar-toggler-padding-x: string
$navbar-toggler-font-size: string
$navbar-toggler-border-radius: string
$navbar-light-active-color: string
$navbar-light-color: string
$navbar-light-hover-color: string
$navbar-light-toggler-border: string
$navbar-light-disabled-color: string
$navbar-light-toggler-bg: string
$navbar-inverse-active-color: string
$navbar-inverse-color: string
$navbar-inverse-hover-color: string
$navbar-inverse-toggler-border: string
$navbar-inverse-toggler-bg: string
$navbar-inverse-disabled-color: string
*/

const StyledNavbar = styled(Navbar).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledNavbar extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledNavbar {...props}>
                {children}
            </StyledNavbar>
        )
    }
}