while (true) {
    let namn = prompt("ange ditt namn:");
    let lösenord = prompt("ange ditt lösenord:");


    if (namn == "alex" && lösenord == "12345" ) {
        document.writeln(" du är inloggad");
        break;
    }else{
        document.writeln("fel")
    }

}

let ålder = prompt("hur gammal är du?");
document.writeln(`hej ${namn} du är ${ålder}`);

let heltal = prompt("skriv ett heltal 5-10: ");
for (let i = 1; i <= heltal; i++) {
    document.writeln(`rad ${i}<br>`);
    
    
}