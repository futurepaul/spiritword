/**
 * Better DateTimeFormatOptions types
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat for representation details
 */
export interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  year?: "numeric";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric";
}

export function toPrettyDate(sqlDate: string): string {
  // it's gonna be a string like 2021-05-28
  let date = new Date(sqlDate);
  // May 19, 2021
  // "UTC" timezone makes sure it's doesn't cross a date line
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  let dateString = date.toLocaleDateString("en-US", options);
  return dateString;
}

export function toHtmlDate(date: Date): string {
  let string = date.toLocaleString("en-GB");
  let [head, _tail] = string.split(",");
  let [day, month, year] = head.split("/");
  return `${year}-${month}-${day}`;
}

export function youtubeIdfromUrl(url: string): string {
  // https://youtu.be/AJMgmI6ndVM
  // https://www.youtube.com/watch?v=AJMgmI6ndVM
  if (url.startsWith("https://youtu.be") || url.startsWith("youtu.be")) {
    let [_head, tail] = url.split("youtu.be/");
    return tail;
  } else {
    let [_head, tail] = url.split("watch?v=");
    return tail;
  }
}

// https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/
function s4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function uid(): string {
  return `${s4()}${s4()}`;
}

export function dateStringToPdfName(dateString: string): string {
  let snake = snake_case_string(dateString);
  return `spiritword_sermon_${snake}_${uid()}.pdf`;
}

export interface FormSermon {
  title: string;
  html_date: string;
  pdf?: FileList;
  filename?: string;
  youtube: string;
}

export interface SupaSermon {
  id?: number;
  date: string;
  title: string;
  youtube_id: string;
  pdf?: string;
}

function snake_case_string(str: string) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join("_")
  );
}

export function isYouTubeUrl(value: string): boolean {
  let id: string = youtubeIdfromUrl(value);
  console.log(id);
  if (id) {
    return id.length === 11;
  } else {
    return false;
  }
}
