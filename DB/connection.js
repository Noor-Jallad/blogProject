import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect:'mysql'});

  const connectDB= async()=>{
    await sequelize.sync({alter:false})
    .then(result=>{
        console.log("Connected to DB ");
    })
    .catch(err=>{
        console.log("Error to connect DB ",err);
    });
  }
  export {sequelize,connectDB};