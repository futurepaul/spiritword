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

export function toHtmlDate(date: Date): string {
  // May 19, 2021
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateString = date.toLocaleDateString("en-US", options);
  return dateString;
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

export function dateStringToPdfName(dateString: string): string {
  let snake = snake_case_string(dateString);
  return `spiritword_sermon_${snake}.pdf`;
}

export interface FormSermon {
  title: string;
  date: Date;
  pdf: FileList;
  youtube: string;
}

export interface SupaSermon {
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
