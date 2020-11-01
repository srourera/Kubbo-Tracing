export interface Exception {
    error: string;
    message: string;
    status: number;
}
export interface HttpException {
    error: Exception;
}