function licznik(){
    let wynik = document.getElementById('wynik');
    let licznik = localStorage.getItem('licznik');

    
    licznik1 = 0
    
    licznik1 = Number(licznik) + 1
    

    localStorage.setItem('licznik',licznik1);

    wynik.innerHTML = 'Liczba wejść na stronę: ' + licznik;
}