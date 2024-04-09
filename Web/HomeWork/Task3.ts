interface PhonebookEntry {
    name: string;
    phone: string;
}

const phonebook: PhonebookEntry[] = [
    { name: "Simo", phone: "123-456-7890" },
    { name: "Nino", phone: "987-654-3210" },
    { name: "Ico", phone: "555-555-5555" }
];

console.log(JSON.stringify(phonebook, null, 2))

function addContact(name: string, phone: string): void {
    const newContact: PhonebookEntry = { name, phone };
    phonebook.push(newContact);
}

addContact("Timmy", "111-222-3333");

console.log(JSON.stringify(phonebook, null, 2))
