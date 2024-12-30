function showProducts() {
	data = [
		{
		  'name': 'Шапки',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Худи',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Свитшоты',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Футболки',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Штаны',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Пиджаки',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},  
		{
		  'name': 'Футболки',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		},
		{
		  'name': 'Футболки',
		  'image': 'img/product2.png',
		  'link': 'error.html'
		}
	  ];
	s = '';
	for (i = 0; i < data.length; i++) {
    	tmp = '<div class="product-item"><a href="' + data[i].link + '">';
    	tmp += '<img src="' + data[i].image + '" alt="' + data[i].name + '">';
    	tmp += '<p>' + data[i].name + '</p>';
    	tmp += '</a></div>';
		s += tmp;
	};
	document.getElementById('products').innerHTML = s;
}

function scrollBrands() {
	wrapper = document.querySelector('.collabs-logos-wrapper');
	prev = document.querySelector('.collabs-nav.prev');
	next = document.querySelector('.collabs-nav.next');
	brands = Array.from(document.querySelectorAll('.collab-logo'));
  
	function updateBrands() {
	  wrapper.innerHTML = '';
	  brands.forEach((brand) => wrapper.appendChild(brand));
	}
  
	prev.addEventListener('click', () => {
	  last = brands.pop();
	  brands.unshift(last);
	  updateBrands();
	});
  
	next.addEventListener('click', () => {
	  first = brands.shift();
	  brands.push(first);
	  updateBrands();
	});  
  }

function switchLanguage() {
	ru = document.getElementById('ru');
	en = document.getElementById('en');

	document.querySelector('.user-account').addEventListener('click', () => {
		if (ru.classList == 'active') {
			ru.classList.replace('active', 'inactive');
			en.classList.replace('inactive', 'active');
		} else {
			ru.classList.replace('inactive', 'active');
			en.classList.replace('active', 'inactive');		
		}
	});
}

function submitContactManager() {
	document.querySelector('.footer-input-wrapper img').addEventListener('click', () => {
		document.querySelector('.footer-input-wrapper').innerHTML = '<span class="bold">Спасибо, наш менеджер скоро свяжется с вами.</span>';
	});
}
