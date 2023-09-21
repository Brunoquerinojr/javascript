// Criando um array (ou vetor)

let equipe =["Christian Horner", "Hannah Schmitz","Gianpiero Lambiase","Red bull Racing"];

document.write('<h2 style="color: blue;">Criando um array (ou vetor)</h2><br>');


// 1ª Digitação (Aqui)
document.write ("Os melhores profissionais de F1 são: " +equipe+" <br> ")

document.write ("O melhor chefe de F1 é: " +equipe[0]+" <br> ")
document.write ("O melhor estrategista de F1 é: " +equipe[1]+" <br> ")
document.write ("O melhor engenheiro de F1 é: " +equipe[2]+" <br> ")
document.write ("A equipe n°1 de F1 é: " +equipe[3]+" sem sombra dúvidas <br> ")



document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

document.write('<h2 style="color: blue;">Array como matriz (array bidimensional)</h2><br>');

let equipesF1 = [
    // 0           1             2
    ['Mercedes', 'Ferrari', 'Red Bull'], // 0

    // 0         1          2           3         4
    ['McLaren', 'Haas', 'AlphaTauri', 'Alpine', 'Williams'], // 1
];

// Exibir Red Bull

// 2ª Digitação (Aqui)
document.write (`A lider do campeonato é a:  ${equipesF1[0][2]} <br>`)
document.write (`Outra equipe da F1 é a:  ${equipesF1[1][3]} <br>`)
