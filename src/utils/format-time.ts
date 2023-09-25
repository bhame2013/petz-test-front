export function formatTime(time: string | undefined) {
  if (!time) {
    return "";
  }

  const data = new Date(`2000-01-01T${time}`);

  const hora = data.getHours();
  const minutos = data.getMinutes();

  return `${hora}:${minutos < 10 ? "0" : ""}${minutos}`;
}

export function formatTimeWithPrefix(time: string | undefined) {
  if (!time) {
    return "";
  }

  const [hours, minutes] = time.split(":").map(Number);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return "Horário inválido";
  }

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}h${formattedMinutes}m`;
}
