document.addEventListener('DOMContentLoaded', () => {
    // Selectors for main elements
    const contentDisplay = document.getElementById('content-display');
    const navLinks = document.querySelectorAll('.navigation a');
    const mainHeader = document.querySelector('.main-header h1');

    // Data structure for topics, including summary, examples, detailed explanations, and quiz questions.
    // Each topic has a unique ID, title, icon, and content sections.
    const topics = {
        'welcome': {
            title: 'Bienvenido al Estudio de Fitoterapia 🌿',
            icon: 'fas fa-home',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-info-circle"></i> Resumen General del Documento</h3>
                    <p>Este documento explora la Fitoterapia, el uso de plantas con fines medicinales. Se enfoca en la clasificación de las plantas (depurativas, curativas, sintomáticas, preventivas) y su aplicación específica en diversas condiciones de salud, incluyendo el embarazo, alergias, dolores de cabeza, problemas menstruales y el cáncer. La fitoterapia es una práctica ancestral que ha sido validada por la OMS y se basa en la rica biodiversidad de plantas medicinales, especialmente en Perú.</p>
                    <p>Aprenderás sobre los principios activos, modos de uso y precauciones de plantas como el Agave, Cola de Caballo, Diente de León, Grama, Jengibre, Quinua, Kiwicha, Avena, Garbanzo, Semillas de Chía, Arándanos y Almendras, entre otras.</p>
                    <p>La aplicación está diseñada para ser interactiva, permitiéndote explorar cada tema en detalle y poner a prueba tus conocimientos con preguntas de opción múltiple.</p>
                </div>
            `
        },
        'fundamentos': {
            title: 'Fundamentos del Uso de Plantas Medicinales 🌿',
            icon: 'fas fa-leaf',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Alrededor del 80% de la población mundial confía en medicinas tradicionales. Las plantas medicinales tienen un rol crucial en la salud peruana debido a su vasta flora. Hipócrates afirmaba "La naturaleza es el médico de los enfermos". Las plantas son una valiosa fuente de materia prima para la industria farmacéutica y sus principios activos equilibrados limitan los efectos indeseables.</p>
                    <button class="toggle-button" data-target="fundamentos-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="fundamentos-explicacion" class="detailed-explanation">
                        <p>La Organización Mundial de la Salud (OMS) reconoce la importancia de las medicinas tradicionales, destacando que una gran parte de la población mundial las utiliza como su principal recurso de salud. En Perú, la diversidad ecológica y microclimática ha dado lugar a una flora excepcionalmente rica, con aproximadamente 80,000 especies, muchas de ellas con propiedades medicinales.</p>
                        <p>Esta práctica se alinea con las estrategias de Atención Primaria de Salud establecidas en Alma Ata en 1978, que promovieron el "Rescate de la Medicina Popular Tradicional y su integración al Sistema de Salud Oficial Peruano".</p>
                        <p>Además de su uso directo, las plantas medicinales son una fuente indispensable de materia prima para la industria farmacéutica. La ventaja de los productos derivados de plantas frente a los químicos sintéticos radica en que sus principios activos se encuentran en un equilibrio natural, lo que a menudo resulta en efectos indeseables limitados.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Fundamentos</h3>
                    <div id="quiz-fundamentos" class="quiz-container"></div>
                </div>
            `
        },
        'depurativas': {
            title: 'Plantas Depurativas 🌿',
            icon: 'fas fa-spa',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Las plantas depurativas ayudan a órganos como el hígado, riñones e intestino a eliminar toxinas. Ejemplos incluyen el Ágave, Cola de Caballo, Diente de León y Grama.</p>
                    <button class="toggle-button" data-target="depurativas-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="depurativas-explicacion" class="detailed-explanation">
                        <h4>Agave (Agave americana)</h4>
                        <p>Originario de América Central. Sus hojas carnosas terminan en punta con bordes espinosos. La raíz y las hojas son depurativas de la sangre y diuréticas. Contiene inulina, que se hidroliza en fructosa y un componente no metabolizable que ayuda a la depuración de sustancias tóxicas. Se usa para evaluar la función renal. Modo de uso: infusión (30g/litro de agua), hasta 3 tazas diarias por no más de 10 días. Precauciones: no usar en embarazadas, menores de 12 años, o hipertensos. La inulina estimula el sistema inmune, ayuda a la absorción de iones y vitamina B, e incrementa la absorción de calcio, previniendo osteoporosis y algunos cánceres como el de mama y colon.</p>
                        <h4>Cola de Caballo (Equisetum arvense)</h4>
                        <p>Ubicación: América. Es una herbácea sin hojas ni flores. Principios activos: flavonoides, taninos, colesterol, carotenos, alcaloides, sales minerales (silicio, potasio, magnesio, manganeso). Propiedades: depurativo, remineralizante, diurético, antianémico, antidismenorreico, útil en cistitis y regulador del bazo. Modo de uso: decocción al 2%, hervir 5 min e infundir 30 min. Precauciones: contraindicado en el embarazo por posible acción anticolinérgica y oxitócica de los alcaloides.</p>
                        <h4>Diente de León (Taraxacum officinale)</h4>
                        <p>Ubicación: América y Europa. Raíz carnosa, flores amarillas, tallo erecto de hasta 50 cm. Principios activos: hojas (flavonoides, cumarinas, vit. B y C), raíces (inulina, principios amargos como taraxacina, sales potásicas, carotenoides, mucílagos). Propiedades: diurético, depurativo, laxante, refrescante de funciones hepáticas, depurador de la sangre, reduce ácido úrico y colesterol, favorece la secreción de bilis. Modo de uso: decocción de raíces y hojas, 3 tazas al día. Precaución: no exceder 3 tazas al día.</p>
                        <h4>Grama (Cynodon dactylon)</h4>
                        <p>Ubicación: América y Europa. Hierba de 10 a 30 cm, rizoma con raíces subterráneas y ramas aéreas con vello fino. Principios activos: fructosana, manitol, sales potásicas. Propiedades: depurativo, diurético, hepatoprotector, especial para depurar riñones, astringente. Útil en cistitis, cálculos renales, uretritis, vaginitis, hipertensión, diabetes tipo II e hiperuricemia. Precauciones: ninguna a dosis adecuada. Modo de uso: decocción al 5%, 2 a 3 tazas diarias.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Plantas Depurativas</h3>
                    <div id="quiz-depurativas" class="quiz-container"></div>
                </div>
            `
        },
        'curativas': {
            title: 'Plantas Curativas o de Sostén 🌿',
            icon: 'fas fa-first-aid',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Las plantas curativas se utilizan para remediar enfermedades o tratar problemas de salud, optimizando la salud integral al actuar en diferentes sistemas del organismo.</p>
                    <button class="toggle-button" data-target="curativas-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="curativas-explicacion" class="detailed-explanation">
                        <h4>Arándano (hojas)</h4>
                        <p>Reduce el contenido de glucosa en la sangre, siendo útil para diabéticos.</p>
                        <h4>Cúrcuma (raíz)</h4>
                        <p>Antiinflamatorio, útil para artritis, problemas hepáticos, elimina sustancias cancerosas, soriasis y hongos.</p>
                        <h4>Menta piperita (hojas)</h4>
                        <p>Digestiva, combate la hinchazón del vientre, problemas estomacales, mal de altura, dolores, tensiones musculares y piedras del riñón.</p>
                        <h4>Milenrama (flor)</h4>
                        <p>Mejora la memoria, ayuda en la menopausia, combate la hipertensión e inflamación de venas, varices, granos y uñas.</p>
                        <h4>Olivo (hojas)</h4>
                        <p>Especialmente indicado para la hipertensión y taquicardias; aumenta el colesterol bueno y es antiviral; funciona como antibiótico.</p>
                        <h4>Saúco (flor)</h4>
                        <p>Alivia la tos, problemas gripales, fiebre, previene resfriados y, en forma de vapor en los oídos, es un remedio para la otitis.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Plantas Curativas</h3>
                    <div id="quiz-curativas" class="quiz-container"></div>
                </div>
            `
        },
        'sintomaticas': {
            title: 'Plantas Sintomáticas 🌿',
            icon: 'fas fa-thermometer-half',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Las plantas sintomáticas actúan como descongestionantes locales y disminuyen el estado de ansiedad, complementando el efecto terapéutico de las plantas curativas. Incluyen el Molle, Ajo, Eucalipto, Flor de Retama, Valeriana, Pimpinela y Manzanilla.</p>
                    <button class="toggle-button" data-target="sintomaticas-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="sintomaticas-explicacion" class="detailed-explanation">
                        <p>Estas plantas son auxiliares en el tratamiento, ya que no curan la enfermedad en sí, pero alivian sus manifestaciones y mejoran el bienestar del paciente. Por ejemplo, al reducir la ansiedad o la congestión, permiten que el cuerpo responda mejor a los tratamientos curativos.</p>
                        <ul>
                            <li><strong>Schinus molle (molle) + Allium sativum (ajo):</strong> Combinación utilizada por sus efectos descongestionantes.</li>
                            <li><strong>Eucaliptus globulus (eucalipto):</strong> Conocido por sus propiedades expectorantes y descongestionantes respiratorias.</li>
                            <li><strong>Spartium junceum (flor de retama):</strong> Puede tener efectos sedantes y ayudar a reducir la ansiedad.</li>
                            <li><strong>Valeriana officinalis (valeriana):</strong> Ampliamente reconocida por sus propiedades sedantes y ansiolíticas, útil para calmar el sistema nervioso.</li>
                            <li><strong>Pimpinella officinalis (pimpinela):</strong> Utilizada tradicionalmente para problemas respiratorios y digestivos que pueden causar malestar sintomático.</li>
                            <li><strong>Matricaria chamomilla (manzanilla):</strong> Con propiedades antiinflamatorias y calmantes, ideal para aliviar síntomas de irritación y ansiedad.</li>
                        </ul>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Plantas Sintomáticas</h3>
                    <div id="quiz-sintomaticas" class="quiz-container"></div>
                </div>
            `
        },
        'preventivas': {
            title: 'Plantas Preventivas 🌿',
            icon: 'fas fa-shield-alt',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Las plantas preventivas fortalecen las defensas del organismo, estimulando el sistema inmunológico, incrementando la fagocitosis de macrófagos y favoreciendo la eliminación de complejos inmunizantes. También aportan vitaminas y minerales, mejorando el estado nutricional. Ejemplos: Uña de Gato, Comfrey y Guayacán.</p>
                    <button class="toggle-button" data-target="preventivas-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="preventivas-explicacion" class="detailed-explanation">
                        <p>Estas plantas son fundamentales para mantener la salud a largo plazo y prevenir la aparición de enfermedades. Su acción se centra en reforzar las capacidades naturales del cuerpo para defenderse.</p>
                        <ul>
                            <li><strong>Uncaria tomentosa (uña de gato):</strong> Reconocida por sus potentes propiedades inmunomoduladoras y antiinflamatorias, ayudando a fortalecer las defensas del cuerpo.</li>
                            <li><strong>Symphytum officinales (comfrey):</strong> Aunque debe usarse con precaución por su toxicidad hepática en uso interno prolongado, tradicionalmente se ha usado externamente para la cicatrización. En el contexto de prevención, su uso interno es limitado y bajo estricta supervisión.</li>
                            <li><strong>Tabebuya porliera (guayacán):</strong> Conocido por sus propiedades antimicrobianas y antiinflamatorias, que pueden contribuir a la prevención de infecciones y al mantenimiento de la salud general.</li>
                        </ul>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Plantas Preventivas</h3>
                    <div id="quiz-preventivas" class="quiz-container"></div>
                </div>
            `
        },
        'obstetricia-primer': {
            title: 'Fitoterapia en el Primer Trimestre del Embarazo 🌿',
            icon: 'fas fa-baby',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Durante el primer trimestre, se pueden usar plantas como el Jengibre para aliviar náuseas matutinas y la Quinua y Kiwicha por su alto valor nutricional y beneficios para el desarrollo fetal.</p>
                    <button class="toggle-button" data-target="obstetricia-primer-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="obstetricia-primer-explicacion" class="detailed-explanation">
                        <h4>Jengibre (Zingiber officinale)</h4>
                        <p>Planta rastrera perenne, nativa del sudeste asiático, India y China. Principios activos: Zingibereno, zingiberal, cineol, felandreno, crital, borneol, gingerol, shogaol y zingerona. Beneficios: Alivio de náuseas matutinas, fortalecimiento del sistema inmunológico, prevención de resfriados y tos, mayor suministro de sangre para el bebé, niveles de colesterol más saludables, mejor absorción de nutrientes, control de ardor estomacal, relajación muscular. Contraindicaciones: Si se toman medicamentos para la presión arterial, diabetes o coagulación, antecedentes de aborto espontáneo o sangrado vaginal, o problemas crónicos de salud. Dosis: 1-4g diarios, pero en embarazadas no exceder 1500mg (1.5g).</p>
                        <h4>Quinua</h4>
                        <p>Pseudocereal de la familia de las amarantáceas. Fuente de calcio, hierro, ácidos grasos omega 6 y 9, y fibra. Beneficios: Aporta proteínas y energía, reduce retención de líquidos, disminuye riesgo de infecciones, rica en fibra (ayuda al tránsito intestinal y estreñimiento), no contiene gluten, controla el colesterol. Contraindicaciones: Puede causar dolencias en personas con problemas intestinales por su alto contenido de proteínas. Contiene saponinas amargas que pueden ser tóxicas, por lo que se recomienda lavarla antes de cocinarla. Puede desencadenar alergias.</p>
                        <h4>Kiwicha (Amaranto)</h4>
                        <p>Planta frondosa de hasta 3 metros. Rica en proteínas (con lisina), vitaminas A, B1, B2, B3, C, ácido fólico y minerales (calcio, hierro, fósforo). Beneficios: Aumenta reservas de calcio en la madre, favorece formación ósea en el feto, previene defectos en el bebé, previene anemia en la embarazada, evita el estreñimiento. Se puede consumir en copos o harina, añadiéndola a sopas, ensaladas, yogur o en dulces.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Fitoterapia en el Primer Trimestre</h3>
                    <div id="quiz-obstetricia-primer" class="quiz-container"></div>
                </div>
            `
        },
        'obstetricia-segundo': {
            title: 'Fitoterapia en el Segundo Trimestre del Embarazo 🌿',
            icon: 'fas fa-baby-carriage',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>En el segundo trimestre, la Avena y el Garbanzo son importantes. La Avena, rica en ácido fólico, regula el tránsito intestinal y estimula hormonas. El Garbanzo, con alto valor nutritivo, previene anemia y favorece el desarrollo fetal.</p>
                    <button class="toggle-button" data-target="obstetricia-segundo-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="obstetricia-segundo-explicacion" class="detailed-explanation">
                        <h4>Avena (Avena sativa)</h4>
                        <p>Planta herbácea de la familia Poaceae. La nutrición es clave para el desarrollo del bebé y la madre. Es una fuente rica de ácido fólico, esencial antes, durante y después del embarazo. Principios activos: Grasas vegetales insaturadas, ácido linoleico, vitaminas B1, B2, D, E, niacina, carotenos, y sales minerales (calcio, hierro, zinc, fósforo). El fósforo estimula la actividad cerebral. Beneficios: Regula el tránsito intestinal, mejora la respuesta a la insulina y previene la diabetes, estimula la producción de progesterona y estrógenos, rica en hierro y folatos (favorece crecimiento de tejidos y óseo). Dosis: 200 µg diarios, aumentando a 400 µg durante el embarazo. Contraindicaciones: El consumo excesivo puede interferir con la digestión, causar diarrea u obstrucción intestinal.</p>
                        <h4>Garbanzo (Cicer arietinum)</h4>
                        <p>Alto valor nutritivo: 360 hidratos de carbono, 20g proteínas, 6.5g grasas, 130mg calcio, 8mg hierro por 100g. Aportan ácido fólico, esencial para el desarrollo del bebé. Principios activos: Rico en proteínas, almidón, lípidos (ácido oleico y linoleico, insaturados y sin colesterol), fibra, vitamina B y minerales (fósforo, potasio, magnesio, folatos, isoflavonas). Beneficios: Previenen anemia, favorecen desarrollo fetal, combaten estreñimiento, mejoran estado de ánimo, favorecen desarrollo óseo fetal. Contraindicaciones: Por su fibra, pueden causar hinchazón y gases; consumir con moderación.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Fitoterapia en el Segundo Trimestre</h3>
                    <div id="quiz-obstetricia-segundo" class="quiz-container"></div>
                </div>
            `
        },
        'obstetricia-tercer': {
            title: 'Fitoterapia en el Tercer Trimestre del Embarazo 🌿',
            icon: 'fas fa-child',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>En el tercer trimestre, las Semillas de Chía, Arándanos y Almendras son beneficiosas. La Chía aporta Omega 3 y fibra. Los Arándanos son antioxidantes y diuréticos. Las Almendras son ricas en calcio y proteínas, esenciales para el feto.</p>
                    <button class="toggle-button" data-target="obstetricia-tercer-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="obstetricia-tercer-explicacion" class="detailed-explanation">
                        <h4>Semillas de Chía (Salvia hispánica)</h4>
                        <p>Beneficios: Aportan Omega 3 (controla colesterol), ricas en hierro, calcio y fibra. Principios activos: Ácidos grasos poliinsaturados (Omega 3), Vitamina A, C y grupo B, sales minerales (fósforo, calcio, magnesio, potasio, zinc, cobre). Dosis: Dos cucharadas al día. Contraindicaciones: Alergia, hipertensos, diarreas.</p>
                        <h4>Arándanos (Vaccinium corymbosum)</h4>
                        <p>Son antioxidantes, anticancerígenos, diuréticos, antiinflamatorios. Contienen ácidos fenólicos, flavonoides, antocianinas y proantocianidinas, vitaminas, microelementos, pectinas. Aumentan la hemoglobina y disminuyen los niveles de azúcar en la sangre. Beneficios: Causa saciedad (evita sobrepeso), el hierro mantiene la hemoglobina, el calcio forma el esqueleto fetal y preserva dientes, cabello y uñas de la madre. Útil para embarazadas con diabetes mellitus. Contraindicaciones: Pancreatitis, colecistitis, colelitiasis, discinesia.</p>
                        <h4>Almendra (Prunus dulcis)</h4>
                        <p>Originaria de Asia Central, introducida en Europa. Beneficios: Gran aporte de calcio (esencial para embarazadas), fuente importante de proteínas (necesarias para desarrollo muscular y fetal), ayuda al desarrollo del sistema nervioso del bebé. Aunque calórica, no causa aumento de peso descontrolado si se consume en la dosis indicada. Contraindicaciones: No presenta alergia. Consumir no más de 25 gramos diarios, o dos vasos de leche de almendra al día.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Fitoterapia en el Tercer Trimestre</h3>
                    <div id="quiz-obstetricia-tercer" class="quiz-container"></div>
                </div>
            `
        },
        'alergias': {
            title: 'Plantas Medicinales para Alergias 🌿',
            icon: 'fas fa-allergies',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Las alergias se manifiestan con síntomas en la piel (irritación, comezón, inflamación), vías respiratorias (asma, rinitis, estornudos) y sistema digestivo (dolor abdominal, vómitos). Plantas como el Aloe Vera y la Manzanilla pueden aliviar estos síntomas.</p>
                    <button class="toggle-button" data-target="alergias-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="alergias-explicacion" class="detailed-explanation">
                        <h4>Aloe Vera (penca sábila)</h4>
                        <p>Se pueden preparar cremas y aceites que alivian los problemas en la piel causados por alergias, como irritación y comezón. Sus propiedades antiinflamatorias y cicatrizantes son beneficiosas.</p>
                        <h4>Manzanilla (Matricaria chamomilla L. o Matricaria recutita L.)</h4>
                        <p>Ideal en infusiones. Alivia problemas de rinitis y dolores estomacales asociados a las alergias. Tiene propiedades antiinflamatorias y calmantes. Contraindicado para mujeres embarazadas por riesgo de aborto.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Alergias</h3>
                    <div id="quiz-alergias" class="quiz-container"></div>
                </div>
            `
        },
        'dolores-cabeza': {
            title: 'Plantas Medicinales para Dolores de Cabeza 🌿',
            icon: 'fas fa-headache',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Los dolores de cabeza, incluyendo migrañas, son comunes y pueden tratarse con remedios vegetales. La Canela, Verbena y Acelga son ejemplos de plantas que pueden aliviar estos dolores.</p>
                    <button class="toggle-button" data-target="dolores-cabeza-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="dolores-cabeza-explicacion" class="detailed-explanation">
                        <p>Los dolores de cabeza son una de las dolencias más frecuentes, y sus causas pueden ser variadas. Afortunadamente, muchas de ellas pueden ser abordadas con el uso adecuado de ciertas plantas medicinales. Las migrañas o jaquecas, que son dolores de cabeza intensos y debilitantes, también pueden encontrar alivio a través de la fitoterapia.</p>
                        <ul>
                            <li><strong>Canela (Cinnamomum zeylanicum o Cinnamomum verum J.Presl):</strong> Una taza de infusión de canela puede aliviar rápidamente los dolores de cabeza. Sin embargo, tiene un efecto oxitócico, por lo que está contraindicada en embarazadas.</li>
                            <li><strong>Verbena (Verbena officinalis):</strong> Las propiedades sedantes de la verbena actúan como un ligero analgésico, siendo ideal para tratar las jaquecas.</li>
                            <li><strong>Acelga (Beta vulgaris var. cicla):</strong> Esta planta, común en la dieta, posee propiedades analgésicas que ayudan a aliviar el dolor de cabeza.</li>
                        </ul>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Dolores de Cabeza</h3>
                    <div id="quiz-dolores-cabeza" class="quiz-container"></div>
                </div>
            `
        },
        'menstruales': {
            title: 'Plantas Medicinales para Problemas Menstruales 🌿',
            icon: 'fas fa-venus',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>Los problemas menstruales incluyen dolores intensos, sangrado abundante o ausencia de menstruación. El Anís es una planta que puede ayudar a aliviar los cólicos menstruales y regular los ciclos.</p>
                    <button class="toggle-button" data-target="menstruales-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="menstruales-explicacion" class="detailed-explanation">
                        <p>Los problemas relacionados con el ciclo menstrual son una preocupación común para muchas mujeres, manifestándose en diversas formas como dolores intensos (dismenorrea), sangrado excesivo (menorragia) o la ausencia de menstruación (amenorrea). Algunas plantas medicinales pueden ofrecer alivio y ayuda en la regulación.</p>
                        <h4>Anís (Pimpinella anisum)</h4>
                        <p>Originario de Asia sudoccidental y la cuenca mediterránea oriental, hoy difundido en América. Es una planta herbácea anual que forma matas de hasta 1m de altura, con flores en densas umbelas y frutos oblongos de fuerte sabor aromático. Principios activos: Muy rico en anetol. Propiedades: Es un excelente carminativo, digestivo, mejora el apetito, alivia cólicos (incluidos los infantiles en bebés lactantes), náuseas y flatulencias. Es un buen antiséptico y antiespasmolítico, lo que lo hace útil para los cólicos menstruales y para ayudar a regular los ciclos. También se sugiere durante la lactancia para aumentar la producción de leche. Usos: Se utiliza la semilla. Es muy valioso contra la tos fuerte y seca, con expectoración difícil, así como problemas respiratorios asociados a la gripe. Precaución: El anís estrellado es neurotóxico, por lo que no debe administrarse a bebés y está contraindicado para madres lactantes.</p>
                        <h4>Orégano (Origanum vulgare)</h4>
                        <p>Nativa del oeste o suroeste de Eurasia y la región mediterránea. Se usa como condimento y en infusiones herbales. Es una hierba perenne que forma un pequeño arbusto achaparrado de unos 45 cm de alto. Contiene dos tipos de fenoles, principalmente carvacrol y timol, con actividad antioxidante, antiinflamatoria, antimicrobiana y, en estudios primarios, antitumoral, antiséptica. También se le considera tónica y digestiva, lo que puede ayudar indirectamente a aliviar el malestar general asociado a problemas menstruales.</p>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Problemas Menstruales</h3>
                    <div id="quiz-menstruales" class="quiz-container"></div>
                </div>
            `
        },
        'cancer': {
            title: 'Plantas Medicinales Contra el Cáncer 🌿',
            icon: 'fas fa-ribbon',
            content: `
                <div class="content-section">
                    <h3><i class="fas fa-book-open"></i> Resumen</h3>
                    <p>El cáncer es una enfermedad compleja. En los últimos años, se han descubierto plantas con potencial para ayudar en su tratamiento, principalmente por su acción antioxidante, que reduce el daño celular. La Cúrcuma, Camelia (Té Verde) y Moringa son ejemplos de estas plantas.</p>
                    <button class="toggle-button" data-target="cancer-explicacion">Explicación Detallada <i class="fas fa-chevron-down"></i></button>
                    <div id="cancer-explicacion" class="detailed-explanation">
                        <p>El cáncer es una enfermedad en la que los tejidos pierden la capacidad de regular su crecimiento, y cada tipo es único, sin un tratamiento universal. Sin embargo, la investigación ha identificado plantas con propiedades que podrían ser coadyuvantes en el tratamiento, destacando su capacidad antioxidante.</p>
                        <ul>
                            <li><strong>Cúrcuma (Curcuma longa):</strong> Planta de origen oriental, estudiada por sus efectos antiinflamatorios y antitumorales. Algunos resultados sugieren que podría ayudar a combatir el cáncer de mama, estómago y pulmón. También tiene efecto anticoagulante.</li>
                            <li><strong>Camelia (Té verde):</strong> Esta planta es la fuente del té verde y es rica en antioxidantes. Las dietas ricas en antioxidantes son conocidas por ayudar a retardar el envejecimiento celular y pueden contribuir a la prevención del cáncer.</li>
                            <li><strong>Moringa (Moringa oleifera):</strong> Conocida como el "árbol de la vida", ha recibido mucha atención. Estudios preliminares indican que podría ayudar a combatir el cáncer de estómago.</li>
                        </ul>
                    </div>
                </div>
                <div class="quiz-section">
                    <h3><i class="fas fa-question-circle"></i> Preguntas sobre Plantas Contra el Cáncer</h3>
                    <div id="quiz-cancer" class="quiz-container"></div>
                </div>
            `
        }
    };

    // Quiz questions data structure
    const quizzes = {
        'fundamentos': [
            {
                question: "¿Qué porcentaje de habitantes de la tierra confían en medicinas tradicionales según la OMS?",
                options: ["50%", "70%", "80%", "90%"],
                answer: "80%",
                hint: "Es la gran mayoría de la población mundial."
            },
            {
                question: "¿Qué frase célebre se atribuye a Hipócrates?",
                options: ["'Conócete a ti mismo'", "'La naturaleza es el médico de los enfermos'", "'Mens sana in corpore sano'", "'Todo fluye'"],
                answer: "'La naturaleza es el médico de los enfermos'",
                hint: "Relacionada con el poder curativo del entorno natural."
            },
            {
                question: "¿Cuál es una ventaja de las plantas medicinales frente a los productos químicos?",
                options: ["Son más baratas", "Sus principios activos se hallan equilibrados", "Tienen un sabor más agradable", "Crecen en cualquier lugar"],
                answer: "Sus principios activos se hallan equilibrados",
                hint: "Piensa en cómo la naturaleza crea un balance."
            },
            {
                question: "¿Qué estrategia de Atención Primaria en Alma Ata avala el uso de plantas medicinales en Perú?",
                options: ["'Modernización de la medicina'", "'Rescate de la Medicina Popular Tradicional'", "'Globalización de la salud'", "'Innovación farmacéutica'"],
                answer: "'Rescate de la Medicina Popular Tradicional'",
                hint: "Se refiere a la revalorización de prácticas ancestrales."
            }
        ],
        'depurativas': [
            {
                question: "¿Qué tipo de plantas ayudan al hígado, riñones e intestino a eliminar toxinas?",
                options: ["Curativas", "Sintomáticas", "Depurativas", "Preventivas"],
                answer: "Depurativas",
                hint: "Su nombre lo indica, ayudan a 'limpiar' el cuerpo."
            },
            {
                question: "El Agave americana es conocido por ser depurativo de la sangre y...",
                options: ["Estimulante", "Analgésico", "Diurético", "Sedante"],
                answer: "Diurético",
                hint: "Ayuda a la eliminación de líquidos."
            },
            {
                question: "¿Qué componente del Agave estimula el sistema inmune y ayuda a la absorción de calcio?",
                options: ["Fructosa", "Inulina", "Zingibereno", "Taraxacina"],
                answer: "Inulina",
                hint: "Es un tipo de fibra dietética."
            },
            {
                question: "¿Cuál de estas plantas está contraindicada en el embarazo debido a sus alcaloides?",
                options: ["Diente de León", "Grama", "Agave", "Cola de Caballo"],
                answer: "Cola de Caballo",
                hint: "Contiene compuestos que pueden tener efectos no deseados durante la gestación."
            },
            {
                question: "¿Qué propiedad principal tiene el Diente de León además de ser diurético?",
                options: ["Antianémico", "Hepatoprotector", "Laxante", "Antiséptico"],
                answer: "Laxante",
                hint: "Ayuda al tránsito intestinal."
            },
            {
                question: "¿Para qué se utiliza la Grama además de ser depurativa y diurética?",
                options: ["Problemas de piel", "Cálculos renales", "Dolores de cabeza", "Insomnio"],
                answer: "Cálculos renales",
                hint: "Es beneficiosa para el sistema urinario."
            }
        ],
        'curativas': [
            {
                question: "¿Qué planta curativa reduce el contenido de glucosa en la sangre?",
                options: ["Cúrcuma", "Menta piperita", "Arándano (hojas)", "Saúco"],
                answer: "Arándano (hojas)",
                hint: "Es una baya conocida por sus beneficios para la salud."
            },
            {
                question: "¿Cuál de estas plantas es un potente antiinflamatorio y ayuda en problemas hepáticos?",
                options: ["Milenrama", "Olivo", "Cúrcuma", "Menta piperita"],
                answer: "Cúrcuma",
                hint: "Es una especia de color amarillo intenso."
            },
            {
                question: "La Menta piperita es conocida por sus propiedades...",
                options: ["Diuréticas", "Digestivas", "Antivirales", "Analgésicas"],
                answer: "Digestivas",
                hint: "Ayuda con la hinchazón del vientre."
            },
            {
                question: "¿Qué planta es especialmente indicada para la hipertensión y taquicardias, y aumenta el colesterol bueno?",
                options: ["Saúco", "Milenrama", "Olivo (hojas)", "Arándano"],
                answer: "Olivo (hojas)",
                hint: "Se asocia con la dieta mediterránea."
            },
            {
                question: "¿Qué planta alivia la tos, problemas gripales y fiebre?",
                options: ["Cúrcuma", "Milenrama", "Saúco (flor)", "Menta piperita"],
                answer: "Saúco (flor)",
                hint: "Es común en remedios para resfriados."
            }
        ],
        'sintomaticas': [
            {
                question: "¿Qué tipo de plantas disminuyen el estado de ansiedad y actúan como descongestionantes?",
                options: ["Curativas", "Preventivas", "Sintomáticas", "Depurativas"],
                answer: "Sintomáticas",
                hint: "Ayudan a aliviar los síntomas."
            },
            {
                question: "¿Cuál de estas plantas es conocida por sus propiedades sedantes y ansiolíticas?",
                options: ["Eucalipto", "Valeriana", "Molle", "Pimpinela"],
                answer: "Valeriana",
                hint: "Se usa comúnmente para el insomnio y la ansiedad."
            },
            {
                question: "El Eucalipto es utilizado principalmente por sus propiedades:",
                options: ["Digestivas", "Expectorantes y descongestionantes", "Antivirales", "Analgésicas"],
                answer: "Expectorantes y descongestionantes",
                hint: "Piensa en su uso en vapores para problemas respiratorios."
            }
        ],
        'preventivas': [
            {
                question: "¿Qué tipo de plantas incrementan las defensas del organismo y estimulan el sistema inmunológico?",
                options: ["Sintomáticas", "Curativas", "Depurativas", "Preventivas"],
                answer: "Preventivas",
                hint: "Su objetivo es evitar enfermedades."
            },
            {
                question: "La Uña de Gato (Uncaria tomentosa) es reconocida por sus propiedades:",
                options: ["Digestivas", "Inmunomoduladoras y antiinflamatorias", "Analgésicas", "Sedantes"],
                answer: "Inmunomoduladoras y antiinflamatorias",
                hint: "Ayuda a fortalecer el sistema de defensa del cuerpo."
            },
            {
                question: "¿Qué planta, conocida como el 'árbol de la vida', es valorada por sus propiedades antimicrobianas?",
                options: ["Comfrey", "Guayacán", "Uña de Gato", "Moringa"],
                answer: "Guayacán",
                hint: "También se le conoce por su madera dura."
            }
        ],
        'obstetricia-primer': [
            {
                question: "¿Qué planta es comúnmente utilizada en el primer trimestre para aliviar las náuseas matutinas?",
                options: ["Quinua", "Kiwicha", "Jengibre", "Avena"],
                answer: "Jengibre",
                hint: "Es una raíz con un sabor picante."
            },
            {
                question: "¿Cuál es la dosis máxima recomendada de jengibre para mujeres embarazadas?",
                options: ["1 gramo", "1.5 gramos", "2 gramos", "4 gramos"],
                answer: "1.5 gramos",
                hint: "Es importante no exceder una cantidad específica."
            },
            {
                question: "¿Qué pseudocereal es una gran fuente de fibra y ayuda al tránsito intestinal en el embarazo?",
                options: ["Kiwicha", "Jengibre", "Quinua", "Arándano"],
                answer: "Quinua",
                hint: "Es un grano andino muy nutritivo."
            },
            {
                question: "¿Qué precaución se debe tener al consumir quinua debido a sus saponinas?",
                options: ["Consumirla con lácteos", "Lavarla antes de cocinarla", "No mezclarla con frutas", "Consumirla solo en ayunas"],
                answer: "Lavarla antes de cocinarla",
                hint: "Ayuda a eliminar el sabor amargo y posibles toxinas."
            },
            {
                question: "¿Qué aminoácido esencial se encuentra en alta proporción en la Kiwicha, haciéndola una proteína de alta calidad?",
                options: ["Leucina", "Lisina", "Metionina", "Triptófano"],
                answer: "Lisina",
                hint: "Es un aminoácido que suele ser limitante en otras proteínas vegetales."
            },
            {
                question: "¿Qué beneficio principal aporta la Kiwicha a la mujer embarazada?",
                options: ["Reduce el colesterol", "Ayuda a aumentar las reservas de calcio", "Previene la diabetes", "Alivia dolores de cabeza"],
                answer: "Ayuda a aumentar las reservas de calcio",
                hint: "Es crucial para el desarrollo óseo del feto."
            }
        ],
        'obstetricia-segundo': [
            {
                question: "¿Qué cereal es una fuente rica de ácido fólico, esencial en el embarazo?",
                options: ["Trigo", "Arroz", "Avena", "Maíz"],
                answer: "Avena",
                hint: "Es un desayuno común y saludable."
            },
            {
                question: "¿Cuál es la necesidad diaria de ácido fólico en el embarazo, según el documento?",
                options: ["200 µg", "300 µg", "400 µg", "500 µg"],
                answer: "400 µg",
                hint: "Es el doble de la necesidad diaria normal."
            },
            {
                question: "¿Qué legumbre es rica en proteínas, almidón y lípidos, y ayuda a prevenir la anemia en el embarazo?",
                options: ["Lentejas", "Frijoles", "Garbanzo", "Guisantes"],
                answer: "Garbanzo",
                hint: "Es un ingrediente principal en el hummus."
            },
            {
                question: "¿Además de prevenir la anemia, qué otro beneficio importante aportan los garbanzos en el embarazo?",
                options: ["Mejoran la visión", "Favorecen el desarrollo del feto", "Reducen las alergias", "Regulan el sueño"],
                answer: "Favorecen el desarrollo del feto",
                hint: "Sus nutrientes son vitales para el crecimiento del bebé."
            }
        ],
        'obstetricia-tercer': [
            {
                question: "¿Qué semillas aportan Omega 3 y son ricas en hierro y calcio?",
                options: ["Semillas de Lino", "Semillas de Girasol", "Semillas de Chía", "Semillas de Calabaza"],
                answer: "Semillas de Chía",
                hint: "Son pequeñas y se hinchan en líquidos."
            },
            {
                question: "¿Cuál es la dosis diaria recomendada de semillas de chía?",
                options: ["Una cucharada", "Dos cucharadas", "Tres cucharadas", "Cuatro cucharadas"],
                answer: "Dos cucharadas",
                hint: "Es una cantidad moderada."
            },
            {
                question: "¿Qué fruta es antioxidante, diurética y ayuda a disminuir los niveles de azúcar en la sangre?",
                options: ["Fresa", "Arándano", "Frambuesa", "Mora"],
                answer: "Arándano",
                hint: "Son pequeñas bayas de color azul oscuro."
            },
            {
                question: "¿Qué beneficio principal aportan las almendras a las mujeres embarazadas?",
                options: ["Reducen las náuseas", "Aportan una gran ingesta de calcio", "Disminuyen la presión arterial", "Mejoran la digestión"],
                answer: "Aportan una gran ingesta de calcio",
                hint: "Es crucial para los huesos y el desarrollo fetal."
            },
            {
                question: "¿Cuál es la dosis diaria máxima recomendada de almendras para una mujer embarazada?",
                options: ["10 gramos", "25 gramos", "50 gramos", "100 gramos"],
                answer: "25 gramos",
                hint: "Es una cantidad pequeña, equivalente a un puñado."
            },
            {
                question: "¿Qué tipo de ácidos grasos son los principales principios activos de la chía?",
                options: ["Saturados", "Monoinsaturados", "Poliinsaturados del tipo Omega 3", "Trans"],
                answer: "Poliinsaturados del tipo Omega 3",
                hint: "Son grasas 'buenas' esenciales para la salud."
            }
        ],
        'alergias': [
            {
                question: "¿Qué planta se usa para preparar cremas y aceites que alivian problemas de piel por alergias?",
                options: ["Manzanilla", "Aloe Vera", "Menta", "Eucalipto"],
                answer: "Aloe Vera",
                hint: "Es una planta con gel transparente en sus hojas."
            },
            {
                question: "¿Qué planta, ideal en infusiones, alivia problemas de rinitis y dolores estomacales por alergias, pero está contraindicada en embarazadas?",
                options: ["Anís", "Verbena", "Manzanilla", "Acelga"],
                answer: "Manzanilla",
                hint: "Es una flor pequeña y blanca, muy usada en tés."
            }
        ],
        'dolores-cabeza': [
            {
                question: "¿Qué infusión puede aliviar rápidamente los dolores de cabeza, pero está contraindicada en embarazadas por su efecto oxitócico?",
                options: ["Té de menta", "Infusión de canela", "Té de jengibre", "Infusión de manzanilla"],
                answer: "Infusión de canela",
                hint: "Es una especia aromática."
            },
            {
                question: "¿Qué planta posee propiedades sedantes que sirven como un ligero analgésico para las jaquecas?",
                options: ["Acelga", "Verbena", "Canela", "Menta"],
                answer: "Verbena",
                hint: "Es una flor silvestre."
            },
            {
                question: "¿Qué planta común en la dieta tiene propiedades analgésicas para aliviar el dolor de cabeza?",
                options: ["Espinaca", "Lechuga", "Acelga", "Coliflor"],
                answer: "Acelga",
                hint: "Es una verdura de hoja verde."
            }
        ],
        'menstruales': [
            {
                question: "¿Qué planta es muy rica en anetol y ayuda a aliviar los cólicos menstruales y regular los ciclos?",
                options: ["Orégano", "Anís", "Menta", "Manzanilla"],
                answer: "Anís",
                hint: "Es una semilla pequeña y aromática."
            },
            {
                question: "¿Qué precaución se debe tener con el anís estrellado en bebés y madres lactantes?",
                options: ["Puede causar alergias", "Es neurotóxico", "Causa somnolencia", "Interfiere con la digestión"],
                answer: "Es neurotóxico",
                hint: "Es una contraindicación muy específica para este grupo."
            },
            {
                question: "¿Qué fenoles principales contiene el Orégano, que le confieren propiedades antioxidantes y antimicrobianas?",
                options: ["Flavonoides y taninos", "Carvacrol y timol", "Inulina y fructosa", "Gingerol y shogaol"],
                answer: "Carvacrol y timol",
                hint: "Son compuestos aromáticos característicos de esta hierba."
            }
        ],
        'cancer': [
            {
                question: "¿Qué planta de origen oriental se ha estudiado por sus efectos antiinflamatorios y antitumorales, especialmente en cáncer de mama, estómago y pulmón?",
                options: ["Camelia", "Moringa", "Cúrcuma", "Jengibre"],
                answer: "Cúrcuma",
                hint: "Es una especia amarilla muy usada en la cocina india."
            },
            {
                question: "¿Qué planta, de la cual se obtiene el té verde, es rica en antioxidantes y ayuda a retardar el envejecimiento?",
                options: ["Moringa", "Cúrcuma", "Camelia", "Ginseng"],
                answer: "Camelia",
                hint: "Es la planta base de una bebida muy popular."
            },
            {
                question: "¿Qué planta, también llamada 'árbol de la vida', podría ayudar a combatir el cáncer de estómago?",
                options: ["Cúrcuma", "Camelia", "Moringa", "Aloe Vera"],
                answer: "Moringa",
                hint: "Ha ganado mucha popularidad recientemente por sus múltiples beneficios."
            }
        ]
    };

    // Function to load content based on topic
    const loadContent = (topicId) => {
        const topic = topics[topicId];
        if (topic) {
            mainHeader.textContent = topic.title; // Update main header
            contentDisplay.innerHTML = topic.content; // Load content into display area

            // Add fade-in animation
            contentDisplay.style.opacity = 0;
            setTimeout(() => {
                contentDisplay.style.opacity = 1;
            }, 50); // Small delay to trigger transition

            // Activate toggle buttons
            document.querySelectorAll('.toggle-button').forEach(button => {
                button.addEventListener('click', () => {
                    const targetId = button.dataset.target;
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.classList.toggle('show');
                        const icon = button.querySelector('i');
                        if (targetElement.classList.contains('show')) {
                            icon.classList.remove('fa-chevron-down');
                            icon.classList.add('fa-chevron-up');
                        } else {
                            icon.classList.remove('fa-chevron-up');
                            icon.classList.add('fa-chevron-down');
                        }
                    }
                });
            });

            // Load quiz for the current topic if available
            const quizContainer = document.getElementById(`quiz-${topicId}`);
            if (quizContainer) {
                loadQuiz(topicId, quizContainer);
            }
        }
    };

    // Function to load a specific quiz
    const loadQuiz = (topicId, container) => {
        const quizQuestions = quizzes[topicId];
        if (!quizQuestions || quizQuestions.length === 0) {
            container.innerHTML = '<p>No hay preguntas disponibles para este tema.</p>';
            return;
        }

        let currentQuestionIndex = 0;

        // Function to display the current question
        const displayQuestion = () => {
            container.innerHTML = ''; // Clear previous question
            const qData = quizQuestions[currentQuestionIndex];

            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');
            questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${qData.question}</p>`;

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            qData.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(button, option, qData.answer, feedbackMessage));
                optionsContainer.appendChild(button);
            });

            questionDiv.appendChild(optionsContainer);

            const feedbackMessage = document.createElement('div');
            feedbackMessage.classList.add('feedback-message');
            questionDiv.appendChild(feedbackMessage);

            const hintButton = document.createElement('button');
            hintButton.classList.add('hint-button');
            hintButton.textContent = 'Pista';
            hintButton.addEventListener('click', () => {
                hintText.textContent = qData.hint;
                hintText.style.display = 'block';
                hintButton.disabled = true; // Disable hint after showing
            });
            questionDiv.appendChild(hintButton);

            const hintText = document.createElement('div');
            hintText.classList.add('hint-text');
            questionDiv.appendChild(hintText);

            container.appendChild(questionDiv);

            // Disable all options until an answer is selected
            optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = false);
        };

        // Function to check the selected answer
        const checkAnswer = (selectedButton, selectedOption, correctAnswer, feedbackElement) => {
            const options = selectedButton.parentNode.querySelectorAll('button');
            options.forEach(btn => btn.disabled = true); // Disable all options after selection

            if (selectedOption === correctAnswer) {
                selectedButton.classList.add('correct');
                feedbackElement.innerHTML = '¡Correcto! ✅';
                feedbackElement.style.color = '#155724';
                // Allow moving to the next question after a short delay
                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quizQuestions.length) {
                        displayQuestion();
                    } else {
                        container.innerHTML = '<p class="feedback-message" style="color: #155724; font-size: 1.2em;">¡Felicidades! Has completado el quiz. 🎉</p>';
                    }
                }, 1500);
            } else {
                selectedButton.classList.add('incorrect');
                feedbackElement.innerHTML = `Incorrecto. La respuesta correcta es: <strong>${correctAnswer}</strong>`;
                feedbackElement.style.color = '#721c24';

                // Highlight the correct answer
                options.forEach(btn => {
                    if (btn.textContent === correctAnswer) {
                        btn.classList.add('correct');
                    }
                });

                // Move to the next question after a longer delay to allow reading the correct answer
                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quizQuestions.length) {
                        displayQuestion();
                    } else {
                        container.innerHTML = '<p class="feedback-message">Has completado el quiz. ¡Sigue aprendiendo! 🤓</p>';
                    }
                }, 3000);
            }
        };

        displayQuestion(); // Display the first question
    };

    // Event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const topicId = link.dataset.topic;

            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');

            loadContent(topicId); // Load content for the selected topic
        });
    });

    // Load welcome content by default when the page loads
    loadContent('welcome');
    document.querySelector('.navigation a[data-topic="welcome"]').classList.add('active');

    // --- CHATBOT IMPLEMENTATION ---

    // Lee la clave desde config.js para mayor seguridad.
    const API_KEY = typeof GEMINI_API_KEY !== 'undefined' ? GEMINI_API_KEY : '';
    const chatContainer = document.getElementById('chat-container');
    const openChatBtn = document.getElementById('open-chat-btn');
    const closeChatBtn = document.getElementById('close-chat');
    const clearChatBtn = document.getElementById('clear-chat');
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');

    let chatHistory = []; // To store conversation context
    let isAwaitingResponse = false; // Flag to prevent multiple submissions

    if (!API_KEY) {
        console.error("API Key no encontrada. Asegúrate de crear un archivo config.js y añadir tu GEMINI_API_KEY.");
        // Ocultar el botón del chat si no hay clave para evitar errores.
        openChatBtn.style.display = 'none';
    }

    // 1. Crear la base de conocimiento a partir de tu objeto 'topics'
    let knowledgeBase = "Información de Fitoterapia:\n\n";
    for (const key in topics) {
        const topic = topics[key];
        knowledgeBase += `--- TEMA: ${topic.title} ---\n`;
        // Limpiar el HTML para obtener solo el texto
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = topic.content;
        knowledgeBase += tempDiv.textContent || tempDiv.innerText || "";
        knowledgeBase += "\n\n";
    }

    // 2. Funciones para controlar la UI del chat
    openChatBtn.addEventListener('click', () => {
        chatContainer.classList.add('open');
        // Solo añade el mensaje de bienvenida si el chat está vacío.
        if (chatBox.children.length === 0) {
            addMessageToChat('¡Hola! Soy tu asistente de fitoterapia. ¿En qué puedo ayudarte?', 'ai');
        }
        chatInput.focus(); // Auto-focus on input
    });

    closeChatBtn.addEventListener('click', () => {
        chatContainer.classList.remove('open');
    });

    clearChatBtn.addEventListener('click', () => {
        chatBox.innerHTML = ''; // Limpiar el chat
        chatHistory = []; // Reset chat history
        addMessageToChat('¡Hola! Soy tu asistente de fitoterapia. ¿En qué puedo ayudarte?', 'ai');
        chatInput.focus();
    });

    sendChatBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    function handleSendMessage() {
        if (isAwaitingResponse) return; // Do nothing if we are waiting for a response

        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessageToChat(userMessage, 'user');
            chatInput.value = '';

            isAwaitingResponse = true;
            chatInput.disabled = true;
            sendChatBtn.disabled = true;

            getAIResponse(userMessage);
        }
    }

    function addMessageToChat(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);

        // Basic Markdown-like formatting
        let formattedMessage = message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>')         // Italic
            .replace(/\n/g, '<br>')                       // Newlines
            .replace(/^•\s/gm, '<br>• ');                 // Bullet points

        messageElement.innerHTML = formattedMessage;

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }

    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.classList.add('chat-message', 'ai-message', 'typing');
        typingElement.innerHTML = `
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        `;
        chatBox.appendChild(typingElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingElement = chatBox.querySelector('.typing');
        if (typingElement) {
            chatBox.removeChild(typingElement);
        }
    }

    // 3. Función para llamar a la API de Gemini
    async function getAIResponse(userQuestion) {
        showTypingIndicator();

        // Format chat history for the prompt
        const historyForPrompt = chatHistory.map(turn => `Usuario: ${turn.user}\nAsistente: ${turn.ai}`).join('\n\n');

        const prompt = `
            **Instrucción:** Eres un asistente de fitoterapia amigable, sabio y empático, como un herbolario de confianza. Tu única fuente de conocimiento es el siguiente texto.
            Responde a la pregunta del usuario de forma clara y concisa, basándote EXCLUSIVAMENTE en la información proporcionada.
            Utiliza el "Historial de Conversación" para entender el contexto de la pregunta actual. Si el usuario hace una pregunta de seguimiento, usa el historial para entender a qué se refiere.
            Si la pregunta es sobre cómo empezar o por dónde seguir, guía al usuario hacia los temas relevantes que existen en la base de conocimiento (por ejemplo, "Claro, para los temas del embarazo, podrías empezar por la sección del primer trimestre...").
            Al final de tu respuesta, si es apropiado, sugiere amablemente uno o dos temas relacionados de la "Base de Conocimiento" que el usuario podría querer explorar a continuación. Por ejemplo: "Quizás también te interese leer sobre las Plantas Curativas."
            Si la respuesta no se encuentra en el texto, di amablemente: "Lo siento, no tengo información sobre ese tema en mi base de datos."
            Siempre responde de manera cálida y servicial.
            No inventes información.

            **Historial de Conversación:**
            ${historyForPrompt}

            **Base de Conocimiento:**
            ${knowledgeBase}

            **Pregunta del Usuario:**
            "${userQuestion}"

            **Respuesta:**
        `;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            // Si la respuesta no es exitosa (ej. error 400, 403, 500), procesamos el error.
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error detallado de la API:', errorData);
                const errorMessage = errorData.error?.message || `Error HTTP: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            
            // Verificación de seguridad por si la API devuelve una respuesta inesperada
            if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content?.parts) {
                console.error('Respuesta inesperada de la API:', data);
                throw new Error("La API no devolvió una respuesta con el formato esperado.");
            }

            const aiResponse = data.candidates[0].content.parts[0].text;

            // Update chat history
            chatHistory.push({ user: userQuestion, ai: aiResponse });
            // Keep the history to a reasonable size (e.g., last 3 turns)
            if (chatHistory.length > 3) {
                chatHistory.shift();
            }

            removeTypingIndicator();
            addMessageToChat(aiResponse, 'ai');
        } catch (error) {
            removeTypingIndicator();
            addMessageToChat('Hubo un error al procesar tu pregunta. Por favor, intenta de nuevo más tarde.', 'ai');
            console.error('Error al contactar la IA:', error.message);
        } finally {
            // This block will run regardless of success or error, re-enabling the input.
            isAwaitingResponse = false;
            chatInput.disabled = false;
            sendChatBtn.disabled = false;
            chatInput.focus(); // Put the cursor back in the input field
        }
    }
});