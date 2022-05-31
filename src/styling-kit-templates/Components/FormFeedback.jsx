/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <FormFeedback> component can be used to give feedback by a form and its elements.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { FormFeedback } from '@bootstrap-styled/v4'

/*
Atrrs: children cssModule tag

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-shadows: bool
$FormFeedback-bg: string
$FormFeedback-transition: string
$FormFeedback-box-shadow: string
$FormFeedback-border-radius: string
$FormFeedback-zindex: string
$FormFeedback-docked-width: string
*/

const theme = {
    init: {
    }
}

const StyledFormFeedback = styled(FormFeedback).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledFormFeedback extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledFormFeedback {...props}>
                {children}
            </StyledFormFeedback>
        )
    }
}