const Projet = ({nom, lien, img}) => {
    return ( 
        <>
            <div className="projects">
                <h1>{nom}</h1>
                
                <div>
                    <a href={lien} target="_blank"><img src={img} alt={nom} style={{ width: 250, height : 250}}/></a>
                </div>
            </div>
        </>
     );
}
 
export default Projet;