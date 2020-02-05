import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  confirmOrder(props) {
    Swal.fire({
      title: props.title,
      text: props.text,
      icon: props.icon,
      showCancelButton: true,
      confirmButtonText: props.confirmButtonText,
      cancelButtonText: props.cancelButtonText
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Gracias!',
          'Tus Regalos has sido reservados.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Vale!',
          'Cuando puedas intentalo de nuevo',
          'error'
        )
      }
    })
  }
}
