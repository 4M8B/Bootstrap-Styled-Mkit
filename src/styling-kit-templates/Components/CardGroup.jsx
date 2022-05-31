/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    Most Attr's can be taken as className but not all of them.

    Details Component -- The <CardGroup /> component is used to group the <Card> component.
*/
import React, { Component } from 'react'
import styled from 'styled-components';
import { CardGroup } from '@bootstrap-styled/v4';

/* 
Attrs: cssModule tag theme

Classnames: CSS

Theme-
Variables:
$brand-primary: string
$brand-success: string
$brand-info: string
$brand-warning: string
$brand-danger: string
$brand-inverse: string
$card-spacer-x: string
$card-spacer-y: string
$card-border-width: string
$card-border-radius: string
$card-border-color: string
$card-border-radius-inner: string
$card-cap-bg: string
$card-bg: string
$card-link-hover-color: string
$card-img-overlay-padding: string
$card-columns-count-md: string
$card-columns-gap-md: string
$card-columns-margin-md: string
$card-columns-count-lg: string
$card-columns-gap-lg: string
$card-columns-margin-lg: string
$card-columns-count-xl: string
$card-columns-gap-xl: string
$card-columns-margin-xl: string
$card-columns-count-xxl: string
$card-columns-gap-xxl: string
$card-columns-margin-xxl: string
$card-deck-margin: string
$btn-primary-bg: string
$btn-secondary-border: string
$btn-info-bg: string
$btn-success-bg: string
$btn-warning-bg: string
$btn-danger-bg: string
$link-color: string
$link-decoration: string
$link-hover-color: string
$link-hover-decoration: string
$enable-rounded: bool
$enable-hover-media-query: bool
*/
 
const theme = {
    init : {}
}

const StyledCardGroup = styled(CardGroup).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledCardGroup extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <>  
                <StyledCardGroup {...props} theme={theme.init}>
                    {children}
                </StyledCardGroup>
            </>

        )
    }
}

  