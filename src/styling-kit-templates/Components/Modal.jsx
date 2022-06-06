/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Modal> component to launch a popup modal on an action handler.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Modal } from '@bootstrap-styled/v4'

/*
Atrrs: autoFocus backdrop backdropClassName backdropTransition children contentClassName cssModule documentClassName fade 
        isOpen keyboard labelledBy modalClassName modalTransition onClosed onEnter onExit onOpened role size theme toggle zIndex

ClassNames: CSS

Theme-
Variables:
$grid-breakpoints: object
$modal-md: string
$modal-dialog-sm-up-margin-: string
$enable-shadows: bool
$modal-content-sm-up-box-shadow: string
$modal-sm: string
$modal-lg: string
$zindex-modal: string
$zindex-modal-backdrop: string
$enable-transitions: bool
$transition-fade: string
$modal-transition: string
$modal-dialog-margin: string
$font-family-base: string
$font-size-base: string
$font-weight-base: string
$line-height-base: string
$body-color: string
$body-bg: string
$$modal-content-bg: string
$modal-content-border-width: string
$modal-content-border-color: string
$enable-rounded: bool
$border-radius-lg: string
$modal-content-xs-box-shadow: string
$modal-backdrop-bg: string
$modal-backdrop-opacity: string
$modal-header-padding: string
$modal-header-border-width: string
$modal-header-border-color: string
$modal-title-line-height: string
$modal-inner-padding: string
$modal-footer-border-color: string
$modal-footer-border-width: string
*/

const theme = {
    init: {}
}

const StyledModal = styled(Modal).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledModal extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledModal {...props} theme={theme.init}>
                {children}
            </StyledModal>
        )
    }
}