// console.clear();

const meanings = ['Фиолетовый представляет богатство, мудрость и тайну. ',' Синий представляет доверие, верность и уверенность. ',' Бирюза представляет спокойствие, дружбу и обновление. ',' Зеленый представляет рост, свежесть, природу и финансы. ',' Желтый представляет позитив, Воспоминание и честь. ',' Оранжевый цвет представляет здоровье, радость и творческий потенциал', ' Красный цвет представляет страсть, тепло и силу ', 'Розовый цвет представляет любовь, понимание и заботу ','Черный цвет представляет собой неизвестность, серьезность и силу.' , 'Грей представляет формальность, консервативность и изощренность', 'Браун представляет землю, качество и комфорт', 'Белый представляет веру, чистоту и простоту.'];

function changeColor(color) {
  const colors = ['purple', 'blue', 'turquoise', 'green', 'yellow', 'orange', 'red', 'pink', 'black', 'grey', 'brown', 'white'];
  const colorIndex = colors.indexOf(color);
  const colorMeaning = meanings[colorIndex];
  const colorMeaningNode = document.getElementById('colorMeaning');
  colorMeaningNode.innerHTML = colorMeaning;
  const otherColors = colors.filter(s => s !== color);
  otherColors.forEach(c => {
    const selectors = document.querySelectorAll('.adaptable');
    selectors.forEach(selector => {
      selector.classList.remove(c);
    });
  });
  const selectors = document.querySelectorAll('.adaptable');
  selectors.forEach(selector => {
    selector.classList.add(color);
  });
}