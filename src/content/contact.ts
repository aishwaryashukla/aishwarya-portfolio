/** Topics offered on the contact form. Shared by the form and the API route. */
export const contactTopics = [
  { value: "role", label: "A senior role" },
  { value: "project", label: "A project" },
  { value: "advisory", label: "Advisory" },
  { value: "other", label: "Something else" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];
