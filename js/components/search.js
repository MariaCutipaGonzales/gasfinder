'use strict';

const StationList = (station,update)=>{
  const listContent = $('<div class="row"></div>');
  const linkMap= $('<a href="#"></a>');
  const icon = $('<i class="fa fa-map"></i>');
  const name = $('<p>'+station.name+'</p>');
  const address = $('<p>'+station.address+'</p>');
  const district = $('<p>'+station.district+'</p>');
  
  linkMap.append(icon);
  listContent.append(name);
  listContent.append(linkMap);
  listContent.append(address);
  listContent.append(district)

  linkMap.on('click',(e)=>{
  	e.preventDefault();
  	state.selectedStation = station;
  	update();
  });
  return listContent;
}

const reRender = (lista,items,update) => {
	lista.empty();
	items.forEach(station=>{
		lista.append(StationList(lista,update,update));
	}); 
}

const Search = (update) => {
  const container=$("<div class='search'></div>");
  const input = $('<input type="text" id="search" placeholder="Ingresa tu distrito a buscar">');
  const iconSearch = $('<i class="fa fa-search"></i>');
  const lista = $('<div class="listSearch"></div>');
  const listContainer = $('<section id="liststations"></section>');
 
  container.append(iconSearch);
  container.append(input);

  listContainer.append(lista);
  
  state.stations.forEach(station=>{
  	lista.append(StationList(station,update));
  });
  
  input.on('keyup',() => {
  	 if (input.val() !="") {
  	 var items = filterByDistric(state.stations,input.val());
  	 }
  	 reRender(lista,items,update);
  });

  
  return container;
}
