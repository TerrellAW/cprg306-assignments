export default function IdGen() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 18; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}