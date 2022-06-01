/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <ButtonToolbar> component to add different styles of s.
*/
import React, { Component } from "react";
import styled from 'styled-components'
import { ButtonToolbar } from '@bootstrap-styled/v4';

/*
Atrrs: cssModule tag theme 

ClassNames: None

Theme-
Variables:
$input-btn-border-width: string
$btn-padding-x: string
$btn-active-box-shadow: string
$btn-padding-x-lg: string
$btn-padding-y-lg: string
$font-size-lg: string
$btn-padding-x-sm: string
$btn-padding-y-sm: string
$font-size-sm: string
$btn-border-radius-lg: string
$btn-border-radius-sm: string
$enable-rounded: bool
$enable-shadows: bool
*/

const theme = {
    init : {}
}

const StyledButtonToolbar = styled(ButtonToolbar).attrs((props) => ({
    className: 'btn btn-primary'
    })
)``

export default class MyStyledButtonToolbar extends Component {
    render() {
        const {...props} = this.props
        const {children} = this.props
        return(
            <StyledButtonToolbar {...props} theme={theme.init}>
                {children}
            </StyledButtonToolbar>
        )
    }
}