/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Jumbotron> component is used for calling extra attention to some special content or information.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Jumbotron } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule fluid tag theme

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$grid-breakpoints: object
$border-radius-lg: string
$jumbotron-padding: string
$jumbotron-bg: string
*/

const theme = {
    init: {}
}

const StyledJumbotron = styled(Jumbotron).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledJumbotron extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledJumbotron {...props} theme={theme.init}>
                {children}
            </StyledJumbotron>
        )
    }
}