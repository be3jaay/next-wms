export type ParameterType = {
  temp: Float32Array;
  do: Float32Array;
  ph: Float32Array;
  created_at: string;
  updated_at: string;
  is_Normal: boolean;
  id: number;
  timestamp: string;
};

export type ParameterProps = {
  data?: ParameterType;
  isLoading: boolean;
  error: Error | null;
};

export type AnomaliesType = {
  id: number;
  water_reading: number;
  type: string;
  value: Float32Array;
  suggestion: string;
  created_at: string;
  updated_at: string;
};
