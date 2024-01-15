const translations = [
  {
    id: 'appTitle', // permanent Ids for referencing in code and for react key props
    description: 'The title for the entire app ', // explain the purpose of the field/text
    fr: "Fiche de recolte hebdomadaire des données d'epargne",
    en: ' Weekly savings data collection form',
    comments: '', // any extra info that does not fit in the other fields. MM: is the comment property necessary here? because all the details are provided in the description field
  },
  { id: 'solidarityName', description: 'each solidarity group will have a name', fr: 'Nom du groupe de Solidarité', en: 'Name of solidarity group', comments: '' },
  { id: 'solidarityAddress', description: 'the address consists of the region or village, the street and the avenue', fr: 'village ou adresse', en: 'location', comments: '' },
  {
    id: "meetingRegistrationNumber", description: "the number of the meeting is the number of the meeting in the year, it's a number that is incremented by one each time a meeting is held", fr: "Numéro d'enregistrement de la réunion", en: 'Meeting registration number', comments: ''
  },
  {id: "meetingDate", description: "the date of the meeting", fr: "Date de la réunion", en: "Meeting date", comments: ""},
  {id: "attendees", description: "the number of people who attended the meeting", fr: "Nombre de participants", en: "Number of attendees", comments: ""},
  {id: "collectorName", description: "the name of the person who collected the data", fr: "Nom du collecteur", en: "Collector name", comments: ""},
  {id: "dataTable", description: "the table where the data is collected", fr: "Tableau de données", en: "Data table", comments: ""},
  {id: "fullName", description: "the full name of the person", fr: "Nom complet", en: "Full name", comments: ""},
  {id: "weeklyShare", description: "the weekly share of the person", fr: "Part hebdomadaire", en: "Weekly share", comments: ""},
  {id: "weeklySum", description: "the weekly sum of the person", fr: "Somme hebdomadaire", en: "Weekly sum", comments: ""},
  {id: "debt", description: "the debt of the person", fr: "Dette", en: "Debt", comments: ""},
  {id: "rebursement", description: "the rebursement of the person", fr: "Remboursement", en: "Rebursement", comments: ""},
  {id: "weeklySavings", description: "the weekly savings of the person", fr: "Epargne hebdomadaire", en: "Weekly savings", comments: ""},
  {id: "weeklyTotal", description: "the weekly total of the person", fr: "Total hebdomadaire", en: "Weekly total", comments: ""},
  {id: "observations", description: "the observation of the leading team", fr: "Observations", en: "Observations", comments: ""},
  {id: "totalSaving", description: "the total saving of the person", fr: "Epargne totale", en: "Total saving", comments: ""},
  {id: "totalDebt", description: "the total debt of the person", fr: "Dette totale", en: "Total debt", comments: ""},
  {id: "totalRebursement", description: "the total rebursement of the person", fr: "Remboursement total", en: "Total rebursement", comments: ""},
  {id: "fine", description: "if a member delays to pay his weekly contribution or break one of the association rules", fr: "Amende", en: "Fine", comments: ""},
  {id: "assistanceFund", description: "this is a weekly contribution to be kept for assistance", fr: "Fonds d'assistance", en: "Assistance fund", comments: ""},
  {id: "solidarityCase", description: "if a member got sick or lost his family member", fr: "Cas de solidarité", en: "Solidarity case", comments: ""},
  {id: "amount", description: "how much was contributed by individual for a solidarity case", fr: "Montant", en: "Amount", comments: ""},
  {id: "cashDesk", description: "there going to be three different cash desks: one for solidarity, one for debt, and another for savings.", fr: "Caisse", en: "Cash desk", comments: ""},
]

export default translations
