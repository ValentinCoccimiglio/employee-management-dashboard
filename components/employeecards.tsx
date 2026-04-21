import StatusBadge from "./statusbadge";

interface EmployeeCardProps {
  name: string;
  role: string;
  email: string;
  active: boolean;
}

export default function EmployeeCard({
  name,
  role,
  email,
  active,
}: EmployeeCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
      <StatusBadge active={active} />
    </div>
  );
}