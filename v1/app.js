let cocktails = [
  {
    id: 1,
    name: "Адамово яблочко 50*4",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Лёд", qty: "0,160" },
      { name: "Ликёр Мятный", qty: "0,015" },
      { name: "Водка", qty: "0,050" },
      { name: "Фреш лимонный", qty: "0,020" },
      { name: "Сок яблоко", qty: "0,070" },
      { name: "Сироп яблоко", qty: "0,010" },
    ],
    instructions:
      "В шейкер закладываютсья кубики льда, вливают ликкер мятный, водку, фреш лимонный, сок яблочный, сироп яблочный, смешивают. Разливают через стрейнер в 4 шота.",
  },

  {
    id: 2,
    name: "Апероль бир 350",
    glass: "Пивной бокал",
    category: "Пивные коктейли",
    ingredients: [
      { name: "Ликер Апероль", qty: "0,060" },
      { name: "Фреш лимонный", qty: "0,010" },
      { name: "Пиво светлое", qty: "0,200" },
      { name: "Лед", qty: "0,080" },
      { name: "Апельсин", qty: "0,015" },
    ],
    instructions:
      "В большой пивно бокал вливают Апероль, лимонный фреш, пиво светлое. Добвляют кубики льда и украшаюь долькой апельсина.",
  },

  {
  id: 3,
    name: "Апероль шприц 300",
    glass: "Винный бокал",
    category: "Коктейли",
    ingredients: [
      { name: "Ликер Апероль", qty: "0,050" },
      { name: "Вино игристое брют", qty: "0,100" },
      { name: "Миниральная вода", qty: "0,050" },
      { name: "Лед", qty: "0,080" },
      { name: "Апельсин", qty: "0,023" },
    ],
    instructions:
      "В большой винный бокал со льдом методоим билд вливают ликер апероль, игристое вино, минеральную воду. перемешивают барной ложкой и укращают долькой апельсина.",
  },

  {
  id: 4,
    name: "Б-52 50",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Ликер Кофейный", qty: "0,020" },
      { name: "Ликер Сливочный", qty: "0,020" },
      { name: "Ликер Трипл Сек", qty: "0,020" },
    ],
    instructions:
      "В шот по слоям наливают все ингридиенты и поджигают.",
  },

  {
  id: 5,
    name: "Голубая лагуна 300",
    glass: "Харикейн",
    category: "Коктейли",
    ingredients: [
      { name: "Водка", qty: "0,050" },
      { name: "Спрайт", qty: "0,190" },
      { name: "Ликер Блю Кюрасао", qty: "0,035" },
      { name: "Лед", qty: "0,015" },
      { name: "Лимон", qty: "0,015" },
    ],
    instructions:
      "В харикейн вливают водку, спрайт, ликер Блю Кюрасао, лед и перемешивают все барной ложкой. Украшают ломтиком лимона.",
  },

  {
  id: 6,
    name: "Искушение 350",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Водка", qty: "0,030" },
      { name: "Фрэш лимонный", qty: "0,020" },
      { name: "Сироп клбункиа", qty: "0,020" },
      { name: "Тоник", qty: "0,150" },
      { name: "Лед фраппе", qty: "0,075" },
      { name: "Клубника с/м", qty: "0,015" },
    ],
    instructions:
      "В шейкер выкладывают лед, вливают водку, лимонный фрэш, пюре маракуйя, сироп клубника и взбивают. Через стреёнер переливают в хайбол наполненый льдом фраппе и заливают тоником. Сверху на фраппе выгладываеться долки с/м клубники.",
  },

  {
  id: 7,
    name: "Кир Рояль 170",
    glass: "Флютэ",
    category: "Коктейли",
    ingredients: [
      { name: "Ликер Черная Смородина", qty: "0,020" },
      { name: "Вино игристое брют", qty: "0,150" },
    ],
    instructions:
      "В флютэ методом билд вливают ликер, затем шампанское и пермешивают барной ложкой.",
  },

  {
  id: 8,
    name: "Куба Либра 350",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Ром", qty: "0,050" },
      { name: "Кола", qty: "0,150" },
      { name: "Лайм", qty: "0,010" },
      { name: "Лед", qty: "0,145" },
      { name: "Лайм", qty: "0,008" },
    ],
    instructions:
      "В хайбол кладут лед, вливают ром, колу, сок лайма. Украшают дольками лайма.",
  },

  {
  id: 9,
    name: "Лонг айленд 340",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Водка", qty: "0,020" },
      { name: "Джин", qty: "0,020" },
      { name: "Текила", qty: "0,020" },
      { name: "Ром", qty: "0,020" },
      { name: "Ликер Трипл Сек", qty: "0,020" },
      { name: "Кола", qty: "0,200" },
      { name: "Лед", qty: "0,030" },
      { name: "Лайм", qty: "0,006" },
    ],
    instructions:
      "В шейкер со льдом добавляют все ингредиенты кроме колы, хорошо встряхивают и переливают в хайбол со льдом, вливают колу и украшают долькой лайма.",
  },

  {
  id: 10,
    name: "Любовная любовь 300 б/а",
    glass: "Хайбол",
    category: "Коктейли б/а",
    ingredients: [
      { name: "Лед", qty: "0,150" },
      { name: "Сироп клубнкиа", qty: "0,010" },
      { name: "Сироп айриш крим", qty: "0,020" },
      { name: "Сливки 10%", qty: "0,100" },
      { name: "Сок песрик", qty: "0,050" },
      { name: "Лед", qty: "0,100" },
      { name: "Апельсин", qty: "0,010" },
    ],
    instructions:
      "В шейкер выкладывают кубики льда 150г, вливают сироп айриш крим, сироп клубнкиа, сливки и сок персик. Смешивают и через стрейнер переливают в хайбол. Добавляют лед и украшают долькой апельсина.",
  },

  {
  id: 11,
    name: "Май Тай 350",
    glass: "Рокс",
    category: "Коктейли",
    ingredients: [
      { name: "Лед фраппе", qty: "0,260" },
      { name: "Ром", qty: "0,050" },
      { name: "Ликер Трипл Сек", qty: "0,010" },
      { name: "Сок апельсин", qty: "0,050" },
      { name: "Сок ананас", qty: "0,050" },
      { name: "Лайм", qty: "0,010" },
      { name: "Сироп сахарный", qty: "0,010" },
      { name: "Апельсин", qty: "0,025" },
    ],
    instructions:
      "В шейкер поместить 4 кубика льда, влить все ингридиенты. Рокс наполнить дробленым льдом и влить содержимое шейкера через стрейнер. Сверху украсить апельсином.",
  },

  {
  id: 12,
    name: "Малиновый Заебильсин 50*4",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Лед", qty: "0,120" },
      { name: "Сок апельсин", qty: "0,080" },
      { name: "Сироп малина", qty: "0,020" },
      { name: "Фреш лимонный", qty: "0,020" },
      { name: "Джин", qty: "0,050" },
    ],
    instructions:
      "В шейкер поместить 4 кубика льда и влить остальные комплектующие. Разлить через стрейнер в 4 шота.",
  },

  {
  id: 13,
    name: "Облако 60",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Самбука", qty: "0,020" },
      { name: "Текила", qty: "0,020" },
      { name: "Ликер сливочный", qty: "0,005" },
      { name: "Ликер Блю Кюрасао", qty: "0,005" },
      { name: "Абсент", qty: "0,010" },
    ],
    instructions:
      "В рюмку по барной ложке влить самбуку, затем текилу. Аккуратно через трубочку налить 5 мл сливочного ликера и блю кюрасо. Используя коктейльную ложку, укладываеться зеленый слой абсента.",
  },

  {
  id: 14,
    name: "Палома бир 350",
    glass: "Пивной бокал",
    category: "Пивные коктейли",
    ingredients: [
      { name: "Лед", qty: "0,150" },
      { name: "Сок грейфрут", qty: "0,050" },
      { name: "Лайм", qty: "0,016" },
      { name: "Текила", qty: "0,050" },
      { name: "Сироп сахарный", qty: "0,030" },
      { name: "Пиво светлое", qty: "0,150" },
      { name: "Грейфрут", qty: "0,015" },
    ],
    instructions:
      "В шейкер выкладывают кубики льда, сливают воду через дабл стрейн и вливают в охлажденый шейкер сок, текилу, сахарный сироп, фрэш лайма. Через дабл стрей переливают в бокал и вливают пиво декорирую гусочкоим грейфрута.",
  },

  {
  id: 15,
    name: "Пина колада 250",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Ром", qty: "0,040" },
      { name: "Сок ананас", qty: "0,130" },
      { name: "Сироп кокос", qty: "0,015" },
      { name: "Сливки 10%", qty: "0,050" },
      { name: "Лед", qty: "0,030" },
      { name: "Апельсин", qty: "0,015" },
    ],
    instructions:
      "Все ингридиенты взбивают в шнйкере и вливают в хайбол, на 2/3 заполненый льдом. В конце украшают долькой апельсина.",
  },

  {
  id: 16,
    name: "Рыжая собака 50",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Самбука", qty: "0,030" },
      { name: "Текила", qty: "0,030" },
      { name: "Соус табаско", qty: "0,002" },
    ],
    instructions:
      "В шот вливают поочереди самбуку и текилу. В конце капля табаско.",
  },

  {
  id: 17,
    name: "Тема прошлого лета 50",
    glass: "Шот",
    category: "Шоты",
    ingredients: [
      { name: "Фреш лимонный", qty: "0,015" },
      { name: "Сироп сахарный", qty: "0,015" },
      { name: "Абсент", qty: "0,020" },
      { name: "Лайм", qty: "0,010" },
    ],
    instructions:
      "В шот методом билд вливают фреш лимонный, сахарный сироп и абсент. Подают с долькой лайма.",
  },

  {
  id: 18,
    name: "Текила Санрайз 250",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Текила", qty: "0,040" },
      { name: "Сироп гренадин", qty: "0,010" },
      { name: "Сок апельсин", qty: "0,100" },
      { name: "Лед", qty: "0,100" },
      { name: "Апельсин", qty: "0,015" },
    ],
    instructions:
      "В хайбол со льдом влить текилу и сок апельин, затем тонкой стуйкой влить сироп гранат.",
  },

  {
  id: 19,
    name: "Тропики 330 б/а",
    glass: "Олд Фэшн",
    category: "Коктейли б/а",
    ingredients: [
      { name: "Сироп кокос", qty: "0,010" },
      { name: "Сироп миндаль", qty: "0,010" },
      { name: "Сок ананас", qty: "0,150" },
      { name: "Пюре маракуйя", qty: "0,020" },
      { name: "Лед", qty: "0,140" },
    ],
    instructions:
      "В олд Фэшн вливают сироп кокос и миндаль, сок ананас, пюре маракуйя. Перемешивают. Добавляют лед.",
  },
  
  {
  id: 20,
    name: "Фейхоа-Клубника 330 б/а",
    glass: "Олд Фэшн",
    category: "Коктейли б/а",
    ingredients: [
      { name: "Сироп клубника", qty: "0,020" },
      { name: "Сироп фэйхоа", qty: "0,020" },
      { name: "Фрэш лимонный", qty: "0,020" },
      { name: "Лед", qty: "0,115" },
      { name: "Минеральная вода", qty: "0,150" },
      { name: "Лайм", qty: "0,008" },
    ],
    instructions:
      "В олд Фэшн вливают сироп клубнкиа, сироп фэйхоа, фрэш лимонный и перемешивают. Добавляют кубики льда и вливают миниральную воду.",
  },

  {
  id: 21,
    name: "Фрутучино Грейфрутовый 330 б/а",
    glass: "Хайбол",
    category: "Коктейли б/а",
    ingredients: [
      { name: "Сок грейфрут", qty: "0,100" },
      { name: "Сок апельсин", qty: "0,100" },
      { name: "Пюре маракуйя", qty: "0,020" },
      { name: "Сироп клубника", qty: "0,010" },
      { name: "Лед", qty: "0,100" },
      { name: "Грейфрут", qty: "0,030" },
      { name: "Лайм", qty: "0,005" },
    ],
    instructions:
      "В хайбол вливают методом билд сок грефрут, сок апельсин сироп клубники, пюре маракуйя, добавить кубики льда и на лед для укрошения выложить дольки лайма и грейфрута.",
  },

  {
  id: 22,
    name: " Цитрус хайбол 300",
    glass: "Хайбол",
    category: "Коктейли",
    ingredients: [
      { name: "Лед", qty: "0,100" },
      { name: "Виски", qty: "0,050" },
      { name: "Спрайт", qty: "0,100" },
      { name: "Фреш лимонный", qty: "0,020" },
      { name: "Лайм", qty: "0,008" },
      { name: "Грейфрут", qty: "0,018" },
    ],
    instructions:
      "В хайбол выкладывают кубики льда до краёв. Вливают виски, спрайт, лимонный фрэш, Дольку пополам лайма и 2 слайса лайма.",
  },

];

