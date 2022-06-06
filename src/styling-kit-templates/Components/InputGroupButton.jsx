/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <InputGroupButton> component adds a blue attention button before the input field.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { InputGroupButton } from '@bootstrap-styled/v4'

/*
Atrrs: children cssModule groupAttributes groupClassName tag

ClassNames: CSS

Theme-
Variables: None
*/

const StyledInputGroupButton = styled(InputGroupButton).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledInputGroupButton extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledInputGroupButton {...props}>
                {children}
            </StyledInputGroupButton>
        )
    }
}