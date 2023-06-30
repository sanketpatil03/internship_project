function bookappointment() {
  let Aname = document.getElementById("Name").value;
  let Aemail = document.getElementById("Email").value;
  let Anumber = document.getElementById("Number").value;
  let Aage = document.getElementById("Age").value;
  let Adate = document.getElementById("Date").value;
  let Atime = document.getElementById("Time").value;
  let Amessage = document.getElementById("Message").value;
  console.log(Aname);
  if (
    Aname != "" &&
    Aemail != "" &&
    Anumber != "" &&
    Adate != "" &&
    Atime != ""
  ) {
    alert("Your Appointment Has Been Confirm");
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("Time").value = "";
    document.getElementById("Message").value = "";
    const appointmentDetails = {
      patientName: Aname,
      patientEmail: Aemail,
      patientNumber: Anumber,
      patinetAge: Aage,
      appDate: Adate,
      appTime: Atime,
      patientMessage: Amessage,
    };
    console.log(appointmentDetails);
  } else {
    alert("Please fill all the details");
  }
}
