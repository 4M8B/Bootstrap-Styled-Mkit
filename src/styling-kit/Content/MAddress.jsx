/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Address Component -- An address tag component used to display direct contact information for the author/owner of a document or an article.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Address } from '@bootstrap-styled/v4'

/* 
Attrs: None

ClassNames: None

Theme-
Variables: None
*/

const StyledAddress = styled.address``


export default class MyStyledAddress extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledAddress>
                {children}
            </StyledAddress>
        )
    }
}