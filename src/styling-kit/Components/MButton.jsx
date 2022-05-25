import React, { Component } from "react";
import styled from 'styled-components'
import { Button } from '@bootstrap-styled/v4';


const StyledButton = styled(Button).attrs((props) => ({
    className: 'btn btn-primary'
    })
)``

export default class MyStyledButton extends Component {
    render() {
        const { ...props } = this.props;
        
        return(
            <StyledButton {...props} />
        )
    }
}