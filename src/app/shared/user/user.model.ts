export interface IUser{
  _id: string
  prenom: string
  nom: string
  email: string
  numero: string
  profil?: string
  isGranted: boolean
  profiluser?: object
  password?: string
  token:string
}
