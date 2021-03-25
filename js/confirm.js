// check with popup if confirm to submit
function submit(event){
    event.preventDefault();
    alert("Confirm to submit");
    return false;
}

var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submit);