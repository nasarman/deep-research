interface Source {
  sourceType: "url";
  id: string;
  url: string;
  title?: string;
}

interface SearchTask {
  state: "unprocessed" | "processing" | "completed";
  query: string;
  researchGoal: string;
  learning: string;
  sources: Source[];
}

interface PartialJson {
  value: JSONValue | undefined;
  state:
    | "undefined-input"
    | "successful-parse"
    | "repaired-parse"
    | "failed-parse";
}

interface GeminiError {
  error: {
    code: number;
    message: string;
    status: string;
  };
}
