/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Col> component for building responsive grids.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Col } from '@bootstrap-styled/v4'

/*
Atrrs: cssModule lg md sm tag theme widths xl xs

ClassNames:
- col-auto
- col-*
- col-sm-*
- col-md-*
- col-lg-*
- col-xl-*

Theme-
Variables: None
*/


const StyledCol = styled(Col).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledCol extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledCol {...props}>
                {children}
            </StyledCol>
        )
    }
}