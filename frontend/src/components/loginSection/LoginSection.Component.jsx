import { useState } from 'react';
import { loginUser } from '../../services/auth.service';

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState({
    email: '',
    password: '',
  });
  const [validationMsg, setValidationMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSignInObj = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    let copySignInObj = signInObj;
    copySignInObj[inputName] = inputValue;
    setSignInObj(copySignInObj);
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (!signInObj.email || !signInObj.password) {
      return setValidationMsg(
        `The ${!signInObj.email ? 'email' : 'password'} field is required`
      );
    }

    // todo: call API
    //console.log(signInObj);
    loginUser(signInObj)
      .then((res) => console.log('response...', res))
      .catch((err) => {
        console.log('error...', err);
        if (err) {
          setErrMsg('Something went wrong. Please try again.');
        }
      })
      .finally(() => console.log('Anything'));
  };

  return (
    <>
      <h1 className="page-title">Log in to your account</h1>
      <div className="form-wrapper">
        <div className="login-form">
          <form onSubmit={onLoginSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                maxLength="60"
                //required
                onChange={(e) => handleSignInObj(e)}
                //onBlur={(e) => handleSignInObj(e)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                maxLength="60"
                //required
                onChange={(e) => handleSignInObj(e)}
                //onBlur={(e) => handleSignInObj(e)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              type="submit"
              className="form-control mt-3 btn btn-outline-primary"
              //onClick={onLoginSubmit} // If not in form tag
            >
              Sign in
            </button>
          </form>

          {validationMsg ? (
            <p className="text-danger my-2 text-center">{validationMsg}</p>
          ) : null}

          {errMsg ? (
            <p className="text-danger my-2 text-center">{errMsg}</p>
          ) : null}

        </div>
      </div>
    </>
  );
};

export default LoginSectionComponent;
