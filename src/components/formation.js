const Formation = ({titre, lieu, date}) => {
    return ( 
        <>
            <div>
                <h3>{lieu} : {titre}</h3>
                <hr/>
                <p>{date}</p>
            </div>
            <br/>
        </>
     );
}
 
export default Formation;
