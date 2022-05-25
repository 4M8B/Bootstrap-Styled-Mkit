import React, { Component } from "react"
import styled from 'styled-components'
import { Card } from '@bootstrap-styled/v4'

/* 
Attrs: backgroundColor block borderColor color cssModule focus hover inverse outline tag theme

ClassNames:
- card
- card-body	
- card-columns	
- card-danger	
- card-dark	
- card-deck	
- card-footer	
- card-group	
- card-header	
- card-header-tabs	
- card-header-pills	
- card-img-bottom	
- card-img-overlay	
- card-img-top	
- card-img-top	
- card-light	
- card-link	
- card-primary	
- card-secondary	
- card-subtitle	
- card-success	
- card-text	
- card-title	
- card-warning	


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
$card-margin-y-halved: string
$card-margin-x-halved: string
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
    init: {
        '$card-border-width': '2px',
        '$card-border-radius': "3",
        '$card-border-color': "yellow",
    }
}

const StyledCard = styled(Card).attrs((props) => ({ 
    className: ''
})
)`
    width: 100px;
    height: 150px;
`


export default class MyStyledCard extends Component {
    render(){
        const { children } = this.props
        return(
            <StyledCard theme={theme.init}>
                {children}
            </StyledCard>
        )
    }
}