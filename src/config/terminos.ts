import type { Lang } from "@/i18n/dictionary";
import { EMPRESA } from "@/config/legal";
import { SITE } from "@/config/site";

/**
 * TERMINOS Y CONDICIONES del servicio.
 *
 * Texto PROPIO: describe el proceso real con el que trabaja AGS (cotizacion
 * cerrada, anticipo, elaboracion, entrega y saldo) y recoge las condiciones
 * del contrato de locacion de servicios que se firma en los encargos de tesis.
 * No es un modelo generico: cada clausula corresponde a como opera la casa.
 *
 * Si cambia una condicion real del servicio, se cambia aqui y se actualiza
 * `ACTUALIZADO`. Vive en config (no en el dictionary) porque es un documento
 * largo y con estructura propia.
 */

export const ACTUALIZADO = "2026-09-18";

export interface SeccionLegal {
  titulo: string;
  parrafos?: string[];
  items?: string[];
}

export interface TextosLegales {
  metaTitulo: string;
  metaDescripcion: string;
  eyebrow: string;
  titulo: string;
  actualizadoLabel: string;
  intro: string;
  identificacionTitulo: string;
  identificacion: { etiqueta: string; valor: string }[];
  secciones: SeccionLegal[];
  volver: string;
}

const CANALES_ES = [
  `Correo institucional: ${SITE.correo}`,
  `Correo comercial: ${SITE.correoVentas}`,
  "Peru, EducaProject: WhatsApp +51 965 148 374",
  "Chile, Tareapp: WhatsApp +56 9 5307 8288",
  "Argentina, Trabajos Helper: WhatsApp +54 9 11 3439-9417",
];

const CANALES_EN = [
  `Institutional email: ${SITE.correo}`,
  `Sales email: ${SITE.correoVentas}`,
  "Peru, EducaProject: WhatsApp +51 965 148 374",
  "Chile, Tareapp: WhatsApp +56 9 5307 8288",
  "Argentina, Trabajos Helper: WhatsApp +54 9 11 3439-9417",
];

