import styled from "styled-components";
import useForm from "../hooks/Forms";

const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: stretch;
  justify-items: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  fieldset {
    width: 100%;
  }

  fieldset label {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    margin-bottom: 14px;
  }

  fieldset.email label {
  }

  fieldset.password {
  }

  input {
    margin-top: 4px;
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <>
      <Form onSubmit={handleSubmit} action="/get-sign-in" method="post">
        <fieldset className="email">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset className="password">
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">Log in</button>
      </Form>
      <p>Forgot password?</p>
    </>
  );
}
