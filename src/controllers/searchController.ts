import { createMenuObject } from "./../helpers/createMenuObjects"
import { Request, Response } from "express"
import { Pet } from "../models/pet"

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string   // pegando a query

  if (!query) {
    res.redirect("/")  // Redireciona se não tiver nada 
    return
  }
  let list = Pet.getFromName(query)  // Filtrando pelo nome 

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  })
}
