export interface FieldDefinition {
  key: string,
  type: FiledTypes,
  isId: boolean,
  label: string,
  required: boolean,
  data:any[],
  keyValue:string,
  labelValue:string
}

export type FiledTypes = 'string' | 'number' | 'date' | 'checkbox' | 'select';
