/* 
    Attr's are the original styled-component attributes as stated on "https://bootstrap-styled.github.io/v4/".
    All ClassNames are original bootstrap classnames as found on "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
    and are by no means complete. For more classes search Bootstrap related info-pages.
    More info on "https://getbootstrap.com/docs/4.0/getting-started/introduction/".

    Most Attr's can be taken as className but not all of them.

    Details Component -- The <Table> component to create your tables.
*/
import React, { Component } from "react"
import styled from 'styled-components'
import { Table } from '@bootstrap-styled/v4'

/*
Atrrs: bordered cssModule hover inverse reflow responsive responsiveTag size striped tag theme 

ClassNames:
- table-active
- table-bordered
- table-borderless
- table-condensed
- table-dark
- table-hover
- table-responsive-*
- table-striped

Theme-
Variables:
$spacer: string
$body-bg: string
$table-cell-padding: string
$table-sm-cell-padding: string
$table-bg: string
$table-inverse-bg: string
$table-inverse-bg-accent: string
$table-inverse-bg-hover: string
$table-inverse-color: string
$table-inverse-border: string
$table-bg-accent: string
$table-bg-hover: string
$table-bg-active: string
$table-head-bg: string
$table-head-color: string
$table-border-width: string
$table-border-color: string
$state-success-bg: string
$state-info-bg: string
$state-warning-bg: string
$state-danger-bg: string
*/

const theme = {
    init: {}
}

const StyledTable = styled(Table).attrs((props) => ({ 
    className: ''
})
)``

export default class MyStyledTable extends Component {
    render(){
        const {...props} = this.props
        const { children } = this.props
        return(
            <StyledTable {...props} theme={theme.init}>
                {children}
            </StyledTable>
        )
    }
}