/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <sub> tag defines subscript text.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Sub } from '@bootstrap-styled/v4'

/*
Atrrs: children color cssModule tag theme

ClassNames: CSS

Theme-
Variables: None
*/


const StyledSub = styled(Sub).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledSub extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledSub {...props}>
                {children}
            </StyledSub>
        )
    }
}