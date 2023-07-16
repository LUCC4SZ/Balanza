import { monedas } from "./balanza.js";

export function azar() {
    monedas.sort(function () {
        return 0.5 - Math.random();
    });
}