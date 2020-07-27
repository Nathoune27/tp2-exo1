def LED():
    for valeur in liste:
        for valeur2 in liste2:
            led.unplot(valeur, valeur)
            if valeur == 4:
                liste[-1] = valeur2
            elif valeur == 0:
                liste[1] = valeur2
            led.plot(valeur, valeur)
liste2: List[List[number]] = []
liste: List[List[number]] = []
liste = [0, 1, 2, 3, 4]
liste2 = [1, 1, 1, 1, 1]
for valeur3 in liste:
    led.plot(valeur3, valeur3)

def on_forever():
    pass
basic.forever(on_forever)
