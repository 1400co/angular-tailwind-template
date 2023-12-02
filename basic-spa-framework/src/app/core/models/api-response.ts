export class CustomApiResponse<T> {
    constructor(public data: T, public meta: Metadata) {}
  }

  export class Metadata {
    constructor(
      public totalCount: number,
      public pageSize: number,
      public currentPage: number,
      public totalPages: number,
      public hasNextPage: boolean,
      public hasPreviousPage: boolean,
      public nextPageUrl: string,
      public previousPageUrl: string
    ) {}
  }
