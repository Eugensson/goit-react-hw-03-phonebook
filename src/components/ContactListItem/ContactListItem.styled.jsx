import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const ContactText = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 14px;
`;

export const DeleteItemBtn = styled.button`
  font-size: 10px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #ccc;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
