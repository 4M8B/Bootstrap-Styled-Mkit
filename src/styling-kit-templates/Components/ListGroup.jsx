/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <ListGroup> component wraps a group of ListGroupItems.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { ListGroup } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule flush tag theme toggleable

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
$component-active-color: string
$component-active-bg: string
$list-group-color: string
$list-group-bg: string
$list-group-border-color: string
$list-group-border-width: string
$list-group-border-radius: string
$list-group-item-padding-x: string
$list-group-item-padding-y: string
$list-group-hover-bg: string
$list-group-active-color: string
$list-group-active-bg: string
$list-group-active-border: string
$list-group-disabled-color: string
$list-group-disabled-bg: string
$list-group-link-color: string
$list-group-link-hover-color: string
$list-group-link-active-color: string
$list-group-link-active-bg: string
$cursor-disabled: string
$state-success-text: string
$state-success-bg: string
$state-info-text: string
$state-info-bg: string
$state-warning-text: string
$state-warning-bg: string
$state-danger-text: string
$state-danger-bg: string
*/

const theme = {
    init: {}
}

const StyledListGroup = styled(ListGroup).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledListGroup extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledListGroup {...props} theme={theme.init}>
                {children}
            </StyledListGroup>
        )
    }
}