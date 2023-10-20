export const mapPopup = (games) => {
  const ch = games.map(({ name, price, platforms }) => {
    let a = `<h1>${name}</h1>`;
    if (price) {
      a += `<h3>${price}</h3>`;
    }

    if (platforms.name) {
      a += `<h5>${platforms.name}</h5>`;
    }
    return a;
  });

  return ch.reduce((re, c) => {
    return re + c;
  }, "");
};
