
class CustomErrorHandler extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }

    // Server Error
    static serverError(message: string = "Internal Server Error") {
        return new CustomErrorHandler(500, message);
    }

    // Not Found Error
    static notFound(message: string = "404 Not Found") {
        return new CustomErrorHandler(404, message);
    }

    // Define other errors here...
}

export default CustomErrorHandler;