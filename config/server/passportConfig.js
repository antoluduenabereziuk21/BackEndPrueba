const config = require('config')
const passportJWT = require('passport-jwt')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const createStrategy = () =>{
    const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('auth.secret'),
    passReqToCallback:true
    }
    return new JwtStrategy(jwtOptions,(req,tokenPayload,next)=>{
        try{
            const user = {}
            user.id_user = tokenPayload.id
            user.user_name = tokenPayload.userName
            if(!user){
                return next(null,false)
            }
            console.log(`passportConfig.createStrategy - user.id[${user.id}]`)
            return next(null,user)
        }catch (e) {
            return next(e)
        }
    })
}

module.exports = {
    createStrategy
}