/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete.
    Most Attr's can be taken as className but not all of them.

    Caption Component -- A <Caption /> tag component in order to add description title to a <Table /> component.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Caption } from '@bootstrap-styled/v4'

/*
Atrrs: theme

ClassNames: None

Theme-
Variables:
$table-cell-padding: string
$text-muted: string
*/

const theme = {
    init: {}
}

const StyledCaption = styled(Caption)``

export default class MyStyledCaption extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledCaption theme={theme.init}>
                {children}
            </StyledCaption>
        )
    }
}