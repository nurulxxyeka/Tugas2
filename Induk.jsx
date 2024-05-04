import Anak from "../Components/Anak";

function Induk() {
    const bioData = {kondisi: "sehat", nama: "Nurul"};

    function handleClick() {
        alert('Anak anda telah terdata');
    }

    return ( 
        <div>
            <Anak data={bioData}/>
            <button onClick={handleClick}>Klik untuk data anak</button>
        </div>
     );
}

export default Induk;
