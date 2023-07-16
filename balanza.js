import { azar } from "./azar.js"
import sumarPesoTotal from "./sumarPesoTotal.js"

export let monedas = [1, 0, 0, 0, 0, 0, 0, 0, 0]

azar()

let grupo1 = monedas.slice(0,3)
let grupo2 = monedas.slice(3,6)
let grupo3 = monedas.slice(6)

if (sumarPesoTotal(grupo1) > sumarPesoTotal(grupo2)) {
    //Uso la balanza por primera vez. El grupo de monedas mas pesado es el 1.
    console.log("La moneda mas pesada se encuentra en el grupo 1")
    if (grupo1[0] === grupo1[1]) {
        //Uso la balanza por segunda vez. Ambas monedas pesan lo mismo, por lo tanto, la moneda mas pesada es la 3.
        console.log("La moneda mas pesada es la moneda 3 del grupo 1")
    } else {
        if (grupo1[0] > grupo1[1]) {
            //Use la balanza por segunda vez. La moneda mas pesada es la 1.
            console.log("La moneda mas pesada es la moneda 1 del grupo 1")
        } else {
            //Use la balanza por segunda vez. La moneda mas pesada es la 2.
            console.log("La moneda mas pesada es la moneda 2 del grupo 1")
        }
    }
} else {
    if (sumarPesoTotal(grupo2) > sumarPesoTotal(grupo3)) {
        //Use la balanza por primera vez. El grupo de monedas mas pesado es el 2.
        console.log("La moneda mas pesada se encuentra en el grupo 2")
        if (grupo2[0] === grupo2[1]) {
            //Uso la balanza por segunda vez. Ambas monedas pesan lo mismo, por lo tanto, la moneda mas pesada es la 3.
            console.log("La moneda mas pesada es la moneda 3 del grupo 2")
        } else {
            if (grupo2[0] > grupo2[1]) {
                //Use la balanza por segunda vez. La moneda mas pesada es la 1.
                console.log("La moneda mas pesada es la moneda 1 del grupo 2")
            } else {
                //Use la balanza por segunda vez. La moneda mas pesada es la 2.
                console.log("La moneda mas pesada es la moneda 2 del grupo 2")
            }
        }
    } else {
        //Use la balanza por primera vez. El grupo de monedas mas pesado es el 3.
        console.log("La moneda mas pesada se encuentra en el grupo 3")
        if (grupo3[0] === grupo3[1]) {
            //Uso la balanza por segunda vez. Ambas monedas pesan lo mismo, por lo tanto, la moneda mas pesada es la 3.
            console.log("La moneda mas pesada es la moneda 3 del grupo 3")
        } else {
            if (grupo3[0] > grupo3[1]) {
                //Use la balanza por segunda vez. La moneda mas pesada es la 1.
                console.log("La moneda mas pesada es la moneda 1 del grupo 3")
            } else {
                //Use la balanza por segunda vez. La moneda mas pesada es la 2.
                console.log("La moneda mas pesada es la moneda 2 del grupo 3")
            }
        }
    }
}