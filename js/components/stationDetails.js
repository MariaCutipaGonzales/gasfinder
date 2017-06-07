'use strict';

const StationDetails = (update)=>{
	const stationDetail = $("<div class='stationDetail'></div>");
	const container = $("<div class='container'></div>");
	const name = $("<p>"+state.selectedStation.name+"</p>");
	const address = $("<p>"+state.selectedStation.address+"</p>");
	const link = $("<a id='regresar' href='#'></a>");
	const iconReturn = $("<i class='fa fa-chevron-left'></i>");

	state.selectedStation.products.forEach((item)=>{
		let product = $("<div class='product'>"+item+"</div>");
		container.append(product);
	});

	link.append(iconReturn);
	detailsStation.append(name);
	detailsStation.append(address);
	detailsStation.append(container);
	detailsStation.append(link);

	link.on('click',(e) => {
		e.preventDefault();
		state.selectedStation = null;
		update();
	})
	
	return detailsStation;
};