// Level 5 Question Pool
const level5Pool = [
    {
        question: "¿Qué es la 'teoría de la mente'?",
        options: ["Teoría mental", "Capacidad para atribuir estados mentales a otros", "Teoría cognitiva", "Análisis mental"],
        correct: 1
    },
    {
        question: "¿Cuál es la función del 'núcleo caudado'?",
        options: ["Control emocional", "Control motor y aprendizaje", "Memoria", "Visión"],
        correct: 1
    },
    {
        question: "¿Qué mide el 'test de inteligencia de Cattell'?",
        options: ["Personalidad", "Inteligencia fluida y cristalizada", "Creatividad", "Motivación"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo específico de la consolidación sistémica de la memoria según el modelo de complementariedad cortical-hipocampal?",
        options: ["Transferencia inmediata al neocórtex", "Reorganización gradual de redes neocorticales con participación decreciente del hipocampo", "Eliminación del hipocampo del proceso", "Duplicación de memorias en ambos sistemas"],
        correct: 1
    },
    {
        question: "¿Qué postula la teoría de la metacognición de segundo orden de Koriat en los juicios de aprendizaje?",
        options: ["Los juicios son siempre precisos", "Los juicios se basan en claves intrínsecas y extrínsecas procesadas metacognitivamente", "Solo importa la dificultad percibida", "Los juicios son aleatorios"],
        correct: 1
    },
    {
        question: "¿En qué consiste el paradigma de incompatibilidad estímulo-respuesta (Simon task) en el estudio del control cognitivo?",
        options: ["Medir velocidad de respuesta simple", "Medir tiempo de reacción", "Evaluar interferencia entre localización espacial del estímulo y respuesta requerida", "Estudiar memoria de trabajo"],
        correct: 2
    },
    {
        question: "¿Cuál es el principio fundamental de la teoría de procesamiento de información bayesiano en percepción?",
        options: ["La percepción es determinística", "Los procesos perceptuales son aleatorios", "El sistema nervioso combina información sensorial con conocimiento previo usando inferencia probabilística", "Solo importan los estímulos actuales"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza específicamente al síndrome de Balint desde la perspectiva de la atención visuoespacial?",
        options: ["Simultanagnosia, ataxia óptica y apraxia oculomotora", "Solo pérdida de campo visual", "Únicamente problemas de memoria", "Deterioro del lenguaje exclusivamente"],
        correct: 0
    },
    {
        question: "¿En qué consiste la hipótesis de la codificación específica de transferencia de Roediger y McDermott?",
        options: ["Toda información se transfiere igual", "El rendimiento es óptimo cuando coinciden las operaciones cognitivas en codificación y recuperación", "Solo importa la codificación", "La recuperación es independiente de la codificación"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo propuesto por la teoría de la carga perceptual de Lavie para la atención selectiva?",
        options: ["Selección temprana obligatoria", "La carga perceptual determina si los distractores se procesan automáticamente", "Selección tardía siempre", "No existe selección atencional"],
        correct: 2
    },
    {
        question: "¿Qué postula la teoría de la simulación mental de Goldman en el contexto de la cognición social?",
        options: ["Usamos teorías explícitas para entender otros", "No podemos entender otras mentes", "Simulamos internamente los procesos mentales de otros usando nuestros propios recursos cognitivos", "Solo la empatía es relevante"],
        correct: 3
    },
    {
        question: "¿En qué consiste el efecto de congruencia de género gramatical en estudios psicolingüísticos?",
        options: ["Facilitación en el procesamiento cuando género gramatical y semántico coinciden", "Interferencia en todos los casos", "No hay efecto del género", "Solo afecta sustantivos"],
        correct: 0
    },
    {
        question: "¿Cuál es la base neurobiológica de la anosognosia según el modelo de Ramachandran?",
        options: ["Daño bilateral en corteza parietal", "Desconexión entre sistemas de monitoreo y áreas dañadas", "Solo afecta la memoria", "Es puramente psicológica"],
        correct: 1
    },
    {
        question: "¿Qué caracteriza al fenómeno de priming semántico indirecto en estudios de memoria implícita?",
        options: ["Activación directa entre conceptos", "Facilitación a través de múltiples enlaces asociativos en redes semánticas", "Solo funciona con palabras concretas", "Es un artefacto metodológico"],
        correct: 2
    },
    {
        question: "¿Cuál es el principio de la teoría de detección de señales en su aplicación a la memoria de reconocimiento?",
        options: ["Solo mide memoria perfecta", "Discrimina entre fuerza de la memoria y criterio de respuesta usando distribuciones de familiaridad", "No se aplica a memoria", "Solo funciona en percepción"],
        correct: 3
    },
    {
        question: "¿En qué consiste el modelo de memoria de trabajo de Baddeley revisado (2000) con el buffer episódico?",
        options: ["Sistema de almacenamiento temporal multimodal que integra información de subsistemas y memoria a largo plazo", "Solo almacena información visual", "Reemplaza al ejecutivo central", "Es idéntico al modelo original"],
        correct: 0
    },
    {
        question: "¿Qué postula la teoría de la mente extendida de Clark y Chalmers en psicología cognitiva?",
        options: ["La mente está confinada al cerebro", "Los procesos cognitivos pueden extenderse a herramientas y ambiente cuando cumplen criterios específicos", "Solo humanos pueden tener mente extendida", "Es una metáfora sin implicaciones empíricas"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo específico del efecto de superioridad del objeto en percepción visual según Bar?",
        options: ["Los objetos siempre se procesan mejor", "Procesamiento paralelo de información de baja frecuencia espacial que facilita reconocimiento", "Solo funciona con objetos familiares", "Es un sesgo experimental"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al síndrome de negligencia espacial egocéntrica versus alocéntrica según Hillis?",
        options: ["Son idénticos", "Egocéntrica afecta coordenadas corporales, alocéntrica coordenadas de objetos", "Una es más severa que la otra", "Solo difieren en localización lesional"],
        correct: 3
    },
    {
        question: "¿En qué consiste la hipótesis de la reserva cognitiva de Stern en neuropsicología del envejecimiento?",
        options: ["El cerebro no cambia con la edad", "Diferencias individuales en redes neuronales eficientes permiten mantener función ante patología", "Solo la educación importa", "Es un concepto obsoleto"],
        correct: 1
    },
    {
        question: "¿Cuál es el principio de la terapia de procesamiento adaptativo de la información (EMDR) según Shapiro?",
        options: ["Solo exposición traumática", "Reprocesamiento de memorias traumáticas activando mecanismos adaptativos innatos", "Únicamente movimientos oculares", "Terapia cognitiva estándar"],
        correct: 2
    },
    {
        question: "¿Qué postula la teoría de la especificidad de dominio en el desarrollo de la teoría de la mente según Baron-Cohen?",
        options: ["La teoría de la mente es general", "Módulos cognitivos especializados evolucionaron específicamente para inferir estados mentales", "Es solo aprendizaje cultural", "No existe especificidad"],
        correct: 3
    },
    {
        question: "¿Cuál es el mecanismo de la inhibición de retorno en estudios de atención espacial según Posner?",
        options: ["Facilitación continua en localizaciones atendidas", "Inhibición temporal para reorientar atención hacia nuevas localizaciones", "Solo funciona en visión central", "Es un artefacto motor"],
        correct: 1
    },
    {
        question: "¿En qué consiste el paradigma de competencia atencional en el estudio de la alexitimia según Taylor?",
        options: ["Mide inteligencia emocional", "Evalúa competencia entre procesamiento emocional y cognitivo por recursos atencionales", "Solo mide ansiedad", "No tiene base teórica"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al fenómeno de anosognosia para la hemiplegia según Berti?",
        options: ["Reconocimiento parcial del déficit", "Negación específica de parálisis con conciencia preservada de otros déficits", "Confusión general", "Solo afecta la memoria"],
        correct: 3
    },
    {
        question: "¿Cuál es la base de la teoría de la coherencia central débil de Frith en el espectro autista?",
        options: ["Coherencia superior en autismo", "Sesgo hacia procesamiento local con dificultad para integrar información global", "No hay diferencias en procesamiento", "Solo afecta el lenguaje"],
        correct: 1
    },
    {
        question: "¿En qué consiste el modelo de triple red de Menon para las funciones ejecutivas?",
        options: ["Una sola red ejecutiva", "Interacción entre redes saliente, ejecutiva central y por defecto", "Solo importa la corteza prefrontal", "Son redes independientes"],
        correct: 2
    },
    {
        question: "¿Qué postula la teoría de la codificación dual de Paivio para la memoria y el lenguaje?",
        options: ["Un solo sistema de codificación", "Sistemas separados para información verbal e imaginística con conexiones cruzadas", "Solo importa el sistema verbal", "Los sistemas no interactúan"],
        correct: 3
    },
    {
        question: "¿Cuál es el mecanismo de la facilitación inhibitoria negativa según Tipper?",
        options: ["Facilitación directa de estímulos", "Inhibición persistente de estímulos previamente ignorados que se vuelven relevantes", "Solo funciona en memoria", "Es un sesgo metodológico"],
        correct: 1
    },
    {
        question: "¿En qué consiste la hipótesis del cerebro predictivo de Friston en neurociencia cognitiva?",
        options: ["El cerebro solo reacciona a estímulos", "El cerebro genera constantemente predicciones jerárquicas y actualiza modelos basándose en error de predicción", "Solo funciona en percepción", "Es especulación sin evidencia"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al síndrome de desconexión interhemisférica según Gazzaniga?",
        options: ["Pérdida de conciencia", "Incapacidad de integrar información entre hemisferios cerebrales manteniendo funciones intrahemisféricas", "Solo afecta el lenguaje", "Es reversible completamente"],
        correct: 3
    },
    {
        question: "¿Cuál es la base de la terapia de activación conductual de tercera ola según Hayes?",
        options: ["Solo programar actividades", "Conexión entre valores, contexto y patrones de activación conductual con aceptación psicológica", "Eliminar pensamientos negativos", "Es idéntica a terapia conductual tradicional"],
        correct: 1
    },
    {
        question: "¿En qué consiste el efecto de transferencia apropiada de procesamiento de Roediger en memoria episódica?",
        options: ["Toda transferencia es beneficiosa", "Máximo rendimiento cuando operaciones de codificación y recuperación son congruentes", "Solo afecta memoria semántica", "No existe transferencia entre tareas"],
        correct: 2
    },
    {
        question: "¿Qué postula la teoría de la carga cognitiva de Sweller en el diseño instruccional?",
        options: ["Mayor carga siempre mejora aprendizaje", "Optimización de carga intrínseca, extrínseca y esencial según capacidad de memoria de trabajo", "La carga es irrelevante para aprendizaje", "Solo importa la motivación"],
        correct: 3
    },
    {
        question: "¿Cuál es el mecanismo de la facilitación repetitiva transcraneal (rTMS) en neuroplasticidad según Pascual-Leone?",
        options: ["Solo estimulación superficial", "Modulación de excitabilidad cortical que induce cambios plásticos duraderos en redes neuronales", "Es únicamente diagnóstica", "No afecta la plasticidad"],
        correct: 1
    },
    {
        question: "¿En qué consiste el modelo de procesamiento cascádico de McClelland en reconocimiento de palabras?",
        options: ["Procesamiento serial estricto", "Activación gradual y paralela de múltiples niveles de representación con interacción bidireccional", "Solo funciona con palabras frecuentes", "Es un modelo obsoleto"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al fenómeno de priming afectivo subliminal según Zajonc?",
        options: ["Solo funciona con estímulos conscientes", "Evaluaciones afectivas pueden ser influenciadas por estímulos emocionales bajo el umbral de conciencia", "Es un artefacto experimental", "Solo afecta cognición"],
        correct: 3
    },
    {
        question: "¿Cuál es la base de la hipótesis de lateralización emocional de Davidson?",
        options: ["Ambos hemisferios procesan emociones igual", "Hemisferio izquierdo especializado en emociones de aproximación, derecho en evitación", "Solo el hemisferio derecho procesa emociones", "La lateralización es aleatoria"],
        correct: 1
    },
    {
        question: "¿En qué consiste la teoría de la desconexión en esquizofrenia según Friston?",
        options: ["Desconexión física de neuronas", "Alteraciones en conectividad funcional entre regiones cerebrales críticas", "Solo afecta una región cerebral", "Es puramente genética"],
        correct: 2
    },
    {
        question: "¿Qué postula la hipótesis de la ventana crítica de Lenneberg para la adquisición del lenguaje?",
        options: ["El lenguaje se aprende toda la vida", "Período sensible específico determinado por maduración cerebral para adquisición óptima del lenguaje", "Solo la infancia temprana permite aprendizaje", "No existen períodos críticos"],
        correct: 3
    },
    {
        question: "¿Cuál es el mecanismo de la plasticidad homeostática según Turrigiano en aprendizaje y memoria?",
        options: ["El cerebro no mantiene equilibrio", "Mecanismos compensatorios que mantienen estabilidad de redes neuronales ante cambios plásticos", "Solo funciona en desarrollo", "La plasticidad es siempre destructiva"],
        correct: 1
    },
    {
        question: "¿En qué consiste el paradigma de búsqueda visual eficiente versus ineficiente según Treisman?",
        options: ["Toda búsqueda es igual", "Búsqueda paralela para características simples versus serial para conjunciones de características", "Solo importa el número de elementos", "Es independiente de la atención"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al síndrome de Capgras en el marco de la teoría de reconocimiento facial de Bruce y Young?",
        options: ["Pérdida completa de reconocimiento", "Desconexión entre reconocimiento estructural facial y respuesta afectiva autonómica", "Solo afecta rostros familiares", "Es un trastorno puramente perceptual"],
        correct: 3
    },
    {
        question: "¿Cuál es la base de la terapia de esquemas de Young para trastornos de personalidad?",
        options: ["Modificación superficial de síntomas", "Identificación y cambio de esquemas desadaptativos tempranos y modos esquemáticos", "Solo terapia cognitiva estándar", "Enfoque puramente conductual"],
        correct: 1
    },
    {
        question: "¿En qué consiste la teoría de la simulación corporeizada de Barsalou en cognición conceptual?",
        options: ["Los conceptos son abstractos puros", "La comprensión conceptual implica simulación de experiencias sensoriomotoras asociadas", "Solo funciona para conceptos concretos", "Es una metáfora sin base empírica"],
        correct: 2
    },
    {
        question: "¿Qué postula la hipótesis del marcador somático de Damasio en la toma de decisiones complejas?",
        options: ["Las emociones solo interfieren", "Estados somáticos asociados con consecuencias guían la toma de decisiones antes del análisis consciente", "Solo importa la razón pura", "Los marcadores son irrelevantes"],
        correct: 3
    },
    {
        question: "¿Cuál es el mecanismo de la inhibición latente según Lubow en condicionamiento asociativo?",
        options: ["Facilitación del aprendizaje", "Pre-exposición a estímulos retrasa su posterior condicionamiento debido a reducción en procesamiento atencional", "Solo funciona en laboratorio", "Es un artefacto metodológico"],
        correct: 1
    },
    {
        question: "¿En qué consiste el modelo de competencia de recursos de Kahneman para la atención dual-tarea?",
        options: ["Recursos ilimitados", "Pool limitado de recursos atencionales que debe distribuirse entre tareas concurrentes", "Solo una tarea puede realizarse", "Los recursos no se distribuyen"],
        correct: 2
    },
    {
        question: "¿Qué caracteriza al fenómeno de extinción visual en negligencia espacial según Driver?",
        options: ["Pérdida de campo visual completa", "Incapacidad de detectar estímulo contralateral cuando se presenta simultáneamente con estímulo ipsilateral", "Solo afecta movimientos oculares", "Es un problema puramente motor"],
        correct: 3
    }
];