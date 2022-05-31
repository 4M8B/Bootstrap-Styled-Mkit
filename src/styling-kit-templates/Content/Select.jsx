/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Select> element is used to create a drop-down list.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Select } from '@bootstrap-styled/v4'

/*
Atrrs: name id

ClassNames: CSS

Theme-
Variables: None
*/


const StyledSelect = styled(Select).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledSelect extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledSelect {...props}>
                {children}
            </StyledSelect>
        )
    }
}