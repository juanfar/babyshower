import Swal from 'sweetalert2';

export function Confirmable() {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
      const message = msg(key);    

      return confirmacion(this, original, message);
    }
    return descriptor;
  }
}

function confirmacion(obj, original, message) {
  Swal.fire({
    title: message.title,
    text: message.text,
    icon:  message.icon,
    showCancelButton: true,
    confirmButtonText: message.confirmButtonText,
    cancelButtonText: message.cancelButtonText
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        message.subtitle,
        message.subtext,
        'success'
      )
      const result = original.apply(obj);
      return result;
    } else return null;
  });
}


function msg(key) {
  return {
    title:
      key === 'sendOrder' ? '¿Estas Seguro?' :
      key === 'cancelOrder' ? '¿Estas Seguro?' :
      '',
    text:
      key === 'sendOrder' ? 'Estos son los productos que vas a regalar' :
      key === 'cancelOrder' ? 'Se eliminarán estos productos de tu orden' :
      '',
    icon:
      key === 'sendOrder' ? 'warning' :
      key === 'cancelOrder' ? 'warning' :
      '',
    confirmButtonText:
      key === 'sendOrder' ? 'Si, regalar!' :
      key === 'cancelOrder' ? 'Si, cancelar!' :
      '',
    cancelButtonText:
      key === 'sendOrder' ? 'No, Esperar' :
      key === 'cancelOrder' ? 'No, Esperar' :
      '',
    subtitle:
      key === 'sendOrder' ? 'Gracias!' :
      key === 'cancelOrder' ? 'Vale!' :
      '',
    subtext:
      key === 'sendOrder' ? 'Tus Regalos has sido reservados.' :
      key === 'cancelOrder' ? 'Puedes seleccionar nuevos productos' :
      '',
  }
}