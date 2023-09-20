import { Request, Response } from "express"
import { Pet } from "../models/pet"
import { createMenuObject } from "../helpers/createMenuObjects" // Importando a função para o Menu

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll() //Pegando do model

  // Passando os valores para  page.mustache
  res.render("pages/page", {
    menu: createMenuObject(""),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list,
  })
}

export const dogs = (req: Request, res: Response) => {
  // Filtrando somente os cachorros 
  let list = Pet.getFromType("dog") 
  res.render("pages/page", {
    menu: createMenuObject("dog"), // O dog para função Menu
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list,
  })
}

export const cats = (req: Request, res: Response) => {
  // Filtrando somente os gatos
  let list = Pet.getFromType("cat")
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list,
  })
}

export const fishes = (req: Request, res: Response) => {
  // Filtrando somente os peixes
  let list = Pet.getFromType("fish")
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  })
}
