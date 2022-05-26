/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Details /> component specifies additional details that the user can view or hide on demand.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Blockquote } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule reverse tag theme

ClassNames:
- blockquote
- blockquote-footer

Theme-
Variables:
$spacer: string
$spacer-halved: string
$blockquote-small-color: string
$blockquote-font-size: string
$blockquote-border-color: string
$blockquote-border-width: string
*/

const theme = {
    init: {}
}

const StyledBlockquote = styled(Blockquote).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledBlockquote extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledBlockquote {...props} theme={theme.init}>
                {children}
            </StyledBlockquote>
        )
    }
}