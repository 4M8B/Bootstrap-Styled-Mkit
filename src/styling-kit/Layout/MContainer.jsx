/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Container component to affect common layout to your components.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Container } from '@bootstrap-styled/v4'

/*
Atrrs: fluid theme

ClassNames:
- container	
- container-fluid	
- container-*	

Theme-
Variables:
$grid-gutter-width: string
$container-max-widths: object
$enable-grid-classes: bool
*/

const theme = {
    init: {}
}

const StyledContainer = styled(Container).attrs((props) => ({ 
    className: 'container'
})
)`
    width: '';
    height: '';
`

export default class MyStyledContainer extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledContainer theme={theme.init}>
                {children}
            </StyledContainer>
        )
    }
}