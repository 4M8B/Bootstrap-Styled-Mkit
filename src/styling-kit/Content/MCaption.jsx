/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <caption> tag defines a table caption.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Caption } from '@bootstrap-styled/v4'

/*
Atrrs: theme

ClassNames: CSS

Theme-
Variables:
$table-cell-padding: string
$text-muted: string
*/

const theme = {
    init: {}
}

const StyledCaption = styled(Caption).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledCaption extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledCaption {...props} theme={theme.init}>
                {children}
            </StyledCaption>
        )
    }
}