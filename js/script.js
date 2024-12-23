function showProducts() {
	data = [
		{
		  "name": "Шапки",
		  "image": "img/product2.png"
		},
		{
		  "name": "Худи",
		  "image": "img/product2.png"
		},
		{
		  "name": "Свитшоты",
		  "image": "img/product2.png"
		},
		{
		  "name": "Футболки",
		  "image": "img/product2.png"
		},
		{
		  "name": "Штаны",
		  "image": "img/product2.png"
		},
		{
		  "name": "Пиджаки",
		  "image": "img/product2.png"
		},  
		{
		  "name": "Футболки",
		  "image": "img/product2.png"
		},
		{
		  "name": "Футболки",
		  "image": "img/product2.png"
		}
	  ];
	s = '';
		for (i = 0; i < data.length; i++) {
			tmp = '<div class="product-item">';
			tmp += '<img src="' + data[i].image + '" alt="' + data[i].name + '">';
			tmp += '<p>' + data[i].name + '</p>';
			tmp += '</div>';
			s += tmp;
		};
	document.getElementById('products').innerHTML = s;
}

function loadProducts() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/products.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
        	data = JSON.parse(xhr.responseText);
		    s = '';
		    for (i = 0; i < data.length; i++) {
		    	tmp = '<div class="product-item">';
		    	tmp += '<img src="' + data[i].image + '" alt="' + data[i].name + '">';
		    	tmp += '<p>' + data[i].name + '</p>';
		    	tmp += '</div>';
		    	s += tmp;
			};
			document.getElementById('products').innerHTML = s;
    	}
    };
    xhr.send();	
}

function scrollBrands() {
	wrapper = document.querySelector(".collabs-logos-wrapper");
	prev = document.querySelector(".collabs-nav.prev");
	next = document.querySelector(".collabs-nav.next");
	brands = Array.from(document.querySelectorAll(".collab-logo"));
  
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
  
	updateBrands();  
  }
