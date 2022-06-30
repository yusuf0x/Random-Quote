
document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
        const url = "http://quotes.stormconsultancy.co.uk/random.json";
        fetch(url,{method:"GET"})
        .then(response => {
          if(!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then(data=> {
          console.log("success:",data);
          Load(data);
        })

        .catch(error => console.log(error));


        
}
Load = (data) =>{
  var author = data.author;
  var quote = data.quote;
  console.log(author);
  console.log(quote);

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}
