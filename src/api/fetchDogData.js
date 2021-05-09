const fetchDogData =  async (breed) => {
  const fixedBreed = breed !== '' ? breed : 'dachshund';
  const res = await fetch(`https://dog.ceo/api/breed/${fixedBreed}/images/random`);
  const data = await res.json();
  return data;
}

export default fetchDogData;