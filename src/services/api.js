const API_URL = 'https://projeto-back-end-production.up.railway.app';

// ========== USUÁRIOS ==========

export const createUser = async (data) => {
  const res = await fetch(`${API_URL}/v1/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/v1/user/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const getUserById = async (id, token) => {
  const res = await fetch(`${API_URL}/v1/user/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return res.json();
};

export const updateUser = async (id, data, token) => {
  const res = await fetch(`${API_URL}/v1/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
};

// ========== CATEGORIAS ==========

export const getCategories = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}/v1/category/search?${query}`);
  return res.json();
};

export const getCategoryById = async (id) => {
  const res = await fetch(`${API_URL}/v1/category/${id}`);
  return res.json();
};

// ========== PRODUTOS ==========

export const getProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}/v1/product/search?${query}`);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/v1/product/${id}`);
  return res.json();
};