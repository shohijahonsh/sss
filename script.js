let a = +prompt("1 ta son kirit")
while (isNaN(a) || a == 0) {
  a = +prompt("hato")
}

if (a % 2 == 0) {
  alert("siz juft son kiritiz")
} else if (a % 2 > 0) {
  alert("siz toq son kiritiz")
}

