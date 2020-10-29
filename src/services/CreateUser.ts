interface TechObject{
    
    title:String,
    experiencie:number
}

interface CreateUser{
    name?:String,
    email:String,
    password:Number,
    techs: Array<String | TechObject>
}

export default function CraeteUser({name,email,password}:CreateUser){
    const user = {
        name,
        email,
        password,
        
    }

    return user;
}