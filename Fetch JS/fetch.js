
fetch("https://ghibliapi.herokuapp.com/people", {
	method: 'get'
})
	.then(response => {
        return response.json()
            .then(data => {
                    create(data);
                }
            )
    })
    .catch(err => {
    	console.error(err);
	})
	.finally(  () => {
    	document.getElementById("myImg").style.visibility = "hidden";
    });



function create(data) {
	
	let table = document.createElement("TABLE");
	table.setAttribute("id","myTable");
	document.getElementById("people").appendChild(table);
	table.style.width = "100%";

	let tr = document.createElement("TR");
	tr.setAttribute("id","myHeadersRow");
	table.appendChild(tr);

	let propertyNames = Object.getOwnPropertyNames(data[0]);
	let propertyNamesLength = Object.keys(propertyNames).length;

	for(let i in propertyNames) {
		let th = document.createElement("TH");
		th.setAttribute("class","myHeaders");
		tr.appendChild(th);
		let inTh = document.createTextNode(propertyNames[i]);
		th.appendChild(inTh);
		th.style.border = "1px solid black ";
		th.style.background = "grey";
	}
	for(let i in data) {

		let tr = document.createElement("TR");
		tr.setAttribute("class","peopleData");
		table.appendChild(tr);
		tr.style.border = "1px solid black";
		for(let j = 0; j < propertyNamesLength; j++) { 
			let values = Object.values(data[i]);
			let td = document.createElement("TD");
			tr.appendChild(td);
			td.style.border = "1px solid black";
			let inTd = document.createTextNode(values[j]);
			td.appendChild(inTd);
		}
	}
}


