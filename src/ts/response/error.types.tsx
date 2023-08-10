type ErrorLocation = {
  line: number;
  column: number;
};

type ErrorExtension = {
  guards: string[];
  file: string;
  line: number;
  trace: {
    file: string;
    line: number;
    call: string;
  }[];
};

type ErrorMessage = {
  message: string;
  locations: ErrorLocation[];
  path: string[];
  extensions: ErrorExtension;
};

export type GraphQLErrorResponse = {
  errors: ErrorMessage[];
  data: {
    verify: null;
  };
};
