const Lien = ({nom, img, lien}) => {
    return ( 
        <>
        <div>
            <a href={lien} target="_blank"><img src={img} alt={nom}  style={{ width: 100, height : 100}}/></a>
        </div>
        </>
     );
}
 
export default Lien;