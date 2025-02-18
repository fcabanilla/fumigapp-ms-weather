"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
// src/utils/httpClient.ts
const axios_1 = __importDefault(require("axios"));
const logger_1 = require("../config/logger");
const logger = (0, logger_1.getLogger)();
class HttpClient {
    constructor(baseURL) {
        this.client = axios_1.default.create({
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
    static getInstance(baseURL) {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient(baseURL);
        }
        return HttpClient.instance;
    }
    /**
     * Initializes Axios interceptors for logging requests and responses.
     * @private
     */
    initializeInterceptors() {
        this.client.interceptors.request.use((config) => {
            var _a;
            logger.info(`Starting request ${(_a = config.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()} to ${config.url}`);
            return config;
        }, (error) => {
            logger.error("Request error:", error);
            return Promise.reject(error);
        });
        this.client.interceptors.response.use((response) => {
            logger.info(`Response received with status ${response.status} from ${response.config.url}`);
            return response;
        }, (error) => {
            logger.error("Response error:", error);
            return Promise.reject(error);
        });
    }
    /**
     * Performs an HTTP GET request.
     */
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(url, config);
            return response.data;
        });
    }
    /**
     * Performs an HTTP POST request.
     */
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post(url, data, config);
            return response.data;
        });
    }
    /**
     * Performs an HTTP PUT request.
     */
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.put(url, data, config);
            return response.data;
        });
    }
    /**
     * Performs an HTTP DELETE request.
     */
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.delete(url, config);
            return response.data;
        });
    }
    /**
     * Performs an HTTP PATCH request.
     */
    patch(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.patch(url, data, config);
            return response.data;
        });
    }
}
const httpClient = HttpClient.getInstance("");
exports.get = httpClient.get.bind(httpClient);
exports.post = httpClient.post.bind(httpClient);
exports.put = httpClient.put.bind(httpClient);
exports.del = httpClient.delete.bind(httpClient);
exports.patch = httpClient.patch.bind(httpClient);
exports.default = HttpClient;
