import styled from '@emotion/styled'


export const CardStatistics = styled.section`
      margin-top: 30px;
    width: 350px;

    
    margin-right: auto;
    margin-left: auto;

    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.18);
`

export const StatTittle = styled.h2`
    background-color: gray;
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin: 0;
    padding: 15px 0;
`

export const StatList = styled.ul`
    display: flex;
    padding: 0;
`
export const StatItem = styled.li`
    width: 20%;
    padding: 5px 0 15px 0;
    list-style: none;
    display: flex;
    
    flex-direction: column;
    align-items: center;

    &:nth-child(2n+1){
        background-color:beige
    }
    &:nth-child(2n){
        background-color:violet;
    }
`
export const StatItemLaebl = styled.span`
    font-size: 18px;
    color: gray;
    margin-bottom: 10px;
`
export const StatItemQuantity = styled.span`
    
`