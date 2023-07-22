import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLinkComponent from './components/NavBarLink.Component';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserFromLocalStorage } from '../../services/auth.service';
import { removeUser } from '../../redux/user.slicer';

const NavComponent = () => {
  // data from redux store
  const userStore = useSelector((state) => state.userStore.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(userStore);
  }, [userStore]);

  const onLogOut = () => {
    removeUserFromLocalStorage();
    dispatch(removeUser());
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-3 mb-3 py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" id="logo">
          Zurea Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavBarLinkComponent btnTitle="Home" redirect="/" />
            </li>
            <li className="nav-item">
              <NavBarLinkComponent btnTitle="Shop" redirect="/shop" />
            </li>
            <li className="nav-item">
              <NavBarLinkComponent btnTitle="Watch" redirect="/watch" />
            </li>
            <li className="nav-item">
              <NavBarLinkComponent btnTitle="More" redirect="/more" />
            </li>
            <li className="nav-item">
              <NavBarLinkComponent
                btnTitle={
                  userStore ? (
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={(e) => onLogOut()}
                    >
                      Log out
                    </button>
                  ) : (
                    'Login'
                  )
                }
                redirect="/login"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
