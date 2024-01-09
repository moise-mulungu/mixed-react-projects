* This project will be build in French, but for the better understanding of both of us, i will first give the overview in English. its project that will track deposit, withdrawal, and assistance funds to members of a solidarity fund. data will be collected by a solidarity fund collector who would have the task to record all the provided details below and submit to the one responsible for the project. 
  * DM: todoMM: good. but keep all notes, plans, etc. in English because you have an non-French-speaking project manager/lead. Create a translation file in ./constants/i18n.js a la:
  ```js
	const translations = [
    {id: "appTitle", // permanent Ids for referencing in code and for react key props
     description: "", // explain the purpose of the field/text
     fr: "Fiche de recolte hebdomadaire des donnees d'epargne",
     en: "[the translation goes here]",
     comments: "", // any extra info that does not fit in the other fields
    },
    ... // rest of the below go here
  ]
  export default translations
  ```
  * this way, you can work with a non-English speaking project manager (and BTW have the option to put a "FR | EN" at the top right to see the app in 2 languages).
  * hot tip: ask AI to write the code for the new file, instead of doing it for yourself. give AI my instructions, plus the data here below. WHY I'm confident that all employers will expect this task should take no more than a few minutes, given that AI can create the file for you instantly. You will have to further edit the file afterwards, but AI may be able to do a lot of the formatting of the code for you. 
    * note: figuring out how to make AI help you may take more than a few minutes, but the time is worth the practice with using AI.
  * Of course, if you're going to copy and paste into the repo French-language plans and instructions from the project owners, that is fine and good, but put a translation near it for me (AI can generate it but you should proof-read it for accuracy.)

## Main Page
###  Header 
* Fiche de recolte hebdomadaire des donnees d'epargne
  
### Contact
* Nom du groupe de Solidarite: Name of the solidarity fund
* Village ou Adresse: location of the association
* Numero de la reunion: Number of the meeting
* Jour et Date de la reunion: date of the meeting
  * DM: make sure all EN translations are complete and accurate
* Nmbre des membres presents a la reunion: Number of attendees(meeting)
* Nom du Collector: Collector's name

### first table data(member)
* Numero: Number
* Nom Complet: Full-name
* Part: Share
* Somme hebdomadaire: weekly sum
* Dette: Debt
* Remboursement: Payment
* Reste: Remains
* Observation: Observation
* total hebdomadaire: weekly total
* somme totale: total sum(of all weekly sum, even for previous ones)

### second table data(association)
* Numero: Number
* Nom complet: Full-name
* Amande: Fine
* Solidarite: solidarity(this is a weekly contribution to be kept for assistance)
* cas de solidarite: solidarity case(if a member got sick or lost his family member)
* Montant: amount(how much was contributed by individual for a solidarity case)
* observation: observation

### number of cash desks
* there going to be three different cash desks: one for solidarity, one for debt, and another for reserve.

MM: DM: i'll have to update other elements before starting the project.