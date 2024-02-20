* This project will be build in French, but for the better understanding of both of us, i will first give the overview in English. it will track deposit, withdrawal, and assistance funds to members of a solidarity fund. data will be collected by a solidarity fund collector who would have the task to record all the provided details below and submit to the one responsible for the project. 
  * (done)DM: good. but keep all notes, plans, etc. in English because you have an non-French-speaking project manager/lead. Create a translation file in ./constants/i18n.js, MM: what does the name of the file i18n.js mean here? (DM: search or ask AI. Avoid asking your team lead questions that you can find out yourself.) a la:
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

## Project features

### authentication 
* login/signup pages
  * form
    * id-number (provided by the team lead) 
      * DM: ID number of what? the person? the project? MM: this refers to an identifier for each user, instead of using an email, the identifier will be provided. it can a digit or alphanumeric code
    * username (this will be modified)
      * DM: modified by whom? the user, or project owner, administrator? MM: by the user after receiving the identifier code
    * full-name (from his id-card) - only for the signup page
    * login/signup links
      * DM: more detail on this, please
    * button (submit). MM: there going to be the login/signup buttons

(done)DM: todoMM: for both tables below, list out the functionality you need for each such as search, sorting, adding, editing, etc. This will help choose the best React table solution. the actions will be "adding", and "editing", but "searching" can be incorporated as well for improvement. but the two first are the required for these two tables

### user roles
* project owner 
  * DM: how many? MM: the project will be own by an organization
* solidarity fund collector
  * DM: how many? MM: one for each solidarity fund
* administrator? MM: a tech lead team, i think.
* read-only users?
  * DM: how many? MM: not sure, but i'll get precision soon

### main-page
this section will be stored in a database. the database will consist of many solidarity fund associations:
* header (name of the project)
  * DM: how/where will the user select the project. MM: user will not select the project, but select his solidarity fund to add data, and submit.
* contact-section: this will hold data from a specific solidarity fund
  * title of the organization/association
  * location
  * meeting's date
  * Number of attendees
  * collector's name ()
* table-section(1):
  * columns: row number, full-name, share, sum, debt, reimbursement, Meeting registration number, Weekly sum, Weekly total, Weekly savings.
* table-section(2):
  * columns: row number, full-name, fine, amount, cash desk, solidarity-case, amount
  * links to the previous table and to the members information
    * DM: by "previous table" do you mean "table-section(1)"? MM; yes, the table-section(1)

### cash desks
* table for :
  * solidarity
  * debt
  * savings
* DM: please add more details about this. MM: for this page, it will displays just the amount of money for each of the three cash desks; the amount for the solidarity cash desk, the amount for the debt cash desk, and the amount of the savings cash desk.