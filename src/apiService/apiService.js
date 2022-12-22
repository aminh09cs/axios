import instance from "../utils/axiosCustomize";

const getAllUsers = async () => {
  try {
    const res = await instance.get('users');
    return res;
  }
  catch (error) {
    alert(error);
  }
}

const getUserById = async (id) => {
  try {
    const res = await instance.get(`users/${id}`);
    return res;
  }
  catch (error) {
    alert(error);
  }
}

const postNewUser = async (name) => {
  const data = {
    name: name,
  }
  try {
    const res = await instance.post('/users', data)
    return res;
  }
  catch (error) {
    alert(error);
  }
}

const deleteUserById = async (id) => {
  try {
    const res = await instance.delete(`/users/${id}`);
    return res;
  }
  catch (error) {
    alert(error);
  }
}

export { getAllUsers, getUserById, postNewUser, deleteUserById }
