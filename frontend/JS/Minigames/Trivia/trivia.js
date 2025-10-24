
const QUESTIONS_PER_SESSION = 30;
const questions = [
   
    {
        question: "¿Con qué frecuencia te sientes abrumado por tus emociones?",
        options: ["Nunca", "Rara vez", "A veces", "Muy a menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de energía diaria?",
        options: ["Muy alto", "Alto", "Moderado", "Bajo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas duermes normalmente por noche?",
        options: ["Menos de 6", "6-7 horas", "7-8 horas", "Más de 8"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia practicas mindfulness o meditación?",
        options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes sobre tu autoestima últimamente?",
        options: ["Muy positiva", "Positiva", "Neutral", "Negativa"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto apoyo social tienes en tu vida?",
        options: ["Mucho", "Suficiente", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia experimentas ansiedad?",
        options: ["Nunca", "Rara vez", "A veces", "Frecuentemente"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas el estrés en situaciones difíciles?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo dedicas a actividades que disfrutas?",
        options: ["Más de 2 horas diarias", "1-2 horas", "Menos de 1 hora", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes motivado?",
        options: ["Siempre", "A menudo", "A veces", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu apetito últimamente?",
        options: ["Normal", "Aumentado", "Disminuido", "Irregular"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto ejercicio físico haces por semana?",
        options: ["Más de 5 días", "3-5 días", "1-2 días", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes agradecido?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los cambios inesperados?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo pasas en redes sociales al día?",
        options: ["Menos de 1 hora", "1-2 horas", "2-4 horas", "Más de 4 horas"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia buscas ayuda cuando la necesitas?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu capacidad de concentración?",
        options: ["Excelente", "Buena", "Regular", "Mala"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes dificultades para dormir?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto valor das a tus relaciones personales?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes abrumado por responsabilidades?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu nivel de autoestima?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas trabajas/estudias al día?",
        options: ["Menos de 6", "6-8", "8-10", "Más de 10"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia participas en hobbies?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes físicamente la mayor parte del tiempo?",
        options: ["Excelente", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto estrés sientes por tus finanzas?",
        options: ["Ninguno", "Poco", "Moderado", "Mucho"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia expresas tus emociones?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los conflictos interpersonales?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto control sientes sobre tu vida?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes pensamientos negativos?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel general de felicidad?",
        options: ["Muy feliz", "Feliz", "Neutral", "Infeliz"],
        scores: [0, 1, 2, 3]
    },
   
    {
        question: "¿Con qué frecuencia manejas bien los pensamientos intrusivos?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de fatiga mental?",
        options: ["Ninguna", "Baja", "Moderada", "Alta"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas de sueño reparador tienes por noche?",
        options: ["Menos de 5", "5-6 horas", "6-7 horas", "Más de 7"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia practicas técnicas de relajación?",
        options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes sobre tu imagen corporal últimamente?",
        options: ["Muy positiva", "Positiva", "Neutral", "Negativa"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto apoyo emocional tienes de amigos/familia?",
        options: ["Mucho", "Suficiente", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia experimentas ataques de pánico?",
        options: ["Nunca", "Rara vez", "A veces", "Frecuentemente"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas la presión del trabajo/estudios?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo dedicas a actividades creativas?",
        options: ["Más de 2 horas diarias", "1-2 horas", "Menos de 1 hora", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes inspirado?",
        options: ["Siempre", "A menudo", "A veces", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu patrón alimenticio últimamente?",
        options: ["Equilibrado", "Excesivo", "Insuficiente", "Irregular"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto ejercicio cardiovascular haces por semana?",
        options: ["Más de 5 días", "3-5 días", "1-2 días", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia practicas la gratitud?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas las situaciones de crisis?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo pasas en dispositivos electrónicos al día?",
        options: ["Menos de 2 horas", "2-4 horas", "4-6 horas", "Más de 6 horas"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia pides consejo a otros?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu memoria a corto plazo?",
        options: ["Excelente", "Buena", "Regular", "Mala"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes insomnio?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto inviertes en tus amistades?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes sobrecargado por tareas?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu confianza en ti mismo?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas dedicas a actividades productivas al día?",
        options: ["Menos de 4", "4-6", "6-8", "Más de 8"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia exploras nuevos intereses?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes mentalmente la mayor parte del tiempo?",
        options: ["Excelente", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto estrés sientes por tus metas personales?",
        options: ["Ninguno", "Poco", "Moderado", "Mucho"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia compartes tus sentimientos?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas las discusiones familiares?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto control tienes sobre tus decisiones diarias?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes pensamientos de duda?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de satisfacción con la vida?",
        options: ["Muy satisfecho", "Satisfecho", "Neutral", "Insatisfecho"],
        scores: [0, 1, 2, 3]
    },
    
    {
        question: "¿Con qué frecuencia te sientes en paz interior?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de resiliencia emocional?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas de descanso mental tienes por día?",
        options: ["Menos de 1", "1-2 horas", "2-3 horas", "Más de 3"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia practicas la respiración profunda?",
        options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes sobre tus logros personales últimamente?",
        options: ["Muy orgulloso", "Orgulloso", "Neutral", "Decepcionado"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto apoyo profesional tienes en salud mental?",
        options: ["Mucho", "Suficiente", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia experimentas irritabilidad?",
        options: ["Nunca", "Rara vez", "A veces", "Frecuentemente"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los deadlines apretados?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo dedicas a actividades al aire libre?",
        options: ["Más de 2 horas diarias", "1-2 horas", "Menos de 1 hora", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes entusiasta?",
        options: ["Siempre", "A menudo", "A veces", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu hidratación diaria?",
        options: ["Excelente", "Buena", "Regular", "Mala"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto ejercicio de fuerza haces por semana?",
        options: ["Más de 3 días", "2-3 días", "1 día", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia reflexionas sobre tus experiencias?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los rechazos o fracasos?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo pasas en actividades solitarias al día?",
        options: ["Menos de 1 hora", "1-2 horas", "2-4 horas", "Más de 4 horas"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia aceptas críticas constructivas?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu capacidad de resolución de problemas?",
        options: ["Excelente", "Buena", "Regular", "Mala"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes pesadillas?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto valor das a tu tiempo personal?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes presionado por expectativas?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu nivel de empatía?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas dedicas a aprender cosas nuevas al día?",
        options: ["Menos de 1", "1-2", "2-3", "Más de 3"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia participas en actividades grupales?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes emocionalmente la mayor parte del tiempo?",
        options: ["Excelente", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto estrés sientes por cambios en tu vida?",
        options: ["Ninguno", "Poco", "Moderado", "Mucho"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia expresas gratitud a otros?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los malentendidos con otros?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto control tienes sobre tus hábitos?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes pensamientos de comparación?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de optimismo?",
        options: ["Muy optimista", "Optimista", "Neutral", "Pesimista"],
        scores: [0, 1, 2, 3]
    },
   
    {
        question: "¿Con qué frecuencia te sientes conectado con tu propósito?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de paciencia?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas de meditación tienes por semana?",
        options: ["Menos de 1", "1-3 horas", "3-5 horas", "Más de 5"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia practicas el journaling?",
        options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes sobre tu crecimiento personal últimamente?",
        options: ["Muy positivo", "Positivo", "Neutral", "Negativo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto apoyo tienes de tu comunidad?",
        options: ["Mucho", "Suficiente", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia experimentas sentimientos de culpa?",
        options: ["Nunca", "Rara vez", "A veces", "Frecuentemente"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas los conflictos internos?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo dedicas a actividades de voluntariado?",
        options: ["Más de 2 horas semanales", "1-2 horas", "Menos de 1 hora", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes apasionado por algo?",
        options: ["Siempre", "A menudo", "A veces", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu rutina de sueño últimamente?",
        options: ["Consistente", "Irregular", "Muy irregular", "Caótica"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto ejercicio de flexibilidad haces por semana?",
        options: ["Más de 3 días", "2-3 días", "1 día", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia piensas en el futuro con esperanza?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Rara vez"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas las transiciones de vida?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto tiempo pasas en conversaciones profundas al día?",
        options: ["Menos de 30 min", "30 min-1 hora", "1-2 horas", "Más de 2 horas"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia buscas feedback de otros?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu capacidad de adaptación?",
        options: ["Excelente", "Buena", "Regular", "Mala"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes sueños vívidos?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto valor das a tu salud mental?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia te sientes limitado por el pasado?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo es tu nivel de creatividad?",
        options: ["Muy alta", "Alta", "Moderada", "Baja"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuántas horas dedicas a actividades espirituales al día?",
        options: ["Menos de 1", "1-2", "2-3", "Más de 3"],
        scores: [3, 2, 1, 0]
    },
    {
        question: "¿Con qué frecuencia participas en eventos sociales?",
        options: ["Diariamente", "Semanalmente", "Mensualmente", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo te sientes espiritualmente la mayor parte del tiempo?",
        options: ["Excelente", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto estrés sientes por tus responsabilidades familiares?",
        options: ["Ninguno", "Poco", "Moderado", "Mucho"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia expresas amor a tus seres queridos?",
        options: ["Siempre", "A menudo", "A veces", "Nunca"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo manejas las diferencias de opinión?",
        options: ["Muy bien", "Bien", "Regular", "Mal"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cuánto control tienes sobre tu entorno?",
        options: ["Mucho", "Algo", "Poco", "Ninguno"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Con qué frecuencia tienes pensamientos de incertidumbre?",
        options: ["Nunca", "Rara vez", "A veces", "A menudo"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "¿Cómo calificarías tu nivel de paz mental?",
        options: ["Muy pacífico", "Pacífico", "Neutral", "Inquieto"],
        scores: [0, 1, 2, 3]
    }
];


let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let questionsAnswered = 0;


const questionElement = document.getElementById('question');
const optionsGrid = document.getElementById('options-grid');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const currentScoreElement = document.getElementById('current-score');
const questionsAnsweredElement = document.getElementById('questions-answered');


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function initGame() {
    let allShuffled = [...questions];
    shuffleArray(allShuffled);
    shuffledQuestions = allShuffled.slice(0, QUESTIONS_PER_SESSION);
    currentQuestionIndex = 0;
    totalScore = 0;
    questionsAnswered = 0;
    updateUI();
    showQuestion();
}


function updateUI() {
    currentScoreElement.textContent = totalScore;
    questionsAnsweredElement.textContent = questionsAnswered;
    const progress = (questionsAnswered / QUESTIONS_PER_SESSION) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${questionsAnswered + 1} de ${QUESTIONS_PER_SESSION}`;
}


function showQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    feedbackElement.textContent = '';
    nextBtn.disabled = true;

    optionsGrid.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsGrid.appendChild(button);
    });
}


function selectAnswer(selectedIndex) {
    const question = shuffledQuestions[currentQuestionIndex];
    const score = question.scores[selectedIndex];
    totalScore += score;
    questionsAnswered++;

    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        if (index === selectedIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    feedbackElement.textContent = '¡Respuesta registrada!';
    nextBtn.disabled = false;
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        updateUI();
        showQuestion();
    } else {
        endGame();
    }
}


function endGame() {
    questionElement.textContent = `Evaluación completada. Tu puntuación total es: ${totalScore} / ${QUESTIONS_PER_SESSION * 3}`;
    optionsGrid.innerHTML = '';
    feedbackElement.textContent = getFeedbackMessage(totalScore);
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    progressBar.style.width = '100%';
    progressText.textContent = 'Completado';
}


function getFeedbackMessage(score) {
    const maxScore = QUESTIONS_PER_SESSION * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage < 25) {
        return "¡Excelente! Tu bienestar mental parece estar en muy buen estado. ¡Sigue cuidándote!";
    } else if (percentage < 50) {
        return "Tu bienestar mental es bueno, pero considera incorporar más prácticas de autocuidado.";
    } else if (percentage < 75) {
        return "Podrías beneficiarte de hablar con un amigo de confianza o un profesional sobre cómo mejorar tu bienestar.";
    } else {
        return "Es importante buscar apoyo profesional. Considera consultar con un terapeuta o especialista en salud mental.";
    }
}


function restartGame() {
    nextBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    initGame();
}


nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);


window.addEventListener('load', initGame);