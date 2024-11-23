import React from 'react';
import Donors from './donorList.json';
import './DonorList.css';
import Swal from 'sweetalert2';

export default function DonorList() {
    Swal.fire({Donors})
  return (
    <div>DonorList</div>
    
  )
}
{Donors.map(donor =>{
    return {Donors.id}
})}