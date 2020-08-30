(() => {
  const cage = 3 * 365 * 24 * 60 * 60;
  document.cookie = `visited=true; path=/; max-age=${cage}`;
})();
