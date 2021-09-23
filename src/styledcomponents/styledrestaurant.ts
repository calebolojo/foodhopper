import styled from 'styled-components'


interface ResImageProps{
    bgimage: string
}

export const RestaurantImage = styled.div<ResImageProps>`
    background-image: url(${props => props.bgimage});
    background-size: cover;
    background-position: center;
`