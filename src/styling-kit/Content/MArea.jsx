/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Area Component -- An area tag component defines an area inside an image-map (an image-map is an image with clickable areas).
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Area } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule noGutters tag theme shape coords alt href

ClassNames: None

Theme-
Variables: None
*/

const StyledArea = styled(Area).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledArea extends Component {
    render(){
        return(
            <StyledArea />
        )
    }
}