const Projet = ({nom, lien, img, children}) => {
    return ( 
        <>
            <h2>
                Je suis le projet : {nom}
            </h2>
            <img src={img} alt={nom} style={{ width:'200px', height:'auto'}}/>
            <a href={lien} title={nom} target="_blank">Redirection</a>

            <h6>{children}</h6>
        </>
     );
}
 
export default Projet;
