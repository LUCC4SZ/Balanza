function sumarPesoTotal(arrayParam){
    //console.log(arrayParam)
    let pesoTotal = 0
    for (let i = 0; i < arrayParam.length; i++) {
        const peso = arrayParam[i]
        pesoTotal += peso
    }
    //console.log(pesoTotal)
    return pesoTotal
}

export default sumarPesoTotal