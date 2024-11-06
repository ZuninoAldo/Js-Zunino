let recomiendo = prompt("¿como esta el clima hoy?")
    while(recomiendo != "esc") {
        switch (recomiendo) {
        case "soleado":
            alert("Te recomiendo usar ropa clara!");
            break;
        case "nublado":
            alert("Te recomiendo llevar paraguas por si llueve!")
            break
        case "fresco":
            alert("Te recomiendo llevar un abrigo!")
            break
        case "lluvioso":
            alert("Te recomiendo llevar paraguas y piloto!")
            break
        default:
            alert("Necesito que me des una pista del clima!")
            break
    }
    recomiendo = prompt("¿como esta el clima hoy?")
}