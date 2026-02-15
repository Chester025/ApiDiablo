const Bossesadiablojson = require("../Data/Bossesdiablo.json");
const bossesdiablo = require("../Models/Bossesdiablo");

exports.listBosses = async (req, res) => {


    let boss = []
    for(let i = 0; i < Bossesadiablojson.length; i++) {
        let Bossesdiablo = new bossesdiablo(Bossesadiablojson[i].nombre,Bossesadiablojson[i].titulo,Bossesadiablojson[i].tipo,Bossesadiablojson[i].vida_base,Bossesadiablojson[i].juego);
        boss.push(Bossesdiablo);

    }

    return res.json(boss)

}