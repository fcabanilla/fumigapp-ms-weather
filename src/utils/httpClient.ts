// src/utils/httpClient.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getLogger } from "../config/logger";

const logger = getLogger();

class HttpClient {
  private static instance: HttpClient;
  private client: AxiosInstance;

  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
    });
    this.initializeInterceptors();
  }

  /**
   * Returns a singleton instance of HttpClient.
   * @param {string} baseURL - The base URL for API requests.
   * @returns {HttpClient} - The singleton instance.
   */
  public static getInstance(baseURL: string): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient(baseURL);
    }
    return HttpClient.instance;
  }

  /**
   * Initializes Axios interceptors for logging requests and responses.
   * @private
   */
  private initializeInterceptors() {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        logger.info(
          `Starting request ${config.method?.toUpperCase()} to ${config.url}`
        );
        return config;
      },
      (error) => {
        logger.error("Request error:", error);
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        logger.info(
          `Response received with status ${response.status} from ${response.config.url}`
        );
        return response;
      },
      (error) => {
        logger.error("Response error:", error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Performs an HTTP GET request.
   */
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  /**
   * Performs an HTTP POST request.
   */
  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  /**
   * Performs an HTTP PUT request.
   */
  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  /**
   * Performs an HTTP DELETE request.
   */
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  /**
   * Performs an HTTP PATCH request.
   */
  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }
}

const httpClient = HttpClient.getInstance("");
export const get = httpClient.get.bind(httpClient);
export const post = httpClient.post.bind(httpClient);
export const put = httpClient.put.bind(httpClient);
export const del = httpClient.delete.bind(httpClient);
export const patch = httpClient.patch.bind(httpClient);
export default HttpClient;
