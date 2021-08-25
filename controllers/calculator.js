

module.exports.remuneracionmensual = (req, res)=>{
    let edad = req.body.edad;
    let sexo = req.body.sexo;
    let ahorroAcumulado = req.body.ahorroAcumulado;
    let remuneracionMensual = req.body.remuneracionMensual;
    let mesesCotizados = req.body.mesesCotizados;
    let rawfondo = req.body.fondo;
    fondo = rawfondo.toLowerCase();
    let rentabilidad= "0";
    switch(fondo){
        case "a":
            rentabilidad = 6.52;
            break;
        case "b":
            rentabilidad = 6.58;
            break;
        case "c":
            rentabilidad = 7.35;
            break;
        case "d":
            rentabilidad = 4.14;
            break;
        case "e":
            rentabilidad = 4.11;
            break;
    }
    let edv_mujer = 82.1;
    let edj_mujer = 60;
    let edv_hombre = 77.3;
    let edj_hombre = 65;

    let pension = 0;
    switch(sexo){
        case "female":
            pension = Math.trunc(( ahorroAcumulado+(((remuneracionMensual/10)*mesesCotizados*(edj_mujer-edad))*( (100+rentabilidad)/100)) )/((edv_mujer-edj_mujer)*12));
            console.log(pension);
            res.json({pension:pension});
            break;
        case "male":
            pension = Math.trunc(( ahorroAcumulado+(((remuneracionMensual/10)*mesesCotizados*(edj_hombre-edad))*( (100+rentabilidad)/100)) )/((edv_hombre-edj_hombre)*12));
            console.log(pension);
            res.json({pension:pension});
            break;
    }
};

module.exports.apv = (req, res)=>{
    let edad = req.body.edad;
    let sexo = req.body.sexo;
    let ahorroAcumulado = req.body.ahorroAcumulado;
    let remuneracionMensual = req.body.remuneracionMensual;
    let mesesCotizados = req.body.mesesCotizados;
    let rawfondo = req.body.fondo;
    let remuneracionDeseada = req.body.remuneracionDeseada;
    fondo = rawfondo.toLowerCase();
    let rentabilidad= "0";
    switch(fondo){
        case "a":
            rentabilidad = 6.52;
            break;
        case "b":
            rentabilidad = 6.58;
            break;
        case "c":
            rentabilidad = 7.35;
            break;
        case "d":
            rentabilidad = 4.14;
            break;
        case "e":
            rentabilidad = 4.11;
            break;
    }
    let edv_mujer = 82.1;
    let edj_mujer = 60;
    let edv_hombre = 77.3;
    let edj_hombre = 65;

    let pension = 0;
    switch(sexo){
        case "female":
            pension = Math.trunc(( ahorroAcumulado+(((remuneracionMensual/10)*mesesCotizados*(edj_mujer-edad))*( (100+rentabilidad)/100)) )/((edv_mujer-edj_mujer)*12));
            break;
        case "male":
            pension = Math.trunc(( ahorroAcumulado+(((remuneracionMensual/10)*mesesCotizados*(edj_hombre-edad))*( (100+rentabilidad)/100)) )/((edv_hombre-edj_hombre)*12));
            break;
    }
    let apv = 0;
    switch(sexo){
        case "female":
            apv = Math.trunc( ((remuneracionDeseada-pension)*(edv_mujer-edj_mujer)*((100-rentabilidad)/100))/(edj_mujer-edad) );
            console.log(apv);
            res.json({apv:apv});
            break;
        case "male":
            apv = Math.trunc( ((remuneracionDeseada-pension)*(edv_hombre-edj_hombre)*((100-rentabilidad)/100))/(edj_hombre-edad) );
            console.log(apv);
            res.json({apv:apv});
            break;
    }

};
