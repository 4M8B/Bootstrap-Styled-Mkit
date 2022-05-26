/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Details /> component specifies additional details that the user can view or hide on demand.
*/
import React, { Component } from 'react'
import styled from 'styled-components';
import { Header } from '@bootstrap-styled/v4';

/*
Attrs: shadowHeader theme

ClassNames: None

Theme- 
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
$border-width: string
$font-size-lg: string
$border-radius: string
$navbar-padding-x: string
$navbar-padding-y: string
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

const theme = {
    init: {}
}

initialState = {
    isOpen: false,
    };

const StyledHeader = styled(Header).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledHeader extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledHeader {...props} theme={theme.init}>
                {children}
            </StyledHeader>
        )
    }
}