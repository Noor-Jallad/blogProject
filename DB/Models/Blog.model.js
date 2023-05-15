import {DataTypes } from 'sequelize';
import {sequelize} from './../connection.js';

const blogModel=sequelize.define('blog', {
    title:{
     type: DataTypes.STRING,
     allowNull: false
    },
    body:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique:true
    },
    userId:{
        type: DataTypes.INTEGER,
        
    }
})

export default blogModel;