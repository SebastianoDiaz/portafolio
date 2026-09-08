/** Minimal syntax-highlight helpers for the code snippets shown in the UI. */
export const code = {
  keyword: (text: string) => <span className="text-[#c792ea]">{text}</span>,
  name: (text: string) => <span className="text-accent-400">{text}</span>,
  prop: (text: string) => <span className="text-[#82aaff]">{text}</span>,
  string: (text: string) => <span className="text-[#a5e844]">{text}</span>,
  boolean: (text: string) => <span className="text-[#f78c6c]">{text}</span>,
  comment: (text: string) => <span className="text-slate-600">{text}</span>,
  punct: (text: string) => <span className="text-slate-500">{text}</span>,
}
