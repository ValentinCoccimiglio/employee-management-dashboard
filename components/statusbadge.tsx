interface StatusBadgeProps {
  active: boolean;
}

export default function StatusBadge({
  active,
}: StatusBadgeProps) {
  return (
    <span>
      {active ? "🟢 Active" : "🔴 Inactive"}
    </span>
  );
}