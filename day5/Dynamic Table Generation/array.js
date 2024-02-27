const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    role: { title: "Frontend Developer", level: "Mid" },
    contact: { email: "john.doe@example.com", phone: "123-456-7890" },
    skills: ["JavaScript", "React", "CSS"]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Design",
    role: { title: "UI/UX Designer", level: "Senior" },
    contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
    skills: ["Figma", "Sketch", "Adobe XD"]
  }
  // Additional employee objects...
];

function generateTable() {
  const tableBody = document.getElementById("employee-table-body");

  employees.forEach(employee => {
    const row = document.createElement("tr");

    // Populate cells with employee data
    const { id, name, age, department, role, contact, skills } = employee;
    row.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${department}</td>
      <td>${role.title}</td>
      <td>${role.level}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td>${skills.join(", ")}</td>
    `;

    tableBody.appendChild(row);
  });
}

generateTable();