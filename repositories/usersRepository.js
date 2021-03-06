import db from "./../config/db.js";

async function getUserById(id) {
    return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
};

async function getPostsByUserId(id) {
    return db.query(`
    SELECT u.name, u.image, p.description, p.link, p."userId" FROM posts p 
    JOIN users u ON u.id = p."userId"
    WHERE "userId" = $1;`, [id])
}

async function searchUser(name) {
    return await db.query(`SELECT u.id, u.name, u.image 
    FROM users u WHERE name LIKE $1`, [`${name}%`]);
}

async function getAllPosts(id, page) {
    const result = db.query(
        `SELECT 
            urp.name as "repostUserName",
            rp."userId" as "repostUserId",
            p.id, p."userId", p.link, p.description, 
            u.name, u.image
        FROM posts p
        JOIN users u ON p."userId" = u.id
        LEFT JOIN "rePosts" rp ON rp."postId" = p.id
        LEFT JOIN users urp ON rp."userId" = urp.id
        WHERE p."userId" = $1
        ORDER BY id DESC
        LIMIT 10
        OFFSET $2`
        , [id, page * 10]
    );
    return result;
};

const usersRepository = {
    getUserById,
    getPostsByUserId,
    searchUser,
    getAllPosts
};

export default usersRepository;