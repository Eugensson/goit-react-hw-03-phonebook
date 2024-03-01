import styled from '@emotion/styled';

export const Info = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
`;

export const Btn = styled.button`
    cursor: pointer;

    padding: 5px 15px;

    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    background-color: transparent;
    border-color: #ffffff;
    border: 2px solid;
    border-radius: 5px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #2196f3;
        border-color: #2196f3;
    }
`;