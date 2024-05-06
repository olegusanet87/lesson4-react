import { Field, Form, Formik } from 'formik';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}

/*
export default function SearchForm({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
}
*/
