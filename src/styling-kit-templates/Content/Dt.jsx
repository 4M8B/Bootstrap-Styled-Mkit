/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <dt> tag defines a term/name in a description list.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Dt } from '@bootstrap-styled/v4'

/*
Atrrs: theme

ClassNames: CSS

Theme-
Variables: 
$dt-font-weight: string
$grid-columns: string
$grid-gutter-width: string
$grid-breakpoints: object
$enable-grid-classes: bool
*/

const theme = {
    init: {}
}

const StyledDt = styled(Dt).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledDt extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDt {...props} theme={theme.init}>
                {children}
            </StyledDt>
        )
    }
}