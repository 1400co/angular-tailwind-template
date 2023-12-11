import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  showConfirmationCallback(title: string,text: string, callback: () => void, errorCallback: () => void) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambiar!',
    }).then((result) => {
      if (result.isConfirmed) {
        callback(); // Llamar a la función de devolución de llamada
      } else {
        errorCallback(); // Llamar a la función de devolución de llamada de error si se cancela la confirmación
      }
    });
  }
}
