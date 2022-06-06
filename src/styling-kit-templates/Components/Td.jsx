/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Td> component to add table cells.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Td } from '@bootstrap-styled/v4'

/*
Atrrs: children color

ClassNames: CSS

Theme-
Variables: None
*/

const StyledTd = styled(Td).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledTd extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledTd {...props}>
                {children}
            </StyledTd>
        )
    }
}