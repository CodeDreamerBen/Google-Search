document.getElementById("searchContent").addEventListener("keydown", (e) => {
			    if(e.key == "Enter") {
				    search();
			    }
			})
			function search() {
				if(document.getElementById("searchContent").value == "") {
					window.alert("You must search something!");
				} else {
					var linkSetup = document.getElementById("searchContent").value.split(" ").join("+");
					var link = `https://www.google.com/search?client=safari&rls=en&q=${linkSetup}&ie=UTF-8&oe=UTF-8`;
					window.open(link, "_blank");
				}
			}
