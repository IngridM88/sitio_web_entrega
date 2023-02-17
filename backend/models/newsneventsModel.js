var pool= require('./db');

async function getNewsEvents() {
    var query = 'select * from newsnevents';
    var rows = await pool.query(query);
    return rows;
}


async function insertNewsEvents(obj) {
    try {
        var query = 'insert into newsnevents set ? ';
        var rows = await pool.query(query, [obj])
        return rows;
         //Atajar error si no se concretó la query
    } catch (error) {
        console.log(error);
        throw error;
    }
};

async function deleteNewsEventsById(id) {
    var query = 'delete from newsnevents where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows;
};

async function getNewsEventsById(id) {
    var query = 'select * from newsnevents where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
};

async function updateNewsEventsById(obj, id) {
    try {
        var query = 'update newsnevents set ? where id = ? ';
        var rows = await pool.query(query, [obj, id]);
        return rows;
} catch (error) {
    throw error;
}};


module.exports = { getNewsEvents, insertNewsEvents, deleteNewsEventsById, getNewsEventsById, updateNewsEventsById }