import styled from '@emotion/styled';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 auto;
    padding: 15px;
    width: 30%;
    min-height: 620px;

    border-radius: 10px;
    background-color: #040444;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.h1`
    margin: 0;
    
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
`;

export const Subtitle = styled.h2`
    margin: 0 0 0 20px;
    
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
`;
