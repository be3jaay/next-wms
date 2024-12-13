import { ParameterType } from "@/types/common";
import axios from 'axios';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

export class ParameterService {
  static async getParameter(): Promise<ParameterType> {
    const { data } = await axios.get(`${BASE_API}/v1/base-parameter/get-parameter`);
    return data;
  }
}

export class CurrentParameterService {
  static async getCurrentParameter(): Promise<ParameterType> {
    const { data } = await axios.get(`${BASE_API}/v1/base-parameter/current-parameter`);
    return data;
  }
}

export class GetAnomalousService {
  static async getAnomalous(): Promise<ParameterType> {
    const { data } = await axios.get(`${BASE_API}/v1/base-parameter/get-anomalous`);
    return data;
  }
}