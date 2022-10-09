import { useState } from "react"
import styled from "styled-components";
import ArrowIcon from '../icons8-arrow-32.png';

const FloatingDiv = styled.div`
    position: relative;
    top: 45px;
    display: flex;
    flex-direction: column;
    width: 0;
    margin: auto;
    align-items: center;
`
const Text = styled.div`
    white-space: nowrap;
`

const StyledArrowIcon = styled.img`
    width: 30px;
`

function pluralize(val, singular) {
    if (val === 1) {
        return `${val} ${singular}`
    }
    return `${val} ${singular}s`
}

export default function CountInfo({plays, num}) {
    return (
         <FloatingDiv>
            <StyledArrowIcon src={ArrowIcon} />
            <Text>{num}: {pluralize(plays, 'play')}</Text>
        </FloatingDiv>
    )
}