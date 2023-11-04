export const mapPopup = (games) => {
  return `<div class="popup-image"></div><div class="popup-content">
<div  class="w-full flex items-center overflow-hidden">
<span class="popup-game_name" title="${games[0].name}">
${games[0].name}
</span>
<img src="/images/map/Bookmark.svg" alt="Boolmark">
</div>
<div class="flex">
${games[0].exchange ? "<span class='popup-tag' >تبادل</span>" : ""}
${!!parseInt(games[0].price) ? "<span class='popup-tag'>فروش</span>" : ""}
</div>
<div class="flex items-center">
<img src="/images/map/Tag.svg" alt="Tag">
<span class="popup-platform">${games[0].platforms.name}</span>
</div>
<div class="flex popup-price">${games[0].price} تومان</div>
</div>`;
};
