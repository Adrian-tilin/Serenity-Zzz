// Level 2 Question Pool - Simplified Version
const level2Pool = [
    {
        question: "¿Qué estudia cómo cambiamos desde que nacemos hasta que morimos?",
        options: ["Solo los bebés", "Psicología del desarrollo", "Solo los animales", "Solo los adultos"],
        correct: 1
    },
    {
        question: "¿Para qué sirve la terapia que cambia pensamientos?",
        options: ["Para dormir", "Para cambiar ideas negativas", "Para comer", "Para ejercitarse"],
        correct: 1
    },
    {
        question: "¿Qué mide un test de inteligencia?",
        options: ["Mi educación", "Qué tan bien pienso", "Mis sentimientos", "Mi creatividad"],
        correct: 1
    },
    {
        question: "¿Qué significa hacer algo porque me gusta?",
        options: ["Me obligan", "Por premio", "Motivación interna", "Por miedo"],
        correct: 2
    },
    {
        question: "¿Quién estudió por qué los bebés necesitan cariño?",
        options: ["Freud", "Bowlby", "Skinner", "Maslow"],
        correct: 1
    },
    {
        question: "¿Qué significa guardar información en mi mente?",
        options: ["Olvidar", "Recordar", "Codificar", "Repetir"],
        correct: 2
    },
    {
        question: "¿Qué estudia cómo nos comportamos con otras personas?",
        options: ["El cerebro", "Psicología social", "Los niños", "Los sueños"],
        correct: 1
    },
    {
        question: "¿Cuál es una parte importante de la personalidad?",
        options: ["Autoestima", "Ser sociable", "Inteligencia", "Empatía"],
        correct: 1
    },
    {
        question: "¿Qué puede aprender un niño con ayuda de otros?",
        options: ["Lo que ya sabe", "Cosas nuevas", "Nada", "Solo lo fácil"],
        correct: 1
    },
    {
        question: "¿Qué mostró Bandura con un muñeco?",
        options: ["Aprender con castigos", "Aprender con premios", "Aprender viendo", "Aprender memorizando"],
        correct: 2
    },
    {
        question: "¿Qué hace la parte frontal del cerebro?",
        options: ["Equilibrio", "Pensar y planear", "Ver", "Oír"],
        correct: 1
    },
    {
        question: "¿Qué pasa cuando tengo ideas que se contradicen?",
        options: ["Es normal", "Me siento incómodo", "No pasa nada", "Me hace más inteligente"],
        correct: 1
    },
    {
        question: "¿Qué químico del cerebro causa depresión cuando está bajo?",
        options: ["Dopamina", "Serotonina", "Adrenalina", "Oxitocina"],
        correct: 1
    },
    {
        question: "¿Qué son las ideas que todos los humanos compartimos?",
        options: ["Recuerdos personales", "Inconsciente colectivo", "Sueños propios", "Emociones ocultas"],
        correct: 1
    },
    {
        question: "¿Qué es ser fuerte ante los problemas?",
        options: ["Ignorar todo", "Resiliencia", "No sentir nada", "Huir"],
        correct: 1
    },
    {
        question: "¿Qué hace un psicólogo clínico?",
        options: ["Estudia mentes sanas", "Ayuda a personas con problemas mentales", "Enseña", "Investiga crímenes"],
        correct: 1
    },
    {
        question: "¿Qué hace la parte del cerebro que planifica?",
        options: ["Mover músculos", "Tomar decisiones", "Ver", "Dormir"],
        correct: 1
    },
    {
        question: "¿Qué recuerdo mejor de una lista?",
        options: ["Lo último", "Lo primero", "Lo del medio", "Todo igual"],
        correct: 1
    },
    {
        question: "¿Qué es dar una recompensa por buen comportamiento?",
        options: ["Quitar privilegios", "Refuerzo positivo", "Ignorar", "Castigar"],
        correct: 1
    },
    {
        question: "¿Qué mide el test de Wechsler?",
        options: ["Personalidad", "Inteligencia", "Motivación", "Creatividad"],
        correct: 1
    },
    {
        question: "¿Cuál es la teoría de aprender por consecuencias?",
        options: ["Psicoanálisis", "Condicionamiento operante", "Teoría del apego", "Pirámide de necesidades"],
        correct: 1
    },
    {
        question: "¿Qué es hacer experimentos para estudiar la mente?",
        options: ["Terapia", "Psicología experimental", "Psicología aplicada", "Estudiar casos"],
        correct: 1
    },
    {
        question: "¿Cuál es un síntoma de ansiedad constante?",
        options: ["Mucha alegría", "Preocuparse todo el tiempo", "No tener energía", "Dormir mucho"],
        correct: 1
    },
    {
        question: "¿Qué es cambiar entre estar muy feliz y muy triste?",
        options: ["Solo depresión", "Trastorno bipolar", "Ansiedad", "Muchos miedos"],
        correct: 1
    },
    {
        question: "¿Qué parte del cerebro siente miedo?",
        options: ["Memoria", "Amígdala", "Músculos", "Ojos"],
        correct: 1
    },
    {
        question: "¿Qué estudia cómo la gente actúa en el trabajo?",
        options: ["Organizaciones criminales", "Psicología organizacional", "Animales", "Familias"],
        correct: 1
    },
    {
        question: "¿Cuál es un mito sobre ir al psicólogo?",
        options: ["Solo es para locos", "Ayuda a mejorar", "Necesito medicinas", "No funciona"],
        correct: 0
    },
    {
        question: "¿Qué recuerdo mejor al final de una lista?",
        options: ["Lo primero", "Lo último", "Nada", "Todo perfecto"],
        correct: 1
    },
    {
        question: "¿Qué dijo Adler sobre sentirse inferior?",
        options: ["Complejo de inferioridad", "Psicoanálisis", "Condicionamiento", "Cinco grandes"],
        correct: 0
    },
    {
        question: "¿Qué test mide qué tan deprimido estoy?",
        options: ["Inteligencia", "Test de Beck", "Ansiedad", "Personalidad"],
        correct: 1
    },
    {
        question: "¿Qué me protege de las adicciones?",
        options: ["Estar solo", "Apoyo familiar", "Estrés", "No hacer nada"],
        correct: 1
    },
    {
        question: "¿Qué estudia cómo la mente afecta mi salud?",
        options: ["Enfermedades físicas", "Psicología de la salud", "Animales", "Ejercicio"],
        correct: 1
    },
    {
        question: "¿Cuál es el miedo a espacios abiertos?",
        options: ["Agorafobia", "Fobia específica", "Son iguales", "Miedo leve"],
        correct: 0
    },
    {
        question: "¿Qué pasa después de vivir algo muy traumático?",
        options: ["Estrés normal", "Estrés postraumático", "Ansiedad leve", "Depresión corta"],
        correct: 1
    },
    {
        question: "¿Qué dice la teoría de inteligencias múltiples?",
        options: ["Solo hay una inteligencia", "Hay varios tipos de inteligencia", "Solo inteligencia emocional", "Es genética"],
        correct: 1
    },
    {
        question: "¿Qué enfoque se centra en lo bueno de las personas?",
        options: ["Lo negativo", "Psicología humanista", "Psicoanálisis", "Conductismo"],
        correct: 1
    },
    {
        question: "¿Cómo funciona enfrentar los miedos poco a poco?",
        options: ["Evitar situaciones", "Terapia de exposición", "Aumentar ansiedad", "Ignorar"],
        correct: 1
    },
    {
        question: "¿Qué mide el test de colores y palabras?",
        options: ["Memoria", "Atención", "Creatividad", "Motivación"],
        correct: 1
    },
    {
        question: "¿Qué parte del cerebro ayuda a coordinar movimientos?",
        options: ["Pensamiento", "Cerebelo", "Emociones", "Memoria"],
        correct: 1
    },
    {
        question: "¿Qué estudia por qué compramos cosas?",
        options: ["Compras compulsivas", "Psicología del consumidor", "Finanzas", "Deudas"],
        correct: 1
    },
    {
        question: "¿Cuál es un síntoma de esquizofrenia?",
        options: ["Mucha alegría", "Ver o escuchar cosas que no existen", "Mucha energía", "Dormir normal"],
        correct: 1
    },
    {
        question: "¿Qué pasa cuando la primera información me influye mucho?",
        options: ["Olvido", "Efecto de anclaje", "Memoria perfecta", "Negatividad"],
        correct: 1
    },
    {
        question: "¿Cómo son las personas tipo A?",
        options: ["Relajadas", "Competitivas", "Tímidas", "Creativas"],
        correct: 1
    },
    {
        question: "¿Qué estudia la psicología de adultos mayores?",
        options: ["Niños", "Psicología geriátrica", "Animales", "Deportes"],
        correct: 1
    },
    {
        question: "¿Cuál es una forma de evaluar la mente?",
        options: ["Entrevista clínica", "Rayos X", "Análisis de sangre", "Ecografía"],
        correct: 0
    },
    {
        question: "¿Qué es cuando las emociones se vuelven síntomas físicos?",
        options: ["Trastorno de conversión", "Trastorno de personalidad", "Ansiedad social", "Depresión leve"],
        correct: 0
    },
    {
        question: "¿Qué estudia cómo explicamos por qué la gente actúa?",
        options: ["Teoría de atribución", "Memoria", "Aprendizaje", "Emociones"],
        correct: 0
    },
    {
        question: "¿Qué mide el test MMPI?",
        options: ["Inteligencia", "Personalidad y problemas mentales", "Creatividad", "Motivación"],
        correct: 1
    },
    {
        question: "¿Qué aumenta el riesgo de suicidio?",
        options: ["Apoyo social", "Enfermedad mental sin tratar", "Ejercicio", "Dormir bien"],
        correct: 1
    },
    {
        question: "¿Qué estudia las diferencias entre culturas?",
        options: ["Culturas antiguas", "Psicología transcultural", "Animales", "Genes"],
        correct: 1
    },
    {
        question: "¿Qué parte del cerebro pasa información de los sentidos?",
        options: ["Pensamiento abstracto", "Tálamo", "Control emocional", "Memoria"],
        correct: 1
    },
    {
        question: "¿Cómo cambiamos cuando estamos en grupo?",
        options: ["Trabajo individual", "Efecto de grupo", "Aislamiento", "Competencia"],
        correct: 1
    },
    {
        question: "¿Cómo los grupos forman nuestra identidad?",
        options: ["Identidad personal", "Identidad social", "Psicoanálisis", "Conductismo"],
        correct: 1
    },
    {
        question: "¿Qué dice que el todo es más importante que las partes?",
        options: ["Enfoque en partes", "Psicología de la Gestalt", "Psicoanálisis", "Conductismo"],
        correct: 1
    },
    {
        question: "¿Cuál es un error común de pensamiento?",
        options: ["Pensar bien", "Sobregeneralizar", "Análizar bien", "Lógica perfecta"],
        correct: 1
    },
    {
        question: "¿Qué mide el test TAT con historias?",
        options: ["Inteligencia", "Motivaciones ocultas", "Memoria", "Atención"],
        correct: 1
    },
    {
        question: "¿Qué necesitamos para estar motivados internamente?",
        options: ["Motivación externa", "Necesidades internas", "Castigos", "Premios"],
        correct: 1
    }
];