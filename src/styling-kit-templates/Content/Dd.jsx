/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Dd> component to describe a term/name in a description list.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Dd } from '@bootstrap-styled/v4'

/*
Atrrs: theme

ClassNames: CSS

Theme-
Variables:
$grid-columns: string
$grid-gutter-width: string
$grid-breakpoints: object
$enable-grid-classes: bool
*/

const theme = {
    init: {}
}

const StyledDd = styled(Dd).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledDd extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledDd {...props} theme={theme.init}>
                {children}
            </StyledDd>
        )
    }
}