export async function fetchAddress(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
  } catch (error) {
    return { erro: true };
  }
}

export async function fetchGeocoding(address) {
  try {
    const { logradouro, localidade, uf } = address;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${logradouro}+${localidade}+${uf}&key=3a0607b9bcef43cfb18b9ff328d7b787&pretty=1`
    );
    const data = await response.json();
    const bestMatch = data.results[0];
    return bestMatch.geometry;
  } catch (error) {
    return error;
  }
}

export async function fetchData(cep) {
  try {
    const address = await fetchAddress(cep);
    if (!address.erro) {
      const geocoding = await fetchGeocoding(address);
      const data = {
        address,
        geocoding
      };

      return { data };
    } else {
      return { error: "CEP Inválido." };
    }
  } catch (error) {
    return error;
  }
}
