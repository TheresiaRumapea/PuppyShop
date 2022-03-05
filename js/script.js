setShareLinks();
function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  window.open(url, "NewWindow", params);
}
function setShareLinks() {
  var pageUrl = encodeURIComponent(window.location.href);
  jQuery(".facebook,.facebook2").on("click", function () {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });
}
// Program hitung mundur
const tanggalTujuan = new Date("27 Aug, 2021 01:44:00").getTime();

// dimsukkan kedalam setInterval agar dijalankan setiap 1 detik sekali
const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const teks = document.getElementById("teks");
  teks.innerHTML = " " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik" + " ";

  if (selisih < 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = "Mohon maaf, promo di bulan Agustus sudah berakhir.";
  }
}, 1000);

// BUTTON SCROLL UP
const scrollButton = document.getElementById("scroll-button");

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// membuat dia muncul ketika di scroll 100px
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    scrollButton.classList.add("muncul");
  } else if (window.pageYOffset < 100) {
    scrollButton.classList.remove("muncul");
  }
  if (window.pageYOffset > 3500) {
    scrollButton.classList.add("chageBG");
  } else if (window.pageYOffset < 3500) {
    scrollButton.classList.remove("chageBG");
  }
});
