export const getGamesFilter = (searchTerms, gameList) => {
  const { gameTerm, platformTerm } = searchTerms;
  console.log(gameList, platformTerm, gameTerm);

  if (platformTerm === "All") {
    return gameList.filter((item) => {
      const { games } = item;
      for (let game of games) {
        if (game.name.toLowerCase().includes(gameTerm)) {
          return item;
        }
      }
    });
  }

  return gameList.filter((item) => {
    const { games } = item;

    for (let game of games) {
      const {
        platforms: { name },
      } = game;
      if (name === platformTerm && game.name.toLowerCase().includes(gameTerm)) {
        return item;
      }
    }
  });
};
