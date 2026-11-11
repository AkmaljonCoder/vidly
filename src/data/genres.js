import movies from "./data";

const genres = [];

for(const m of movies) {
    const isUnique = genres.find(g => g._id == m.genre._id);
    if(!isUnique) genres.push(m.genre);
}

export default genres;