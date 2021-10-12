import * as dao from "../models/project.dao.js";

export function getAll(req, res) {
    dao.getAll()
        .then(function(testimonios) {
            res.status(200).send(testimonios)
        })
        .catch(function() {
            res.status(500).send({ err: 500, msg: "No se pudo leer el archivo" })
        })
}

export function deleteById(req, res) {
    dao.deleteById(req.params.id)
        .then(function(juego) {
            res.status(200).json(juego);
        })
        .catch(function() {
            res.status(500).json({ err: 500, msg: "No se pudo leer el archivo" });
        })
}

export function patchById(req, res) {
    dao.activateById(req.params.id)
        .then(function(juego) {
            res.status(200).json(juego);
        })
        .catch(function() {

            res.status(500).json({ err: 500, msg: "No se pudo leer el archivo" });
        })
}