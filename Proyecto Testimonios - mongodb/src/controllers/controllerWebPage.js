import * as dao from "../models/project.dao.js";

export function getIndex(req, res) {
    dao.getAllActive()
        .then(function(juegos) {
            res.status(200).render("index.ejs", { items: juegos });
        })
        .catch(function() {
            res.status(500).json({ err: 500, msg: "No se pudo leer el archivo" });
        })
}

export function getForm(req, res) {
    res.render("form.ejs", { msg: "" })
}

export function addTestimony(req, res) {
    if (!dao.add(req.body))
        res.status(200).render("form.ejs", { msg: "No se pudo añadir el registro" });
    else
        res.status(500).render("form.ejs", { msg: "Registro añadido con exito" });
}