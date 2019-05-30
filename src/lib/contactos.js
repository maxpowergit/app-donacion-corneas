import { PermissionsAndroid } from 'react-native'

const permisoContactos = async () => {
  try {
    const permitido = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Permiso para acceder a tu agenda',
        message: 'ProcCorn necesita permiso para acceder a tu agenda para que selecciones entre tus contactos el número del Coordinador Hospitalario.',
        buttonNeutral: 'Por ahora no',
        buttonNegative: 'No',
        buttonPositive: 'Sí'
      },
    )

    if (permitido === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }
    return false
  } catch (err) {
    return false
  }
}

const telefonoDe = ({ phoneNumbers }) => {
  // Si hay algún contacto.
  if (phoneNumbers.length >= 1) {
    // Devolver el primer número.
    return phoneNumbers[0].stringValue
  }

  return ''
}

export { permisoContactos, telefonoDe }
