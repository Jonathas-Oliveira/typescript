
export {Request,Response} from 'express'
import CreateUser from './services/CreateUser'


export function HelloWolrd(request:Request,response:Response){
    const user = CreateUser({
        email:'Joneuckerman7@gmail.com',
        techs:['Techs that i want to learn',{title:'Python',experiencie:50}],
        password:123
    })
   return response.json

}