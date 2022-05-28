/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <address> tag defines the contact information for the author/owner of a document or an article.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Address } from '@bootstrap-styled/v4'

/* 
Attrs: None

ClassNames: CSS

Theme-
Variables: None
*/

const StyledAddress = styled(Address).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledAddress extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledAddress {...props}>
                {children}
            </StyledAddress>
        )
    }
}