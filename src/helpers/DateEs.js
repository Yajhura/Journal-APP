import { format } from "date-fns";
import es from "date-fns/locale/es";

export const formatDate = (d) => {
  const date = format(new Date(d), "LLLL", { locale: es });
  const Day = format(new Date(d), "d", { locale: es });
  const Year = format(new Date(d), "y", { locale: es });

  const Month = date.charAt(0).toUpperCase() + date.slice(1);

  return `${Day} de ${Month} de ${Year}`;
};
