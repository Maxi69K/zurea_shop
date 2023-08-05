import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { CreateProduct } from '../../services/product.service';

const ProductCreateFormComponent = () => {

  const [imgString, setImgString] = useState('');
  const user = useSelector(store => store.userStore.user);

  useEffect(() => {
    //console.log('img string--->', imgString);
    console.log('User--->', user?._id);
  }, [user]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(), // required('error message')
      description: Yup.string().required(),
      price: Yup.number().min(1, 'must be more then 0').required(),
    }),
    onSubmit: (values) => {
      console.log('values---', values);
      if (!user?._id) {
        return null;
      }
      CreateProduct({
        ...values,
        userId: user?._id,
        imgUrl: imgString,
      })
        .then((response) => {
          console.log(response);
          // TODO: add msg and redirect
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const convertFileToBase64 = file => {
    return new Promise((resolve, reject) => {
      // Native DOM class
      const fileReader = new FileReader();
      // Convert file to Base64
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        //console.log(fileReader.result);
        setImgString(fileReader.result);
      }
      fileReader.onerror = () => {
        console.log(fileReader.error);
      }
    })
  }

  const handleFileUpload = e => {
    const file = e.target.files[0];
    //console.log(file);
    convertFileToBase64(file);
  }

  return (
    <div className="col-sm-8 col-lg-6 col-xl-4 mx-3 m-sm-auto ">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title ? (
            <span className="text-danger">{formik.errors.title}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <span className="text-danger">{formik.errors.description}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price in $
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.touched.price && formik.errors.price ? (
            <span className="text-danger">{formik.errors.price}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <button className="btn btn-outline-primary form-control" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductCreateFormComponent;
