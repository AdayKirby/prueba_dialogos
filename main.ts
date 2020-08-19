game.setDialogFrame(img`
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 . . . . . . . . . . . 2 2 
    2 . . 2 2 2 2 2 2 2 2 2 . . 2 
    2 . 2 2 . . . . . . . 2 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 . . . . . . . . . 2 . 2 
    2 . 2 2 . . . . . . . 2 2 . 2 
    2 . . 2 2 2 2 2 2 2 2 2 . . 2 
    2 2 . . . . . . . . . . . 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    `)
game.setDialogCursor(img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `)
game.setDialogTextColor(7)
game.showLongText("hola esta es la prueba 1 del dialogo", DialogLayout.Bottom)
