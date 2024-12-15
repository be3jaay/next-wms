import { AnomaliesType, ParameterType } from "@/types/common";
import axios from 'axios';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

export class ParameterTrendingService {
  static async getParameter(): Promise<ParameterType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/get-all-water-readings`);
    return data;
  }
}

export class ParameterService {
  static async getParameter(): Promise<ParameterType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/get-all-water-readings`);
    return data;
  }
}

export class CurrentParameterService {
  static async getCurrentParameter(): Promise<ParameterType> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/current-water-readings`);
    return data;
  }
}

export class GetAllAnomalousService {
  static async getAnomalous(): Promise<AnomaliesType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/show-anomalies`);
    return data;
  }

  static async getDailyNotification(): Promise<AnomaliesType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/show-notification-daily`);
    return data;
  }
}