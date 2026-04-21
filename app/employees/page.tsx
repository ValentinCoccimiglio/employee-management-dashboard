"use client";

import { useState } from "react";
import EmployeeCard from "@/components/employeecards";

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  active: boolean;
}

export default function EmployeesPage() {
  const employees: Employee[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Frontend Developer",
      email: "john@company.com",
      active: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UI Designer",
      email: "sarah@company.com",
      active: true,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Backend Developer",
      email: "michael@company.com",
      active: false,
    },
  ];

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredEmployees = employees
    .filter((employee) => {
      if (filter === "active") return employee.active;
      if (filter === "inactive") return !employee.active;
      return true;
    })
    .filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <main>
      <h1>Employees</h1>

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("inactive")}>
          Inactive
        </button>
      </div>

      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          email={employee.email}
          active={employee.active}
        />
      ))}
    </main>
  );
}