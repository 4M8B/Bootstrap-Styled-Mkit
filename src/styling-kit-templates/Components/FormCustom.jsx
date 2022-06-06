/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <FormCustom> has custom checkbox and radio button.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { FormCustom } from '@bootstrap-styled/v4'

/*
Atrrs: checked children cssModule defaultChecked radio 

ClassNames: CSS

Theme-
Variables:
$id: string
$name: string
*/

const theme = {
    init: {
    }
}

const StyledFormCustom = styled(FormCustom).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledFormCustom extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledFormCustom {...props} theme={theme.init}>
                {children}
            </StyledFormCustom>
        )
    }
}