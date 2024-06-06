let cont = 0

function registerLogin(){
	
	let login = loocalStorage.getItem("login")
	if(login === null ){
		localStorage.setItem("login","icet2024")
		localStorage.setItem("password","icet2024")
	}
}
