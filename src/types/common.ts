export type ParameterType = {
  water_temperature: Float32Array;
  dissolved_oxygen: Float32Array;
  ph_level: Float32Array;
  created_at: string;
  updated_at: string;
  is_Normal: boolean;
  id: number;
}

export type ParameterProps = {
  data?: ParameterType;
  isLoading: boolean;
  error: Error | null;
}