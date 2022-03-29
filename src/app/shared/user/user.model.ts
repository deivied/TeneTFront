export interface IUser{
  _id: string
  prenom: string
  nom: string
  email: string
  numero: string
  profil: string
  isGranted: boolean
  password?: string
  token:string
}
