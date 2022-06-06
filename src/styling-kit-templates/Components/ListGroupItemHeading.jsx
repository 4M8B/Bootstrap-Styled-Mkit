/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <ListGroupItemHeading> component to add a simple heading to your lists.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { ListGroupItemHeading } from '@bootstrap-styled/v4'

/*
Atrrs: tag

ClassNames: CSS

Theme-
Variables: None
*/

const StyledListGroupItemHeading = styled(ListGroupItemHeading).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledListGroupItemHeading extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledListGroupItemHeading {...props}>
                {children}
            </StyledListGroupItemHeading>
        )
    }
}