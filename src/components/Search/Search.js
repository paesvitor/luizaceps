import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Form,
  FormGroup,
  Button,
  InputWrapper,
  Label,
  ErrorMessage
} from "./Search.styles";
import Cleave from "cleave.js/react";

const Search = ({
  cep,
  changeCep,
  submitSearch,
  error,
  loading,
  cepIsValid
}) => {
  return (
    <Wrapper>
      <h1>Consultar</h1>
      <Form id="Search" onSubmit={submitSearch}>
        <FormGroup>
          <Label>CEP</Label>
          <InputWrapper>
            <Cleave
              options={{
                delimiters: ["-"],
                blocks: [5, 3]
              }}
              placeholder="Digite seu CEP"
              type="text"
              value={cep}
              onChange={changeCep}
            />
          </InputWrapper>
        </FormGroup>
        <Button
          id="submit-search"
          disabled={loading || !cepIsValid}
          type="submit"
        >
          Buscar
        </Button>
      </Form>

      {error.status && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};

Search.propTypes = {
  changeCep: PropTypes.func,
  submitSearch: PropTypes.func,
  cep: PropTypes.string,
  error: PropTypes.object,
  loading: PropTypes.bool,
  cepIsValid: PropTypes.bool
};

export default Search;
