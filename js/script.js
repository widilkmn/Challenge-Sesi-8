let user = {
  nama: "Nama Anda",
  role: "FrontEnd Designer",
  availability: "FullTime",
  usia: 17,
  lokasi: "Jakarta, Indonesia",
  pengalaman: 2,
  email: "developer@gmail.com",
};

window.onload = function () {
  renderUserData();
};

const formData = document.querySelector("#form_container");

function toggleForm() {
  const displayForm = document.getElementById("form_container");

  if (displayForm.classList.contains("hidden")) {
    displayForm.classList.remove("hidden");
    renderFormData();
  } else {
    displayForm.classList.add("hidden");
  }
}

function renderUserData() {
  document.getElementById("displayNama").innerText = user.nama;
  document.getElementById("displayRole").innerText = user.role;
  document.getElementById("displayAvailability").innerText = user.availability;
  document.getElementById("displayUsia").innerText = user.usia;
  document.getElementById("displayLokasi").innerText = user.lokasi;
  document.getElementById("displayPengalaman").innerText = user.pengalaman;
  document.getElementById("displayEmail").innerText = user.email;
}

function renderFormData() {
  document.getElementById("inputNama").value = user.nama;
  document.getElementById("inputRole").value = user.role;
  document.getElementById("inputAvailability").value = user.availability;
  document.getElementById("inputUsia").value = user.usia;
  document.getElementById("inputLokasi").value = user.lokasi;
  document.getElementById("inputPengalaman").value = user.pengalaman;
  document.getElementById("inputEmail").value = user.email;
}

function handleFormSubmit(event) {
  event.preventDefault();

  user.nama = document.getElementById("inputNama").value;
  user.role = document.getElementById("inputRole").value;
  user.availability = document.getElementById("inputAvailability").value;
  user.usia = document.getElementById("inputUsia").value;
  user.lokasi = document.getElementById("inputLokasi").value;
  user.pengalaman = document.getElementById("inputPengalaman").value;
  user.email = document.getElementById("inputEmail").value;

  renderUserData();
  renderFormData();
}
