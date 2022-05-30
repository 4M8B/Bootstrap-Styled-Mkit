/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Row> component builds responsive grids by adding different <Col> components to it. 
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Row } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule noGutters tag theme

ClassNames:
- row
- row-cols-*

Theme-
Variables:
$grid-gutter-width: string
$enable-grid-classes: bool
*/

const theme = {
    init: {}
}

const StyledRow = styled(Row).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledRow extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledRow {...props} theme={theme.init}>
                {children}
            </StyledRow>
        )
    }
}