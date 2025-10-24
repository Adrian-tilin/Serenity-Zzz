// Level 6 Question Pool - Expert-Level Rare Psychology Topics
const level6Pool = [
    {
        question: "¿Cuál es el mecanismo específico de la consolidación sináptica dependiente de proteína según la hipótesis de Kandel y Schwartz?",
        options: ["Síntesis de nuevas proteínas altera fuerza sináptica permanentemente", "Solo cambios eléctricos temporales", "Eliminación de sinapsis existentes", "Activación de genes inmediatos únicamente"],
        correct: 0
    },
    {
        question: "¿En qué consiste el paradigma de compatibilidad espacial de Simon modificado para estudiar control inhibitorio en esquizofrenia?",
        options: ["Medir velocidad de respuesta", "Evaluar interferencia entre localización espacial del estímulo y respuesta motora requerida", "Estudiar memoria declarativa", "Analizar procesamiento visual básico"],
        correct: 1
    },
    {
        question: "¿Qué postula la teoría de la codificación predictiva jerárquica de Rao y Ballard en percepción visual?",
        options: ["Procesamiento bottom-up exclusivo", "Señales de error de predicción se propagan hacia arriba mientras predicciones van hacia abajo", "Top-down solo", "Procesamiento paralelo sin jerarquías"],
        correct: 2
    },
    {
        question: "¿Cuál es la base neurobiológica específica de la prosopagnosia asociativa según el modelo de Bruce y Young?",
        options: ["Daño en área fusiforme facial", "Lesión en conexiones entre reconocimiento estructural facial y sistema semántico", "Deterioro visual primario", "Déficit atencional general"],
        correct: 3
    },
    {
        question: "¿En qué consiste el fenómeno de competencia homeostática en plasticidad sináptica según la teoría BCM de Bienenstock-Cooper-Munro?",
        options: ["Regulación del umbral de modificación sináptica basada en actividad neuronal promedio", "Competencia entre neuronas por recursos", "Eliminación de sinapsis débiles", "Fortalecimiento indiscriminado de conexiones"],
        correct: 0
    },
    {
        question: "¿Qué caracteriza específicamente al síndrome de Alice en el País de las Maravillas en neuropsicología perceptual?",
        options: ["Solo alucinaciones auditivas", "Distorsiones en percepción de tamaño, forma y distancia de objetos y propio cuerpo", "Pérdida de campo visual", "Únicamente alteraciones del color"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la facilitación heterosináptica a largo plazo según Kandel en Aplysia?",
        options: ["Activación directa de sinapsis", "Modulación serotoninérgica que activa AMPc y PKA en terminales presinápticas", "Inhibición de neurotransmisores", "Cambios solo postsinápticos"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis de la degeneración transneuronal retrógrada en lesiones del sistema visual según Hubel y Wiesel?",
        options: ["Solo la neurona lesionada muere", "Células del cuerpo geniculado lateral degeneran tras lesiones en corteza visual primaria", "Regeneración completa siempre ocurre", "No hay efectos transneuronales"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la especificidad contextual de transferencia de Godden y Baddeley en memoria episódica?",
        options: ["El contexto es irrelevante para la memoria", "Coincidencia entre contexto de codificación y recuperación optimiza rendimiento mnésico", "Solo importa el contenido", "El contexto siempre interfiere"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de heminegligencia personal versus extrapersonal según Heilman?",
        options: ["Son idénticos", "Personal afecta reconocimiento del propio cuerpo, extrapersonal el espacio circundante", "Solo difieren en severidad", "Una es reversible, la otra no"],
        correct: 2
    },
    {
        question: "¿En qué consiste el efecto de superioridad de la configuración holística en reconocimiento facial según Tanaka y Farah?",
        options: ["Las partes se reconocen mejor aisladas", "Los rasgos faciales se procesan mejor en contexto de cara completa que aislados", "Solo funciona con caras familiares", "Es un artefacto experimental"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de reorganización cortical masiva tras amputación según Ramachandran?",
        options: ["El área amputada permanece silente", "Áreas corticales adyacentes invaden territorio desaferenciado", "Solo ocurre en desarrollo", "Es puramente imaginario"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo específico de la inhibición presináptica mediada por GABA-B según Bowery?",
        options: ["Bloqueo de canales de sodio", "Activación de canales de potasio que hiperpolariza terminales presinápticas", "Destrucción de vesículas sinápticas", "Solo efectos postsinápticos"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis de la conectividad anómala en autismo según Just y Carpenter?",
        options: ["Hiperconectividad generalizada", "Subconectividad entre regiones cerebrales distales con hiperconectividad local", "Conectividad normal", "Solo problemas de mielinización"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la atención visual de Posner sobre el mecanismo de desenganche atencional?",
        options: ["Desenganche automático siempre", "Proceso controlado que requiere integridad del lóbulo parietal posterior", "Solo funciona en visión central", "Es independiente de estructuras cerebrales"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de desrealización/despersonalización según Simeon en términos de conectividad cerebral?",
        options: ["Hiperactivación emocional", "Desconexión entre corteza prefrontal y sistema límbico-paralímbico", "Solo alteraciones perceptuales", "Hiperconectividad generalizada"],
        correct: 2
    },
    {
        question: "¿En qué consiste el paradigma de enmascaramiento metacontraste en estudios de conciencia visual según Breitmeyer?",
        options: ["Facilitación perceptual", "Supresión de conciencia visual mediante máscara presentada tras estímulo objetivo", "Solo mide velocidad", "Eliminación de efectos de máscara"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de sincronización gamma en cognición según Engel y Singer?",
        options: ["Actividad cerebral aleatoria", "Oscilaciones de 30-80 Hz que sincronizan grupos neuronales funcionalmente relacionados", "Solo ondas lentas", "Desincronización neuronal"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la depresión a largo plazo (LTD) dependiente de receptores NMDA según Bear?",
        options: ["Fortalecimiento sináptico", "Debilitamiento sináptico por activación postsináptica débil durante estimulación presináptica", "Solo cambios presinápticos", "Eliminación de receptores"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis del gen candidato COMT en funciones ejecutivas según Weinberger?",
        options: ["Solo afecta memoria", "Polimorfismo Val158Met modula degradación de dopamina en corteza prefrontal", "No tiene efectos cognitivos", "Solo influye en desarrollo"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la inhibición cognitiva de Hasher y Zacks en envejecimiento?",
        options: ["Facilitación aumenta con edad", "Déficits inhibitorios explican múltiples cambios cognitivos en envejecimiento", "Solo afecta memoria", "La inhibición mejora con edad"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de Klüver-Bucy en su forma completa según estudios en primates?",
        options: ["Solo lesiones corticales", "Lesiones bilaterales de lóbulo temporal medial incluyendo amígdala", "Daño únicamente hipocampal", "Lesiones frontales"],
        correct: 2
    },
    {
        question: "¿En qué consiste el efecto de disrupción transcraneal de área MT/V5 en percepción de movimiento según Newsome?",
        options: ["Mejora la percepción", "Deterioro específico en detección de coherencia de movimiento", "Solo afecta color", "No tiene efectos"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de potenciación a largo plazo (LTP) independiente de NMDA según Johnston?",
        options: ["Requiere receptores NMDA siempre", "Mediada por canales de calcio voltaje-dependientes en algunas sinapsis", "Solo ocurre en desarrollo", "Es más débil que LTP-NMDA"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la facilitación por repetición en cortex visual según Grill-Spector?",
        options: ["Activación aumentada con repetición", "Reducción de activación neuronal manteniendo precisión representacional", "Solo cambios temporales", "Activación en nuevas áreas"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis de la función ejecutiva central del cerebelo según Schmahmann?",
        options: ["Solo funciones motoras", "Modulación de procesos cognitivos superiores via conexiones con corteza prefrontal", "No tiene funciones cognitivas", "Solo procesamiento sensorial"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la codificación espectral de memoria de trabajo según Siegel?",
        options: ["Solo codificación temporal", "Información se mantiene en patrones específicos de oscilaciones neuronales", "Codificación puramente espacial", "No existe codificación espectral"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de desconexión visual según Geschwind?",
        options: ["Ceguera completa", "Interrupción de conexiones entre áreas visuales y otras regiones cerebrales", "Solo problemas motores", "Pérdida auditiva"],
        correct: 2
    },
    {
        question: "¿En qué consiste el efecto de congruencia semántica en el N400 según Kutas y Hillyard?",
        options: ["Mayor amplitud para palabras congruentes", "Mayor negatividad alrededor de 400ms para palabras semánticamente incongruentes", "Solo respuestas positivas", "No hay efectos semánticos"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de competencia binocular en ambliopia según Kiorpes?",
        options: ["Cooperación entre ojos", "Supresión del ojo ambliópico por el ojo dominante", "Visión mejorada", "No hay interacciones binoculares"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la neuromodulación colinérgica en atención según Sarter?",
        options: ["Solo efectos inhibitorios", "Amplificación de señales atencionales relevantes via receptores nicotínicos y muscarínicos", "Supresión atencional", "No modula atención"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis de la cascada dopaminérgica en envejecimiento según Bäckman?",
        options: ["Aumento de dopamina", "Declive dopaminérgico explica deterioro cognitivo relacionado con edad", "Solo afecta motor", "No hay cambios dopaminérgicos"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de redes de modo por defecto (DMN) según Buckner en reposo cerebral?",
        options: ["Desactivación durante reposo", "Activación aumentada en reposo y desactivación durante tareas cognitivas", "Solo activa durante tareas", "No existe red por defecto"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de Anton-Babinski según Bisiach?",
        options: ["Reconocimiento del déficit", "Negación de ceguera cortical con confabulación", "Solo problemas motores", "Pérdida auditiva"],
        correct: 2
    },
    {
        question: "¿En qué consiste el paradigma de compatibilidad flanker de Eriksen modificado para TDAH?",
        options: ["Medir solo velocidad", "Evaluar control inhibitorio mediante interferencia de distractores flanqueantes", "Solo medir atención", "Evaluar memoria"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de consolidación de memoria dependiente de sueño REM según Stickgold?",
        options: ["Solo consolidación en vigilia", "Fortalecimiento selectivo de memorias procedimentales durante sueño REM", "Interferencia del sueño", "Solo afecta memoria declarativa"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la estimulación magnética transcraneal repetitiva (rTMS) según Pascual-Leone?",
        options: ["Solo efectos agudos", "Modulación de excitabilidad cortical que induce cambios plásticos duraderos", "Daño permanente", "No tiene efectos"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis de la reserva cognitiva específica según Stern?",
        options: ["Capacidad fija", "Diferencias individuales en eficiencia de redes neuronales que proporcionan resistencia a patología", "Solo capacidad estructural", "No existe reserva"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la mente bayesiana de Friston en cognición predictiva?",
        options: ["Cognición determinística", "El cerebro es una máquina de inferencia bayesiana que minimiza energía libre", "Solo procesamiento reactivo", "No hay predicción"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de desintegración posterior según Benson?",
        options: ["Solo problemas frontales", "Deterioro de funciones parieto-occipito-temporales en demencia", "Solo pérdida de memoria", "Problemas únicamente motores"],
        correct: 2
    },
    {
        question: "¿En qué consiste el efecto de transferencia entre modalidades en plasticidad cortical según Merzenich?",
        options: ["Solo transferencia dentro modalidades", "Expansión de representaciones corticales puede influir en modalidades sensoriales adyacentes", "No hay transferencia", "Solo deterioro"],
        correct: 3
    },
    {
        question: "¿Qué caracteriza al fenómeno de facilitación inhibitoria en esquizofrenia según Braff?",
        options: ["Facilitación normal", "Déficit en inhibición prepulso que normalmente reduce respuesta de sobresalto", "Hiperactivación", "Solo problemas sensoriales"],
        correct: 1
    },
    {
        question: "¿Cuál es el mecanismo de la neurogénesis adulta en giro dentado según Gage?",
        options: ["No existe neurogénesis adulta", "Generación continua de nuevas neuronas granulares del hipocampo", "Solo muerte neuronal", "Neurogénesis solo en desarrollo"],
        correct: 2
    },
    {
        question: "¿En qué consiste la hipótesis del desacoplamiento funcional en esquizofrenia según Friston?",
        options: ["Hiperconexión funcional", "Alteraciones en conectividad funcional efectiva entre regiones cerebrales", "Conectividad normal", "Solo problemas estructurales"],
        correct: 3
    },
    {
        question: "¿Qué postula la teoría de la atención distribuida de LaBerge en procesamiento visual?",
        options: ["Atención siempre focalizada", "Recursos atencionales pueden distribuirse flexible y gradualmente en el espacio visual", "Atención unitaria", "No hay distribución espacial"],
        correct: 1
    },
    {
        question: "¿Cuál es la base del síndrome de hemi-inatención motora según Heilman?",
        options: ["Solo problemas sensoriales", "Déficit en iniciar movimientos hacia lado contralateral independiente de debilidad motora", "Solo pérdida de fuerza", "Problemas únicamente cognitivos"],
        correct: 2
    }
];