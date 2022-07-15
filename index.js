
function startz() {
    import { mysql } from "node_modules/mysql"
    let con = mysql.createConnection({
        host: "localhost:3306",
        user: "lighthub",
        password: "4J7NSfyUvPcV7zj",
        database: "lighthub_rooms"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}
module.exports = startz();