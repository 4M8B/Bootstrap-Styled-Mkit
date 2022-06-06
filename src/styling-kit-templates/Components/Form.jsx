/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Form> component in order to quick create reliable Form.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Form } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule inline ref tag theme

ClassNames: CSS

Theme-
Variables:
$brand-primary: string
$brand-success: string
$brand-info: string
$brand-warning: string
$brand-danger: string
$gray-dark: string
$gray: string
$gray-light: string
$gray-lighter: string
$gray-lightest: string
$border-width: string
$spacer: string
$spacer-y: string
$grid-breakpoints: shape
$grid-gutter-width: string
$font-size-base: string
$font-size-lg: string
$font-size-sm: string
$font-size-xs: string
$text-muted: string
$line-height-base: string
$line-height-lg: string
$line-height-sm: string
$border-radius: string
$border-radius-lg: string
$border-radius-sm: string
$input-padding-x: string
$input-padding-y: string
$input-line-height: string
$input-bg: string
$input-bg-disabled: string
$input-color: string
$input-border-color: string
$input-btn-border-width: string
$input-box-shadow: string
$input-border-radius: string
$input-border-radius-lg: string
$input-border-radius-sm: string
$input-bg-focus: string
$input-border-focus: string
$input-box-shadow-focus: string
$input-color-focus: string
$input-color-placeholder: string
$input-padding-x-sm: string
$input-padding-y-sm: string
$input-padding-x-lg: string
$input-padding-y-lg: string
$input-height: string
$input-height-sm: string
$input-height-lg: string
$input-transition: string
$form-text-margin-top: string
$form-feedback-margin-top: string
$form-check-margin-bottom: string
$form-check-input-gutter: string
$form-check-input-margin-y: string
$form-check-input-margin-x: string
$form-check-inline-margin-x: string
$form-group-margin-bottom: string
$input-group-addon-bg: string
$input-group-addon-border-color: string
$cursor-disabled: string
$custom-control-gutter: string
$custom-control-spacer-x: string
$custom-control-spacer-y: string
$custom-control-indicator-size: string
$custom-control-indicator-bg: string
$custom-control-indicator-bg-size: string
$custom-control-indicator-box-shadow: string
$custom-control-disabled-cursor: string
$custom-control-disabled-indicator-bg: string
$custom-control-disabled-description-color: string
$custom-control-checked-indicator-color: string
$custom-control-checked-indicator-bg: string
$custom-control-checked-indicator-box-shadow: string
$custom-control-focus-indicator-box-shadow: string
$custom-control-active-indicator-color: string
$custom-control-active-indicator-bg: string
$custom-control-active-indicator-box-shadow: string
$custom-checkbox-radius: string
$custom-checkbox-checked-icon: string
$custom-checkbox-indeterminate-bg: string
$custom-checkbox-indeterminate-indicator-color: string
$custom-checkbox-indeterminate-icon: string
$custom-checkbox-indeterminate-box-shadow: string
$custom-radio-radius: string
$custom-radio-checked-icon: string
$custom-select-padding-x: string
$custom-select-padding-y: string
$custom-select-indicator-padding: string
$custom-select-line-height: string
$custom-select-color: string
$custom-select-disabled-color: string
$custom-select-bg: string
$custom-select-disabled-bg: string
$custom-select-bg-size: string
$custom-select-indicator-color: string
$custom-select-indicator: string
$custom-select-border-width: string
$custom-select-border-color: string
$custom-select-border-radius: string
$custom-select-focus-border-color: string
$custom-select-focus-box-shadow: string
$custom-select-sm-font-size: string
$custom-file-height: string
$custom-file-width: string
$custom-file-focus-box-shadow: string
$custom-file-padding-x: string
$custom-file-padding-y: string
$custom-file-line-height: string
$custom-file-color: string
$custom-file-bg: string
$custom-file-border-width: string
$custom-file-border-color: string
$custom-file-border-radius: string
$custom-file-box-shadow: string
$custom-file-button-color: string
$custom-file-button-bg: string
$custom-file-text: object
$form-icon-success-color: string
$form-icon-success: string
$form-icon-warning-color: string
$form-icon-warning: string
$form-icon-danger-color: string
$form-icon-danger: string
*/

const theme = {
    init: {
    }
}

const StyledForm = styled(Form).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledForm extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledForm {...props} theme={theme.init}>
                {children}
            </StyledForm>
        )
    }
}