/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Abbreviation Component -- An abbreviation tag component used to display abbreviated words and acronyms definition.
*/

import React, { Component } from "react"
import styled from 'styled-components'
import { Abbr } from '@bootstrap-styled/v4'

/* 
Attrs: title cssModule initialism tag

Classnames: None

Theme-
Variables: None
*/

const theme = {
    init: {}
}

const StyledAbbr = styled(Abbr).attrs({    
})``


export default class MyStyledAbbr extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledAbbr theme={theme.init}>
                {children}
            </StyledAbbr>
        )
    }
}