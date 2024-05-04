import React from 'react';

function Anak(props) {
    return ( 
        <div>
            <p>Kondisi: {props.data.kondisi}</p>
            <p>Nama: {props.data.nama}</p>
        </div>
     );
}

export default Anak;
