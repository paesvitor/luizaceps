import React, { memo } from "react";
import PropTypes from "prop-types";
import { Wrapper, LoaderWrapper, CloseButton } from "./Results.styles";
import { ReactComponent as CloseIcon } from "images/icons/close.svg";
import Map from "components/Map";
import Address from "components/Address";
import Loader from "react-loader-spinner";

function Results({ data, loading, setData }) {
  const { geocoding, address } = data;

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="Bars" color="#00BFFF" height="50" width="50" />
      </LoaderWrapper>
    );
  }

  if (Object.keys(data).length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <CloseButton id="close" onClick={() => setData({})}>
        <CloseIcon />
      </CloseButton>
      <Address address={address} />
      <Map geocoding={geocoding} />
    </Wrapper>
  );
}

Results.propTypes = {
  geocoding: PropTypes.object,
  address: PropTypes.object,
  clearData: PropTypes.func
};

export default memo(Results);
