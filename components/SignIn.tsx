import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { GET_USER_QUERY } from "../hooks/useUser";
import useForm from "../hooks/useForm";

const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          displayName
          username
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

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

  input {
    margin-top: 4px;
    padding: 8px;
    border-radius: 6px;
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [signin, { data, error, loading }] = useMutation(SIGNIN_USER_MUTATION, {
    variables: inputs,
    refetchQueries: [GET_USER_QUERY],
  });

  if (error) console.log(`signin.tsx error log`, error);

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    resetForm();
  }

  console.log(`the data`, data);

  return (
    <>
      <Form onSubmit={handleSubmit} action="/get-sign-in" method="post">
        {data?.authenticateUserWithPassword?.__typename ===
          "UserAuthenticationWithPasswordFailure" && (
          <div className="error-message">
            <h3>Sorry, we could not find your account.</h3>
          </div>
        )}

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
              required
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
              placeholder="Your Password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <button type="submit" disabled={loading ? true : false}>
          {!loading ? "Log in" : "Loading..."}
        </button>
      </Form>
      <p>Forgot password?</p>
    </>
  );
}
