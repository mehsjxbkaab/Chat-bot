let handler = m => m;

handler.before = async function (m, { conn, isOwner }) {
    if (!m.isGroup && !isOwner) {
        await conn.updateBlockStatus(m.sender, "block");
    }
};

export default handler;
