/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <H6> component to set text to a specific size.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { H6 } from '@bootstrap-styled/v4'

/*
Atrrs: color cssModule lead theme

ClassNames: CSS

Theme-
Variables:
$link-color: string
$font-size-h6: string
$headings-margin-bottom: string
$headings-font-family: string
$headings-font-weight: string
$headings-line-height: string
$headings-color: string
$display1-size: string
$display2-size: string
$display3-size: string
$display4-size: string
$display1-weight: string
$display2-weight: string
$display3-weight: string
$display4-weight: string
$lead-font-size: string
$lead-font-weight: string
*/

const theme = {
    init: {}
}

const StyledH6 = styled(H6).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledH6 extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledH6 {...props} theme={theme.init}>
                {children}
            </StyledH6>
        )
    }
}