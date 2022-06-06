/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Tooltip> component to add tooltips around content.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Tooltip } from '@bootstrap-styled/v4'

/*
Atrrs: target autoHide cssModule delay disabled isOpen placement tether tetherRef theme toggle

ClassNames: CSS

Theme-
Variables:
$zindex-tooltip: string
$tooltip-font-family: string
$tooltip-font-size: string
$tooltip-font-weight: string
$tooltip-max-width: string
$tooltip-color: string
$tooltip-bg: string
$tooltip-border-radius: string
$tooltip-opacity: string
$tooltip-line-height: string
$tooltip-padding-y: string
$tooltip-padding-x: string
$tooltip-margin: string
$tooltip-arrow-width: string
$tooltip-arrow-height: string
$tooltip-arrow-color: string
$component-active-color: string
*/

const StyledTooltip = styled(Tooltip).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledTooltip extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledTooltip {...props}>
                {children}
            </StyledTooltip>
        )
    }
}