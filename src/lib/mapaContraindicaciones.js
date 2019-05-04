// Listado de referencia con las preguntas de contraindicaciones.

const mapaContraindicaciones = {
  neurodegenerativas: {
    pregunta: 'Enf. Neurodegenerativas o Desmielinizantes',
    opciones: [
      'Parkinson, Alzheimer, Ela',
      'Esclerosis múltiple',
      'Demencias de etiología desconocida',
      'Sme. Guillán Barré (virus respiratorios y gastrointestinales, HIV, CMV, herpes simple)',
      ' Enf. de Creutzfeld-Jacob (encefalopatía espongiforme), Panencefalitis esclerosante subaguda (sarampión), Leucoencefalopatía multifocal progresiva (papovavirus)'
    ]
  },
  infeccion: {
    pregunta: 'Infección Activa',
    opciones: [
      'Sepsis (se puede ablacionar en caso de infección bacteriana con germen conocido y tto ATB dirigido por mas de 48hs)',
      'Encefalitis, Meningitis, Encocarditis o Septicemia bacteriana en la que no se haya cumplido tratamiento ATB por un período de al menos 48hs. de acuerdo al antibiograma.',
      'Encefalitis, Meningitis, Endocarditis o Septicemia viral, fúngica o parasitaria.',
      'Infecciones virales específicas: Hepatítis viral, Rabia, Infección activa por herpes simple o zoster, HIV, Sme. De Reye (virus varicela, gripe, etc.)',
      'Sme. febril prolongado de causa desconocida'
    ]
  },
  inmunodeficiencia: {
    pregunta: 'Inmunodeficiencia',
    opciones: [
      'HIV / SIDA',
      'Déficit inmunitario primario o secundario (ataxia telangiectasia- S.de WiscottAldrich, etc.)'
    ]
  },
  oncohematologicos: {
    pregunta: 'Enfermedades Onco-hematológicos',
    opciones: [
      'Leucemias, Aplasia medular, Hemoglobinuria paroxística nocturna, Policetemia vera, Mielofibrosis, Trombocitemia esencial',
      'Enf. de Hodking, Linfoma no Hodkin, Linfoma de Burkitt, Micosis fungoide, Mieloma múltiple, microglobulinemia, Enf. de la cadena pesada, Linfosarcomas.'
    ]
  },
  ojo: {
    pregunta: 'Enfermedad intrínsecas al ojo',
    opciones: [
      'Retinoblastoma, Conjuntivitis, Uveitis, Queratitis, Tumores malignos del segmento anterior y posterior (melanoma)',
      'Injertos de córnea, esclera o amnios'
    ]
  },
  tumores: {
    pregunta: 'Tumores del SNC que afecten la estructura ósea y/o el contenido orbitario',
    opciones: [
      'Tumores del SNC que afecten la estructura ósea y/o el contenido orbitario'
    ]
  },
  intoxicacion: {
    pregunta: 'Intoxicación',
    opciones: [
      'Plaguicidas, fármacos, nafta, kerosene',
      'Alimentos con bacterias patógenas, microtoxinas.',
      'Productos que alteren el sistema hematopoyético, leucopenias, trombocitopenias y en la agregación plaquetaria'
    ]
  },
  riesgo: {
    pregunta: 'Pertenecientes a grupos de alto riesgo',
    opciones: [
      'Conductas sexuales de riesgo',
      'Conductas de riesgo para transmisión de HCV, HBV.',
      'Antecedentes de enfermedades de transmisión sexual en los últimos 6 meses.',
      'Tatuajes, body piercing o acupuntura en los últimos 6 meses en lugares sin condiciones higénicas adecuadas o no habilitados para tal fin.',
      'Persistente diarrea inexplicable / Antecedentes de pérdida de peso inexplicable. Síndrome de impregnación, Síndrome de Wasting'
    ]
  },
  hormonacion: {
    pregunta: 'Recibió hormonación entre los años 1963 y 1985',
    opciones: [
      'Personas que recibieron hormonas derivadas del crecimiento de pituitaria humana entre los años 1963 y 1985, debido al riesgo potencial de transmitir la enfermedad de Creutzfeld-Jacob'
    ]
  }
}

export default mapaContraindicaciones
