import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, Label, FieldInput, Btn, ErrMsg } from './ContactForm.styled'

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' }

  const AddContactSchema = Yup.object().shape({
    name: Yup.string()
     .min(8, 'Too Short! The name must be at least 8 characters long.')
     .max(32, 'Too Long! The name must be no more than 32 characters.' )
     .required('*Name is a required field'),    
    number: Yup
      .string()
      .matches(
        /^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/,
        '*Incorrect format. Insert +38-000-000-00-00'
      )
      .required('*Phone number is a required field'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddContactSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper noValidate>
        <Label>
          Name
          <FieldInput
            type="text"
            name="name"
            required
            placeholder="First and last name"
          />
          <ErrorMessage component={ErrMsg} name="name" />
        </Label>
        <Label>
          Number
          <FieldInput
            type="tel"
            name="number"
            required
            placeholder="+38-012-345-67-89"
          />
          <ErrorMessage component={ErrMsg} name="number" />
        </Label>
      <Btn type="submit">Add contact</Btn>
      </FormWrapper>
    </Formik>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;