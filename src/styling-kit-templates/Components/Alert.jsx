/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Alert> component specifies Alertumn properties for each Alertumn within a <Alertgroup> element.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Alert } from '@bootstrap-styled/v4'

/*
Atrrs: autoHideDuration children color cssModule initializeIsOpen isOpen onClick tag theme transition uncontrolled

ClassNames:
- alert-danger
- alert-dark
- alert-dismissible
- alert-heading
- alert-info
- alert-light
- alert-link
- alert-primary
- alert-secondary
- alert-success
- alert-warning

Theme-
Variables:
$alert-padding-x: string
$alert-padding-y: string
$alert-margin-bottom: string
$alert-border-radius: string
$alert-link-font-weight: string
$alert-border-width: string
$alert-success-bg: string
$alert-success-text: string
$alert-success-border: string
$alert-info-bg: string
$alert-info-text: string
$alert-info-border: string
$alert-warning-bg: string
$alert-warning-text: string
$alert-warning-border: string
$alert-danger-bg: string
$alert-danger-text: string
$alert-danger-border: string
$enable-rounded: bool
*/

const theme = {
    init: {
    }
}

const StyledAlert = styled(Alert).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledAlert extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledAlert {...props} theme={theme.init}>
                {children}
            </StyledAlert>
        )
    }
}