import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px;

    border: 2px solid #ffffff;
    border-radius: 10px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
`;

export const FieldInput = styled(Field)`
    padding: 5px;
    
    font-size: 14px;
    color: #040444;

    ::placeholder {
        font-size: 14px;
    }
`;

export const Btn = styled.button`
    cursor: pointer;

    margin: 0 auto;
    padding: 5px 25px;
    width: fit-content;
    height: 35px;

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

export const ErrMsg = styled.div`
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
`;