import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Container, Content } from 'native-base'

import PreguntaContraindicaciones from '../componentes/PreguntaContraindicaciones.js'

export default class EscenaContraindicaciones extends Component {
  render() {
    return (
      <Container>
        <ScrollView flex= { 1 } style= {estilos.contenedorPreguntas}>
          <PreguntaContraindicaciones
            pregunta= 'Enfermedades Neurodegenerativas o Desmielinizantes'
            opciones= { [
              'Parkinson, Alzheimer, Ela',
              'Esclerosis múltiple',
              'Demencias de etiología desconocida',
              'Sme. Guillán Barré (virus respiratorios y gastrointestinales, HIV, CMV, herpes simple)',
              ' Enf. de Creutzfeld-Jacob (encefalopatía espongiforme), Panencefalitis esclerosante subaguda (sarampión), Leucoencefalopatía multifocal progresiva (papovavirus)'
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Infección Activa'
            opciones= { [
              'Sepsis (se puede ablacionar en caso de infección bacteriana con germen conocido y tto ATB dirigido por mas de 48hs)',
              'Encefalitis, Meningitis, Encocarditis o Septicemia bacteriana en la que no se haya cumplido tratamiento ATB por un período de al menos 48hs. de acuerdo al antibiograma.',
              'Encefalitis, Meningitis, Endocarditis o Septicemia viral, fúngica o parasitaria.',
              'Infecciones virales específicas: Hepatítis viral, Rabia, Infección activa por herpes simple o zoster, HIV, Sme. De Reye (virus varicela, gripe, etc.)',
              'Sme. febril prolongado de causa desconocida'
            ] }
          />
           <PreguntaContraindicaciones
            pregunta= 'Inmunodeficiencia'
            opciones= { [
              'HIV / SIDA',
              'Déficit inmunitario primario o secundario (ataxia telangiectasia- S.de WiscottAldrich, etc.)'
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Enfermedades Onco-hematológicos'
            opciones= { [
              'Leucemias, Aplasia medular, Hemoglobinuria paroxística nocturna, Policetemia vera, Mielofibrosis, Trombocitemia esencial',
              'Enf. de Hodking, Linfoma no Hodkin, Linfoma de Burkitt, Micosis fungoide, Mieloma múltiple, microglobulinemia, Enf. de la cadena pesada, Linfosarcomas.',
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Enfermedad intrínsecas al ojo'
            opciones= { [
              'Retinoblastoma, Conjuntivitis, Uveitis, Queratitis, Tumores malignos del segmento anterior y posterior (melanoma)',
              'Injertos de córnea, esclera o amnios'
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Tumores del SNC que afecten la estructura ósea y/o el contenido orbitario'
            opciones= { [
              'Tumores del SNC que afecten la estructura ósea y/o el contenido orbitario'
            ] }
          />
           <PreguntaContraindicaciones
            pregunta= 'Intoxicación'
            opciones= { [
              'Plaguicidas, fármacos, nafta, kerosene',
              'Alimentos con bacterias patógenas, microtoxinas.',
              'Productos que alteren el sistema hematopoyético, leucopenias, trombocitopenias y en la agregación plaquetaria'
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Pertenecientes a grupos de alto riesgo'
            opciones= { [
              'Conductas sexuales de riesgo',
              'Conductas de riesgo para transmisión de HCV, HBV.',
              'Antecedentes de enfermedades de transmisión sexual en los últimos 6 meses.',
              'Tatuajes, body piercing o acupuntura en los últimos 6 meses en lugares sin condiciones higénicas adecuadas o no habilitados para tal fin.',
              'Persistente diarrea inexplicable / Antecedentes de pérdida de peso inexplicable. Síndrome de impregnación, Síndrome de Wasting'
            ] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Recibió hormonas derivadas del crecimiento de pituitaria humana entre los años 1963 y 1985'
            opciones= { [
              'Personas que recibieron hormonas derivadas del crecimiento de pituitaria humana entre los años 1963 y 1985, devido al riesgo potencial de transmitir la enfermedad de Creutzfeld-Jacob'
            ] }
          />
        </ScrollView>
      </Container>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    padding: 8,
  },
})
