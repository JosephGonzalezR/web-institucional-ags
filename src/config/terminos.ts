import type { Lang } from "@/i18n/dictionary";
import { EMPRESA } from "@/config/legal";
import { SITE } from "@/config/site";

/**
 * TERMINOS Y CONDICIONES del servicio.
 *
 * Texto PROPIO y estandar: describe el servicio real (personalizado, con
 * cotizacion cerrada, anticipo y saldo) en un tono normal, sin exponer el
 * detalle interno de la operacion. Mantiene lo que exige una pasarela de pago:
 * quien presta el servicio (razon social + RUC), que se ofrece, como se
 * contrata, como se paga y los canales oficiales.
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
      "Terminos y Condiciones del servicio de asesoria academica de Academic Global Solution (EDUCAPROJECT S.A.C.S, RUC 20611803436): contratacion, precios, pagos, entregas, correcciones y garantia.",
    eyebrow: "Documento legal",
    titulo: "Términos y Condiciones del servicio",
    actualizadoLabel: "Última actualización",
    intro:
      "Este documento explica cómo se contrata, cómo se paga y bajo qué condiciones se presta el servicio de asesoría académica de Academic Global Solution. Al solicitar una cotización o al efectuar un pago, la persona usuaria acepta estos términos.",
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
          "Academic Global Solution (AGS) es el nombre con el que operamos a nivel regional, con una marca propia en cada país: EducaProject en Perú, Tareapp en Chile y Trabajos Helper en Argentina. Cualquiera sea la marca por la que se inicie el contacto, la relación contractual es con la empresa indicada en este documento.",
        ],
      },
      {
        titulo: "2. Qué servicios ofrecemos",
        parrafos: [
          "Prestamos servicios de asesoría y acompañamiento académico. Cada encargo es personalizado y se elabora a medida para una persona, un curso y una institución: no vendemos documentos de catálogo ni material descargable.",
        ],
        items: [
          "Asesoría de tesis e investigación y preparación de la sustentación.",
          "Trabajos y redacción académica: informes, ensayos, monografías y casos, con el formato que exige la institución.",
          "Presentaciones y material de apoyo para exposiciones.",
          "Datos y reportes: Excel avanzado, Power BI y visualizaciones.",
          "Corrección de estilo, citado y coherencia.",
        ],
      },
      {
        titulo: "3. Contratación y cotización",
        parrafos: [
          "Al ser un servicio personalizado, no tiene un precio de lista: el alcance se define caso por caso antes de cobrar. La persona escribe por un canal oficial con sus indicaciones y su material, y respondemos con el alcance, un precio cerrado y una fecha de entrega.",
          "El precio se informa por escrito antes de iniciar y no cambia después, salvo que la propia persona amplíe el alcance. Para iniciar se abona un anticipo y el saldo se cancela contra la entrega; si el trabajo se desarrolla por avances, los pagos siguen el cronograma acordado.",
        ],
      },
      {
        titulo: "4. Precios, moneda y comprobantes",
        parrafos: [
          "El precio depende del alcance, de la complejidad y del plazo, y siempre se comunica por escrito antes de iniciar. No existen cargos ocultos ni comisiones que se agreguen después.",
          "El monto se informa en la moneda del país de la persona usuaria. Cuando el cobro se realiza por una pasarela internacional, la moneda y el importe exacto figuran en el enlace o el código de pago antes de confirmar la operación.",
          "No trabajamos con suscripciones ni cobros recurrentes: cada pago corresponde a un encargo aceptado. Emitimos el comprobante que corresponde según la normativa peruana cuando la persona usuaria lo solicita e indica sus datos de facturación.",
        ],
      },
      {
        titulo: "5. Formas de pago",
        parrafos: [
          "El pago se realiza únicamente por los medios oficiales que informamos por nuestros canales: enlaces o códigos de pago de la pasarela, transferencia bancaria, billeteras electrónicas locales o tarjeta. Las cuentas bancarias son siempre a nombre de la empresa.",
          "Cuando el pago es con tarjeta, los datos se ingresan directamente en la pasarela de pago, que es quien los procesa y custodia. AGS no recibe, no ve ni almacena números de tarjeta.",
        ],
      },
      {
        titulo: "6. Entregas y plazos",
        parrafos: [
          "La fecha de entrega se acuerda por escrito antes de iniciar y se cuenta desde que se confirma el anticipo y se recibe el material completo. Si el material llega incompleto o con retraso, la fecha se recalcula y se informa.",
          "Las entregas se realizan por correo electrónico o por el canal acordado, en formato editable y en el formato final que pida la institución. Los trabajos largos se entregan por capítulos o avances.",
        ],
      },
      {
        titulo: "7. Correcciones y observaciones",
        parrafos: [
          "Las correcciones que provengan de las observaciones del asesor, del jurado o de la rúbrica se realizan sin costo adicional, dentro del alcance acordado y mientras el encargo siga vigente.",
          "Se cotizan aparte, como una ampliación con su propio precio y plazo, los cambios de tema, de institución, de metodología o de alcance solicitados después de aceptada la cotización.",
        ],
      },
      {
        titulo: "8. Obligaciones de la persona usuaria",
        items: [
          "Entregar información completa y veraz: rúbrica, indicaciones del asesor, formato de la institución y fechas.",
          "Comunicarse por los canales oficiales indicados en la sección 12.",
          "Trasladar únicamente las observaciones formuladas por su asesor o por el jurado.",
          "Efectuar los pagos acordados en las fechas pactadas y por los medios oficiales.",
        ],
      },
      {
        titulo: "9. Garantía del servicio y sus límites",
        parrafos: [
          "Respondemos por lo que depende de nuestro trabajo: la calidad del desarrollo, el cumplimiento de la rúbrica y del formato acordado, la originalidad del contenido y el levantamiento de las observaciones de la institución.",
          "No podemos garantizar lo que no depende de nosotros: la calificación final, las decisiones de asesores, docentes o jurados, ni el desempeño de la persona usuaria en su sustentación.",
        ],
      },
      {
        titulo: "10. Cancelación y devoluciones",
        items: [
          "Por acuerdo de ambas partes el servicio puede terminarse en cualquier momento, liquidando lo efectivamente avanzado hasta esa fecha.",
          "Si la persona usuaria decide terminar el servicio, lo solicita por escrito al correo institucional; se evalúa la solicitud y se responde con la liquidación que corresponda.",
          "Si el incumplimiento es atribuible a la empresa, se devuelve el monto que corresponda, por el mismo medio en que se recibió el pago siempre que sea posible.",
        ],
      },
      {
        titulo: "11. Propiedad intelectual y confidencialidad",
        parrafos: [
          "El material desarrollado para un encargo es de la persona que lo contrató: los derechos sobre el producto académico se le ceden una vez cancelado el servicio, y no lo reutilizamos ni lo comercializamos con terceros.",
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
          `Para acceder, rectificar, actualizar o suprimir sus datos, o para oponerse a su tratamiento, basta escribir a ${SITE.correo}.`,
        ],
      },
      {
        titulo: "14. Ley aplicable, vigencia y cambios",
        parrafos: [
          "Estos términos se rigen por las leyes de la República del Perú. Ante cualquier desacuerdo, las partes buscarán primero una solución directa y, de no lograrla, una conciliación extrajudicial.",
          "Rigen desde la fecha de su última actualización, indicada al inicio de esta página. Podemos modificarlos para reflejar cambios reales del servicio; a un encargo se le aplica la versión vigente al momento de aceptar su cotización.",
        ],
      },
    ],
    volver: "Volver al inicio",
  },

  en: {
    metaTitulo: "Terms and Conditions",
    metaDescripcion:
      "Terms and Conditions for the academic advisory services of Academic Global Solution (EDUCAPROJECT S.A.C.S, Peruvian tax ID 20611803436): how to hire, prices, payments, deliveries, corrections and warranty.",
    eyebrow: "Legal document",
    titulo: "Terms and Conditions of service",
    actualizadoLabel: "Last updated",
    intro:
      "This document explains how our academic advisory service is hired, how it is paid for and under which conditions it is delivered. By requesting a quote or making a payment, the user accepts these terms.",
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
          "Academic Global Solution (AGS) is the name under which we run our regional operation, with its own brand in each country: EducaProject in Peru, Tareapp in Chile and Trabajos Helper in Argentina. Whichever brand the user contacts, the contractual relationship is with the company identified in this document.",
        ],
      },
      {
        titulo: "2. Services we offer",
        parrafos: [
          "We provide academic advisory and support services. Every assignment is personalized and produced to order for a specific person, course and institution: we do not sell catalogue documents or downloadable material.",
        ],
        items: [
          "Thesis and research advisory and defense preparation.",
          "Academic writing: reports, essays, monographs and case studies in the format required by the institution.",
          "Presentations and support material for oral examinations.",
          "Data and reports: advanced Excel, Power BI and visualizations.",
          "Editing of style, citations and coherence.",
        ],
      },
      {
        titulo: "3. Hiring and quote",
        parrafos: [
          "As a personalized service, it has no list price: the scope is defined case by case before anything is charged. The user writes through an official channel with their instructions and material, and we reply with the scope, a closed price and a delivery date.",
          "The price is stated in writing before starting and does not change afterwards, unless the user extends the scope. A down payment starts the work and the balance is paid on delivery; if the work is delivered in stages, payments follow the agreed schedule.",
        ],
      },
      {
        titulo: "4. Prices, currency and receipts",
        parrafos: [
          "The price depends on scope, complexity and deadline, and is always communicated in writing before starting. There are no hidden charges or additional fees added later.",
          "The amount is quoted in the currency of the user's country. When the payment is processed through an international gateway, the exact currency and amount are shown on the payment link or code before the operation is confirmed.",
          "We do not use subscriptions or recurring charges: each payment corresponds to an accepted assignment. We issue the payment receipt required by Peruvian regulations when the user requests it and provides their billing details.",
        ],
      },
      {
        titulo: "5. Payment methods",
        parrafos: [
          "Payment is made only through the official methods we communicate: payment links or codes issued by the gateway, bank transfer, local e-wallets or card. Bank accounts are always held in the company's name.",
          "When paying by card, card details are entered directly into the payment gateway, which processes and stores them. AGS never receives, sees or stores card numbers.",
        ],
      },
      {
        titulo: "6. Deliveries and deadlines",
        parrafos: [
          "The delivery date is agreed in writing before starting and counts from the confirmation of the down payment and the receipt of the complete material. If the material arrives incomplete or late, the date is recalculated and communicated.",
          "Deliveries are sent by email or through the agreed channel, in an editable file and in the final format required by the institution. Long assignments are delivered by chapters or stages.",
        ],
      },
      {
        titulo: "7. Corrections and observations",
        parrafos: [
          "Corrections arising from the observations of the advisor, the review panel or the rubric are made at no additional cost, within the agreed scope and while the assignment is still open.",
          "Quoted separately, as an extension with its own price and deadline: changes of topic, institution, methodology or scope requested after the quote was accepted.",
        ],
      },
      {
        titulo: "8. User obligations",
        items: [
          "Provide complete and accurate information: rubric, advisor instructions, institutional format and dates.",
          "Communicate through the official channels listed in section 12.",
          "Pass on only the observations issued by the advisor or the review panel.",
          "Make the agreed payments on the agreed dates and through the official methods.",
        ],
      },
      {
        titulo: "9. Warranty and its limits",
        parrafos: [
          "We are accountable for what depends on our work: the quality of the development, compliance with the rubric and the agreed format, the originality of the content and the handling of the institution's observations.",
          "We cannot guarantee what does not depend on us: the final grade, the decisions of advisors, teachers or panels, or the user's own performance during the defense.",
        ],
      },
      {
        titulo: "10. Cancellation and refunds",
        items: [
          "By mutual agreement the service may end at any time, settling the work actually completed up to that date.",
          "If the user decides to end the service, they request it in writing to the institutional email; the request is reviewed and answered with the settlement that applies.",
          "If the breach is attributable to the company, the corresponding amount is refunded, through the same method used for the payment whenever possible.",
        ],
      },
      {
        titulo: "11. Intellectual property and confidentiality",
        parrafos: [
          "The material developed for an assignment belongs to the person who hired it: the rights over the academic product are transferred to them once the service is paid, and we neither reuse nor resell it to third parties.",
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
          `To access, correct, update or delete their data, or to object to its processing, users may write to ${SITE.correo}.`,
        ],
      },
      {
        titulo: "14. Governing law, validity and changes",
        parrafos: [
          "These terms are governed by the laws of the Republic of Peru. In case of disagreement, the parties will first seek a direct solution and, failing that, out-of-court conciliation.",
          "They apply from the last update date shown at the top of this page. We may amend them to reflect real changes in the service; an assignment is governed by the version in force when its quote was accepted.",
        ],
      },
    ],
    volver: "Back to home",
  },
};
