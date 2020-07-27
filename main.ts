function LED () {
    while (true) {
        for (let var2 = 0; var2 <= 4; var2++) {
            led.unplot(liste[var2], posY[var2])
            if (led.point(liste[var2] - 1, posY[var2] - 1) || posY[var2] == 0) {
                led.plot(liste[var2], posY[var2 + 1])
            } else if (led.point(liste[var2] - 1, posY[var2] + 1) || posY[var2] == 4) {
                led.plot(liste[var2], posY[var2 - 1])
            }
            liste[0] = 0
        }
    }
}
let posY: number[] = []
let liste: number[] = []
liste = [4, 3, 2, 1, 0]
posY = [4, 3, 2, 1, 0]
for (let _var = 0; _var <= 4; _var++) {
    led.plot(liste[_var], posY[_var])
}
LED()
