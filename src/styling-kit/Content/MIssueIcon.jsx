/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <IssueIcon /> component shows an issue icon where you want it.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { IssueIcon } from '@bootstrap-styled/v4'

/*
Atrrs: None

ClassNames: CSS

Theme-
Variables: None
*/


const StyledIssueIcon = styled(IssueIcon).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledIssueIcon extends Component {
    render(){
        const {...props} = this.props
        return(
            <StyledIssueIcon {...props} /> 
        )
    }
}