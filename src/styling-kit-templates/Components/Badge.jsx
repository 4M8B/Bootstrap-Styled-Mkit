/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Badge> component Creates a circular badge.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Badge } from '@bootstrap-styled/v4'

/*
Atrrs: color cssModule pill tag theme

ClassNames: CSS

Theme-
Variables: 
$badge-default-bg: string
$badge-primary-bg: string
$badge-success-bg: string
$badge-info-bg: string
$badge-warning-bg: string
$badge-danger-bg: string
$badge-color: string
$badge-link-hover-color: string
$badge-font-size: string
$badge-font-weight: string
$badge-padding-x: string
$badge-padding-y: string
$badge-pill-padding-x: string
$badge-pill-border-radius: string
$link-hover-decoration: string
$enable-rounded: bool
$enable-hover-media-query: bool
*/

const theme = {
    init: {
    }
}

const StyledBadge = styled(Badge).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledBadge extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledBadge {...props} theme={theme.init}>
                {children}
            </StyledBadge>
        )
    }
}