/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Details /> component specifies additional details that the user can view or hide on demand.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Img } from '@bootstrap-styled/v4'

/* 
Attrs: alt src cssModule figure fluid tag theme

ClassNames:
- img-fluid
- img-thumbnail

Theme-
Variables:
$enable-rounded: bool
$enable-transitions: bool
$enable-shadows: bool
$spacer-halved: string
$border-width: string
$border-radius: string
$thumbnail-padding: string
$thumbnail-bg: string
$thumbnail-border-width: string
$thumbnail-border-color: string
$thumbnail-border-radius: string
$thumbnail-box-shadow: string
$thumbnail-transition: string
$figure-caption-font-size: string
$figure-caption-color: string
*/


const theme = {
    init: {}
}

const StyledImg = styled(Img).attrs((props) => ({    
    className: ''
})
)``


export default class MyStyledImage extends Component {
    render(){
        const {...props} = this.props
        return(
            <StyledImg {...props} theme={theme.init} />
        )
    }
}