/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <fieldset> tag is used to group related elements in a form.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Fieldset } from '@bootstrap-styled/v4'

/*
Atrrs: None

ClassNames: CSS

Theme-
Variables:
$grid-gutter-width: string
$enable-grid-classes: bool
*/


const StyledCol = styled(Fieldset).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledFieldset extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledFieldset {...props}>
                {children}
            </StyledFieldset>
        )
    }
}