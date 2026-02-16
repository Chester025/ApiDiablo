const Bossesadiablojson = require("../Data/Bossesdiablo.json");
const bossesdiablo = require("../Models/Bossesdiablo");

exports.listBosses = async (req, res) => {


    let boss = []
    for(let i = 0; i < Bossesadiablojson.length; i++) {
        let Bossesdiablo = new bossesdiablo(
            Bossesadiablojson[i].id,
            Bossesadiablojson[i].nombre,
            Bossesadiablojson[i].titulo,
            Bossesadiablojson[i].tipo,
            Bossesadiablojson[i].vida_base,
            Bossesadiablojson[i].juego);
        boss.push(Bossesdiablo);

    }

    return res.json(boss)



}

exports.getBoss = async (req, res) => {
    const searchid = parseInt(req.params.id);
    let result = null;
    for(let i = 0; i < Bossesadiablojson.length; i++) {
        if (Bossesadiablojson[i].id === searchid) {
            result = new bossesdiablo(
                Bossesadiablojson[i].id,
                Bossesadiablojson[i].nombre,
                Bossesadiablojson[i].titulo,
                Bossesadiablojson[i].tipo,
                Bossesadiablojson[i].vida_base,
                Bossesadiablojson[i].juego);
            break;
        }
    }
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json({ error: "Character not found" });
        }
    }



