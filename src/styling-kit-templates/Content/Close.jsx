/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Close> component add functions to a close button.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Close } from '@bootstrap-styled/v4'

/*
Atrrs: onDismiss closeLabel cssModule sr-only theme

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
*/

const theme = {
    init: {}
}

const StyledClose = styled(Close).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledClose extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledClose {...props} theme={theme.init}>
                {children}
            </StyledClose>
        )
    }
}