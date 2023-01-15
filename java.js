function Calculer() {
    var start = 1901, birthyear = document.sign.Année.value, date=document.sign.Jour.value, month=document.sign.Mois.selectedIndex;
    with (document.sign.signe){
    if (month == 1 && date >=21 || month == 2 && date <=19) {value = "Verseau";}
    if (month == 1 && date > 31) {value = "Date invalide";}
    if (month == 2 && date >=20 || month == 3 && date <=20) {value = "Poissons";}
    if (month == 2 && date > 29) {value = "Date invalide";}
    if (month == 3 && date >=21 || month == 4 && date <=20) {value = "Bélier";}
    if (month == 3 && date > 31) {value = "Date invalide";}
    if (month == 4 && date >=21 || month == 5 && date <=20) {value = "Taureau";}
    if (month == 4 && date > 30) {value = "Date invalide";}
    if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gémeaux";}
    if (month == 5 && date > 31) {value = "Date invalide";}
    if (month == 6 && date >=22 || month == 7 && date <=23) {value = "Cancer";}
    if (month == 6 && date > 30) {value = "Date invalide";}
    if (month == 7 && date >=24 || month == 8 && date <=23) {value = "Lion";}
    if (month == 7 && date > 31) {value = "Date invalide";}
    if (month == 8 && date >=24 || month == 9 && date <=23) {value = "Vierge";}
    if (month == 8 && date > 31) {value = "Date invalide";}
    if (month == 9 && date >=24 || month == 10 && date <=23) {value = "Balance";}
    if (month == 9 && date > 30) {value = "Date invalide";}
    if (month == 10 && date >=24 || month == 11 && date <=22) {value = "Scorpion";}
    if (month == 10 && date > 31) {value = "Date invalide";}
    if (month == 11 && date >=23 || month == 12 && date <=20) {value = "Sagittaire";}
    if (month == 11 && date > 30) {value = "Date invalide";}
    if (month == 12 && date >=21 || month == 1 && date <=20) {value = "Capricorne";}
    if (month == 12 && date > 31) {value = "Date invalide";}}
    x = (start - birthyear) % 12
    with (document.sign.signechinois){
    if (x == 1 || x == -11) {value = "Rat";}
    if (x == 0) {value = "Ox";}
    if (x == 11 || x == -1) {value = "Tigre";}
    if (x == 10 || x == -2) {value = "Lapin";}
    if (x == 9 || x == -3)  {value = "Dragon";}
    if (x == 8 || x == -4)  {value = "Serpent";}
    if (x == 7 || x == -5)  {value = "Cheval";}
    if (x == 6 || x == -6)  {value = "Mouton";}
    if (x == 5 || x == -7)  {value = "Singe";}
    if (x == 4 || x == -8)  {value = "Coq";}
    if (x == 3 || x == -9)  {value = "Chien";}
    if (x == 2 || x == -10) {value = "Cochon";}}
    }