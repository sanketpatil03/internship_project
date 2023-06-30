function contactUs_action() {
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Pnumber = document.getElementById("number").value;
  let Message = document.getElementById("message").value;
  if (Name != "" && Email != "" && Pnumber != "" && Message != "") {
    alert("Your message has been send");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
  } else {
    alert("Please fill all the details");
  }
}
