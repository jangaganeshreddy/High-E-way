jsonFetch();

async function jsonFetch(){
	const response = await fetch("./BookCategory.json")
	const data = await response.json()
	console.log(data)


}


console.log("working")
