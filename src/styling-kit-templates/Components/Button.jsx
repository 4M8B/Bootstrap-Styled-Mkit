/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <button> tag defines a clickable button.
*/
import React, { Component } from "react";
import styled from 'styled-components'
import { Button } from '@bootstrap-styled/v4';

/*
Atrrs: active block color cssModule disabled dropup focus hover onClick outline ref size tag theme 

ClassNames:
- btn
- btn-block
- btn-dark

Theme-
Variables:
$btn-padding-x: string
$btn-padding-y: string
$btn-line-height: string
$btn-font-weight: string
$btn-box-shadow: string
$btn-focus-box-shadow: string
$btn-disabled-opacity: string
$btn-active-box-shadow: string
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
$btn-padding-x-sm: string
$btn-padding-y-sm: string
$btn-padding-x-lg: string
$btn-padding-y-lg: string
$btn-block-spacing-y: string
$btn-border-radius: string
$btn-border-radius-lg: string
$btn-border-radius-sm: string
$btn-transition: string
$btn-border-width: string
$link-hover-decoration: string
$enable-rounded: bool
$enable-shadows: bool
$enable-hover-media-query: bool
$enable-transitions: bool
*/


const StyledButton = styled(Button).attrs((props) => ({
    className: 'btn btn-primary'
    })
)``

export default class MyStyledButton extends Component {
    render() {
        const {...props} = this.props
        return(
            <StyledButton {...props} />
        )
    }
}