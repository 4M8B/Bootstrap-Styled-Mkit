/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <InputGroup> component to toggle contextual overlays for displaying lists of links and more.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { InputGroup } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule size tag theme

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$enable-hover-media-query: bool
$enable-transitions: bool
$font-size-base: string
$font-size-lg: string
$font-size-sm: string
$font-size-xs: string
$line-height-base: string
$border-radius: string
$border-radius-lg: string
$border-radius-sm: string
$input-padding-x: string
$input-padding-y: string
$input-bg: string
$input-bg-disabled: string
$input-padding-x-lg: string
$input-padding-y-lg: string
$input-line-height: string
$input-height: string
$input-box-shadow: string
$input-btn-border-width: string
$input-group-addon-bg: string
$input-border-color: string
$input-border-focus: string
$input-box-shadow-focus: string
$input-color: string
$input-group-addon-border-color: string
$input-padding-x-sm: string
$input-padding-y-sm: string
$input-color-placeholder: string
$input-border-radius-lg: string
$input-border-radius-sm: string
$input-border-radius: string
$input-transition: string
$input-color-focus: string
$input-bg-focus: string
$cursor-disabled: string
*/

const theme = {
    init: {
    }
}

const StyledInputGroup = styled(InputGroup).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledInputGroup extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledInputGroup {...props}>
                {children}
            </StyledInputGroup>
        )
    }
}