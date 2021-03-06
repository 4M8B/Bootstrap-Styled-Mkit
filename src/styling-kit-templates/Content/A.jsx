/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <A> component used to direct towards a page outside of the application.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { A } from '@bootstrap-styled/v4'

/* 
Attrs: color cssModule tag theme

ClassNames: CSS

Theme-
Variables:
$link-color: string
$link-decoration: string
$link-hover-color: string
$link-hover-decoration: string
$enable-hover-media-query: bool
*/

const theme = {
    init: {}
}

const StyledA = styled(A).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledAnchor extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledA {...props} theme={theme.init}>
                {children}
            </StyledA>
        )
    }
}