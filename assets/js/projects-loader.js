var wrapper_pre = `<div class="col-xl-6">`;
var wrapper_post = `</div>`

async function get_contents(url) {
	const response = await fetch(url);
	if (!response.ok) {
		console.error("Error fetching " + url + ": ", response.status);
	}
	
	const result = await response.text();
	return result;
}

async function get_project_list() {
	const response = await fetch("./projects-html/list.json");
	if (!response.ok) {
		console.error("Error fetching " + url + ": ", response.status);
	}
	
	const result = await response.json();
	return result;
}

function add_to_container(html) {
	var projects_container = document.getElementById("projects-list");
	projects_container.innerHTML += html;
}

function set_wrapper_pre(html) {wrapper_pre = html};
function set_wrapper_post(html) {wrapper_post = html};

async function projects_loader() {
	var projects_list = await get_project_list();
	var loaded = 0;
	for (let p in projects_list) {
		// let title = projects_list[p].title;
		let fname = projects_list[p].fname;
		let body = await get_contents("./projects-html/" + fname);
		
		add_to_container(wrapper_pre + body + wrapper_post);
		
		loaded ++;
		if (typeof num_shown !== "undefined" && loaded === num_shown) break;
	}
}

projects_loader();

console.log(num_shown);