let editId = null;

const searchInput = document.getElementById("search");
const listEl = document.getElementById("cocktail-list");
const form = document.getElementById("cocktail-form");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");

const nameEl = document.getElementById("name");
const glassEl = document.getElementById("glass");
const catEl = document.getElementById("category");
const ingredientsEl = document.getElementById("ingredients");
const instructionsEl = document.getElementById("instructions");

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cocktails.filter(c =>
    c.name.toLowerCase().includes(query)
  );

  listEl.innerHTML = filtered
    .map(
      c => `
      <div class="card">
        <div class="card-header" onclick="toggleCard(${c.id})">
          <div>
            <strong>${c.name}</strong><br>
            <small>${c.category} • ${c.glass}</small>
          </div>
          <div>▼</div>
        </div>
        <div class="card-body" id="body-${c.id}" style="display:none">
          <b>Ингредиенты</b>
          <ul>
            ${c.ingredients.map(i => `<li>${i.name}: <code>${i.qty}</code></li>`).join("")}
          </ul>
          <b>Приготовление</b>
          <p>${c.instructions}</p>
          <div class="actions">
            <button onclick="copyRecipe(${c.id})" style="background:#3b82f6">Скопировать</button>
            <button onclick="editRecipe(${c.id})" style="background:#f59e0b">Редактировать</button>
            <button onclick="deleteRecipe(${c.id})" style="background:#ef4444">Удалить</button>
          </div>
        </div>
      </div>`
    )
    .join("");
}

