/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <CardImg> component adds an image for your cards.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { CardImg } from '@bootstrap-styled/v4'

/*
Atrrs: alt bottom cssModule src tag top

ClassNames: CSS

Theme-
Variables: None
*/


const StyledCardImg = styled(CardImg).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledCardImg extends Component {
    render(){
        const {...props} = this.props

        return(
            <StyledCardImg {...props} />
        )
    }
}