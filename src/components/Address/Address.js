import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Address.styles";

function Address({ address = {} }) {
  return (
    <Wrapper>
      <h1>{address.logradouro}</h1>
      <p>{address.bairro}</p>
      <p>
        {address.localidade} - {address.uf}
      </p>
      <p>{address.cep}</p>
    </Wrapper>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    cep: PropTypes.string,
    logradouro: PropTypes.string,
    complemento: PropTypes.string,
    bairro: PropTypes.string,
    localidade: PropTypes.string,
    uf: PropTypes.string,
    unidade: PropTypes.string,
    ibge: PropTypes.string,
    gia: PropTypes.string
  })
};

export default Address;
