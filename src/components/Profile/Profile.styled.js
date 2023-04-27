import styled from "@emotion/styled" 
 
export const Profile = styled.div`
margin-top: 30px;
    width: 350px;
    margin-bottom:100px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.15);
`;

export const PrDesctirpion = styled.div `
display:flex;
flex-direction:column;
align-items:center;
`
export const PrImg= styled.img`
    width: 60%;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    padding-top: 20px;
`

export const PrName = styled.p `
font-size: 40px;
    text-align: center;
    margin-bottom: 0;
`

export const PrTag = styled.p `
font-size: 25px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
    color:gray;
`
    
export const PrLocation = styled.p`
    font-size: 25px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
    color:gray;
`

export const StatsList = styled.ul `
    display: flex;
    justify-content:space-evenly;
    margin-top :50px;
    padding: 0;
`

export const StatsItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
padding-top: 15px;
    padding-bottom: 15px;
    list-style: none;
`
export const ItemLabel = styled.span`
 font-size: 18px;
    color: gray;
    margin-bottom: 10px;
`
export const ItemQuantity = styled.span`
color: #000;
font-size:24px;
`
