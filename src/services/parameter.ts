import { AnomaliesType, ParameterType } from "@/types/common";
import axios from 'axios';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;


export class ParameterTrendingService {
  static async getParameter(): Promise<ParameterType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/get-all-water-readings`);
    return data;
  }

  static async GetParametersReadingRange(range: string): Promise<ParameterType[]> {
    const { data } = await axios.get(`${BASE_API}/v1/base-content/get-water-reading-range`, {
      params: { range }
    });
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

  static async deleteAnomaly(id: number): Promise<void> {
    await axios.delete(`${BASE_API}/v1/base-content/delete-anomaly/${id}`);
  }

  static async deleteAllAnomaly(): Promise<void> {
    await axios.delete(`${BASE_API}/v1/base-content/delete-all-anomaly`);
  }

  static async deleteDailyAnomaly(): Promise<void> {
    await axios.delete(`${BASE_API}/v1/base-content/delete-daily-anomaly`);
  }

}