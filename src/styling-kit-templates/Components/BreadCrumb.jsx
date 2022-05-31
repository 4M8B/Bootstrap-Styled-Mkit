/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Breadcrumb> component Creates an Item inside a <Breadcrumb>.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Breadcrumb } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule tag theme

ClassNames: CSS

Theme-
Variables:
$breadcrumb-padding-y: string
$breadcrumb-padding-x: string
$breadcrumb-item-padding: string
$breadcrumb-bg: string
$breadcrumb-divider-color: string
$breadcrumb-active-color: string
$breadcrumb-divider: string
$spacer-y: string
$enable-rounded: bool
*/

const theme = {
    init: {
    }
}

const StyledBreadcrumb = styled(Breadcrumb).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledBreadcrumb extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledBreadcrumb {...props} theme={theme.init}>
                {children}
            </StyledBreadcrumb>
        )
    }
}