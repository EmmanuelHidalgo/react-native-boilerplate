const fetchUserData =  async (id) => {
  const fixedTerm = id !== '' ? id : '1';
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${fixedTerm}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export default fetchUserData;