function Provinsi_Kota() {
    const Provinsi = document.getElementById("provinsi").value;
    console.log(Provinsi);
    if (Provinsi === "Jawa Barat") {
        var array = ["Bandung", "Bekasi Timur", "Bekasi", "Depok", "Cimahi"];
    }
    else if (Provinsi === "Jawa Timur") {
        var array = ["Bangkalan", "Banyuwangi", "Blitar", "Bojonegoro", "Bondowoso"];
    }
    else if (Provinsi === "Jawa Tengah") {
        var array = ["Magelang", "Pekalongan", "Solo", "Salatiga", "Semarang"];
    }
    else if (Provinsi === "Jakarta") {
        var array = ["Jakarta Pusat", "Jakarta Utara", "Jakarta Selatan", "Jakarta Barat",];
    }

    var string = "";
    for (let index = 0; index < array.length; index++) {
        string = string + "<option>" + array[index] + "</option>";
    }

    let kota2 = (document.getElementById("Kota").innerHTML = string);
}
function NamaKota() {
    const Provinsi = document.getElementById("provinsi").value;
    const kota = document.getElementById("Kota").value;
    var result = document.getElementById("hasil");
    result.innerText = "Pada provinsi " + Provinsi + " ada kota " + kota;
}

function darkMode() {
    var gelap = document.body;

    gelap.classList.toggle("dark-mode");
}