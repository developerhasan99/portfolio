import styled from "@emotion/styled";
import { useForm, ValidationError } from "@formspree/react";

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`;

function Form() {
  const [state, handleSubmit] = useForm("mvollqpl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FieldWrapper>
        <label htmlFor="email">Name:</label>
        <input id="email" type="email" name="email" />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FieldWrapper>
      <FieldWrapper>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FieldWrapper>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;
