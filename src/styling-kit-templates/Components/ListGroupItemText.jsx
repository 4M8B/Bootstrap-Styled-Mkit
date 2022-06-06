/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <ListGroupItemText> component to add text to your ListGroupItems.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { ListGroupItemText } from '@bootstrap-styled/v4'

/*
Atrrs: tag

ClassNames: CSS

Theme-
Variables: None
*/

const StyledListGroupItemText = styled(ListGroupItemText).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledListGroupItemText extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledListGroupItemText {...props}>
                {children}
            </StyledListGroupItemText>
        )
    }
}