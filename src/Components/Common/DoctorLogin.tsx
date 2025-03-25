import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Lock } from 'lucide-react';

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const DoctorLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <h3 className="text-center">Doctor <span className="heading1">Login</span></h3>
          <form onSubmit={handleSubmit((d) => console.log(d))}>
            {/* Email Input with Icon */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <Mail size={20} />
              </span>
              <input
                className="form-control"
                placeholder="Enter Your Email"
                {...register('email')}
              />
            </div>
            {errors.email && <p className="text-danger">{errors.email.message}</p>}

            {/* Password Input with Icon */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <Lock size={20} />
              </span>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
                {...register('password')}
              />
            </div>
            {errors.password && <p className="text-danger">{errors.password.message}</p>}

            {/* Submit Button */}
            <input type="submit" className="form-control mb-3 AdminSubmitbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
