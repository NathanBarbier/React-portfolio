import Competence from "./competence.js";
import Formation from "./formation.js";
import Lien from "./lien.js";
import Projet from "./projets.js";
import GitHub from '../github-mark-white.png';
import logoStoriesHelper from '../storiesHelper.png'

const formations = [
    {id : 0, titre : "Baccalauréat S", date : "2016", lieu : "Lycée Louis Bascan"},
    {id : 1, titre : "BTS SIO", date : "2020-2022", lieu : "IPSSI SQY"},
]

const competences = [
    {id : 0, nom : "HTML/CSS", niveau : "expert"},
    {id : 1, nom : "Javascript", niveau : "bon"},
    {id : 2, nom : "PHP", niveau : "expert"},
    {id : 3, nom : "Symfony", niveau : "à l'aise"},
    {id : 4, nom : "Python", niveau : "débutant"},
]

const projets = [
    {id : 0, nom : "StoriesHelper", lien : "https://storieshelper.ipssi-sio.fr/controllers/visitor/login.php", img : logoStoriesHelper}
]

const Main = () => {
    return ( 
        <>
            <div>
                <h1>Formations</h1>

                {formations.map((data, id) => {
                    return <Formation titre={data.titre} lieu={data.lieu} date={data.date}/>
                })}

                <Lien name="GitHub" img={GitHub} lien="https://github.com/NathanBarbier"/>

                <h1>Compétences</h1>

                {competences.map((data, id) => {
                    return <Competence nom={data.nom} niveau={data.niveau} />
                })}

                <h1>Projets</h1>

                {projets.map((data, id) => {
                    return <Projet nom={data.nom} lien={data.lien} img={data.img}/>
                })}
            </div>
        </>
     );
}
 
export default Main;