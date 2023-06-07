import { contents } from "@/data/home";


export default function handler(req, res) {
    res.status(200).json(contents)
}