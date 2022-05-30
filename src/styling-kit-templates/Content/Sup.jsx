/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Sup> tag defines superscript text. 
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Sup } from '@bootstrap-styled/v4'

/*
Atrrs: None

ClassNames: None

Theme-
Variables: None
*/


const StyledSup = styled(Sup).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledSup extends Component {
    render(){
        return(
            <StyledSup />
        )
    }
}