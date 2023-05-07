import { Component } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

/* Схема валідації */
const SearchSchema = Yup.object().shape({
  searchText: Yup.string('Must be a string')
    .max(50, 'Too Long!')
    .required('Required'),
});

export class Searchbar extends Component {
  handleSubmit = e => {};

  render() {
    const { onSubmit } = this.props;

    return (
      <header>
        <Formik
          initialValues={{ searchText: '' }}
          validationSchema={SearchSchema}
          onSubmit={(values, actions) => {
            onSubmit({ values });
            //actions.resetForm();
          }}
        >
          <form>
            <button type="submit">
              <span>Search</span>
            </button>
            <Field name="searchText" placeholder="Search images and photos" />
          </form>
        </Formik>
      </header>
    );
  }
}
