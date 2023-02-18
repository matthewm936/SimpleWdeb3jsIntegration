document.addEventListener("DOMContentLoaded", function(event) {
    // Get a reference to the element with ID "web3"
    var web3Element = document.getElementById("web3");

    const web3 = new Web3(Web3.givenProvider || "ws://localhost:5500");
    console.log(web3.version);
    
    // Change the text content of the element
    web3Element.textContent = web3.version;
  });
  