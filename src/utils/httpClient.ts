// src/utils/httpClient.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getLogger } from "../config/logger";

class HttpClient {
  private client: AxiosInstance;
  private logger = getLogger();

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
    });

    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        this.logger.info(
          `Iniciando solicitud ${config.method?.toUpperCase()} a ${config.url}`
        );
        return config;
      },
      (error) => {
        this.logger.error("Error en la solicitud:", error);
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        this.logger.info(
          `Respuesta recibida con estado ${response.status} desde ${response.config.url}`
        );
        return response;
      },
      (error) => {
        this.logger.error("Error en la respuesta:", error);
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  // Implementa las demás funciones (put, delete, patch) de manera similar
}

export default HttpClient;
