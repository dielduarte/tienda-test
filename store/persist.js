const set = (key, value) => {
  localStorage.setItem(key, value);
};

const get = key => localStorage.getItem(key);

export { set, get };
