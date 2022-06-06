/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Progress> component wraps one or multiple progressbars.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Progress } from '@bootstrap-styled/v4'

/*
Atrrs: children theme

ClassNames: CSS

Theme-
Variables:
$enable-rounded: bool
$enable-hover-media-query: bool
$progress-height: string
$progress-font-size: string
$progress-bg: string
$progress-border-radius: string
$progress-box-shadow: string
$progress-bar-color: string
$progress-bar-bg: string
$progress-bar-animation-timing: string
*/

const StyledProgress = styled(Progress).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledProgress extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledProgress {...props}>
                {children}
            </StyledProgress>
        )
    }
}