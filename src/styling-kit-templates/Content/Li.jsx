/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Li> component to display a list item.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Li } from '@bootstrap-styled/v4'

/*
Atrrs: active children cssModule disabled dropdown-footer dropdown-header dropdown-item	inline media separator tag theme

ClassNames:
- list-group-item
- list-group-item-action
- list-group-item-danger
- list-group-item-dark
- list-group-item-info
- list-group-item-light
- list-group-item-primary
- list-group-item-success
- list-group-item-warning
- list-inline-item

Theme-
Variables:
$list-inline-padding: string
*/

const theme = {
    init: {}
}

const StyledLi = styled(Li).attrs((props) => ({ 
    className: ''
})
)``


export default class MyStyledLi extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledLi {...props} theme={theme.init}>
                {children}
            </StyledLi>
        )
    }
}