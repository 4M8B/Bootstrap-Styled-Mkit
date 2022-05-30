/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <mark> tag defines text that should be marked or highlighted.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Mark } from '@bootstrap-styled/v4'

/*
Atrrs: theme

ClassNames:
- mark

Theme-
Variables:
$mark-padding: string
$mark-bg: string
*/


const StyledMark = styled(Mark).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledMark extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledMark {...props}>
                {children}
            </StyledMark>
        )
    }
}