import * as Yup from "yup";
import { ErrorMessage, Form, Field, Formik } from 'formik';
import css from './ContactForm.module.css'

const ContactForm = ({ onAddContact}) => {

const initialValues = {
    name: '',
    number: '',
};

const handleSubmit = (values, options) => {
    onAddContact(values.name, values.number);
    options.resetForm();
  };

const orderSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To Short').max(50, 'To Long').required("Required field"),
    number: Yup.string().matches(/^\d{7}$/, 'Invalid phone number').required("Required field"),
});

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={orderSchema}>
    <Form className={css.form}>
        <label className={css.label}>
            <span>Name</span>
        <Field name='name' className={css.input} />  
        <ErrorMessage name='name' component='p' className={css.error} />   
        </label>
      <label className={css.label}>
        <span>Number</span>
        <Field name='number' className={css.input} />
        <ErrorMessage name='number' component='p' className={css.error} />   
      </label>
     <button type="submit" className={css.btn}>Add contact</button>
    </Form>
    </Formik>
  );
};

export default ContactForm;