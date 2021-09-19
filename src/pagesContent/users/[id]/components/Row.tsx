type Props = {
  label: string
  value: string
}

function Row({ label, value }: Props) {
  return (
    <p className="mb-4">
      <span className="font-bold">{label}:</span> {value}
    </p>
  )
}

export { Row }
