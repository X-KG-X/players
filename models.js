//Models
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/player_db', {useNewUrlParser: true});


var PlayerSchema = new mongoose.Schema({
    name:{
        type: String, 
        required:[true, "Player name is required "],
        minlength:[2,"player name needs to be at least 2 characters long"],
        unique: [true, "player name already exists"] 
    },
    position: {
        type: String,
        default:'Midfield'
    },
    game1:{
        type: String,
        default: 'Undecided'
    },
    game2:{
        type: String,
        default: 'Undecided'
    },
    game3:{
        type: String,
        default: 'Undecided'
    }
},
{
    timestamps:true
}
);

const Player = mongoose.model("Player", PlayerSchema);
// Player.create({name:"Georgie"})
module.exports = Player;