export const TERMINOS: Record<Lang, TextosLegales> = {
  es: {
    metaTitulo: "Terminos y Condiciones",
    metaDescripcion:
      "Terminos y Condiciones del servicio de asesoria academica de Academic Global Solution (EDUCAPROJECT S.A.C.S, RUC 20611803436): contratacion, precios, pagos, entregas, correcciones, garantia, cancelaciones y devoluciones.",
    eyebrow: "Documento legal",
    titulo: "Términos y Condiciones del servicio",
    actualizadoLabel: "Última actualización",
    intro:
      "Este documento explica cómo se contrata, cómo se paga y bajo qué condiciones se presta el servicio de asesoría académica de Academic Global Solution. Al solicitar una cotización o al efectuar un pago, la persona usuaria acepta estos términos. Recomendamos leerlos antes de iniciar.",
    identificacionTitulo: "Identificación del prestador",
    identificacion: [
      { etiqueta: "Razón social", valor: EMPRESA.razonSocial },
      { etiqueta: EMPRESA.tipoDoc, valor: EMPRESA.numeroDoc },
      { etiqueta: "Domicilio fiscal", valor: EMPRESA.domicilio },
      { etiqueta: "Representante legal", valor: EMPRESA.representante },
      { etiqueta: "Correo", valor: SITE.correo },
      { etiqueta: "Sitio web", valor: SITE.dominio },
    ],
    secciones: [
      {
        titulo: "1. Quiénes prestan el servicio",
        parrafos: [
          `El servicio lo presta ${EMPRESA.razonSocial}, empresa peruana identificada con ${EMPRESA.tipoDoc} ${EMPRESA.numeroDoc} y domicilio en ${EMPRESA.domicilio}, representada por ${EMPRESA.representante}.`,
          "Academic Global Solution (AGS) es el nombre con el que esa empresa agrupa su operación regional. En cada país atiende con una marca propia: EducaProject en Perú, Tareapp en Chile y Trabajos Helper en Argentina. Cualquiera sea la marca por la que se inicie el contacto, la relación contractual y la responsabilidad frente a la persona usuaria son de la empresa indicada en este documento.",
        ],
      },
      {
        titulo: "2. Qué servicios ofrecemos",
        parrafos: [
          "Prestamos servicios de asesoría y acompañamiento académico. Cada encargo se elabora a medida para una persona, un curso y una institución determinados: no vendemos documentos de catálogo, plantillas prearmadas ni material descargable.",
        ],
        items: [
          "Asesoría de tesis e investigación: planteamiento, metodología, redacción académica, análisis y preparación de la sustentación.",
          "Trabajos y redacción académica: informes, ensayos, monografías y casos de estudio con el formato que exige la institución.",
          "Presentaciones y material de apoyo para defensas y exposiciones.",
          "Datos y reportes: Excel avanzado, Power BI, bases de datos y visualizaciones.",
          "Corrección de estilo, citado y coherencia.",
          "Acompañamiento personalizado: sesiones uno a uno y seguimiento del avance.",
        ],
      },
      {
        titulo: "3. Cómo se contrata el servicio, paso a paso",
        parrafos: [
          "Nuestro servicio es personalizado, por lo que no tiene un precio de lista ni una entrega inmediata: el alcance se define caso por caso antes de cobrar nada.",
        ],
        items: [
          "Solicitud. La persona escribe por uno de nuestros canales oficiales y envía el esquema, la rúbrica, las indicaciones de su asesor o el avance que ya tenga.",
          "Revisión y cotización. Revisamos el material y respondemos con el alcance, el precio cerrado y la fecha de entrega. El precio se informa antes de empezar y no cambia después, salvo que la propia persona amplíe el alcance.",
          "Aceptación. La persona confirma por escrito el alcance, el precio y la fecha. En los servicios de tesis se firma además un contrato de locación de servicios que incluye el cronograma de entregas y de pagos.",
          "Anticipo. Para iniciar se abona un anticipo; el saldo se cancela contra la entrega. Si el trabajo se desarrolla por avances, se paga según el cronograma acordado.",
          "Elaboración. Un especialista del área desarrolla el encargo siguiendo la rúbrica y las indicaciones recibidas.",
          "Entrega. Se entrega en la fecha pactada por el canal acordado, y se atienden las correcciones según la sección 7.",
          "Cierre. Con el saldo cancelado y la entrega conforme, el encargo queda cerrado.",
        ],
      },
      {
        titulo: "4. Precios, moneda y comprobantes",
        parrafos: [
          "El precio depende del alcance, de la complejidad y del plazo, y siempre se comunica por escrito antes de iniciar. No existen cargos ocultos, ni comisiones adicionales que se agreguen después.",
          "El monto se informa en la moneda del país de la persona usuaria. Cuando el cobro se realiza por una pasarela internacional, la moneda y el importe exacto figuran en el enlace o el código de pago antes de confirmar la operación.",
          "No trabajamos con suscripciones, cobros recurrentes ni renovaciones automáticas: cada pago corresponde a un encargo concreto y previamente aceptado. La empresa emite el comprobante de pago que corresponde según la normativa peruana cuando la persona usuaria lo solicita e indica sus datos de facturación.",
        ],
      },
      {
        titulo: "5. Formas de pago",
        parrafos: [
          "El pago se realiza únicamente por los medios oficiales que informamos por nuestros canales: enlaces o códigos de pago emitidos por la pasarela, transferencia bancaria, billeteras electrónicas locales o tarjeta. Las cuentas bancarias son siempre a nombre de la empresa.",
          "Cuando el pago se procesa con tarjeta, los datos de la tarjeta se ingresan directamente en la pasarela de pago, que es quien los procesa y custodia. AGS no recibe, no ve ni almacena números de tarjeta.",
          "Pedimos enviar el comprobante del pago por el mismo canal de la conversación para validarlo e iniciar el trabajo. Un pago hecho a una cuenta distinta de las informadas oficialmente no genera obligación para la empresa.",
        ],
      },
      {
        titulo: "6. Entregas y plazos",
        parrafos: [
          "La fecha de entrega se acuerda por escrito antes de iniciar y se cuenta desde que se confirma el anticipo y se recibe el material completo. Si el material llega incompleto o con retraso, la fecha se recalcula y se informa.",
          "Las entregas se realizan por correo electrónico o por el canal de mensajería acordado, en formato editable y en el formato final que pida la institución. En los trabajos largos entregamos por capítulos o avances, cada uno con su propia fecha.",
        ],
      },
      {
        titulo: "7. Correcciones y observaciones",
        parrafos: [
          "Las correcciones que provengan de las observaciones del asesor, del jurado o de la rúbrica se realizan sin costo adicional, dentro del alcance acordado y mientras el encargo siga vigente.",
          "Quedan fuera de esa cobertura, y se cotizan aparte como una ampliación con su propio precio y plazo, los cambios de tema, de institución, de metodología o de alcance solicitados después de aceptada la cotización, y los pedidos que no provengan de las observaciones formales de la institución.",
        ],
      },
      {
        titulo: "8. Obligaciones de la persona usuaria",
        items: [
          "Entregar información completa y veraz: rúbrica, indicaciones del asesor, formato de la institución, fechas y material previo.",
          "Comunicarse por los canales oficiales indicados en la sección 12 y dentro del horario de atención informado.",
          "Trasladar únicamente las observaciones formuladas por su asesor o por el jurado revisor.",
          "Efectuar los pagos acordados en las fechas pactadas y por los medios oficiales.",
          "Usar el material recibido conforme a las normas de su institución educativa.",
        ],
      },
      {
        titulo: "9. Garantía del servicio y sus límites",
        parrafos: [
          "Respondemos por todo lo que depende de nuestro trabajo: la calidad del desarrollo, el cumplimiento de la rúbrica y del formato acordado, la originalidad del contenido y el levantamiento de las observaciones de la institución.",
          "No podemos garantizar lo que no depende de nosotros: la calificación final, las decisiones de asesores, docentes, jurados o comités, el desempeño de la persona usuaria en su exposición o sustentación, ni los resultados cuando la información entregada por ella es incompleta, incorrecta o fue modificada por terceros ajenos al servicio.",
        ],
      },
      {
        titulo: "10. Cancelación, resolución y devoluciones",
        items: [
          "Por acuerdo de ambas partes el servicio puede terminarse en cualquier momento, liquidando lo efectivamente avanzado hasta esa fecha.",
          "Si la empresa incumple sus obligaciones sin justificación, devuelve a la persona usuaria el total de los pagos abonados.",
          "Si la persona usuaria decide terminar el servicio, lo solicita por escrito al correo institucional indicando el motivo. La gerencia evalúa la solicitud y responde con la liquidación y la devolución que corresponda.",
          "Devolución por resultado académico insatisfactorio: si la persona no aprueba el curso o la asignatura asesorada y ello es atribuible a un servicio defectuoso de nuestra parte, se devuelve el monto abonado por ese servicio. La solicitud se presenta dentro de los treinta (30) días calendario siguientes a la publicación oficial del resultado, acompañada de la constancia emitida por la institución educativa, y la devolución se efectúa en un plazo no mayor a treinta (30) días hábiles desde su presentación.",
          "Las devoluciones se realizan por el mismo medio por el que se recibió el pago siempre que sea posible y, en su defecto, por transferencia bancaria a nombre de quien pagó.",
        ],
      },
      {
        titulo: "11. Propiedad intelectual y confidencialidad",
        parrafos: [
          "El material desarrollado para un encargo es de la persona que lo contrató: los derechos patrimoniales sobre el producto académico se ceden a su favor una vez cancelado el servicio, y no lo reutilizamos ni lo comercializamos con terceros.",
          "Mantenemos en reserva los datos y los documentos de la persona usuaria, incluso después de terminado el servicio, salvo que una autoridad competente lo exija por ley.",
        ],
      },
      {
        titulo: "12. Canales oficiales y prevención de fraude",
        parrafos: [
          "Solo atendemos y solo cobramos por estos canales. Cualquier comunicación, cuenta o enlace de pago que no figure aquí no es nuestro:",
        ],
        items: CANALES_ES,
      },
      {
        titulo: "13. Datos personales",
        parrafos: [
          "Tratamos los datos personales conforme a la Ley N.º 29733, Ley de Protección de Datos Personales del Perú, y su reglamento. Pedimos únicamente los datos necesarios para cotizar, prestar el servicio, emitir el comprobante y mantener el contacto: nombre, correo electrónico, teléfono y la información académica que la persona decide compartir.",
          "El formulario de contacto de este sitio solicita nombre, correo electrónico, un teléfono opcional y el mensaje; esos datos se usan exclusivamente para responder la consulta. No vendemos ni cedemos datos personales a terceros con fines comerciales.",
          `Para acceder, rectificar, actualizar o suprimir sus datos, o para oponerse a su tratamiento, basta escribir a ${SITE.correo}. Atendemos la solicitud en los plazos que fija la ley.`,
        ],
      },
      {
        titulo: "14. Ley aplicable y solución de controversias",
        parrafos: [
          "Estos términos se rigen por las leyes de la República del Perú. Ante cualquier desacuerdo, las partes buscarán primero una solución directa y, de no lograrla, acudirán a conciliación extrajudicial. Si el desacuerdo persiste, se someterán al fuero arbitral de la Cámara de Comercio de Lima.",
        ],
      },
      {
        titulo: "15. Vigencia y cambios",
        parrafos: [
          `Estos términos rigen desde la fecha de su última actualización, indicada al inicio de esta página. Podemos modificarlos para reflejar cambios reales del servicio; la versión aplicable a un encargo es la vigente al momento de aceptar su cotización, y los cambios posteriores no afectan servicios ya contratados.`,
        ],
      },
    ],
    volver: "Volver al inicio",
  },

  en: {
    metaTitulo: "Terms and Conditions",
    metaDescripcion:
      "Terms and Conditions for the academic advisory services of Academic Global Solution (EDUCAPROJECT S.A.C.S, Peruvian tax ID 20611803436): how to hire, prices, payments, deliveries, corrections, warranty, cancellations and refunds.",
    eyebrow: "Legal document",
    titulo: "Terms and Conditions of service",
    actualizadoLabel: "Last updated",
    intro:
      "This document explains how our academic advisory service is hired, how it is paid for and under which conditions it is delivered. By requesting a quote or making a payment, the user accepts these terms. We recommend reading them before starting.",
    identificacionTitulo: "Service provider",
    identificacion: [
      { etiqueta: "Legal name", valor: EMPRESA.razonSocial },
      { etiqueta: "Tax ID (RUC, Peru)", valor: EMPRESA.numeroDoc },
      { etiqueta: "Registered address", valor: EMPRESA.domicilio },
      { etiqueta: "Legal representative", valor: EMPRESA.representante },
      { etiqueta: "Email", valor: SITE.correo },
      { etiqueta: "Website", valor: SITE.dominio },
    ],
    secciones: [
      {
        titulo: "1. Who provides the service",
        parrafos: [
          `The service is provided by ${EMPRESA.razonSocial}, a Peruvian company with tax ID (RUC) ${EMPRESA.numeroDoc}, registered at ${EMPRESA.domicilio}, represented by ${EMPRESA.representante}.`,
          "Academic Global Solution (AGS) is the name under which that company groups its regional operation. Each country is served by its own brand: EducaProject in Peru, Tareapp in Chile and Trabajos Helper in Argentina. Whichever brand the user contacts, the contractual relationship and the liability towards the user belong to the company identified in this document.",
        ],
      },
      {
        titulo: "2. Services we offer",
        parrafos: [
          "We provide academic advisory and support services. Every assignment is produced to order for a specific person, course and institution: we do not sell catalogue documents, ready-made templates or downloadable material.",
        ],
        items: [
          "Thesis and research advisory: problem statement, methodology, academic writing, analysis and defense preparation.",
          "Academic writing: reports, essays, monographs and case studies in the format required by the institution.",
          "Presentations and support material for defenses and oral examinations.",
          "Data and reports: advanced Excel, Power BI, databases and visualizations.",
          "Editing of style, citations and coherence.",
          "Personalized support: one-on-one sessions and progress follow-up.",
        ],
      },
      {
        titulo: "3. How the service is hired, step by step",
        parrafos: [
          "Our service is personalized, so it has neither a list price nor an instant delivery: the scope is defined case by case before anything is charged.",
        ],
        items: [
          "Request. The user writes through one of our official channels and sends the outline, the rubric, the advisor's instructions or any work already done.",
          "Review and quote. We review the material and reply with the scope, a closed price and a delivery date. The price is stated before starting and does not change afterwards, unless the user extends the scope.",
          "Acceptance. The user confirms scope, price and date in writing. For thesis services a services agreement is also signed, including the delivery and payment schedule.",
          "Down payment. A down payment starts the work; the balance is paid on delivery. If the work is delivered in stages, payments follow the agreed schedule.",
          "Production. A specialist in the field develops the assignment following the rubric and the instructions received.",
          "Delivery. We deliver on the agreed date through the agreed channel, and handle corrections as described in section 7.",
          "Closing. Once the balance is paid and the delivery is accepted, the assignment is closed.",
        ],
      },
      {
        titulo: "4. Prices, currency and receipts",
        parrafos: [
          "The price depends on scope, complexity and deadline, and is always communicated in writing before starting. There are no hidden charges or additional fees added later.",
          "The amount is quoted in the currency of the user's country. When the payment is processed through an international gateway, the exact currency and amount are shown on the payment link or code before the operation is confirmed.",
          "We do not use subscriptions, recurring charges or automatic renewals: each payment corresponds to a specific, previously accepted assignment. The company issues the payment receipt required by Peruvian regulations when the user requests it and provides their billing details.",
        ],
      },
      {
        titulo: "5. Payment methods",
        parrafos: [
          "Payment is made only through the official methods we communicate: payment links or codes issued by the gateway, bank transfer, local e-wallets or card. Bank accounts are always held in the company's name.",
          "When paying by card, card details are entered directly into the payment gateway, which processes and stores them. AGS never receives, sees or stores card numbers.",
          "We ask users to send the payment receipt through the same conversation channel so we can validate it and start the work. A payment made to an account other than those officially communicated creates no obligation for the company.",
        ],
      },
      {
        titulo: "6. Deliveries and deadlines",
        parrafos: [
          "The delivery date is agreed in writing before starting and counts from the confirmation of the down payment and the receipt of the complete material. If the material arrives incomplete or late, the date is recalculated and communicated.",
          "Deliveries are sent by email or through the agreed messaging channel, in an editable file and in the final format required by the institution. Long assignments are delivered by chapters or stages, each with its own date.",
        ],
      },
      {
        titulo: "7. Corrections and observations",
        parrafos: [
          "Corrections arising from the observations of the advisor, the review panel or the rubric are made at no additional cost, within the agreed scope and while the assignment is still open.",
          "Not covered, and quoted separately as an extension with its own price and deadline: changes of topic, institution, methodology or scope requested after the quote was accepted, and requests that do not come from the institution's formal observations.",
        ],
      },
      {
        titulo: "8. User obligations",
        items: [
          "Provide complete and accurate information: rubric, advisor instructions, institutional format, dates and previous material.",
          "Communicate through the official channels listed in section 12 and within the stated service hours.",
          "Pass on only the observations issued by the advisor or the review panel.",
          "Make the agreed payments on the agreed dates and through the official methods.",
          "Use the material received in accordance with the rules of their educational institution.",
        ],
      },
      {
        titulo: "9. Warranty and its limits",
        parrafos: [
          "We are accountable for everything that depends on our work: the quality of the development, compliance with the rubric and the agreed format, the originality of the content and the handling of the institution's observations.",
          "We cannot guarantee what does not depend on us: the final grade, the decisions of advisors, teachers, panels or committees, the user's own performance during the defense, or the outcome when the information provided is incomplete, incorrect or was modified by third parties outside the service.",
        ],
      },
      {
        titulo: "10. Cancellation, termination and refunds",
        items: [
          "By mutual agreement the service may end at any time, settling the work actually completed up to that date.",
          "If the company fails to meet its obligations without justification, it refunds the user the full amount paid.",
          "If the user decides to end the service, they request it in writing to the institutional email stating the reason. Management reviews the request and replies with the settlement and the refund that applies.",
          "Refund for unsatisfactory academic results: if the user does not pass the course or subject that was advised and this is attributable to a defective service on our part, the amount paid for that service is refunded. The request must be submitted within thirty (30) calendar days of the official publication of the result, together with the certificate issued by the educational institution, and the refund is made within no more than thirty (30) business days from submission.",
          "Refunds are issued through the same method used for the payment whenever possible and, failing that, by bank transfer to the person who paid.",
        ],
      },
      {
        titulo: "11. Intellectual property and confidentiality",
        parrafos: [
          "The material developed for an assignment belongs to the person who hired it: the economic rights over the academic product are transferred to them once the service is paid, and we neither reuse nor resell it to third parties.",
          "We keep the user's data and documents confidential, even after the service has ended, unless a competent authority requires otherwise by law.",
        ],
      },
      {
        titulo: "12. Official channels and fraud prevention",
        parrafos: [
          "We only provide service and only collect payments through these channels. Any message, account or payment link not listed here is not ours:",
        ],
        items: CANALES_EN,
      },
      {
        titulo: "13. Personal data",
        parrafos: [
          "We process personal data in accordance with Peruvian Law No. 29733 on the Protection of Personal Data and its regulations. We only ask for the data needed to quote, deliver the service, issue the receipt and stay in contact: name, email, phone number and the academic information the user chooses to share.",
          "The contact form on this site asks for a name, an email address, an optional phone number and the message; that data is used exclusively to answer the enquiry. We do not sell or transfer personal data to third parties for commercial purposes.",
          `To access, correct, update or delete their data, or to object to its processing, users may write to ${SITE.correo}. We handle each request within the deadlines set by law.`,
        ],
      },
      {
        titulo: "14. Governing law and dispute resolution",
        parrafos: [
          "These terms are governed by the laws of the Republic of Peru. In case of disagreement, the parties will first seek a direct solution and, failing that, out-of-court conciliation. If the disagreement persists, they will submit to arbitration before the Lima Chamber of Commerce.",
        ],
      },
      {
        titulo: "15. Validity and changes",
        parrafos: [
          "These terms apply from the last update date shown at the top of this page. We may amend them to reflect real changes in the service; the version applicable to an assignment is the one in force when its quote was accepted, and later changes do not affect services already hired.",
        ],
      },
    ],
    volver: "Back to home",
  },
};
