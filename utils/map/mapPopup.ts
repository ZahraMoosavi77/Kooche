export const mapPopup = (games: Game[]): string => {
  const haveNotPlatforms = games[0].platforms === null;
  let platformName: string = "";

  if (!haveNotPlatforms) {
    platformName = games[0].platforms!.name;
  }

  return `<div class="popup-image"><Image
          src=${games[0].imageUrl}
          alt="game image"
          width={32}
          height={32}
          class="popup-image_url"
        /></div><div class="popup-content">
<div  class="w-full flex justify-between items-center overflow-hidden">
<span class="popup-game_name" title="${games[0].name}">
${games[0].name}
</span>
<img src="/images/map/Bookmark.svg" alt="Boolmark">
</div>
<div class="flex">
${games[0].exchange ? "<span class='popup-tag' >تبادل</span>" : ""}
${
  !!parseInt(games[0].price.toString())
    ? "<span class='popup-tag'>فروش</span>"
    : ""
}
</div>
<div class="flex items-center">
<img src="/images/map/Tag.svg" alt="Tag">
<span class="popup-platform">${platformName}</span>
</div>
<div class="flex popup-price">${games[0].price} تومان</div>
</div>`;
};
