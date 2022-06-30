document.addEventListener("DOMContentLoaded", function () {
  renderPhones();
});


async function getPhones() {
  let url = 'https://my-json-server.typicode.com/RzaAlbert/fake';
  try {
      let res = await fetch(url, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      });
      return await res.json();
	
  } catch (error) {
      console.log(error);
  }
}


async function renderPhones() {

  let phones = await getPhones();
  var html = "";
  phones.forEach( phone => {
	  console.log(phone);
	  html += `
  <div class="col-md-3 mb-5 col-sm-6">
            <div class="card">
              <img src="zdj/produkt${phone.id}.jfif"  class="card-img-top"alt="s9+" width=300px height=320px/>
             <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">
                  Cena: ${phone.price}$
                </p>
                <a href="zamow_telefon_formularz.html" class="btn btn-primary">Zamów</a>
				<a href="https://www.euro.com.pl/telefony-komorkowe/samsung-galaxy-s9-sm-g965-czarny.bhtml?gclid=CjwKCAjwv-GUBhAzEiwASUMm4iG0KHYGm-YvwiDYsKwVjvsxQxQNj0QXsMWI4XDriWS777wdYPC_rRoCDuYQAvD_BwE&gclsrc=aw.ds" class="btn btn-primary" target="blank">Dane techniczne</a>
             </div>
            </div>
     </div>
  `;
  }	  );
 
 
  let lista = document.getElementById('lista');
  lista.innerHTML = html;
}

function sprawdz_radio(nazwa_radio){

var obiekt=document.getElementsByName(nazwa_radio);
 for (i=0;i<obiekt.length;i++)
 { wybrany=obiekt[i].checked;
if (wybrany) return true; }
return false;
}


function sprawdz_box(box_id)
{
var obiekt=document.getElementById(box_id);
return (obiekt.checked);
}

function ktory_radio(nazwa_radio){
	var obiekt=document.getElementsByName(nazwa_radio);
 for (i=0;i<obiekt.length;i++){
	 wybrany=obiekt[i].checked;
	 if(wybrany) return i;
 }
}
  
  function zapis(){
	
	
	var imie=document.getElementById("imie").value;
	var nazwisko=document.getElementById("nazwisko").value;
	var telefon=document.getElementById("telefon").value;
	var miasto=document.getElementById("miasto").value;
	var ulica=document.getElementById("ulica").value;
	var zaplata;
	var model;
	
	localStorage.setItem('imie',JSON.stringify(imie));
	localStorage.setItem('nazwisko',JSON.stringify(nazwisko));
	localStorage.setItem('telefon',JSON.stringify(telefon));
	localStorage.setItem('miasto',JSON.stringify(miasto));
	localStorage.setItem('ulica',JSON.stringify(ulica));
	
	if(ktory_radio("zaplata")==0){
		zaplata=document.getElementById("przelew").value;
	};
	if(ktory_radio("zaplata")==1){
		zaplata=document.getElementById("blik").value;
	};
	if(ktory_radio("zaplata")==2){
		zaplata=document.getElementById("gotowka").value;
	};
	
	localStorage.setItem('zaplata',JSON.stringify(zaplata));

	if(sprawdz_box("a")){
		model=document.getElementById("a").value;
	};
	if(sprawdz_box("b")){
		model=document.getElementById("b").value;
	};
	if(sprawdz_box("c")){
		model=document.getElementById("c").value;
	};
	if(sprawdz_box("d")){
		model=document.getElementById("d").value;
	};
	if(sprawdz_box("e")){
		model=document.getElementById("e").value;
	};
	if(sprawdz_box("f")){
		model=document.getElementById("f").value;
	};
	if(sprawdz_box("g")){
		model=document.getElementById("g").value;
	};
	
	localStorage.setItem('model',JSON.stringify(model));
	
	}
	
function wykres(){
	let myChart=document.getElementById('myChart').getContext('2d');
	
	let massPopChart=new Chart(myChart,{
	type:'bar',
	data:{
	labels:['Samsung S9+','Nokia 3310','Iphone 13 mini','Iphone 11+','Samsung S20','Sony Ericsson K550i','Samsung Avilla','Samsung S21 Pro'],
	datasets:[{
		label:'Ilość sprzedanych sztuk:',
		data:[
			2133,
			3455,
			2345,
			6533,
			6233,
			5113,
			9122,
			2444
		],
		backgroundColor:[
			'#F40000',
			'#7AF400',
			'#F6FA0F',
			'#0FF6FA',
			'#FA0FF6',
			'#130FFA',
			'#FA610F',
			'#0F0F0F'
		],
		
		hoverBorderWidth:3,
		hoverBorderColor:'#000'
		
		
	}]
	},
	
	
	options:{
	
	legend:{
		display:false,
	}
	}
	
	});
}
	
	

  