function toggleCard(id) {
  const el = document.getElementById(`body-${id}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function copyRecipe(id) {
  const c = cocktails.find(x => x.id === id);
  const text = `${c.name}\nGlass: ${c.glass}\n\nIngredients:\n${c.ingredients
    .map(i => `- ${i.name}: ${i.qty}`)
    .join("\n")}\n\nInstructions:\n${c.instructions}`;
  navigator.clipboard.writeText(text);
  alert("Рецепт скопирован в буфер обмена");
}

function editRecipe(id) {
  const c = cocktails.find(x => x.id === id);
  editId = id;
  formTitle.textContent = "Редактировать коктейль";
  submitBtn.textContent = "Сохранить изменения";
  nameEl.value = c.name;
  glassEl.value = c.glass;
  catEl.value = c.category;
  ingredientsEl.value = c.ingredients
    .map(i => `${i.name}: ${i.qty}`)
    .join("\n");
  instructionsEl.value = c.instructions;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteRecipe(id) {
  const c = cocktails.find(x => x.id === id);
  const confirmDelete = confirm(`Удалить коктейль «${c.name}»?`);
  if (!confirmDelete) return;

  cocktails = cocktails.filter(x => x.id !== id);
  alert(`Коктейль «${c.name}» удалён`);
  render();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const newCocktail = {
    id: editId || Date.now(),
    name: nameEl.value.trim(),
    glass: glassEl.value.trim(),
    category: catEl.value.trim(),
    ingredients: ingredientsEl.value
      .split("\n")
      .map(line => {
        const [name, qty] = line.split(":");
        return { name: name?.trim() || "", qty: qty?.trim() || "" };
      })
      .filter(i => i.name),
    instructions: instructionsEl.value.trim(),
  };

  if (editId) {
    cocktails = cocktails.map(c => (c.id === editId ? newCocktail : c));
    alert("Изменения сохранены!");
    editId = null;
    formTitle.textContent = "Добавить новый коктейль";
    submitBtn.textContent = "Добавить коктейль";
  } else {
    cocktails.push(newCocktail);
    alert("Коктейль добавлен!");
  }

  form.reset();
  render();
});

searchInput.addEventListener("input", render);
render();
