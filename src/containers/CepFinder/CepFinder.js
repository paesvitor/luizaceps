import React, { useState } from "react";
import { createStateMock } from "utils/createStateMock";
import dataMock from "./__mocks__/data.json";

// API
import { fetchData } from "./api";

//Components
import Search from "components/Search";
import Results from "components/Results";

function CepFinder() {
  const [cep, setCep] = useState(createStateMock("01316-010", ""));
  const [data, setData] = useState(createStateMock(dataMock, {}));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const cepIsValid = cep.length === 9;

  const setInitialSearchState = () => {
    setData({});
    setLoading(true);
    setError({ status: false });
  };

  const setFinishSearchState = (data, error) => {
    data && setData(data);
    error && setError({ status: true, message: error });
    setLoading(false);
  };

  const handleSubmitSearch = async e => {
    e.preventDefault();
    if (cepIsValid) {
      setInitialSearchState();
      const { data, error } = await fetchData(cep);
      setFinishSearchState(data, error);
    }
  };

  const handleChangeCep = e => {
    setCep(e.target.value);
  };

  return (
    <section id="CepFinder">
      <Search
        cep={cep}
        changeCep={handleChangeCep}
        submitSearch={handleSubmitSearch}
        error={error}
        loading={loading}
        cepIsValid={cepIsValid}
      />

      <Results data={data} loading={loading} setData={setData} />
    </section>
  );
}

export default CepFinder;
